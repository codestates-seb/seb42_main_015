package com.witchdelivery.messageapp.member;

import com.witchdelivery.messageapp.audit.BaseTime;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "MEMBERS")
@Getter
@Setter
public class Member extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long memberId;    // 사용자 고유번호

    @Column(nullable = false)
    private String email;   // 이메일

    @Column(nullable = false)
    private String memberName; // 닉네임

    private String password;    // 패스워드
}
