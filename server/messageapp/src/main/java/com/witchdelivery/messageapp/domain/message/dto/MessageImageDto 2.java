package com.witchdelivery.messageapp.domain.message.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class MessageImageDto {
    private String urlName;
    private String noteImage;
}
