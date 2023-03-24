package com.witchdelivery.messageapp.domain.mailbox.service;

import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import com.witchdelivery.messageapp.domain.mailbox.entity.Receiving;
import com.witchdelivery.messageapp.domain.mailbox.repository.OutgoingRepository;
import com.witchdelivery.messageapp.domain.mailbox.repository.ReceivingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DustbinService {
    private final OutgoingRepository outgoingRepository;

    private final ReceivingRepository receivingRepository;

    public Page<Outgoing> findAllOutgoingMessages(long memberId, int page, int size) { // 발신 (보낸 편지) 휴지통
        PageRequest pageRequest = PageRequest.of(page, size);
        return outgoingRepository.findAllByMember_MemberIdAndOutgoingStatusOrderByDeletedAtDesc(memberId, Outgoing.OutgoingStatus.OUTGOING_DELETE, pageRequest);
    }

    public void updateOutgoingDustStatus(List<Long> ids) {

    }

    public Page<Receiving> findAllReceivingMessages(long memberId, int page, int size) { // 수신 (받은 편지) 휴지통
        PageRequest pageRequest = PageRequest.of(page, size);
        return receivingRepository.findAllByMember_MemberIdAndReceivingStatusOrderByDeletedAtDesc(memberId, Receiving.ReceivingStatus.RECEIVING_DELETE, pageRequest);
    }
}
