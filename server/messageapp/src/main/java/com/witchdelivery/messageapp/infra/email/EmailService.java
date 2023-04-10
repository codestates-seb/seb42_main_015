package com.witchdelivery.messageapp.infra.email;

import com.witchdelivery.messageapp.global.exception.BusinessLogicException;
import com.witchdelivery.messageapp.global.exception.ExceptionCode;
import com.witchdelivery.messageapp.security.utils.RedisUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Random;

@RequiredArgsConstructor
@Service
public class EmailService {
    private final JavaMailSender javaMailSender;
    private final SpringTemplateEngine templateEngine;
    private final RedisUtils redisUtils;

    /**
     * 이메일 인증 코드 발송 메서드
     * @param emailInfoDto
     * @param type
     * @return
     * @throws Exception
     */
    public String sendRandomCodeEmail(EmailInfoDto emailInfoDto, String type) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        String emailCode = createRandomCode(); // 랜덤 인증코드 생성

        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, false, "UTF-8");
        mimeMessageHelper.setTo(emailInfoDto.getTo()); // 메일 수신자
        mimeMessageHelper.setSubject(emailInfoDto.getSubject()); // 메일 제목
        mimeMessageHelper.setText(setContext(emailCode, type), true); // 메일 내용, HTML 사용 여부

        redisUtils.setEmailAuthorizationCode(emailInfoDto.getTo(), emailCode);  // 인증 코드 저장
        javaMailSender.send(mimeMessage);   // 이메일 전송

        return emailCode;
    }

    /**
     * 타임리프 설정 메서드
     * @param emailCode
     * @return
     */
    private String setContext(String emailCode, String type) {
        Context context = new Context();

        context.setVariable("emailCode", emailCode); // 타임리프 템플릿에 랜덤 인증코드가 담기도록 설정
        return templateEngine.process(type, context);
    }

    /**
     * 인증 코드 생성 메서드
     * @return
     */
    private String createRandomCode() {
        Random random = new Random();
        StringBuffer code = new StringBuffer();

        for (int i = 0; i < 8; i++) {
            int index = random.nextInt(3);
            switch (index) {
                case 0: code.append((char) ((int) (random.nextInt(26)) + 97)); break;
                case 1: code.append((char) ((int) (random.nextInt(26)) + 65)); break;
                case 2: code.append((random.nextInt(10))); break;
            }
        }
        return code.toString();
    }

    /**
     * 이메일 인증 코드 유효성 검증 메서드
     * @param emailCodeDto
     */
    public void verifiedRandomCodeEmail(EmailCodeDto emailCodeDto) {
        String findEmailCode = redisUtils.getEmailAuthorizationCode(emailCodeDto.getEmail());   // 인증 코드 반환
        if (!findEmailCode.equals(emailCodeDto.getEmailCode())) // 인증 코드 검증
            throw new BusinessLogicException(ExceptionCode.EMAIL_CODE_MISMATCH);
        redisUtils.deleteEmailAuthorizationCode(emailCodeDto.getEmail());   // 인증 코드 삭제
    }
}
