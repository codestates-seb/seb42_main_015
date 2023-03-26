package com.witchdelivery.messageapp.domain.font.entity;

import com.witchdelivery.messageapp.domain.message.entity.Message;
import com.witchdelivery.messageapp.global.audit.BaseTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "FONTS")
@Getter
@Setter
@NoArgsConstructor
public class Font extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "FONT_ID")
    private Long fontId;
    private String fontName;
    @OneToOne(mappedBy = "font")
    private Message message;        //  FK 편지 식별번호(편지 연관관계 매핑)

    public Font(String fontName) {
        this.fontName = fontName;
    }
}
