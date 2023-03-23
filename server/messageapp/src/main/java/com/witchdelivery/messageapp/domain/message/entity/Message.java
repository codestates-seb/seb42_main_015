package com.witchdelivery.messageapp.domain.message.entity;

import com.witchdelivery.messageapp.domain.member.entity.Member;
import com.witchdelivery.messageapp.global.audit.BaseTime;
import com.witchdelivery.messageapp.global.utils.BooleanToYNConverter;
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
    @Convert(converter = BooleanToYNConverter.class)
    private boolean messageSaved;          // 편지 저장 여부
    @Convert(converter = BooleanToYNConverter.class)           // Boolean 값을 DB에서 Y 또는 N으로 컨버트 하는 기능
    private boolean bookMark;                // 북마크 여부

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member; // FK 사용자식별번호... 이게 맞나...
}
