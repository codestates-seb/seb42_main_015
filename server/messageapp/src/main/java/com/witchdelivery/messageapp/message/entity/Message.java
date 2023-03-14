package com.witchdelivery.messageapp.message.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long messageId;                              // 편지 식별번호


    @Column(nullable = false, length = 7000)
    private String content;                             // 편지 내용

    @Column(nullable = false)
    private Long password;                              // 편지 비밀번호

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();                   // 생성 시간
}
