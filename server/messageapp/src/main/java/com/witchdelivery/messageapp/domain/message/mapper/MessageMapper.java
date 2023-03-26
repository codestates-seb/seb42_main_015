package com.witchdelivery.messageapp.domain.message.mapper;

import com.witchdelivery.messageapp.domain.message.dto.MessagePostDto;
import com.witchdelivery.messageapp.domain.message.dto.MessageResponseDto;
import com.witchdelivery.messageapp.domain.message.entity.Message;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MessageMapper {
    Message messagePostDtoToMessage(MessagePostDto messagePostDto);
    @Mapping(source = "theme.themeId", target = "themeName")                  // MessageResponseDto 객체에 themeName 포함
    @Mapping(source = "font.fontId", target = "fontName")                     // MessageResponseDto 객체에 fontName 포함
    MessageResponseDto messageToMessageResponseDto(Message message);
    List<MessageResponseDto> messageToMessageResponseDtos(List<Message> messages);

    }
