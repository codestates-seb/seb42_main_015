package com.witchdelivery.messageapp.domain.message.repository;

import com.witchdelivery.messageapp.domain.message.entity.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
     Page<Message> findAllByOrderByMessageIdDesc(Pageable pageable);
}
