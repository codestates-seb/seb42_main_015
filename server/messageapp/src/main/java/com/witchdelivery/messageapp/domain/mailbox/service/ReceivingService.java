package com.witchdelivery.messageapp.domain.mailbox.service;

import com.witchdelivery.messageapp.domain.mailbox.entity.Receiving;
import com.witchdelivery.messageapp.domain.mailbox.repository.ReceivingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReceivingService { // 수신(받는 사람)
    private final ReceivingRepository receivingRepository;

    public Receiving createReceiving(Receiving receiving) {
        return receivingRepository.save(receiving); // receiving 정보 저장
    }
}
