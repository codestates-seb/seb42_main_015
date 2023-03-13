package com.witchdelivery.messageapp.member;

import com.witchdelivery.messageapp.audit.BaseTimeEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Entity(name = "MEMBERS")
@Getter
@Setter
public class Member extends BaseTimeEntity implements Principal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long memberId;    // 사용자 고유번호

    @Column(nullable = false)
    private String email;   // 이메일

    @Column(nullable = false)
    private String memberName; // 닉네임

    @Column(nullable = false)
    private String password;    // 패스워드

    // User의 권한 정보 테이블과 매핑되는 정보
    // 컬렉션 타입의 필드는 @ElementCollection을 추가하면 User권한 정보와 관련된
    // 별도의 엔티티 클래스를 생성하지 않아도 간단하게 매핑 처리가 된다
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

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

    public enum MemberRole {
        ROLE_USER,
        ROLE_ADMIN
    }

    // TODO JPA Auditing
}
