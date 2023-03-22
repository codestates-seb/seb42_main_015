package com.witchdelivery.messageapp.domain.mailbox.service;

import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import com.witchdelivery.messageapp.domain.mailbox.repository.OutgoingRepository;
import com.witchdelivery.messageapp.global.exception.BusinessLogicException;
import com.witchdelivery.messageapp.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OutgoingService { // 발신 (보내는 사람)
    private final OutgoingRepository outgoingRepository;

    public Outgoing createOutgoing(Outgoing outgoing) {
        return outgoingRepository.save(outgoing); // outgoing 정보 저장
    }

    public void updateOutgoingStatus(long outgoingId) { // outgoing 상태 OUTGOING_DELETE변경
        Outgoing findOutgoing = findVerifiedOutgoing(outgoingId);
        findOutgoing.setOutgoingStatus(Outgoing.OutgoingStatus.OUTGOING_DELETE);
        // deletedAt도 생성
        outgoingRepository.save(findOutgoing);
    }

    // 존재하는 outgoing인지 검증
    // orElseThrow() : optional객체가 null이 아니라면 해당 객체를 리턴하고 null이라면 예외를 던진다.
    public Outgoing findVerifiedOutgoing(long outgoingId) {
        Optional<Outgoing> optionalOutgoing =
                outgoingRepository.findById(outgoingId);
        Outgoing findOutgoing =
                optionalOutgoing.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.OUTGOING_NOT_FOUND));
        return findOutgoing;
    }

}
