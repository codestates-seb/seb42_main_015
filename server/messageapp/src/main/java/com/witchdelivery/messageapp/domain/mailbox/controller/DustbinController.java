package com.witchdelivery.messageapp.domain.mailbox.controller;

import com.witchdelivery.messageapp.domain.mailbox.dto.DustbinMultiCheck;
import com.witchdelivery.messageapp.domain.mailbox.dto.OutgoingResponseDto;
import com.witchdelivery.messageapp.domain.mailbox.dto.ReceivingResponseDto;
import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import com.witchdelivery.messageapp.domain.mailbox.entity.Receiving;
import com.witchdelivery.messageapp.domain.mailbox.mapper.OutgoingMapper;
import com.witchdelivery.messageapp.domain.mailbox.mapper.ReceivingMapper;
import com.witchdelivery.messageapp.domain.mailbox.service.DustbinService;
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
public class DustbinController {
    private final DustbinService dustbinService;

    private final OutgoingMapper outgoingMapper;

    private final ReceivingMapper receivingMapper;

    @GetMapping("/dustbin/outgoing/{member-id}") //발신 (보낸 편지) 휴지통
    public ResponseEntity getAllOutgoingMessages(@PathVariable("member-id") long memberId ,
                                                 @Positive @RequestParam(required = false, defaultValue = "1") int page,
                                                 @Positive @RequestParam(required = false, defaultValue = "15") int size) {
        Page<Outgoing> outgoingDusts = dustbinService.findAllOutgoingMessages(memberId,page - 1, size);
        List<OutgoingResponseDto> outgoingResponseDtos = new ArrayList<>();
        for (Outgoing outgoing : outgoingDusts.getContent()) {
            outgoingResponseDtos.add(outgoingMapper.outgoingToOutgoingResponse(outgoing));
        }

        return new ResponseEntity<>(new PageResponseDto<>(outgoingResponseDtos, outgoingDusts), HttpStatus.OK);
    }

    @PatchMapping("/dustbin/outgoing/restore")
    public ResponseEntity patchOutgoingStatus(@RequestBody DustbinMultiCheck dustbinMultiCheck) {
        dustbinService.updateOutgoingDustStatus(dustbinMultiCheck.getIds());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/dustbin/receiving/{member-id}") //수신 (받은 편지) 휴지통
    public ResponseEntity getAllReceivingMessages(@PathVariable("member-id") long memberId ,
                                                 @Positive @RequestParam(required = false, defaultValue = "1") int page,
                                                 @Positive @RequestParam(required = false, defaultValue = "15") int size) {
        Page<Receiving> receivingDusts = dustbinService.findAllReceivingMessages(memberId,page - 1, size);
        List<ReceivingResponseDto> receivingResponseDtos = new ArrayList<>();
        for (Receiving receiving : receivingDusts.getContent()) {
            receivingResponseDtos.add(receivingMapper.receivingToReceivingResponse(receiving));
        }

        return new ResponseEntity<>(new PageResponseDto<>(receivingResponseDtos, receivingDusts), HttpStatus.OK);
    }
}
