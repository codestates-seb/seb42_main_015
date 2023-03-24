package com.witchdelivery.messageapp.domain.mailbox.repository;

import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OutgoingRepository extends JpaRepository<Outgoing, Long> { // 발신 (보내는 사람)

      Page<Outgoing> findAllByMember_MemberIdAndOutgoingStatusOrderByCreatedAtDesc(Long memberId, Outgoing.OutgoingStatus outgoingStatus, Pageable pageable);

      Page<Outgoing> findAllByMember_MemberIdAndOutgoingStatusOrderByDeletedAtDesc(Long memberId, Outgoing.OutgoingStatus outgoingStatus, Pageable pageable); // 휴지통 페이지네이션

}
