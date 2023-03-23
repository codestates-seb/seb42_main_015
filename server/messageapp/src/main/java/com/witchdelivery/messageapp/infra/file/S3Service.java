package com.witchdelivery.messageapp.infra.file;

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

@Service
@RequiredArgsConstructor
public class S3Service {
    @Value("${cloud.aws.s3.bucket}")
    private String s3BucketName;
    private final AmazonS3Client amazonS3Client;

    /**
     * 단일 파일 S3 업로드 메서드
     * @param multipartFile
     * @return
     * @throws IOException
     */
    public S3File s3ImageUpload(MultipartFile multipartFile, String dir) throws IOException {

        findVerifiedFile(multipartFile);    // 파일 검증
        verifiedExistedFile(multipartFile); // 용량 검증

        String s3FileName = System.nanoTime() + "_" + multipartFile.getOriginalFilename();  // 파일 이름 생성

        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentLength(multipartFile.getInputStream().available());

        amazonS3Client.putObject(s3BucketName, dir + "/" + s3FileName, multipartFile.getInputStream(), objectMetadata);

        S3File s3File = S3File.builder()
                .originFileName(multipartFile.getOriginalFilename())
                .fileName(s3FileName)
                .filePath(amazonS3Client.getUrl(s3BucketName, dir + "/" + s3FileName).toString())
                .fileSize(multipartFile.getSize())
                .build();

        return s3File;
    }

    /**
     * 단일 파일 S3 삭제 메서드
     * @param s3FileName
     */
    public void deleteS3(String s3FileName) {
        amazonS3Client.deleteObject(new DeleteObjectRequest(s3BucketName, s3FileName));
    }


    /**
     * 파일 유무 검증 메서드
     * @param multipartFile
     */
    private void findVerifiedFile(MultipartFile multipartFile) {
        if (multipartFile.isEmpty())
            throw new BusinessLogicException(ExceptionCode.FILE_NOT_FOUND); // 404
    }

    /**
     * 파일 용량 검증 메서드
     * @param multipartFile
     */
    // FIXME 현재 미사용 메서드
    private void verifiedExistedFile(MultipartFile multipartFile) {
        if (multipartFile.getSize() > 1024 * 1024 * 4)
            throw new BusinessLogicException(ExceptionCode.FILE_SIZE_EXCEEDED); // 400
    }
}
