package com.witchdelivery.messageapp.security.auth.service;

import com.witchdelivery.messageapp.security.auth.utils.CustomAuthorityUtils;
import com.witchdelivery.messageapp.global.exception.BusinessLogicException;
import com.witchdelivery.messageapp.global.exception.ExceptionCode;
import com.witchdelivery.messageapp.domain.member.entity.Member;
import com.witchdelivery.messageapp.domain.member.repository.MemberRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

// 데이터베이스의 인증 정보로 인증을 처리하는 Custom UserDetailsService
@Component
@RequiredArgsConstructor
public class MemberUserDetailsService implements UserDetailsService {
    private final MemberRepository memberRepository;
    private final CustomAuthorityUtils authorityUtils;

    /*// 데이터베이스에서 User를 조회하고, 조회한 User의 권한(Role)정보를 생성하기 위해 다음과 같이 MemberRepository와 CustomAuthorityUtils클래스를 DI받음
    public MemberUserDetailsService(MemberRepository memberRepository, CustomAuthorityUtils authorityUtils) { // 생성자 DI
        this.memberRepository = memberRepository;
        this.authorityUtils = authorityUtils;
    }*/

    // UserDetailsService인터페이스의 추상메서드 구현
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Member> optionalMember = memberRepository.findByEmail(username); // username = 이메일
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return new MemberUserDetails(findMember); // 개선됨
    }

    // MemberUserDetails클래스 추가
    // Member상속, UserDetails구현...이렇게 구성하면 데이터베이스에서 조회한 회원 정보를 Spring Security의 User정보로
    // 변환하는 과정과 User의 권한 정보를 생성하는 과정을 캡슐화 할 수 있다.
    @Getter
    public final class MemberUserDetails extends Member implements UserDetails {
        MemberUserDetails(Member member) { // 생성자
            setMemberId(member.getMemberId());
            setEmail(member.getEmail());
            setPassword(member.getPassword());
            setRoles(member.getRoles());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            // DB에 저장된 Role 정보로 권한 목록 생성
            return authorityUtils.createAuthorities(this.getRoles()); // 리팩토링 포인트
        }

        // Spring Security에서 인식할 수 있는 username을 Member클래스의 email주소로 채우고 있다
        @Override
        public String getUsername() {
            return getEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        } // 사용자 계정의 만료 여부

        @Override
        public boolean isAccountNonLocked() {
            return true;
        } // 사용자 계정의 lock 여부

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        } // Credentials(Password)의 만료 여부

        @Override
        public boolean isEnabled() {
            return true;
        } // 사용자의 활성화 여부
    }

}
