package com.witchdelivery.messageapp.domain.mailbox.controller;

import com.witchdelivery.messageapp.domain.mailbox.mapper.OutgoingMapper;
import com.witchdelivery.messageapp.domain.mailbox.mapper.ReceivingMapper;
import com.witchdelivery.messageapp.domain.mailbox.service.OutgoingService;
import com.witchdelivery.messageapp.domain.mailbox.service.ReceivingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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


}
