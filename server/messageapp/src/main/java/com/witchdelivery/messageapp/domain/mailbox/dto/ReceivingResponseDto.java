package com.witchdelivery.messageapp.domain.mailbox.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class ReceivingResponseDto { // 수신(받는 사람)
    private long receivingId; // 수신식별번호
    private long messageId; // 편지식별번호
    private String outgoingNickname; // 발신자 (보내는 사람) 닉네임
    private String content; // 편지 내용
    private LocalDateTime messageCreatedAt; // 편지 생성날짜
    private boolean bookMark; // 북마크 여부
    private long memberId;
}
