package com.witchdelivery.messageapp.domain.mailbox.repository;

import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import com.witchdelivery.messageapp.domain.mailbox.entity.Receiving;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReceivingRepository extends JpaRepository<Receiving, Long> { // 수신(받는 사람)

      Page<Receiving> findAllByMember_MemberIdAndReceivingStatusOrderByCreatedAtDesc(Long memberId, Receiving.ReceivingStatus receivingStatus, Pageable pageable);

      Page<Receiving> findAllByMember_MemberIdAndReceivingStatusOrderByDeletedAtDesc(Long memberId, Receiving.ReceivingStatus receivingStatus, Pageable pageable); // 휴지통 페이지네이션

      //  deleted_at 날짜가 오늘 날짜로부터 30일보다 오래된 모든 메시지를 선택. 즉, 30일 이상 전에 생성된 메시지만 쿼리에서 반환된다.
      @Query(value = "SELECT * FROM receiving WHERE DATE(deleted_at) < DATE_SUB(NOW(), INTERVAL 30 DAY)", nativeQuery = true)  // 배치
      List<Receiving> selectLimitedReceiving();
}
