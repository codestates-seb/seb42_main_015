package com.witchdelivery.messageapp.domain.member.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;


public class ExistedPostDto {
    @Getter
    public static class ExistedEmailDto {
        @NotBlank
        @Email
        private String email;   // 이메일(아이디)
    }

    @Getter
    public static class ExistedNicknameDto {
        @NotBlank
        private String nickname; // 닉네임
    }
}
