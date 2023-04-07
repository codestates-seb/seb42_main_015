package com.witchdelivery.messageapp.domain.member.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class PatchNicknameDto {
    private Long memberId;    // PK

    @NotBlank
    private String nickname; // 닉네임
}
