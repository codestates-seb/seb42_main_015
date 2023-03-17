package com.witchdelivery.messageapp.aws;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RequiredArgsConstructor
@RestController
@RequestMapping("/sendy/File")
public class AwsS3Controller {
    private final AwsS3Service awsS3Service;

    @PostMapping("/upload")
    public ResponseEntity postFile(@RequestParam("images") MultipartFile multipartFile) throws IOException {
        return new ResponseEntity<>(awsS3Service.uploadFile(multipartFile), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteFile(@RequestParam("images") String s3FileName) {
        awsS3Service.deleteFile(s3FileName);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
