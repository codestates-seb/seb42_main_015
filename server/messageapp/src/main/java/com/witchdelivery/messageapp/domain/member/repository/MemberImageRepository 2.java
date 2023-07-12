package com.witchdelivery.messageapp.domain.member.repository;

import com.witchdelivery.messageapp.domain.member.entity.MemberImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberImageRepository extends JpaRepository<MemberImage, Long> {
}
