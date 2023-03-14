package com.witchdelivery.messageapp.message.service;

import com.witchdelivery.messageapp.exception.BusinessLogicException;
import com.witchdelivery.messageapp.exception.ExceptionCode;
import com.witchdelivery.messageapp.message.entity.Message;
import com.witchdelivery.messageapp.message.repository.MessageRepository;
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
        return messageRepository.save(message);}



    public Message findMessage(long messageId) {
        Message findMessage = messageRepository.findById(messageId).orElseThrow(()-> new BusinessLogicException(ExceptionCode.MESSAGE_NOT_FOUND));
        return messageRepository.save(findMessage);
    }


    public Page<Message> findAllMessages(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return messageRepository.findAllByOrderByMessageIdDesc(pageRequest);}




    public Message findVerifiedMessage(Long messageId) {
        Optional<Message> optionalMessage = messageRepository.findById(messageId);
        Message findMessage = optionalMessage.orElseThrow(()-> new BusinessLogicException(ExceptionCode.MESSAGE_NOT_FOUND));
        return findMessage;
    }
}
