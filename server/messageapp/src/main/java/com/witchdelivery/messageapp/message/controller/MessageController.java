package com.witchdelivery.messageapp.message.controller;

import com.witchdelivery.messageapp.member.MemberService;
import com.witchdelivery.messageapp.message.dto.MessagePostDto;
import com.witchdelivery.messageapp.message.entity.Message;
import com.witchdelivery.messageapp.message.mapper.MessageMapper;
import com.witchdelivery.messageapp.message.service.MessageService;
import com.witchdelivery.messageapp.response.PageResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@Validated
@RequestMapping("/sendy/messages")
public class MessageController {
    private final MessageService messageService;
    private final MessageMapper messageMapper;
    private final MemberService memberService;

    public MessageController(MessageService messageService, MessageMapper messageMapper, MemberService memberService) {
        this.messageService = messageService;
        this.messageMapper = messageMapper;
        this.memberService = memberService;
    }

    @PostMapping("/write")
    public ResponseEntity postMessage(@Valid @RequestBody MessagePostDto messagePostDto) {
        Message message = messageMapper.messagePostDtoToMessage(messagePostDto);
        messageService.createMessage(message);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{message-id}")
    public ResponseEntity getMessage(@PathVariable("message-id") Long messageId, @RequestParam Long password) {
        Message message = messageService.findMessage(messageId, password);
        return new ResponseEntity<>(messageMapper.messageToMessageResponseDto(message), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAllMessages(@Positive @RequestParam(required = false, defaultValue = "1") int page,
                                         @Positive @RequestParam(required = false, defaultValue = "15") int size) {
        Page<Message> messages = messageService.findAllMessages(page -1, size);
        return new ResponseEntity<>(new PageResponseDto<>(messageMapper.messageToMessageResponseDtos(messages.getContent()), messages), HttpStatus.OK);
    }
}



