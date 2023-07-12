package com.witchdelivery.messageapp.domain.member.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class CheckPasswordDto {
    @NotBlank
    private String password;
}
