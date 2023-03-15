package com.witchdelivery.messageapp.message.entity;

import com.witchdelivery.messageapp.audit.BaseTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "MESSAGES")
@Getter
@Setter
@NoArgsConstructor
public class Message extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long messageId; // 편지 식별번호

    @Column(nullable = false, length = 7000)
    private String content; // 편지 내용

    private Long password;   // 편지 비밀번호
}
