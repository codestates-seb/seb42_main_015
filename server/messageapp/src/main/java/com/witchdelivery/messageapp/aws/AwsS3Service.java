package com.witchdelivery.messageapp.aws;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.witchdelivery.messageapp.exception.BusinessLogicException;
import com.witchdelivery.messageapp.exception.ExceptionCode;
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
    private String bucket;

    private final AmazonS3 amazonS3;

    // 단일 파일 업로드
    public String uploadFile(MultipartFile multipartFile) throws IOException {
        if (multipartFile.getSize() > 1024 * 1024 * 6)  // 용량 검증
            throw new BusinessLogicException(ExceptionCode.MAX_FILE_SIZE_EXCEEDED); // 400

        String s3FileName = UUID.randomUUID() + "-" + multipartFile.getOriginalFilename();  // UUID로 생성한 랜덤값 + "-" + 원래 파일명

        ObjectMetadata objMeta = new ObjectMetadata();
        objMeta.setContentLength(multipartFile.getInputStream().available());

        amazonS3.putObject(bucket, s3FileName, multipartFile.getInputStream(), objMeta);

        return amazonS3.getUrl(bucket, s3FileName).toString();
    }

    public void deleteFile(String s3FileName) {
        amazonS3.deleteObject(new DeleteObjectRequest(bucket, s3FileName));
    }
}