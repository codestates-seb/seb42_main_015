package com.witchdelivery.messageapp.message.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class MessageResponseDto {
    private Long messageId;
    private String content;
    private LocalDateTime createdAt;
}
