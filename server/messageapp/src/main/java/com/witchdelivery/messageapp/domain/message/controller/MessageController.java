package com.witchdelivery.messageapp.domain.message.controller;

import com.witchdelivery.messageapp.domain.member.entity.Member;
import com.witchdelivery.messageapp.domain.member.service.MemberService;
import com.witchdelivery.messageapp.domain.message.dto.MessagePostDto;
import com.witchdelivery.messageapp.domain.message.service.MessageService;
import com.witchdelivery.messageapp.domain.message.entity.Message;
import com.witchdelivery.messageapp.domain.message.mapper.MessageMapper;
import com.witchdelivery.messageapp.global.response.PageResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequiredArgsConstructor
@Validated
@RequestMapping("/sendy/messages")
public class MessageController {
    private final MessageService messageService;
    private final MessageMapper messageMapper;
    private final MemberService memberService;



    @PostMapping("/write")
    public ResponseEntity postMessage(@Valid @RequestBody MessagePostDto messagePostDto) {
        Message message = messageMapper.messagePostDtoToMessage(messagePostDto);

        Member member = memberService.findVerifiedMember(messagePostDto.getMemberId());
        message.setMember(member);

        messageService.createMessage(message);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{message-id}")
    public ResponseEntity getMessage(@PathVariable("message-id") Long messageId) {
        Message message = messageService.findMessage(messageId);
        return new ResponseEntity<>(messageMapper.messageToMessageResponseDto(message), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAllMessages(@Positive @RequestParam(required = false, defaultValue = "1") int page,
                                         @Positive @RequestParam(required = false, defaultValue = "15") int size) {
        Page<Message> messages = messageService.findAllMessages(page -1, size);
        return new ResponseEntity<>(new PageResponseDto<>(messageMapper.messageToMessageResponseDtos(messages.getContent()), messages), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity deleteMessage(Long messageId) {
        messageService.deleteMessage(messageId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}



