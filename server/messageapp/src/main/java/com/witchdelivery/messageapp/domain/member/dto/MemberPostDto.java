package com.witchdelivery.messageapp.domain.member.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class MemberPostDto {
    private String email;   // 이메일(아이디)
    private String password;    // 패스워드
    private String nickname; // 닉네임
}
