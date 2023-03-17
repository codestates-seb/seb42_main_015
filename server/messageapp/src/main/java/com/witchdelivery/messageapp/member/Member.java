package com.witchdelivery.messageapp.member;

import com.witchdelivery.messageapp.audit.BaseTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "MEMBERS")
@Getter
@Setter
@NoArgsConstructor
public class Member extends BaseTime implements Principal{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;    // 사용자 고유번호

    @Column(nullable = false)
    private String email;   // 이메일

    @Column(nullable = false)
    private String memberName; // 닉네임

    private String password;    // 패스워드

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>(); // 사용자 권한

    public Member(String email) {
        this.email = email;
    }

    public Member(String email, String memberName, String password) {
        this.email = email;
        this.memberName = memberName;
        this.password = password;
    }

    @Override
    public String getName() {
        return getEmail();
    }
}
