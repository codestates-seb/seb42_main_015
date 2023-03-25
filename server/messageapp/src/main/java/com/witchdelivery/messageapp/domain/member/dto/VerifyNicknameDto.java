package com.witchdelivery.messageapp.domain.member.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class VerifyNicknameDto {
    @NotBlank
    private String nickname; // 닉네임
}
