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
    private long memberId; // 연관관계매핑용 (post에서사용), 결국 이게 보낸사람 Id가 되는거라 ougoingId빼도 됨!
//    private long outgoingId; // 보내는 사람 Id즉 사용자 Id 두번 받는거 맞음...
    private String urlName;  // url 이름
}
