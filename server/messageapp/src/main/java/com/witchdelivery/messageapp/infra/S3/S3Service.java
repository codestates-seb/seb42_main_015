package com.witchdelivery.messageapp.infra.S3;

import com.amazonaws.services.s3.AmazonS3;
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
    private final AmazonS3 amazonS3;

    /**
     * S3 단일 파일 업로드 메서드
     * @param multipartFile
     * @return
     * @throws IOException
     */
    public S3InfoDto s3ImageUpload(MultipartFile multipartFile, String dir) throws IOException {

        findVerifiedFile(multipartFile);    // 파일 검증
        verifiedExistedFile(multipartFile); // 용량 검증

        String s3FileName = System.nanoTime() + "_" + multipartFile.getOriginalFilename();  // 파일 이름 생성

        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentLength(multipartFile.getInputStream().available());

        amazonS3.putObject(s3BucketName, dir + "/" + s3FileName, multipartFile.getInputStream(), objectMetadata);

        S3InfoDto s3InfoDto = S3InfoDto.builder()
                .originFileName(multipartFile.getOriginalFilename())
                .fileName(s3FileName)
                .filePath(amazonS3.getUrl(s3BucketName, dir + "/" + s3FileName).toString())
                .fileSize(multipartFile.getSize())
                .build();

        return s3InfoDto;
    }

    /**
     * S3 단일 파일 삭제 메서드
     * @param s3FileName
     */
    public void s3ImageDelete(String s3FileName, String dir) {
        amazonS3.deleteObject(new DeleteObjectRequest(s3BucketName, dir + "/" + s3FileName));
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
    private void verifiedExistedFile(MultipartFile multipartFile) {
        if (multipartFile.getSize() > 1024 * 1024 * 4)
            throw new BusinessLogicException(ExceptionCode.FILE_SIZE_EXCEEDED); // 400
    }
}
