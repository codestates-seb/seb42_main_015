package com.witchdelivery.messageapp.domain.mailbox.service;

import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import com.witchdelivery.messageapp.domain.mailbox.entity.Receiving;
import com.witchdelivery.messageapp.domain.mailbox.repository.ReceivingRepository;
import com.witchdelivery.messageapp.global.exception.BusinessLogicException;
import com.witchdelivery.messageapp.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReceivingService { // 수신(받는 사람)
    private final ReceivingRepository receivingRepository;

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
}
