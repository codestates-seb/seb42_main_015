package com.witchdelivery.messageapp.infra.email;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/sendy/email")
@RestController
@RequiredArgsConstructor
public class EmailController {
    private final EmailService emailService;

    /**
     * 이메일 인증코드 발송 API
     * @param postEmailDto
     * @return
     * @throws Exception
     */
    @PostMapping("/send-code-email")
    public ResponseEntity postCodeMail(@RequestBody PostEmailDto postEmailDto) throws Exception {
        EmailInfo emailInfo = EmailInfo.builder()
                .to(postEmailDto.getEmail())
                .subject("📮SENDY 인증 코드 입니다.")
                .build();

        String code = emailService.sendEmail(emailInfo, "email");

        EmailResponseDto emailResponseDto = new EmailResponseDto();
        emailResponseDto.setCode(code);

        return new ResponseEntity<>(emailResponseDto, HttpStatus.OK);
    }

    // TODO 이메일 인증코드 확인 API
}
