package com.witchdelivery.messageapp.domain.message.dto;

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
    private String urlName;
    private String password;
    private String themeName;    // 테마 추가
    private String fontName;      // 폰트 추가
}
