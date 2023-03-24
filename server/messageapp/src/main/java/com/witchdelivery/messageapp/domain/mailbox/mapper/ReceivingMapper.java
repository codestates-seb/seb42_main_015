package com.witchdelivery.messageapp.domain.mailbox.mapper;

import com.witchdelivery.messageapp.domain.mailbox.dto.OutgoingResponseDto;
import com.witchdelivery.messageapp.domain.mailbox.dto.ReceivingResponseDto;
import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import com.witchdelivery.messageapp.domain.mailbox.entity.Receiving;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;

@Mapper(componentModel = "spring")
public interface ReceivingMapper {
//    ReceivingResponseDto receivingToReceivingResponse(Receiving receiving); // Entity -> DTO

    default ReceivingResponseDto receivingToReceivingResponse(Receiving receiving) {
        ReceivingResponseDto responseDto = new ReceivingResponseDto(
                receiving.getReceivingId(),
                receiving.getMessage().getMessageId(),
                receiving.getOutgoingNickname(),
                receiving.getContent(),
                receiving.getMessageCreatedAt(),
                receiving.isBookMark(),
                receiving.getMember().getMemberId()

        );
        return responseDto;
    }
}

//    default OutgoingResponseDto outgoingToOutgoingResponse(Outgoing outgoing) {
//        OutgoingResponseDto responseDto = new OutgoingResponseDto(
//                outgoing.getOutgoingId(),
//                outgoing.getMessage().getMessageId(),
//                outgoing.getMessage().getToName(),
//                outgoing.getContent(),
//                outgoing.getMessageCreatedAt(),
//                outgoing.isBookMark(),
//                outgoing.getMember().getMemberId()
//        );
//        return responseDto;
//    }

//    private long receivingId; // 수신식별번호
//    private long messageId; // 편지식별번호
//    private String outgoingNickname; // 발신자 (보내는 사람) 닉네임
//    private String content; // 편지 내용
//    private LocalDateTime messageCreatedAt; // 편지 생성날짜
//    private boolean bookMark; // 북마크 여부


