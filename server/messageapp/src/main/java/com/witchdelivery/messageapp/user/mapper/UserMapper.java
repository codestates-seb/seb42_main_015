package com.witchdelivery.messageapp.user.mapper;

import com.witchdelivery.messageapp.user.dto.UserPatchDto;
import com.witchdelivery.messageapp.user.dto.UserPostDto;
import com.witchdelivery.messageapp.user.dto.UserResponseDto;
import com.witchdelivery.messageapp.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")  // Bean 등록
public interface UserMapper {
    User userPostDtoToUser(UserPostDto userPostDto);

    User userPatchDtoToUser(UserPatchDto userPatchDto);

    UserResponseDto userToUserResponseDto(User user);
}
