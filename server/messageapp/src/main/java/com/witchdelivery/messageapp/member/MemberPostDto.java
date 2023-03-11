package com.witchdelivery.messageapp.member;

import lombok.Getter;

@Getter
public class MemberPostDto {
    private String email;   // 이메일
    private String memberName; // 닉네임
    private String password;    // 패스워드
}
