package com.witchdelivery.messageapp.domain.message.controller;

import com.witchdelivery.messageapp.domain.member.entity.Member;
import com.witchdelivery.messageapp.domain.member.service.MemberDbService;
import com.witchdelivery.messageapp.domain.member.service.MemberService;
import com.witchdelivery.messageapp.domain.message.dto.MessagePatchDto;
import com.witchdelivery.messageapp.domain.message.dto.MessagePostDto;
import com.witchdelivery.messageapp.domain.message.dto.PasswordInputDto;
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
    private final MemberDbService memberDbService;

    @PostMapping("/write")
    public ResponseEntity postMessage(@Valid @RequestBody MessagePostDto messagePostDto) {
        Message message = messageMapper.messagePostDtoToMessage(messagePostDto);

        Member member = memberDbService.findVerifiedMember(messagePostDto.getMemberId());
        message.setMember(member);

        messageService.createMessage(message);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/saved/{message-id}")
    public ResponseEntity updateMessageSaved(@PathVariable("message-id") Long messageId, @RequestBody MessagePatchDto messagePatchDto) {
        messageService.updatedMessageSaved(messageId, messagePatchDto.isMessageSaved(), messagePatchDto.getMemberId());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{message-id}/{urlName}")
    public ResponseEntity getMessage(@PathVariable("message-id") Long messageId, @PathVariable("urlName") String urlName) {
        Message message = messageService.findMessageByUrlName(messageId, urlName);
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

    @PostMapping("/{message-id}/{urlName}")
    public ResponseEntity getMessage(@PathVariable("message-id") Long messageId,
                                     @PathVariable("urlName") String urlName,
                                     @Valid @RequestBody PasswordInputDto passwordInputDto) {
        Message message = messageService.findMessageByUrlName(messageId, urlName);

        if (!passwordInputDto.getPassword().equals(message.getPassword())) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<>(messageMapper.messageToMessageResponseDto(message), HttpStatus.OK);
    }
}



