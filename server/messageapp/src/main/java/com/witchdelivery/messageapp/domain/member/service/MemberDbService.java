package com.witchdelivery.messageapp.domain.member.service;

import com.witchdelivery.messageapp.domain.member.entity.Member;
import com.witchdelivery.messageapp.domain.member.repository.MemberRepository;
import com.witchdelivery.messageapp.global.exception.BusinessLogicException;
import com.witchdelivery.messageapp.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberDbService {
    private final MemberRepository memberRepository;

    /**
     * 사용자 일치 검증 메서드
     * @param memberId
     * @return
     */
    public Member findVerifiedMember(long memberId) {
        Optional<Member> member = memberRepository.findById(memberId);  // orElseThrow() : Optional 객체가 null 값을 가지고 있다면 예외처리 발생
        return member.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));   // 404
    }

    /**
     * 이메일 중복 검증 메서드
     * @param email
     */
    public void verifiedExistedEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent()) // isPresent() : Optional 객체가 값을 가지고 있다면 true, 아니라면 false
            throw new BusinessLogicException(ExceptionCode.MEMBER_EMAIL_EXISTS);    // 409
    }

    /**
     * 닉네임 중복 검증 메서드
     * @param nickname
     */
    public void verifiedExistedName(String nickname) {
        Optional<Member> member = memberRepository.findByNickname(nickname);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_NAME_EXISTS);    // 409
    }
}
