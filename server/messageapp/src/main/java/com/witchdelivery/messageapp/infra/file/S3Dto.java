package com.witchdelivery.messageapp.infra.file;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class S3Dto {
    private String originFileName;    // 파일 원본 이름

    private String fileName;    // 업로드시 파일 이름

    private String filePath;    // 업로드시 파일 경로

    private Long fileSize;  // 파일 크기
}
