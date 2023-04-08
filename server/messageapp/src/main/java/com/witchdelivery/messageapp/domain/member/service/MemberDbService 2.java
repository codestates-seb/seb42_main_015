package com.witchdelivery.messageapp.domain.member.service;

import com.witchdelivery.messageapp.domain.member.entity.Member;
import com.witchdelivery.messageapp.domain.member.entity.MemberStatus;
import com.witchdelivery.messageapp.domain.member.repository.MemberRepository;
import com.witchdelivery.messageapp.global.exception.BusinessLogicException;
import com.witchdelivery.messageapp.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberDbService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    /**
     * DB 사용자 존재 검증 메서드
     * @param memberId
     * @return
     */
    public Member findVerifiedMember(Long memberId) {
        Optional<Member> member = memberRepository.findById(memberId);  // orElseThrow() : Optional 객체가 null 값을 가지고 있다면 예외처리 발생
        return member.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));   // 404
    }

    /**
     * DB 사용자 탈퇴 검증 메서드
     * @param memberId
     * @return
     */
    public Member findVerifiedMemberId(Long memberId) {
        Member findMember = findVerifiedMember(memberId);   // 사용자 검증
        if (findMember.getMemberStatus().equals(MemberStatus.MEMBER_EXITED)) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_ALREADY_EXITED);  // 404
        }
        return findMember;
    }

    /**
     * DB 이메일 존재 검증 메서드
     * @param email
     * @return
     */
    public Member findVerifiedEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        return member.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));   // 404
    }

    /**
     * DB 이메일 중복 검증 메서드
     * @param email
     * @return
     */
    public void verifiedExistedEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent()) {   // isPresent() : Optional 객체가 값을 가지고 있다면 true, 아니라면 false
            throw new BusinessLogicException(ExceptionCode.MEMBER_EMAIL_EXISTS);    // 409
        }
    }

    /**
     * DB 닉네임 중복 검증 메서드
     * @param nickname
     */
    public void verifiedExistedName(String nickname) {
        Optional<Member> member = memberRepository.findByNickname(nickname);
        if (member.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NAME_EXISTS);    // 409
        }
    }

    /**
     * DB 패스워드 일치 검증 메서드
     * @param member
     * @param password
     */
    public void findMatchedPassword(Member member, String password) {
        Member findMember = findVerifiedMemberId(member.getMemberId());   // 사용자 검증
        if (!passwordEncoder.matches(password, findMember.getPassword())) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_PASSWORD_MISMATCH);  // 400
        }
    }

    public Member findMemberByEmail(String email) {        // 프론트와 문제 사항으로 추가 한 코드.
        return memberRepository.findByEmail(email)
                .orElseThrow(()-> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }
}
