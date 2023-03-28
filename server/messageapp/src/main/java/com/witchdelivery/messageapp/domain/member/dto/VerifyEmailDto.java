package com.witchdelivery.messageapp.domain.member.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
public class VerifyEmailDto {
    @NotBlank
    @Email(message = "이메일을 입력해주세요.")
    private String email;   // 이메일(아이디)
}
