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
import org.springframework.security.core.Authentication;
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

    @GetMapping("/dustbin/outgoing") //발신 (보낸 편지) 휴지통
    public ResponseEntity getAllOutgoingMessages(@Positive @RequestParam(required = false, defaultValue = "1") int page,
                                                 @Positive @RequestParam(required = false, defaultValue = "15") int size,
                                                 Authentication authentication) {
        Page<Outgoing> outgoingDusts = dustbinService.findAllOutgoingMessages(page - 1, size, authentication);
        List<OutgoingResponseDto> outgoingResponseDtos = new ArrayList<>();
        for (Outgoing outgoing : outgoingDusts.getContent()) {
            outgoingResponseDtos.add(outgoingMapper.outgoingToOutgoingResponse(outgoing));
        }

        return new ResponseEntity<>(new PageResponseDto<>(outgoingResponseDtos, outgoingDusts), HttpStatus.OK);
    }

    @PatchMapping("/dustbin/outgoing/restore") // 발신 (보낸 편지) restore상태변경
    public ResponseEntity patchOutgoingStatus(@RequestBody DustbinMultiCheck dustbinMultiCheck,
                                              Authentication authentication) {
        dustbinService.updateOutgoingDustStatus(dustbinMultiCheck.getIds(), authentication);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/dustbin/outgoing/delete") // 발신 (보낸 편지) 영구삭제
    public ResponseEntity deleteOutgoing(@RequestBody DustbinMultiCheck dustbinMultiCheck,
                                         Authentication authentication) {
        dustbinService.deleteOutgoing(dustbinMultiCheck.getIds(), authentication);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/dustbin/receiving") //수신 (받은 편지) 휴지통
    public ResponseEntity getAllReceivingMessages(@Positive @RequestParam(required = false, defaultValue = "1") int page,
                                                  @Positive @RequestParam(required = false, defaultValue = "15") int size,
                                                  Authentication authentication) {
        Page<Receiving> receivingDusts = dustbinService.findAllReceivingMessages(page - 1, size, authentication);
        List<ReceivingResponseDto> receivingResponseDtos = new ArrayList<>();
        for (Receiving receiving : receivingDusts.getContent()) {
            receivingResponseDtos.add(receivingMapper.receivingToReceivingResponse(receiving));
        }

        return new ResponseEntity<>(new PageResponseDto<>(receivingResponseDtos, receivingDusts), HttpStatus.OK);
    }

    @PatchMapping("/dustbin/receiving/restore") // 수신 (받은 편지) restore상태변경
    public ResponseEntity patchReceivingStatus(@RequestBody DustbinMultiCheck dustbinMultiCheck,
                                               Authentication authentication) {
        dustbinService.updateReceivingDustStatus(dustbinMultiCheck.getIds(), authentication);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/dustbin/receiving/delete") // 수신 (받은 편지) 영구삭제
    public ResponseEntity deleteReceiving(@RequestBody DustbinMultiCheck dustbinMultiCheck,
                                          Authentication authentication) {
        dustbinService.deleteReceiving(dustbinMultiCheck.getIds(), authentication);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
