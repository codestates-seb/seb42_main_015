package com.witchdelivery.messageapp.domain.mailbox.service;

import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import com.witchdelivery.messageapp.domain.mailbox.entity.Receiving;
import com.witchdelivery.messageapp.domain.mailbox.repository.OutgoingRepository;
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

import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DustbinService {
    private final OutgoingRepository outgoingRepository;

    private final ReceivingRepository receivingRepository;

    private final MemberRepository memberRepository;

    private final OutgoingService outgoingService;

    private final ReceivingService receivingService;

    public Page<Outgoing> findAllOutgoingMessages(int page, int size, Authentication authentication) { // 발신 (보낸 편지) 휴지통
        Long memberId = findMemberIdByAuthenticatedUser(authentication);
        PageRequest pageRequest = PageRequest.of(page, size);
        return outgoingRepository.findAllByMember_MemberIdAndOutgoingStatusOrderByDeletedAtDesc(memberId, Outgoing.OutgoingStatus.OUTGOING_DELETE, pageRequest);
    }

    @Transactional
    public void updateOutgoingDustStatus(List<Long> ids, Authentication authentication) { // outgoing 상태 OUTGOING_STORE변경
        Long memberId = findMemberIdByAuthenticatedUser(authentication);

        for (Long outgoingId : ids) {
            Outgoing findOutgoing = outgoingService.findVerifiedOutgoing(outgoingId);

            // 보낸 편지와 로그인한 memberId가 같지 않거나(OR) 받은 편지의 상태가 DELETE가 아니면 예외 처리
            if (!Objects.equals(findOutgoing.getMember().getMemberId(), memberId) || findOutgoing.getOutgoingStatus() != Outgoing.OutgoingStatus.OUTGOING_DELETE) {
                throw new BusinessLogicException(ExceptionCode.DUSTBIN_OUTGOING_NOT_FOUND);
            }

            findOutgoing.setOutgoingStatus(Outgoing.OutgoingStatus.OUTGOING_STORE);
            findOutgoing.setDeletedAt(null);
            outgoingRepository.save(findOutgoing);
        }
    }

    @Transactional
    public void deleteOutgoing(List<Long> ids, Authentication authentication) {// 발신 (보낸 편지) 영구삭제
        Long memberId = findMemberIdByAuthenticatedUser(authentication);

        for (Long outgoingId : ids) {
            Outgoing findOutgoing = outgoingService.findVerifiedOutgoing(outgoingId);

            // 보낸 편지와 로그인한 memberId가 같지 않거나(OR) 받은 편지의 상태가 DELETE가 아니면 예외 처리
            if (!Objects.equals(findOutgoing.getMember().getMemberId(), memberId) || findOutgoing.getOutgoingStatus() != Outgoing.OutgoingStatus.OUTGOING_DELETE) {
                throw new BusinessLogicException(ExceptionCode.DUSTBIN_OUTGOING_NOT_FOUND);
            }

            outgoingRepository.delete(findOutgoing);
        }
    }

    public void batchDeleteOutgoing(Long outgoingId) {
        Outgoing outgoing = outgoingService.findVerifiedOutgoing(outgoingId);
        outgoingRepository.delete(outgoing);
    }

    public Page<Receiving> findAllReceivingMessages(int page, int size, Authentication authentication) { // 수신 (받은 편지) 휴지통
        Long memberId = findMemberIdByAuthenticatedUser(authentication);
        PageRequest pageRequest = PageRequest.of(page, size);
        return receivingRepository.findAllByMember_MemberIdAndReceivingStatusOrderByDeletedAtDesc(memberId, Receiving.ReceivingStatus.RECEIVING_DELETE, pageRequest);
    }

    @Transactional
    public void updateReceivingDustStatus(List<Long> ids, Authentication authentication) { // receiving 상태 RECEIVING_STORE변경
        Long memberId = findMemberIdByAuthenticatedUser(authentication);

        for (Long receivingId : ids) {
            Receiving findReceiving = receivingService.findVerifiedReceiving(receivingId);

            // 받은 편지와 로그인한 memberId가 같지 않거나(OR) 받은 편지의 상태가 DELETE가 아니면 예외 처리
            if (!Objects.equals(findReceiving.getMember().getMemberId(), memberId) || findReceiving.getReceivingStatus() != Receiving.ReceivingStatus.RECEIVING_DELETE) {
                throw new BusinessLogicException(ExceptionCode.DUSTBIN_RECEIVING_NOT_FOUND);
            }

            findReceiving.setReceivingStatus(Receiving.ReceivingStatus.RECEIVING_STORE);
            findReceiving.setDeletedAt(null);
            receivingRepository.save(findReceiving);
        }
    }

    @Transactional
    public void deleteReceiving(List<Long> ids, Authentication authentication) { // 수신 (받은 편지) 영구삭제
        Long memberId = findMemberIdByAuthenticatedUser(authentication);

        for (Long id : ids) {
            Receiving findReceiving = receivingService.findVerifiedReceiving(id);

            // 받은 편지와 로그인한 memberId가 같지 않거나(OR) 받은 편지의 상태가 DELETE가 아니면 예외 처리
            if (!Objects.equals(findReceiving.getMember().getMemberId(), memberId) || findReceiving.getReceivingStatus() != Receiving.ReceivingStatus.RECEIVING_DELETE) {
                throw new BusinessLogicException(ExceptionCode.DUSTBIN_RECEIVING_NOT_FOUND);
            }

            receivingRepository.delete(findReceiving);
        }
    }

    public void batchDeleteReceiving(Long receivingId) {
        Receiving receiving = receivingService.findVerifiedReceiving(receivingId);
        receivingRepository.delete(receiving);
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
