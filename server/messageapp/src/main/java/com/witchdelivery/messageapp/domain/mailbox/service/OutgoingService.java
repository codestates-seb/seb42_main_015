package com.witchdelivery.messageapp.domain.mailbox.service;

import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import com.witchdelivery.messageapp.domain.mailbox.entity.Receiving;
import com.witchdelivery.messageapp.domain.mailbox.repository.OutgoingRepository;
import com.witchdelivery.messageapp.domain.member.entity.Member;
import com.witchdelivery.messageapp.domain.member.repository.MemberRepository;
import com.witchdelivery.messageapp.global.exception.BusinessLogicException;
import com.witchdelivery.messageapp.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OutgoingService { // 발신 (보내는 사람)
    private final OutgoingRepository outgoingRepository;
    private final MemberRepository memberRepository;

    public Outgoing createOutgoing(Outgoing outgoing) {
        return outgoingRepository.save(outgoing); // outgoing 정보 저장
    }

    public void updateOutgoingStatus(long outgoingId, Authentication authentication) { // outgoing 상태 OUTGOING_DELETE변경
        long memberId = findMemberIdByAuthenticatedUser(authentication);
        Outgoing findOutgoing = findVerifiedOutgoing(outgoingId);

        // 보낸 편지와 로그인한 memberId가 같지 않거나(OR) 받은 편지의 상태가 STORE가 아니면 예외 처리
        if (!Objects.equals(findOutgoing.getMember().getMemberId(), memberId) || findOutgoing.getOutgoingStatus() != Outgoing.OutgoingStatus.OUTGOING_STORE) {
            throw new BusinessLogicException(ExceptionCode.OUTGOING_NOT_FOUND);
        }

        findOutgoing.setOutgoingStatus(Outgoing.OutgoingStatus.OUTGOING_DELETE);
        findOutgoing.setDeletedAt(LocalDateTime.now());
        outgoingRepository.save(findOutgoing);
    }

    // 존재하는 outgoing인지 검증
    // orElseThrow() : optional객체가 null이 아니라면 해당 객체를 리턴하고 null이라면 예외를 던진다.
    public Outgoing findVerifiedOutgoing(long outgoingId) {
        Optional<Outgoing> optionalOutgoing =
                outgoingRepository.findById(outgoingId);
        Outgoing findOutgoing =
                optionalOutgoing.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.OUTGOING_NOT_FOUND));
        return findOutgoing;
    }

    public void updatedOutgoingBookMark(Long outgoingId, boolean bookMark) {
        Outgoing outgoing = findVerifiedOutgoing(outgoingId);
        outgoing.setBookMark(!outgoing.isBookMark());
        outgoingRepository.save(outgoing);
    }



    public Page<Outgoing> findAllMessages(int page, int size, Authentication authentication) {    // 인증된 사용자의 memberId 기반으로 발신함 목록 조회, memberId 값 검색을 위해 findMemberIdByAuthenticatedUser 사용
        Long memberId = findMemberIdByAuthenticatedUser(authentication);
        PageRequest pageRequest = PageRequest.of(page, size);
        return outgoingRepository.findAllByMember_MemberIdAndOutgoingStatusOrderByCreatedAtDesc(memberId, Outgoing.OutgoingStatus.OUTGOING_STORE, pageRequest);


    }

    public Long findMemberIdByAuthenticatedUser(Authentication authentication) {  // 이메일 주소를 기반으로 DB에서 인증된 사용자의 memberId 값 검색, memberId 찾지 못할 시에 BusinessLogicException
        String username = authentication.getName();
        Optional<Member> optionalMember = memberRepository.findByEmail(username);
        if (optionalMember.isPresent()) {
            return optionalMember.get().getMemberId();
        } else {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        }
    }

}

