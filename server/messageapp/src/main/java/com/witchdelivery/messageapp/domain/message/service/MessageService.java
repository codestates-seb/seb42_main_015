package com.witchdelivery.messageapp.domain.message.service;

import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import com.witchdelivery.messageapp.domain.mailbox.service.OutgoingService;
import com.witchdelivery.messageapp.domain.message.repository.MessageRepository;
import com.witchdelivery.messageapp.global.exception.BusinessLogicException;
import com.witchdelivery.messageapp.global.exception.ExceptionCode;
import com.witchdelivery.messageapp.domain.message.entity.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class MessageService {
    private final MessageRepository messageRepository;
    private final OutgoingService outgoingService;

    public Message createMessage(Message message) {
        Message savedMessage = messageRepository.save(message);
        Outgoing outgoing = new Outgoing();
        outgoing.setMessage(savedMessage);
        outgoing.setMember(savedMessage.getMember());
        outgoing.setOutgoingNickname(savedMessage.getMember().getNickname());
        String content = savedMessage.getContent();
        if (content.length() > 30) {
            content = content.substring(0,30);
        }
        outgoing.setContent(content); // 30자 미리보기
        outgoing.setMessageCreatedAt(savedMessage.getCreatedAt());
        outgoingService.createOutgoing(outgoing);
        return savedMessage;
    }

    public void updatedMessageSaved(Long messageId, boolean messageSaved) {
        Message message = findVerifiedMessage(messageId);

        message.setMessageSaved(true);
        messageRepository.save(message);
    }

    public Message findMessage(long messageId) {
        return findVerifiedMessage(messageId);
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
}
