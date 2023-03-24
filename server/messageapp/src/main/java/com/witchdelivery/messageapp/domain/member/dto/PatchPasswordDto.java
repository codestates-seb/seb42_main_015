package com.witchdelivery.messageapp.domain.member.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class PatchPasswordDto {
    private Long memberId;    // PK
    @NotBlank
    private String password;    // 패스워드
}
