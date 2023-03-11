package com.witchdelivery.messageapp.member;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberPatchDto {
    private Long memberId;    // 사용자 고유번호
    private String email;   // 이메일
    private String username; // 닉네임
    private String password;    // 패스워드
}
