package com.witchdelivery.messageapp.user.service;

import com.witchdelivery.messageapp.exception.BusinessLogicException;
import com.witchdelivery.messageapp.exception.ExceptionCode;
import com.witchdelivery.messageapp.user.entity.User;
import com.witchdelivery.messageapp.user.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        checkEmail(user.getEmail());    // 이메일 검증
        User saveUser = userRepository.save(user);
        return saveUser;
    }

    // TODO
    public User findUser(Long userId) {
        return null;
    }

    // TODO 페이지네이션
    public Page<User> findUsers(int page, int size) {
        return null;
    }

    public User updateUser(User user) {
        User findUser = checkUser(user.getUserId());    // ofNullable() : Optional 객체가 null 값을 가지고 있어도 허용
        Optional.ofNullable(user.getEmail()).ifPresent(email -> findUser.setEmail(email));
        Optional.ofNullable(user.getUsername()).ifPresent(username -> findUser.setUsername(username));
        Optional.ofNullable(user.getPassword()).ifPresent(password -> findUser.setPassword(password));
        return userRepository.save(findUser);
    }

    public void deleteUser(Long userId) {
        User findUser = checkUser(userId);  // 사용자 검증
        userRepository.delete(findUser);    // TODO 사용자 탈퇴 시, 관련 데이터 일괄 삭제
    }

    // 사용자 검증
    public User checkUser(long userId) {
        Optional<User> user = userRepository.findById(userId);  // orElseThrow() : Optional 객체가 null 값을 가지고 있다면 예외처리 발생
        User findUser = user.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));   // 404
        return findUser;
    }

    // 이메일 검증
    public void checkEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent())   // isPresent() : Optional 객체가 값을 가지고 있다면 true, 아니라면 false
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);    // 409
    }
}
