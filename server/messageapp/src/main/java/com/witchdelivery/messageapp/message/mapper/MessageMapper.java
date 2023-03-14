package com.witchdelivery.messageapp.message.mapper;

import com.witchdelivery.messageapp.message.dto.MessagePostDto;
import com.witchdelivery.messageapp.message.dto.MessageResponseDto;
import com.witchdelivery.messageapp.message.entity.Message;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper(componentModel = "spring")
public interface MessageMapper {
    Message messagePostDtoToMessage(MessagePostDto messagePostDto);

    MessageResponseDto messageToMessageResponseDto(Message message);
    List<MessageResponseDto> messageToMessageResponseDtos(List<Message> messages);

    }
