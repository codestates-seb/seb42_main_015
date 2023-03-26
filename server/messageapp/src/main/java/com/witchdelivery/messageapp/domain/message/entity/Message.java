package com.witchdelivery.messageapp.domain.message.entity;

import com.witchdelivery.messageapp.domain.member.entity.Member;
import com.witchdelivery.messageapp.global.audit.BaseTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;


@Entity(name = "MESSAGES")
@Getter
@Setter
@NoArgsConstructor
public class Message extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MESSAGE_ID")
    private Long messageId;       // 편지 식별번호
    private String toName;       // 편지에서 to "애칭"
    private String fromName;     // 편지에서 from "애칭"

    @Column(name = "URL_NAME" , nullable = false)
    private String urlName;     // url 이름

    @Column(nullable = false, length = 7000)
    private String content; // 편지 내용
    @Column(nullable = true)
    private Long password;   // 편지 비밀번호
    private boolean messageSaved;          // 편지 저장 여부
    private boolean bookMark;                // 북마크 여부

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member; // FK 사용자식별번호(사용자와 연관관계 매핑)

    private String theme;   // FK 테마 식별번호(테마 연관관계 매핑)

    private String font;   // FK 폰트 식별번호(폰트 연관관계 매핑)

//    @Column(nullable = false)
//    private Long outgoingId; // 보내는 사람 Id즉 사용자 Id 두번 받는거 맞음...
}
