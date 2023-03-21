package com.witchdelivery.messageapp.domain.message.dto;

import lombok.Getter;


import javax.validation.constraints.Digits;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
public class MessagePostDto {
    @NotBlank
    @Size(message = "최소 1글자, 최대 15글자 제한입니다.", min = 1, max = 15)
    private String toName;
    @NotBlank
    @Size(message = "최소 1글자, 최대 15글자 제한입니다.", min = 1, max = 15)
    private String fromName;
    private String content;
    @Digits(integer = 4, fraction = 0, message = "편지 비밀번호 숫자 4자리를 입력해주세요.")
    private Long password;
    private boolean messageSaved;
    private boolean bookMark;
}
