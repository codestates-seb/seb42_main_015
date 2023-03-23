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
public class Receiving extends BaseTime { // 수신(받는 사람)

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long receivingId; // PK 수신식별번호

//    @Column() // (nullable = false)
//    private Long toId; // 보내는사람식별번호

    @ManyToOne
    @JoinColumn(name = "MESSAGE_ID")
    private Message message; // FK 편지식별번호

    private String outgoingNickname; // 발신자 (보내는 사람) 닉네임

    private String content; // 편지 내용

    private LocalDateTime messageCreatedAt; // 편지 생성날짜

    private boolean bookMark; // 북마크 여부

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member; // FK 사용자식별번호

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private ReceivingStatus receivingStatus = ReceivingStatus.RECEIVING_STORE;

    @Column()
    private LocalDateTime deletedAt; // 편지삭제시간

    // 수신 편지 상태 enum
    public enum ReceivingStatus {
        RECEIVING_STORE("수신 보관"), // 디폴트
        RECEIVING_DELETE("수신 삭제"); // 삭제 버튼

        @Getter
        private final String status;

        ReceivingStatus(String status) {
            this.status = status;
        }
    }
}
