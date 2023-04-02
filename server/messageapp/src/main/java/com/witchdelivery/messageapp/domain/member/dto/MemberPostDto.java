package com.witchdelivery.messageapp.domain.member.dto;

import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Builder
public class MemberPostDto {
    @NotBlank
    @Email
    private String email;   // 이메일(아이디)

    @NotBlank
    private String password;    // 패스워드

    @NotBlank
    private String nickname; // 닉네임
}
