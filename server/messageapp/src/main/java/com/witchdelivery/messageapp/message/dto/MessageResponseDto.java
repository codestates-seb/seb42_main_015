package com.witchdelivery.messageapp.message.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class MessageResponseDto {
    private Long messageId;
    private String toName;
    private String fromName;
    private String content;
    private LocalDateTime createdAt;
    private boolean messageSaved;
    private boolean bookMark;
}
