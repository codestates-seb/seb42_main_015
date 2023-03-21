package com.witchdelivery.messageapp.security.auth.filter;

import com.witchdelivery.messageapp.security.auth.jwt.JwtTokenizer;
import com.witchdelivery.messageapp.security.auth.service.RedisService;
import com.witchdelivery.messageapp.security.auth.service.MemberUserDetailsService;
import com.witchdelivery.messageapp.global.response.ErrorResponder;
import com.witchdelivery.messageapp.domain.member.entity.Member;
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
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
public class JwtReissueFilter extends OncePerRequestFilter {
    private final RedisService redisService;
    private final JwtTokenizer jwtTokenizer;
    private final MemberUserDetailsService memberDetailsService;

    // 특정 조건에 부합하면(true) 해당 Filter의 동작을 수행하지 않고 다음 Filter로 건너뛰도록 해준다.
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String path = request.getRequestURI();
        String refreshToken = request.getHeader("Refresh");
        // 엑세스 토큰 필요한가?

        // reissue 경로가 아닌 경우 혹은 refresh 값이 빈 문자열이거나 null인 경우
        return !request.getMethod().equals("POST")
                || !path.equals("/sendy/auth/reissue")
                || !StringUtils.hasText(refreshToken);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        String refreshToken = request.getHeader("Refresh");
        log.info("refreshToken={}", refreshToken);
        try {
            //refresh token 유효성 검증
            jwtTokenizer.getClaims(refreshToken,
                    jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey()));
            String memberEmail = redisService.getRefreshToken(refreshToken);
            log.info("memberEmail={}", memberEmail);
            MemberUserDetailsService.MemberUserDetails member = (MemberUserDetailsService.MemberUserDetails) memberDetailsService.loadUserByUsername(memberEmail); // NPE 왜??
            //base64 인코딩된 시크릿 키 가져오기
            String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
            String accessToken = delegateAccessToken(member, base64EncodedSecretKey);

            response.setHeader("Authorization", "Bearer " + accessToken);
            response.setCharacterEncoding("utf-8");
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
            response.getWriter().write("재발급 성공");

        }  catch (Exception exception) {
            ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED, exception.getMessage());
        }
    }

    /*access 토큰 생성*/
    private String delegateAccessToken(Member member, String base64EncodedSecretKey) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("memberId", member.getMemberId());
        claims.put("username", member.getEmail());
        claims.put("roles", member.getRoles());

        String subject = member.getEmail();
        Date tokenExpiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());
        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, tokenExpiration, base64EncodedSecretKey);

        return accessToken;
    }
}
