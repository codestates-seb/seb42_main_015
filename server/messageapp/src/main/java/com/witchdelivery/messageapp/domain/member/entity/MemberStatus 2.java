package com.witchdelivery.messageapp.domain.member.entity;

import lombok.Getter;

public enum MemberStatus {
    MEMBER_ACTIVE("활동 상태"),
    MEMBER_EXITED("탈퇴 상태");

    @Getter
    private final String status;

    MemberStatus(String status) {
        this.status = status;
    }
}
