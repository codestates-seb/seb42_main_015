package com.witchdelivery.messageapp.user.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserResponseDto {
    private Long userId;    // 사용자 고유번호
    private String email;   // 이메일
    private String username; // 닉네임
}
