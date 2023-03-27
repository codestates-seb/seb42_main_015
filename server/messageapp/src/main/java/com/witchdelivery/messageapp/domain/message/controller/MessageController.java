package com.witchdelivery.messageapp.domain.message.controller;

import com.witchdelivery.messageapp.domain.member.entity.Member;
import com.witchdelivery.messageapp.domain.member.service.MemberDbService;
import com.witchdelivery.messageapp.domain.message.dto.*;
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
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.io.IOException;
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
        message.setMemberId(member.getMemberId());
        message.setOutgoingNickname(member.getNickname());

        Message createdMessage = messageService.createMessage(message, member.getMemberId());   // 테마, 폰트 추가
        MessageResponseDto responseDto = messageMapper.messageToMessageResponseDto(createdMessage);
        return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
    }

    @PostMapping("/{URL-Name}")    //      편지 비밀번호 조회
    public ResponseEntity<?> getMessage(@PathVariable("URL-Name") String urlName,
                                        @Valid @RequestBody PasswordInputDto passwordInputDto) {
        Message message = messageService.findMessageByUrlName(urlName);

        if (!passwordInputDto.getPassword().equals(message.getPassword())) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<>(messageMapper.messageToMessageResponseDto(message), HttpStatus.OK);
    }



    @PatchMapping("/saved/{URL-Name}")                   // 편지 저장
    public ResponseEntity updateMessageSaved(@PathVariable("URL-Name") String urlName, @RequestBody MessagePatchDto messagePatchDto,
                                             Principal principal) {
        Message message = messageService.findMessageByUrlName(urlName);
        Long memberId = memberDbService.findMemberByEmail(principal.getName()).getMemberId();

        messageService.updatedMessageSaved(message, messagePatchDto.isMessageSaved(), memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    @GetMapping("/{URL-Name}")                                // 편지 단일 조회
    public ResponseEntity getMessage(@PathVariable("URL-Name") String urlName) {
        Message message = messageService.findMessageByUrlName(urlName);
        return new ResponseEntity<>(messageMapper.messageToMessageResponseDto(message), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAllMessages(@Positive @RequestParam(required = false, defaultValue = "1") int page,
                                         @Positive @RequestParam(required = false, defaultValue = "15") int size) {
        Page<Message> messages = messageService.findAllMessages(page -1, size);
        return new ResponseEntity<>(new PageResponseDto<>(messageMapper.messageToMessageResponseDtos(messages.getContent()), messages), HttpStatus.OK);
    }
    @GetMapping("/exists/{URL-Name}")                                                   // url 중복 체크 api 추가
    public ResponseEntity<Boolean> checkUrlNameExists(@PathVariable("URL-Name") String urlName) {
        boolean exists = messageService.urlNameExists(urlName);
        if (exists) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        } else {
            return ResponseEntity.ok().build();
        }
    }

    @DeleteMapping
    public ResponseEntity deleteMessage(Long messageId) {
        messageService.deleteMessage(messageId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /**
     * S3 편지 이미지 업로드 API
     * @param messageId
     * @param multipartFile
     * @return
     * @throws IOException
     */
    @PostMapping("/write/image/{message-id}")
    public ResponseEntity postProfileImage(@PathVariable("message-id") Long messageId,
                                           @RequestParam(value = "image") MultipartFile multipartFile) throws IOException {
        messageService.uploadMessageS3(messageId, multipartFile);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * S3편지 이미지 조회 API
     * @param urlName
     * @return
     */
    @GetMapping("read/image/{url-name}")
    public ResponseEntity getMember(@PathVariable("url-name") String urlName) {
        MessageImageDto messageImageDto = messageService.findMessageS3(urlName);
        return new ResponseEntity<>(messageImageDto, HttpStatus.OK);
    }
}



