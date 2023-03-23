package com.witchdelivery.messageapp.domain.mailbox.entity;

import com.witchdelivery.messageapp.domain.member.entity.Member;
import com.witchdelivery.messageapp.domain.message.entity.Message;
import com.witchdelivery.messageapp.global.audit.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Outgoing extends BaseTime { // 발신 (보내는 사람)

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long outgoingId; // PK 발신식별번호

    @Column()
    private Long fromId; // 받는사람식별번호, 비회원 가능

    @ManyToOne
    @JoinColumn(name = "MESSAGE_ID")
    private Message message; // FK 편지식별번호

    private String toName; // 받는사람 닉네임 (편지테이블의 toName)

    private String content; // 편지 내용

    private LocalDateTime messageCreatedAt; // 편지 생성날짜

    private boolean bookMark; // 북마크 여부

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member; // FK 사용자식별번호

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private OutgoingStatus outgoingStatus = OutgoingStatus.OUTGOING_STORE;

    @Column()
    private LocalDateTime deletedAt; // 편지삭제시간

    // 발신 편지 상태 enum
    public enum OutgoingStatus {
        OUTGOING_STORE("발신 보관"), // 디폴트
        OUTGOING_DELETE("발신 삭제"); // 삭제 버튼

        @Getter
        private final String status;

        OutgoingStatus(String status) {
            this.status = status;
        }
    }
}
