package com.witchdelivery.messageapp.security.oauth;

import com.witchdelivery.messageapp.security.auth.jwt.JwtTokenizer;
import com.witchdelivery.messageapp.security.auth.service.RedisService;
import com.witchdelivery.messageapp.security.utils.CustomAuthorityUtils;
import com.witchdelivery.messageapp.domain.member.entity.Member;
import com.witchdelivery.messageapp.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// OAuth2MemberSuccessHandler : OAuth 2 인증에 성공하면 호출되는 핸들러
@Slf4j
@RequiredArgsConstructor
public class OAuth2MemberSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;    // 로그인 인증에 성공한 클라이언트에게 검증된 JWT를 생성 및 발급
    private final CustomAuthorityUtils customAuthorityUtils;    // 검증된 JWT의 Authentication 객체에 채울 사용자의 권한을 생성
    private final MemberRepository memberRepository;    // Resource Owner의 정보를 DB에 저장
    private final RedisService redisService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException {
        var oAuth2User = (OAuth2User)authentication.getPrincipal();

        // google
        String email = String.valueOf(oAuth2User.getAttributes().get("email")); // 이메일
        String nickname = String.valueOf(oAuth2User.getAttributes().get("name"));   // 닉네임
        String profileImageUrl = String.valueOf(oAuth2User.getAttributes().get("picture")); // 프로필 이미지
        List<String> authorities = customAuthorityUtils.createRoles(email);   // 권한 정보 생성

        String accessToken = delegateAccessToken(nickname, authorities);    // JWT Access Token 생성
        String refreshToken = delegateRefreshToken(nickname);

        response.setHeader("Authorization", "Bearer " + accessToken);
        response.setHeader("Refresh", refreshToken);

        response.addHeader(accessToken, refreshToken);

        /*현재 refresh token을 키로 하는 데이터가 없으면 refresh token 레디스에 저장*/
        if (redisService.getRefreshToken(refreshToken) == null) {
            redisService.setRefreshToken(refreshToken, email, jwtTokenizer.getRefreshTokenExpirationMinutes());
            log.info("Set refresh token in Redis");
        }

        createOAuthMember(email, nickname, profileImageUrl);  // Resource Owner의 정보를 DB에 저장
    }

    // Resource Owner의 정보를 DB에 저장
    // FIXME 순환참조로 인한 service 클래스 DI 불가
    // TODO 이메일, 닉네임 중복 불가 예외처리
    public Member createOAuthMember(String email, String nickname, String profileImageUrl) {
        Member oAuthMember = Member.builder()
                .nickname(nickname)
                .email(email)
                .profileImageUrl(profileImageUrl)
                .build();

        return memberRepository.save(oAuthMember);
    }

    // JWT Access Token 생성
    private String delegateAccessToken(String username, List<String> authorities) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", username);
        claims.put("roles", authorities);

        String subject = username;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }

    // JWT Refresh Token 생성
    private String delegateRefreshToken(String username) {
        String subject = username;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);

        return refreshToken;
    }
}
