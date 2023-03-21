package com.witchdelivery.messageapp.security.auth.filter;

import com.witchdelivery.messageapp.security.auth.jwt.JwtTokenizer;
import com.witchdelivery.messageapp.security.auth.service.RedisService;
import com.witchdelivery.messageapp.security.auth.utils.CustomAuthorityUtils;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.security.SignatureException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

// JWT를 검증하는 전용 Security Filter
@Slf4j
public class JwtVerificationFilter extends OncePerRequestFilter {
    private final JwtTokenizer jwtTokenizer; // JWT 검증, Claims(토큰에 포함된 정보)를 얻는 데 사용
    private final CustomAuthorityUtils authorityUtils; // JWT 검증 성공 시 Authentication 객체에 채울 사용자의 권한 생성
    private final RedisService redisService;

    public JwtVerificationFilter(JwtTokenizer jwtTokenizer,
                                 CustomAuthorityUtils authorityUtils,
                                 RedisService redisService) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.redisService = redisService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        // 예외 처리 로직
        try {
            Map<String, Object> claims = verifyJws(request); // JWT 서명 검증
            setAuthenticationToContext(claims); // Security Context에 Authentication 저장
        } catch (SignatureException se) { // 서명(Signature) 검증에 실패 Exception
            request.setAttribute("exception", se); // 추가된 애트리뷰트는 AuthenticationEntryPoint에서 사용 가능
        } catch (ExpiredJwtException ee) { // JWT만료 Exception
            request.setAttribute("exception", ee); // request에 애트리뷰트 저장
        } catch (Exception e) {
            request.setAttribute("exception", e);
        }

        filterChain.doFilter(request, response); // 다음 순서의 Security Filter 호출
    }

    // 특정 조건에 부합하면(true) 해당 Filter의 동작을 수행하지 않고 다음 Filter로 건너뛰도록 해준다.
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String authorization = request.getHeader("Authorization");  // Authorization header의 값을 얻음

        // Authorization header의 값이 null이거나 Bearer로 시작하지 않으면 해당 Filter의 동작 수행 X
        return authorization == null || !authorization.startsWith("Bearer");
    }

    // JWT를 검증하는데 사용
    private Map<String, Object> verifyJws(HttpServletRequest request) {
        String jws = request.getHeader("Authorization").replace("Bearer ", ""); // request header에서 JWT 얻음

        if (StringUtils.hasText(redisService.getAccessToken(jws))) {
            throw new UnsupportedJwtException("로그아웃 된 토큰");
        }

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey()); // JWT 서명(Signature)을 검증하기 위한 Secret Key 얻음
        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody(); // JWT에서 Claims 파싱

        // 검증(verify)이 따로 존재하는 것이 아니라 Claims가 정상적으로 파싱이 되면 서명 검증이 성공했다는 의미이다
        return claims;
    }

    // Authentication 객체를 SecurityContext에 저장
    private void setAuthenticationToContext(Map<String, Object> claims) {
        String username = (String) claims.get("username"); // JWT에서 파싱한 Claims에서 username(email)을 얻음
        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((List)claims.get("roles")); // JWT의 Claims에서 얻은 권한 정보를 기반으로 List<GrantedAuthority>를 생성
        Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, authorities); // username과 List<GrantedAuthority>를 포함한 Authentication객체 생성
        SecurityContextHolder.getContext().setAuthentication(authentication); // SecurityContext에 Authentication 객체 저장
    }

}
