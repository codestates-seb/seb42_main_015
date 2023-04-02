package com.witchdelivery.messageapp.domain.message.repository;

import com.witchdelivery.messageapp.domain.message.entity.MessageImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageImageRepository extends JpaRepository<MessageImage, Long> {
}
