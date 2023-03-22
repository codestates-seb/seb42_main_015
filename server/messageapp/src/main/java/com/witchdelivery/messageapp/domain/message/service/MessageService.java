package com.witchdelivery.messageapp.domain.message.service;

import com.witchdelivery.messageapp.domain.message.repository.MessageRepository;
import com.witchdelivery.messageapp.global.exception.BusinessLogicException;
import com.witchdelivery.messageapp.global.exception.ExceptionCode;
import com.witchdelivery.messageapp.domain.message.entity.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class MessageService {
    private final MessageRepository messageRepository;

    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public Message createMessage(Message message) {
        return messageRepository.save(message);
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
