package com.witchdelivery.messageapp.domain.member.entity;

import com.witchdelivery.messageapp.global.audit.BaseTime;
import com.witchdelivery.messageapp.security.auth.utils.CustomAuthorityUtils;
import lombok.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "MEMBERS")
@Getter
@Setter // FIXME MemberUserDetailsService 클래스 수정
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Member extends BaseTime implements Principal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;  // PK

    @Column(unique = true, nullable = false, updatable = false)
    private String email;   // 이메일(아이디)

    @Column
    private String password;    // 패스워드

    @Column(unique = true, nullable = false)
    private String nickname; // 닉네임

    @Column
    private String profileImageUrl; // 프로필 이미지

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>(); // 사용자 권한

    @Override
    public String getName() {
        return getEmail();
    }

    // 패스워드 암호화
    public void passwordEncode(PasswordEncoder passwordEncoder) {
        this.password = passwordEncoder.encode(this.password);
    }

    // 사용자 권한 설정
    public void authorizeUser(CustomAuthorityUtils customAuthorityUtils) {
        this.roles = customAuthorityUtils.createRoles(this.getEmail());
    }
}
