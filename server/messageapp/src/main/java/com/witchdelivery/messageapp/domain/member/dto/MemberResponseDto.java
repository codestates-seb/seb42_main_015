package com.witchdelivery.messageapp.domain.member.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class MemberResponseDto {
    private Long memberId;  // PK
    private String email;   // 이메일(아이디)
    private String nickname; // 닉네임
    private String profileImage;    // 프로필 이미지
    private LocalDateTime createdAt;    // 생성 시간
    private String status;  // 사용자 상태
}
