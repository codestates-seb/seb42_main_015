package com.witchdelivery.messageapp.infra.email;

import lombok.*;

@Getter
@AllArgsConstructor
@Builder
public class EmailInfo {
    private String to;  // 메일 수신자
    private String subject; // 메일 제목
    private String message; // 메일 내용
}
