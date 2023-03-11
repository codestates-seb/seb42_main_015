package com.witchdelivery.messageapp.member;

import com.witchdelivery.messageapp.exception.BusinessLogicException;
import com.witchdelivery.messageapp.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Member createMember(Member member) {
        checkEmail(member.getEmail());  // 이메일 검증
        Member saveMember = memberRepository.save(member);
        return saveMember;
    }

    public Member findMember() {
        return null;
    }

    public Page<Member> findMembers(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return memberRepository.findAllByOrderByMemberIdDesc(pageRequest);
    }

    public Member updateMember(Member member) {
        Member findMember = checkMember(member.getMemberId());    // ofNullable() : Optional 객체가 null 값을 가지고 있어도 허용
        Optional.ofNullable(member.getEmail()).ifPresent(email -> findMember.setEmail(email));
        Optional.ofNullable(member.getMemberName()).ifPresent(memberName -> findMember.setMemberName(memberName));
        Optional.ofNullable(member.getPassword()).ifPresent(password -> findMember.setPassword(password));
        return memberRepository.save(findMember);
    }

    public void deleteMember(Long memberId) {
        Member findMember = checkMember(memberId);  // 사용자 검증
        memberRepository.delete(findMember);    // TODO 사용자 탈퇴 시, 관련 데이터 일괄 삭제
    }

    // 사용자 검증
    public Member checkMember(long memberId) {
        Optional<Member> member = memberRepository.findById(memberId);  // orElseThrow() : Optional 객체가 null 값을 가지고 있다면 예외처리 발생
        Member findMember = member.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));   // 404
        return findMember;
    }

    // 이메일 검증
    public void checkEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent()) // isPresent() : Optional 객체가 값을 가지고 있다면 true, 아니라면 false
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);    // 409
    }
}
