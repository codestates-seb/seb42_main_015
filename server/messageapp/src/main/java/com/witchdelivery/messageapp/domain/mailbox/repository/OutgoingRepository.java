package com.witchdelivery.messageapp.domain.mailbox.repository;

import com.witchdelivery.messageapp.domain.mailbox.entity.Outgoing;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface OutgoingRepository extends JpaRepository<Outgoing, Long> { // 발신 (보내는 사람)

      Page<Outgoing> findAllByMember_MemberIdAndOutgoingStatusOrderByCreatedAtDesc(Long memberId, Outgoing.OutgoingStatus outgoingStatus, Pageable pageable);

      Page<Outgoing> findAllByMember_MemberIdAndOutgoingStatusOrderByDeletedAtDesc(Long memberId, Outgoing.OutgoingStatus outgoingStatus, Pageable pageable); // 휴지통 페이지네이션

      //  deleted_at 날짜가 오늘 날짜로부터 30일보다 오래된 모든 메시지를 선택. 즉, 30일 이상 전에 생성된 메시지만 쿼리에서 반환된다.
      @Query(value = "SELECT * FROM outgoing WHERE DATE(deleted_at) < DATE_SUB(NOW(), INTERVAL 30 DAY)", nativeQuery = true)  // 배치
      List<Outgoing> selectLimitedOutgoing();
      List<Outgoing> findAllByMessage_MessageId(Long messageId); // 해당 messageId를 갖는 모든 데이터 조회
}
