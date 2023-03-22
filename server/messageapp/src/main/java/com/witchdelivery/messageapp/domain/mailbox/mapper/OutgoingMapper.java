package com.witchdelivery.messageapp.domain.mailbox.mapper;

import com.witchdelivery.messageapp.domain.mailbox.dto.OutgoingResponseDto;
import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface OutgoingMapper {

    OutgoingResponseDto outgoingToOutgoingResponse(Outgoing outgoing); // Entity -> DTO
}
