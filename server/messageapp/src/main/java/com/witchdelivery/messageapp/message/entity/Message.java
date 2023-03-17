package com.witchdelivery.messageapp.message.entity;

import com.witchdelivery.messageapp.audit.BaseTime;
import com.witchdelivery.messageapp.bookmarkCustomDb.BooleanToYNConverter;
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

    @Convert(converter = BooleanToYNConverter.class)           // Boolean 값을 DB에서 Y 또는 N으로 컨버트 하는 기능
    private boolean bookMark;
}
