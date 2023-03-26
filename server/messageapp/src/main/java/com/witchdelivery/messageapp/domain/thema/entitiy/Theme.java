package com.witchdelivery.messageapp.domain.thema.entitiy;

import com.witchdelivery.messageapp.domain.message.entity.Message;
import com.witchdelivery.messageapp.global.audit.BaseTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "THEMES")
@Getter
@Setter
@NoArgsConstructor
public class Theme extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "THEME_ID")
    private Long themeId;

    private String themeName;

    @OneToOne(mappedBy = "theme")
    private Message message;        //  FK 편지 식별번호(편지 연관관계 매핑)

    public Theme(String themeName) {
        this.themeName = themeName;
    }

}
