package com.witchdelivery.messageapp.domain.mailbox.service;

import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import com.witchdelivery.messageapp.domain.mailbox.entity.Receiving;
import com.witchdelivery.messageapp.domain.mailbox.repository.ReceivingRepository;
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
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReceivingService { // 수신(받는 사람)
    private final ReceivingRepository receivingRepository;
    private final MemberRepository memberRepository;

    public Receiving createReceiving(Receiving receiving) {
        return receivingRepository.save(receiving); // receiving 정보 저장
    }

    public void updateReceivingStatus(long receivingId) { // outgoing 상태 OUTGOING_DELETE변경
        Receiving findReceiving = findVerifiedReceiving(receivingId);
        findReceiving.setReceivingStatus(Receiving.ReceivingStatus.RECEIVING_DELETE);
        findReceiving.setDeletedAt(LocalDateTime.now());
        receivingRepository.save(findReceiving);
    }

    // 존재하는 outgoing인지 검증
    // orElseThrow() : optional객체가 null이 아니라면 해당 객체를 리턴하고 null이라면 예외를 던진다.
    public Receiving findVerifiedReceiving(long receivingId) {
        Optional<Receiving> optionalReceiving =
                receivingRepository.findById(receivingId);
        Receiving findReceiving =
                optionalReceiving.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.RECEIVING_NOT_FOUND));
        return findReceiving;
    }

    public void updatedReceivingBookMark(Long receivingId, boolean bookMark) {
        Receiving receiving = findVerifiedReceiving(receivingId);
        receiving.setBookMark(!receiving.isBookMark());
        receivingRepository.save(receiving);
    }



    public Page<Receiving> findAllMessages(int page, int size, Authentication authentication) {     // 인증된 사용자의 memberId 기반으로 수신함 목록 조회, memberId 값 검색을 위해 findMemberIdByAuthenticatedUser 사용
        Long memberId = findMemberIdByAuthenticatedUser(authentication);
        PageRequest pageRequest = PageRequest.of(page, size);
        return receivingRepository.findAllByMember_MemberIdAndReceivingStatusOrderByCreatedAtDesc(memberId, Receiving.ReceivingStatus.RECEIVING_STORE, pageRequest);
    }

    public Long findMemberIdByAuthenticatedUser(Authentication authentication) {       // 이메일 주소를 기반으로 DB에서 인증된 사용자의 memberId 값 검색, memberId 찾지 못할 시에 BusinessLogicException
        String username = authentication.getName();
        Optional<Member> optionalMember = memberRepository.findByEmail(username);
        if (optionalMember.isPresent()) {
            return optionalMember.get().getMemberId();
        } else {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        }
    }
}
