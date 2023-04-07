package com.witchdelivery.messageapp.security.auth.filter;

import com.witchdelivery.messageapp.security.auth.jwt.JwtTokenizer;
import com.witchdelivery.messageapp.security.auth.service.RedisService;
import com.witchdelivery.messageapp.global.response.ErrorResponder;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

@Slf4j
@RequiredArgsConstructor
public class JwtLogoutFilter extends OncePerRequestFilter {

    private final JwtTokenizer jwtTokenizer;

    private final RedisService redisService;

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String requestURI = request.getRequestURI();
        String refreshToken = request.getHeader("Refresh");

        return !request.getMethod().equals("POST")
                || !requestURI.equals("/sendy/auth/logout")
                || !StringUtils.hasText(refreshToken);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        // request로 부터 access token과 refresh token을 받는다.
        // redis에서 refresh token을 key로 가지는 데이터가 있는지 확인한다.
        // 해당 키-값 쌍 데이터를 제거한다.
        // access token 유효성 검증은 앞의 verification filter에서 진행
        // 로그아웃 된 토큰 검사도 verification filter에서 진행

        try {
            String accessToken = extractAccessToken(request, response);
            String refreshToken = extractRefreshToken(request, response);
            // access token payload 추출
            Jws<Claims> claims =
                    jwtTokenizer.getClaims(accessToken,
                            jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey()));
            redisService.deleteRefreshToken(refreshToken);

            long remainExpiration = calculateRemainExpiration(claims);
            // access token 값을 키로 logout 문자열을 값으로 하는 데이터 레디스에 저장, 만료 시간 명시
            redisService.setAccessTokenLogout(accessToken, remainExpiration);


            response.setStatus(HttpStatus.OK.value());
            response.setCharacterEncoding("utf-8");
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
            response.getWriter().write("로그아웃 성공");
        } catch (Exception e) {
            ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED, e.getMessage());
        }

    }

    // request header에서 access token 추출
    private String extractAccessToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String accessToken = request.getHeader("Authorization");
        if (!StringUtils.hasText(accessToken) || !accessToken.startsWith("Bearer ")) {
            log.info("Header hasn't contain access token, Authorization: {}", accessToken);
            ErrorResponder.sendErrorResponse(response, HttpStatus.BAD_REQUEST);
        }
        return accessToken.replace("Bearer ", "");
    }

    // request header에서 refresh token 추출
    private String extractRefreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String refreshToken = request.getHeader("Refresh");
        if (!StringUtils.hasText(refreshToken)) {
            log.info("Header hasn't contain refresh token, Refresh: {}", refreshToken);
            ErrorResponder.sendErrorResponse(response, HttpStatus.BAD_REQUEST);
        }
        return refreshToken;
    }

    // 만료시간 계산
    private long calculateRemainExpiration(Jws<Claims> claims) {
        return claims.getBody().getExpiration().getTime() - new Date().getTime();
    }
}
