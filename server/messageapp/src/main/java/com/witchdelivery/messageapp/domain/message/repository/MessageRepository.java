package com.witchdelivery.messageapp.domain.message.repository;

import com.witchdelivery.messageapp.domain.message.entity.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
     @Query(value = "SELECT * FROM messages WHERE DATE(created_at) < DATE_SUB(NOW(), INTERVAL 7 DAY)", nativeQuery = true)  //  created_at 날짜가 오늘 날짜로부터 0일보다 오래된 모든 메시지를 선택. 즉, 0일 이상 전에 생성된 메시지만 쿼리에서 반환된다. nativeQuery는 true로 설정되어 쿼리가 네이티브 SQL 쿼리임을 나타냄
     List<Message> selectLimitedMessage();
     Page<Message> findAllByOrderByMessageIdDesc(Pageable pageable);
}
