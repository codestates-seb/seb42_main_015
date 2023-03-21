package com.witchdelivery.messageapp.domain.member.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberPatchDto {
    private Long memberId;    // PK
    private String password;    // 패스워드
    private String nickname; // 닉네임
}
