package com.witchdelivery.messageapp.domain.mailbox.controller;

import com.witchdelivery.messageapp.domain.mailbox.dto.OutgoingPatchDto;
import com.witchdelivery.messageapp.domain.mailbox.dto.OutgoingResponseDto;
import com.witchdelivery.messageapp.domain.mailbox.dto.ReceivingPatchDto;
import com.witchdelivery.messageapp.domain.mailbox.dto.ReceivingResponseDto;
import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import com.witchdelivery.messageapp.domain.mailbox.entity.Receiving;
import com.witchdelivery.messageapp.domain.mailbox.mapper.OutgoingMapper;
import com.witchdelivery.messageapp.domain.mailbox.mapper.ReceivingMapper;
import com.witchdelivery.messageapp.domain.mailbox.service.OutgoingService;
import com.witchdelivery.messageapp.domain.mailbox.service.ReceivingService;
import com.witchdelivery.messageapp.global.response.PageResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
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
    public ResponseEntity outgoingStatus(@PathVariable("outgoing-id") long outgoingId,
                                         Authentication authentication) {
        outgoingService.updateOutgoingStatus(outgoingId, authentication);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 수신 삭제처리 메서드 (반환할건 없을 거 같음)
    @PatchMapping("/receiving/{receiving-id}") // 수신식별번호
    public ResponseEntity receivingStatus(@PathVariable("receiving-id") long receivingId,
                                          Authentication authentication) {
        receivingService.updateReceivingStatus(receivingId, authentication);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/bookmark/outgoing/{outgoing-id}")              // 발신함 북마크
    public ResponseEntity updateOutgoingBookMark(@PathVariable("outgoing-id") Long outgoingId, @RequestBody OutgoingPatchDto outgoingPatchDto) {
        outgoingService.updatedOutgoingBookMark(outgoingId, outgoingPatchDto.isBookMark());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/messages/out")                 // 발신함 편지 조회 (Outgoing_STORE만)
    public ResponseEntity getAllOutgoingMessages(@Positive @RequestParam(required = false, defaultValue = "1") int page,
                                                 @Positive @RequestParam(required = false, defaultValue = "15") int size,
                                                 Authentication authentication) {

        Page<Outgoing> outgoings = outgoingService.findAllMessages(page - 1, size, authentication);
        List<OutgoingResponseDto> outgoingResponseDtos = new ArrayList<>();
        for (Outgoing outgoing : outgoings.getContent()) {
            outgoingResponseDtos.add(outgoingMapper.outgoingToOutgoingResponse(outgoing));
        }

        return new ResponseEntity<>(new PageResponseDto<>(outgoingResponseDtos, outgoings), HttpStatus.OK);
    }




    @PatchMapping("/bookmark/receiving/{receiving-id}")    // 수신함 북마크
    public ResponseEntity updateReceivingBookMark(@PathVariable("receiving-id") Long receivingId, @RequestBody ReceivingPatchDto receivingPatchDto) {
        receivingService.updatedReceivingBookMark(receivingId, receivingPatchDto.isBookMark());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



    @GetMapping("/messages/in")     // 수신함. 회원만 조회가 가능하고 STORE 상태의 편지만 조회가 가능하다.
    public ResponseEntity getAllReceivingMessages(@Positive @RequestParam(required = false, defaultValue = "1") int page,
                                                  @Positive @RequestParam(required = false, defaultValue = "15") int size,
                                                  Authentication authentication) {
        Page<Receiving> receivings = receivingService.findAllMessages(page - 1, size, authentication);
        List<ReceivingResponseDto> receivingResponseDtos = new ArrayList<>();
        for (Receiving receiving : receivings.getContent()) {
            receivingResponseDtos.add(receivingMapper.receivingToReceivingResponse(receiving));
        }

        return new ResponseEntity<>(new PageResponseDto<>(receivingResponseDtos, receivings), HttpStatus.OK);
    }


}
