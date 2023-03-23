package com.witchdelivery.messageapp.domain.mailbox.repository;

import com.witchdelivery.messageapp.domain.mailbox.entity.Receiving;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceivingRepository extends JpaRepository<Receiving, Long> { // 수신(받는 사람)
    Page<Receiving> findAllByOrderByReceivingIdDesc(Pageable pageable);      // 페이지 네이션
}
