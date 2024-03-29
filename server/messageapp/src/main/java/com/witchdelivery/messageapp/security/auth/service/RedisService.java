package com.witchdelivery.messageapp.security.auth.service;

import com.witchdelivery.messageapp.security.auth.jwt.JwtTokenizer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

@Service
@Slf4j
@RequiredArgsConstructor
public class RedisService {
    private final RedisTemplate<String, String> redisTemplate;
    private final JwtTokenizer jwtTokenizer;

    // key-value = refrshToken-userEmail 저장
    public void setRefreshToken(String refreshToken, String email, long expirationMinutes) {
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();

        // refresh token 만료시간 이후 삭제
        valueOperations.set(refreshToken, email, Duration.ofMinutes(expirationMinutes));
        log.info("만료 시간, 분: {}", Duration.ofMinutes(expirationMinutes));
    }

    // accessToken 로그아웃
    public void setAccessTokenLogout(String accessToken, long expiration) {
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        valueOperations.set(accessToken, "logout", expiration, TimeUnit.MILLISECONDS);
        String expireFormatString = String.format("%d min, %d sec",
                TimeUnit.MILLISECONDS.toMinutes(expiration),
                TimeUnit.MILLISECONDS.toSeconds(expiration) -
                        TimeUnit.MINUTES.toSeconds(TimeUnit.MILLISECONDS.toMinutes(expiration))
        );
        log.info("access token 만료 시간, {}", expireFormatString);
    }


    /*저장된 refresh token 가져오기*/
    public String getRefreshToken(String refreshToken) {
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        // refresh token 없으면 null 반환
        return valueOperations.get(refreshToken);
    }

    /*저장된 access 토큰 가져오기*/
    public String getAccessToken(String accessToken) {
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        return valueOperations.get(accessToken);
    }

    /*저장된 refresh token 삭제(로그아웃 구현 시 사용)*/
    public void deleteRefreshToken(String refreshToken) {
        // delete 메서드는 삭제되면 true를 반환함.
        redisTemplate.delete(refreshToken);
    }
}
