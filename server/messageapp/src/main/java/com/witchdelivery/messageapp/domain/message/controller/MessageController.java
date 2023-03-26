package com.witchdelivery.messageapp.domain.message.controller;

import com.witchdelivery.messageapp.domain.member.entity.Member;
import com.witchdelivery.messageapp.domain.member.service.MemberDbService;
import com.witchdelivery.messageapp.domain.member.service.MemberService;
import com.witchdelivery.messageapp.domain.message.dto.MessagePatchDto;
import com.witchdelivery.messageapp.domain.message.dto.MessagePostDto;
import com.witchdelivery.messageapp.domain.message.dto.MessageResponseDto;
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
import java.security.Principal;

@RestController
@RequiredArgsConstructor
@Validated
@RequestMapping("/sendy/messages")
public class MessageController {
    private final MessageService messageService;
    private final MessageMapper messageMapper;
    private final MemberDbService memberDbService;

    @PostMapping("/write")                        // 사용자 인증 기반, 요청 body에 memberId 작성 삭제, urlName 중복 시 conflict 에러
    public ResponseEntity postMessage(@Valid @RequestBody MessagePostDto messagePostDto, Principal principal) {
        if (messageService.urlNameExists(messagePostDto.getUrlName())) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Message message = messageMapper.messagePostDtoToMessage(messagePostDto);

        Member member = memberDbService.findMemberByEmail(principal.getName());
        message.setMember(member);

        Message createdMessage = messageService.createMessage(message, messagePostDto.getThemeName(), messagePostDto.getFontName());   // 테마, 폰트 추가
        MessageResponseDto responseDto = messageMapper.messageToMessageResponseDto(createdMessage);
        return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
    }

    @PostMapping("/{urlName}")    //      편지 비밀번호 조회
    public ResponseEntity getMessage(@PathVariable("urlName") String urlName,
                                     @Valid @RequestBody PasswordInputDto passwordInputDto) {
        Message message = messageService.findMessageByUrlName(urlName);

        if (!passwordInputDto.getPassword().equals(message.getPassword())) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<>(messageMapper.messageToMessageResponseDto(message), HttpStatus.OK);
    }


    @PatchMapping("/saved/{urlName}")                   // 편지 저장
    public ResponseEntity updateMessageSaved(@PathVariable("urlName") String urlName, @RequestBody MessagePatchDto messagePatchDto,
                                             Principal principal) {
        Message message = messageService.findMessageByUrlName(urlName);
        Long memberId = memberDbService.findMemberByEmail(principal.getName()).getMemberId();

        messageService.updatedMessageSaved(message.getMessageId(), messagePatchDto.isMessageSaved(), memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    @GetMapping("/{urlName}")                                // 편지 단일 조회
    public ResponseEntity getMessage(@PathVariable("urlName") String urlName) {
        Message message = messageService.findMessageByUrlName(urlName);
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



