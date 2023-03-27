package com.witchdelivery.messageapp.domain.message.service;

import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import com.witchdelivery.messageapp.domain.mailbox.entity.Receiving;
import com.witchdelivery.messageapp.domain.mailbox.service.OutgoingService;
import com.witchdelivery.messageapp.domain.mailbox.service.ReceivingService;
import com.witchdelivery.messageapp.domain.member.entity.Member;
import com.witchdelivery.messageapp.domain.member.service.MemberDbService;
import com.witchdelivery.messageapp.domain.message.dto.MessageImageDto;
import com.witchdelivery.messageapp.domain.message.entity.MessageImage;
import com.witchdelivery.messageapp.domain.message.repository.MessageRepository;
import com.witchdelivery.messageapp.global.exception.BusinessLogicException;
import com.witchdelivery.messageapp.global.exception.ExceptionCode;
import com.witchdelivery.messageapp.domain.message.entity.Message;
import com.witchdelivery.messageapp.infra.file.S3Info;
import com.witchdelivery.messageapp.infra.file.S3Service;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class MessageService {
    private final MessageRepository messageRepository;
    private final OutgoingService outgoingService;
    private final ReceivingService receivingService;
    private final MemberDbService memberDbService;
    private final S3Service s3Service;

    public Message createMessage(Message message, long memberId) {

        Message savedMessage = messageRepository.save(message);
        Outgoing outgoing = outgoingJoinMessage(savedMessage, memberId);
        outgoingService.createOutgoing(outgoing);
        return savedMessage;
    }

    public void updatedMessageSaved(Message message, boolean messageSaved, long memberId) {
//        Message message = findVerifiedMessage(messageId);
//        message.setMessageSaved(messageSaved);    // true 0r false.  추후 리팩토링
        message.setMessageSaved(true);
        Message savedMessage = messageRepository.save(message);

        Receiving receiving = receivingJoinMessage(savedMessage, memberId);

        receivingService.createReceiving(receiving);
    }


    public Page<Message> findAllMessages(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return messageRepository.findAllByOrderByMessageIdDesc(pageRequest);
    }

    public Message findVerifiedMessage(Long messageId) {
        Optional<Message> optionalMessage = messageRepository.findById(messageId);
        return optionalMessage.orElseThrow(()-> new BusinessLogicException(ExceptionCode.MESSAGE_NOT_FOUND));
    }


    public void deleteMessage(Long messageId) {
        Message message = findVerifiedMessage(messageId);
        messageRepository.delete(message);
    }

    private Outgoing outgoingJoinMessage(Message savedMessage, long memberId) {
        Member member = memberDbService.findVerifiedMember(memberId); // 사용자랑 outgoing 연관관계매핑용

        Outgoing outgoing = new Outgoing();
        outgoing.setMessage(savedMessage);
        outgoing.setUrlName(savedMessage.getUrlName());
        outgoing.setThemeName(savedMessage.getThemeName());
        outgoing.setMember(member); // outgoing(n)-member(1) 연관관계매핑, member는 사용자
        outgoing.setToName(savedMessage.getToName());
        String content = savedMessage.getContent();
        if (content.length() > 70) {
            content = content.substring(0,70);
        }
        outgoing.setContent(content); // 70자 미리보기
        outgoing.setMessageCreatedAt(savedMessage.getCreatedAt());
        return outgoing;
    }

    private Receiving receivingJoinMessage(Message savedMessage, long memberId) {
        Member member = memberDbService.findVerifiedMember(memberId); // 사용자랑 receiving 연관관계매핑용

        Receiving receiving = new Receiving();
        receiving.setMessage(savedMessage);
        receiving.setUrlName(savedMessage.getUrlName());
        receiving.setThemeName(savedMessage.getThemeName());
        receiving.setMember(member); // receiving(n)-member(1) 연관관계매핑, member는 사용자
        receiving.setOutgoingNickname(savedMessage.getOutgoingNickname());
        String content = savedMessage.getContent();
        if (content.length() > 70) {
            content = content.substring(0,70);
        }
        receiving.setContent(content); // 70자 미리보기
        receiving.setMessageCreatedAt(savedMessage.getCreatedAt());
        return receiving;
    }

    public Message findMessageByUrlName(String urlName) {              //   프론트와 문제 사항으로 추가 한 코드. urlName으로 메세지 찾기
        return messageRepository.findByUrlName(urlName)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MESSAGE_NOT_FOUND));
    }

    public boolean urlNameExists(String urlName) {                    // DB에서 urlName 중복 검사
        return messageRepository.findByUrlName(urlName).isPresent();
    }

    /**
     * S3 편지 이미지 업로드 메서드
     * @param messageId
     * @param multipartFile
     * @throws IOException
     */
    public void uploadMessageS3(Long messageId, MultipartFile multipartFile) throws IOException {
        Message findMessage = findVerifiedMessage(messageId);   // 메세지 검증

        String dir = "messageImage"; // 사용자 프로필 이미지 디렉토리 지정
        S3Info s3Info = s3Service.s3ImageUpload(multipartFile, dir);    // 이미지 업로드

        MessageImage messageImage = MessageImage.builder()
                .originFileName(s3Info.getOriginFileName())
                .fileName(s3Info.getFileName())
                .filePath(s3Info.getFilePath())
                .fileSize(s3Info.getFileSize())
                .build();

        findMessage.addMessageImage(messageImage);  // FK 저장

        messageRepository.save(findMessage);
    }

    /**
     * S3 편지 이미지 조회 메서드
     * @param urlName
     * @return
     */
    public MessageImageDto findMessageS3(String urlName) {
        Message findMessage = findMessageByUrlName(urlName);

        return MessageImageDto.builder()
                .urlName(findMessage.getUrlName())
                .noteImage(findMessage.getMessageImage().getFilePath())
                .build();
    }
}
