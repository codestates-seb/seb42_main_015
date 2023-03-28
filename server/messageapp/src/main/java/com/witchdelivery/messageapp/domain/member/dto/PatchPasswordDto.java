package com.witchdelivery.messageapp.domain.member.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@Setter
public class PatchPasswordDto {
    private Long memberId;    // PK
    @NotBlank
    @Pattern(regexp="(?=.*[0-9])(?=.*[a-z])(?=.*\\W)(?=\\S+$).{8,16}",
            message = "영문 소문자, 숫자, 특수문자를 포함한 8~16자리를 입력해주세요.")
    private String password;    // 패스워드
}
