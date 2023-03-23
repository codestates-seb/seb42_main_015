package com.witchdelivery.messageapp.domain.member.repository;

import com.witchdelivery.messageapp.domain.member.entity.MemberFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberFileRepository extends JpaRepository<MemberFile, Long> {
}
