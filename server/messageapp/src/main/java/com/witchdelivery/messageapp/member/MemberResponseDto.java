package com.witchdelivery.messageapp.member;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class MemberResponseDto {
    private Long memberId;    // 사용자 고유번호
    private String email;   // 이메일
    private String memberName; // 닉네임
    private LocalDateTime createdAt;    // 생성 시간
    private String comment; // 한 줄 소개
}
