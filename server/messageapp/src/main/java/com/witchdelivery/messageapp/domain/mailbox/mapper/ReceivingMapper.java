package com.witchdelivery.messageapp.domain.mailbox.mapper;

import com.witchdelivery.messageapp.domain.mailbox.dto.ReceivingResponseDto;
import com.witchdelivery.messageapp.domain.mailbox.entity.Receiving;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ReceivingMapper {
    ReceivingResponseDto receivingToReceivingResponse(Receiving receiving); // Entity -> DTO
}

