package com.witchdelivery.messageapp.domain.mailbox.controller;

import com.witchdelivery.messageapp.domain.mailbox.dto.OutgoingPatchDto;
import com.witchdelivery.messageapp.domain.mailbox.dto.OutgoingResponseDto;
import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import com.witchdelivery.messageapp.domain.mailbox.mapper.OutgoingMapper;
import com.witchdelivery.messageapp.domain.mailbox.mapper.ReceivingMapper;
import com.witchdelivery.messageapp.domain.mailbox.service.OutgoingService;
import com.witchdelivery.messageapp.domain.mailbox.service.ReceivingService;
import com.witchdelivery.messageapp.global.response.PageResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/sendy/mailbox")
@RequiredArgsConstructor
public class MailboxController {
    private final OutgoingService outgoingService; // 발신 (보내는 사람)

    private final OutgoingMapper outgoingMapper;

    private final ReceivingService receivingService; // 수신(받는 사람)

    private final ReceivingMapper receivingMapper;

    // 발신 삭제처리 메서드 (반환할건 없을 거 같음)
    @PatchMapping("/outgoing/{outgoing-id}") // 발신식별번호
    public ResponseEntity outgoingStatus(@PathVariable("outgoing-id") long outgoingId) {
        outgoingService.updateOutgoingStatus(outgoingId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // 수신 삭제처리 메서드 (반환할건 없을 거 같음)
    @PatchMapping("/receiving/{receiving-id}") // 수신식별번호
    public ResponseEntity receivingStatus(@PathVariable("receiving-id") long receivingId) {
        receivingService.updateReceivingStatus(receivingId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PatchMapping("/bookmark/{outgoing-id}")
    public ResponseEntity updateOutgoingBookMark(@PathVariable("outgoing-id") Long outgoingId, @RequestBody OutgoingPatchDto outgoingPatchDto) {
        outgoingService.updatedOutgoingBookMark(outgoingId, outgoingPatchDto.isBookMark());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/messages/out")
    public ResponseEntity getAllOutgoingMessages(@Positive @RequestParam(required = false, defaultValue = "1") int page,
                                                 @Positive @RequestParam(required = false, defaultValue = "15") int size) {
        Page<Outgoing> outgoings = outgoingService.findAllMessages(page - 1, size);
        List<OutgoingResponseDto> outgoingResponseDtos = new ArrayList<>();
        for (Outgoing outgoing : outgoings.getContent()) {
            outgoingResponseDtos.add(outgoingMapper.outgoingToOutgoingResponse(outgoing));
        }

        return new ResponseEntity<>(new PageResponseDto<>(outgoingResponseDtos, outgoings), HttpStatus.OK);
    }

}
