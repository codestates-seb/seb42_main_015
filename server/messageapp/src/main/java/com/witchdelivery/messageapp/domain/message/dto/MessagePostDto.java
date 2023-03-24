package com.witchdelivery.messageapp.domain.message.dto;

import lombok.Getter;


import javax.validation.constraints.Digits;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
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
    @Size(min = 4, max = 4, message = "숫자 4자리를 입력해주세요.")
    @Pattern(regexp = "^[0-9]+$", message = "숫자만 입력 가능합니다.")
    private String password;
//    private long memberId; // 연관관계매핑용 (post에서사용), 결국 이게 보낸사람 Id가 되는거라 ougoingId빼도 됨!
//    private long outgoingId; // 보내는 사람 Id즉 사용자 Id 두번 받는거 맞음...
    @Size(min = 1, max = 20, message = "영문과 숫자 최소 1글자에서 최대 20글자까지 입력 가능합니다.")
    @Pattern(regexp = "^[A-Za-z0-9\\\\-]+$", message = "특수기호는 - 만 허용됩니다.")
    private String urlName;  // url 이름
}
