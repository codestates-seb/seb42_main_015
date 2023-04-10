package com.witchdelivery.messageapp.security.utils;

import com.witchdelivery.messageapp.global.exception.BusinessLogicException;
import com.witchdelivery.messageapp.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
public class RedisUtils {
    private final StringRedisTemplate redisTemplate;

    /**
     * Redis 이메일 인증 코드 저장 메서드
     * @param key 이메일
     * @param code 인증 코드
     */
    public void setEmailAuthorizationCode(String key, String code) {
        redisTemplate.setValueSerializer(new Jackson2JsonRedisSerializer<>(code.getClass()));
        redisTemplate.opsForValue().set(key, code, 10 * 60L, TimeUnit.SECONDS);
    }

    /**
     * Redis 이메일 입력 시, 인증 코드 반환 메서드
     * @param key 이메일
     * @return
     */
    public String getEmailAuthorizationCode(String key) {
        ValueOperations<String, String> stringValueOperations = redisTemplate.opsForValue();
        Optional<String> emailCode = Optional.ofNullable(stringValueOperations.get(key));
        return emailCode.orElseThrow(() -> new BusinessLogicException(ExceptionCode.EMAIL_CODE_ALREADY_EXPIRED));
    }

    /**
     * Redis 이메일 입력 시, 인증 코드 삭제 메서드
     * @param key 이메일
     */
    public void deleteEmailAuthorizationCode(String key) {
        redisTemplate.delete(key);
    }
}