package com.witchdelivery.messageapp.domain.mailbox.repository;

import com.witchdelivery.messageapp.domain.mailbox.entity.Receiving;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceivingRepository extends JpaRepository<Receiving, Long> { // 수신(받는 사람)
}
