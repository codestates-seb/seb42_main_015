package com.witchdelivery.messageapp.domain.member.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class MemberPatchDto {
    private Long memberId;    // PK
    @NotBlank
    private String password;    // 패스워드
    @NotBlank
    private String nickname; // 닉네임
}
