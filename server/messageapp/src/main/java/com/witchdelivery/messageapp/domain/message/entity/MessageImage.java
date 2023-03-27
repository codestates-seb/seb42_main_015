package com.witchdelivery.messageapp.domain.message.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name = "MESSAGE_IMAGE")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MessageImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MESSAGE_IMAGE_ID")
    private Long FileId;    // PK

    @Column
    private String originFileName;    // 파일 원본 이름

    @Column
    private String fileName;    // 업로드시 파일 이름

    @Column
    private String filePath;    // 업로드시 파일 경로

    @Column
    private Long fileSize;  // 파일 크기

    @OneToOne
    @JoinColumn(name = "MESSAGE_ID")
    private Message message;

    /**
     * 연관관계 매핑 메서드
     * @param message
     */
    public void setMessage(Message message) {
        this.message = message;
    }
}
