package com.witchdelivery.messageapp.domain.member.entity;

import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import com.witchdelivery.messageapp.domain.mailbox.entity.Receiving;
import com.witchdelivery.messageapp.global.audit.BaseTime;
import com.witchdelivery.messageapp.security.utils.CustomAuthorityUtils;
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
    @Column(name = "MEMBER_ID")
    private Long memberId;  // PK

    @Column(unique = true, nullable = false, updatable = false)
    private String email;   // 이메일(아이디)

    @Column
    private String password;    // 패스워드

    @Column(unique = true, nullable = false)
    private String nickname; // 닉네임

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>(); // 사용자 권한

    // 연관관계 매핑 목록
    @OneToOne(mappedBy = "member", cascade = CascadeType.ALL)
    private MemberImage memberImage;

    @OneToMany(mappedBy = "member")
    private List<Outgoing> outgoing = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Receiving> receiving = new ArrayList<>();

    @Override
    public String getName() {
        return getEmail();
    }

    /**
     * 패스워드 암호화 메서드
     * @param passwordEncoder
     */
    public void passwordEncode(PasswordEncoder passwordEncoder) {
        this.password = passwordEncoder.encode(this.password);
    }

    /**
     * 사용자 권한 설정 메서드
     * @param customAuthorityUtils
     */
    public void authorizeUser(CustomAuthorityUtils customAuthorityUtils) {
        this.roles = customAuthorityUtils.createRoles(this.getEmail());
    }

    /**
     * 연관관계 매핑 메서드
     * @param memberImage
     */
    public void addMemberFile(MemberImage memberImage) {
        if (memberImage.getMember() != this) {
            memberImage.setMember(this);
        }
        this.memberImage = memberImage;
    }
}
