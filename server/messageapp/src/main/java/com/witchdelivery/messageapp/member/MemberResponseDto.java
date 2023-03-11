package com.witchdelivery.messageapp.member;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class MemberResponseDto {
    private Long memberId;    // 사용자 고유번호
    private String email;   // 이메일
    private String memberName; // 닉네임
}
