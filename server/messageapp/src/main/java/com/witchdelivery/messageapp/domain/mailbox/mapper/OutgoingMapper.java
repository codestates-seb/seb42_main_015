package com.witchdelivery.messageapp.domain.mailbox.mapper;

import com.witchdelivery.messageapp.domain.mailbox.dto.OutgoingResponseDto;
import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface OutgoingMapper {


    default OutgoingResponseDto outgoingToOutgoingResponse(Outgoing outgoing) {
        OutgoingResponseDto responseDto = new OutgoingResponseDto(
                outgoing.getOutgoingId(),
                outgoing.getMessage().getMessageId(),
                outgoing.getMessage().getToName(),
                outgoing.getContent(),
                outgoing.getMessageCreatedAt(),
                outgoing.isBookMark(),
                outgoing.getMember().getMemberId()
        );
        return responseDto;
    }
}
