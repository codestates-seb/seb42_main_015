package com.witchdelivery.messageapp.domain.member.entity;

import com.witchdelivery.messageapp.global.audit.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name = "MEMBER_PROFILE_IMAGE")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberFile extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    /**
     * 연관관계 매핑 메서드
     * @param member
     */
    public void setMember(Member member) {
        this.member = member;
    }
}
