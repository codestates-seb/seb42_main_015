package com.witchdelivery.messageapp.domain.mailbox.repository;

import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import com.witchdelivery.messageapp.domain.mailbox.entity.Receiving;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceivingRepository extends JpaRepository<Receiving, Long> { // 수신(받는 사람)

      Page<Receiving> findAllByMember_MemberIdAndReceivingStatusOrderByCreatedAtDesc(Long memberId, Receiving.ReceivingStatus receivingStatus, Pageable pageable);

      Page<Receiving> findAllByMember_MemberIdAndReceivingStatusOrderByDeletedAtDesc(Long memberId, Receiving.ReceivingStatus receivingStatus, Pageable pageable); // 휴지통 페이지네이션
}
