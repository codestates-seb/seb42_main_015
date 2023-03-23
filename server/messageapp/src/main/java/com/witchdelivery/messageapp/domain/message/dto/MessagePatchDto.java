package com.witchdelivery.messageapp.domain.message.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MessagePatchDto {
    private long memberId; // 사용자
    private boolean messageSaved;

}
