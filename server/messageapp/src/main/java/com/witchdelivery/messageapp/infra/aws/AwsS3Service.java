package com.witchdelivery.messageapp.infra.aws;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.witchdelivery.messageapp.global.exception.BusinessLogicException;
import com.witchdelivery.messageapp.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AwsS3Service {
    @Value("${cloud.aws.s3.bucket}")
    private String s3BucketName;
    private final AmazonS3Client amazonS3Client;

    // 단일 파일 업로드
    public String uploadS3(MultipartFile multipartFile) throws IOException {
        findVerifiedFile(multipartFile);    // 파일 검증
        verifiedExistedFile(multipartFile); // 용량 검증

        String s3FileName = UUID.randomUUID() + "-" + multipartFile.getOriginalFilename();  // UUID로 생성한 랜덤값 + "-" + 원래 파일명

        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentLength(multipartFile.getInputStream().available());

        amazonS3Client.putObject(s3BucketName, s3FileName, multipartFile.getInputStream(), objectMetadata);

        return amazonS3Client.getUrl(s3BucketName, s3FileName).toString();
    }

    public void deleteS3(String s3FileName) {
        amazonS3Client.deleteObject(new DeleteObjectRequest(s3BucketName, s3FileName));
    }

    // 파일 검증
    private void findVerifiedFile(MultipartFile multipartFile) {
        if (multipartFile.isEmpty())
            throw new BusinessLogicException(ExceptionCode.FILE_NOT_FOUND); // 404
    }

    // 용량 검증
    private void verifiedExistedFile(MultipartFile multipartFile) {
        if (multipartFile.getSize() > 1024 * 1024 * 4)
            throw new BusinessLogicException(ExceptionCode.FILE_SIZE_EXCEEDED); // 400
    }
}