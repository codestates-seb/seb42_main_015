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
     * 이메일 인증 코드 발송 API
     * @param emailCodeDto
     * @return
     * @throws Exception
     */
    @PostMapping("/send-code-email")
    public ResponseEntity sendAuthenticationCodeEmail(@RequestBody EmailCodeDto emailCodeDto) throws Exception {
        EmailInfoDto emailInfoDto = EmailInfoDto.builder()
                .to(emailCodeDto.getEmail())
                .subject("📮SENDY 인증 코드 입니다.")
                .build();

        String emailCode = emailService.sendRandomCodeEmail(emailInfoDto, "email");

        EmailResponseDto emailResponseDto = new EmailResponseDto();
        emailResponseDto.setCode(emailCode);

        return new ResponseEntity<>(emailResponseDto, HttpStatus.OK);
    }

    /**
     * 이메일 인증 코드 유효성 검증 API
     * @param emailCodeDto
     * @return
     */
    @PostMapping("/check-code-email")
    public ResponseEntity checkAuthenticationCodeEmail(@RequestBody EmailCodeDto emailCodeDto) {
        emailService.verifiedRandomCodeEmail(emailCodeDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
