package com.witchdelivery.messageapp.infra.email;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.internet.MimeMessage;
import java.util.Random;

@RequiredArgsConstructor
@Service
public class EmailService {
    private final JavaMailSender javaMailSender;
    private final SpringTemplateEngine templateEngine;

    /**
     * 랜덤 인증코드 발송 메서드
     * @param emailDto
     * @param type
     * @return
     * @throws Exception
     */
    public String sendEmail(EmailDto emailDto, String type) throws Exception {
        String code = createCode(); // 랜덤 인증코드 생성
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, false, "UTF-8");
        mimeMessageHelper.setTo(emailDto.getTo()); // 메일 수신자
        mimeMessageHelper.setSubject(emailDto.getSubject()); // 메일 제목
        mimeMessageHelper.setText(setContext(code, type), true); // 메일 내용, HTML 사용 여부

        javaMailSender.send(mimeMessage);   // 이메일 전송
        return code;
    }

    /**
     * 타임리프 설정 메서드
     * @param code
     * @return
     */
    private String setContext(String code, String type) {
        Context context = new Context();
        context.setVariable("code", code); // 타임리프 템플릿에 랜덤 인증코드가 담기도록 설정
        return templateEngine.process(type, context);
    }

    /**
     * 랜덤 인증코드 생성 메서드
     * @return
     */
    private String createCode() {
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
}
