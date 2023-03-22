package com.witchdelivery.messageapp.security.auth.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.witchdelivery.messageapp.security.auth.dto.LoginDto;
import com.witchdelivery.messageapp.security.auth.jwt.JwtTokenizer;
import com.witchdelivery.messageapp.security.auth.service.RedisService;
import com.witchdelivery.messageapp.domain.member.entity.Member;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

// 클라이언트의 로그인 인증 정보를 직접적으로 수신하여 인증 처리의 엔트리포인트 역할을 하는 Custom Filter
@Slf4j
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter { // UsernamePasswordAuthenticationFilter를 확장해서 구현
    private final AuthenticationManager authenticationManager;
    private final JwtTokenizer jwtTokenizer;
    private final RedisService redisService;

    // AuthenticationManager는 로그인 인증 정보(Username/Password)를 전달받아 UserDetailsService와 인터랙션 한 뒤 인증 여부를 판단
    public JwtAuthenticationFilter(AuthenticationManager authenticationManager,
                                   JwtTokenizer jwtTokenizer,
                                   RedisService redisService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenizer = jwtTokenizer;
        this.redisService = redisService;
    }

    // 메서드 내부에서 인증을 시도하는 로직을 구현
    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request,
                                                HttpServletResponse response) {

        ObjectMapper objectMapper = new ObjectMapper(); // 클라이언트에서 전송한 Username과 Password를 DTO클래스로 역직렬화하기 위해 ObjectMapper 인스턴스 생성
        LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class); // ServletInputStream 을 LoginDto 클래스의 객체로 역직렬화

        //  Username과 Password 정보를 포함한 UsernamePasswordAuthenticationToken을 생성
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword());

        // UsernamePasswordAuthenticationToken을 AuthenticationManager에게 전달하면서 인증 처리를 위임
        return authenticationManager.authenticate(authenticationToken);
    }

    // 클라이언트의 인증 정보를 이용해 인증에 성공할 경우 호출
    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws ServletException, IOException {
        Member member = (Member) authResult.getPrincipal();  // Member 엔티티 객체를 얻음

        String accessToken = delegateAccessToken(member);   // Access Token 생성
        String refreshToken = delegateRefreshToken(member); // Refresh Token 생성

        response.setHeader("Authorization", "Bearer " + accessToken);
        response.setHeader("Refresh", refreshToken);

        /*현재 refresh token을 키로 하는 데이터가 없으면 refresh token 레디스에 저장*/
        if (redisService.getRefreshToken(refreshToken) == null) {
            redisService.setRefreshToken(refreshToken, member.getEmail(), jwtTokenizer.getRefreshTokenExpirationMinutes());
            log.info("Set refresh token in Redis");
        }

        this.getSuccessHandler().onAuthenticationSuccess(request, response, authResult); // 핸들러의 구현 메서드 호출
    }

    // Access Token 생성
    private String delegateAccessToken(Member member) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("memberId", member.getMemberId());
        claims.put("username", member.getEmail());
        claims.put("roles", member.getRoles());

        String subject = member.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }

    // Refresh Token 생성
    private String delegateRefreshToken(Member member) {
        String subject = member.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);

        return refreshToken;
    }

}
