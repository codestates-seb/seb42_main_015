package com.witchdelivery.messageapp.user.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "USERS")
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long userId;    // 사용자 고유번호

    @Column(nullable = false)
    private String email;   // 이메일

    @Column(nullable = false)
    private String username; // 닉네임

    @Column(nullable = false)
    private String password;    // 패스워드

    // TODO JPA Auditing
}
