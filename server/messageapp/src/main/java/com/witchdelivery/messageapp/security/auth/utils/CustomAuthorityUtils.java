package com.witchdelivery.messageapp.security.auth.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

// User의 권한을 매핑, 생성하는 CustomAuthorityUtils
// MemberUserDetailsService에서 Role기반의 User권한을 생성하기 위해 사용한 CustomAuthorityUtils
@Component
public class CustomAuthorityUtils {
    // yml에 추가한 프로퍼티를 가져오는 표현식
    @Value("${mail.address.admin}") // yml에 미리 정의한 관리자 권한을 가질 수 있는 이메일 주소를 불러온다
    private String adminMailAddress;

    // Spring Security에서 지원하는 AuthorityUtils클래스를 이용해서 관리자용 권한 목록을 List<GrantedAuthority>객체로 미리 생성
    private final List<GrantedAuthority> ADMIN_ROLES = AuthorityUtils.createAuthorityList("ROLE_ADMIN", "ROLE_USER");

    // Spring Security에서 지원하는 AuthorityUtils클래스를 이용해서 일반 사용 권한 목록을 List<GrantedAuthority>객체로 미리 생성
    private final List<GrantedAuthority> USER_ROLES = AuthorityUtils.createAuthorityList("ROLE_USER");

    private final List<String> ADMIN_ROLES_STRING = List.of("ADMIN","USER");
    private final List<String> USER_ROLES_STRING = List.of("USER");

    // 메모리 상의 Role을 기반으로 권한 정보 생성
    public List<GrantedAuthority> createAuthorities(String email) {
        if (email.equals(adminMailAddress)) {
            return ADMIN_ROLES;
        }
        return USER_ROLES;
    }

    // DB에 저장된 Role을 기반으로 권한 정보 생성
    public List<GrantedAuthority> createAuthorities(List<String> roles) {
        List<GrantedAuthority> authorities = roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
        return authorities;
    }

    // DB 저장 용
    public List<String> createRoles(String email) {
        if (email.equals(adminMailAddress)) {
            return ADMIN_ROLES_STRING;
        }
        return USER_ROLES_STRING;
    }
}
