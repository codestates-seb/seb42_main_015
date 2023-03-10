package com.witchdelivery.messageapp.user.controller;

import com.witchdelivery.messageapp.user.dto.UserPatchDto;
import com.witchdelivery.messageapp.user.dto.UserPostDto;
import com.witchdelivery.messageapp.user.entity.User;
import com.witchdelivery.messageapp.user.mapper.UserMapper;
import com.witchdelivery.messageapp.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sendy.com/users")
public class UserController {
    // DI
    private final UserMapper userMapper;
    private final UserService userService;

    public UserController(UserMapper userMapper, UserService userService) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @PostMapping("/signup")
    public ResponseEntity postUser(@RequestBody UserPostDto userPostDto) {
        User user = userMapper.userPostDtoToUser(userPostDto);
        userService.createUser(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    // TODO
    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") Long userId) {
        return null;
    }

    // TODO 페이지네이션
    @GetMapping
    public ResponseEntity getUsers() {
        return null;
    }

    @PatchMapping("/edit/{user-id}")
    public ResponseEntity patchUser(@PathVariable("user-id") Long userId, @RequestBody UserPatchDto userPatchDto) {
        userPatchDto.setUserId(userId);
        User response = userService.updateUser(userMapper.userPatchDtoToUser(userPatchDto));
        return new ResponseEntity<>(userMapper.userToUserResponseDto(response), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{user-id}")
    public ResponseEntity deleteUser(@PathVariable("user-id") Long userId) {
        userService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
