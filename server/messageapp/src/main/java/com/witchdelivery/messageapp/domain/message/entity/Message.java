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

//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
    @Column(nullable = false)
    private Long memberId; // 사용자 식별번호(편지 작성자 즉, 보낸 사람(발신자Id))

    @Column(nullable = false)
    private String outgoingNickname; // 보낸 사람 nickname

    @Column(nullable = false)
    private String themeName;   // FK 테마 식별번호(테마 연관관계 매핑)

    @Column(nullable = false)
    private String fontName;   // FK 폰트 식별번호(폰트 연관관계 매핑)

    @OneToOne(mappedBy = "message", cascade = CascadeType.ALL)
    private MessageImage messageImage;

    /**
     * 연관관계 매핑 메서드
     * @param messageImage
     */
    public void addMessageImage(MessageImage messageImage) {
        if (messageImage.getMessage() != this) {
            messageImage.setMessage(this);
        }
        this.messageImage = messageImage;
    }
}
