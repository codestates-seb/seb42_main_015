package com.witchdelivery.messageapp.domain.member.service;

import com.witchdelivery.messageapp.security.utils.CustomAuthorityUtils;
import com.witchdelivery.messageapp.domain.member.dto.MemberPostDto;
import com.witchdelivery.messageapp.domain.member.repository.MemberRepository;
import com.witchdelivery.messageapp.domain.member.entity.Member;
import com.witchdelivery.messageapp.global.exception.BusinessLogicException;
import com.witchdelivery.messageapp.global.exception.ExceptionCode;
import com.witchdelivery.messageapp.global.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils customAuthorityUtils;
    private final CustomBeanUtils<Member> customBeanUtils;

    public Member createMember(MemberPostDto memberPostDto) {
        verifiedExistedEmail(memberPostDto.getEmail());    // 이메일 검증
        verifiedExistedName(memberPostDto.getNickname());    // 닉네임 검증

        Member member = Member.builder()
                .email(memberPostDto.getEmail())
                .password(memberPostDto.getPassword())
                .nickname(memberPostDto.getNickname())
                .build();

        member.authorizeUser(customAuthorityUtils);
        member.passwordEncode(passwordEncoder);
        return memberRepository.save(member);
    }

    public Member findMember(Long memberId) {
        return findVerifiedMember(memberId);       // 사용자 검증
    }

    public Page<Member> findMembers(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return memberRepository.findAllByOrderByMemberIdDesc(pageRequest);
    }

    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());   // 사용자 검증
        verifiedExistedName(member.getNickname());    // 닉네임 검증
        customBeanUtils.copyNonNullProperties(member, findMember);
        return memberRepository.save(findMember);
    }

    public void deleteMember(Long memberId) {
        Member findMember = findVerifiedMember(memberId);  // 사용자 검증
        memberRepository.delete(findMember);    // TODO 로직 수정
    }

    // 사용자 검증
    public Member findVerifiedMember(long memberId) {
        Optional<Member> member = memberRepository.findById(memberId);  // orElseThrow() : Optional 객체가 null 값을 가지고 있다면 예외처리 발생
        return member.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));   // 404
    }

    // 이메일 검증
    public void verifiedExistedEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent()) // isPresent() : Optional 객체가 값을 가지고 있다면 true, 아니라면 false
            throw new BusinessLogicException(ExceptionCode.MEMBER_EMAIL_EXISTS);    // 409
    }

    // 닉네임 검증
    public void verifiedExistedName(String nickname) {
        Optional<Member> member = memberRepository.findByNickname(nickname);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_NAME_EXISTS);    // 409
    }
}
