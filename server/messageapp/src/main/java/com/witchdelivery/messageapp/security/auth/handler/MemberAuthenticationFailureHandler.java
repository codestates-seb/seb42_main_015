package com.witchdelivery.messageapp.security.auth.handler;

import com.google.gson.Gson;
import com.witchdelivery.messageapp.global.response.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// 로그인 인증 실패 시, 추가 작업을 할 수 있는 클래스

@Slf4j
public class MemberAuthenticationFailureHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request,
                                        HttpServletResponse response,
                                        AuthenticationException exception) throws IOException {
        // 인증 실패 시, 에러 로그를 기록하거나 error response를 전송할 수 있다.
        log.error("# Authentication failed: {}", exception.getMessage());

        sendErrorResponse(response);
    }

    private void sendErrorResponse(HttpServletResponse response) throws IOException {
        Gson gson = new Gson();
        ErrorResponse errorResponse = ErrorResponse.of(HttpStatus.UNAUTHORIZED); // 401상태 코드, 인증에 실패할 경우 전달
        response.setContentType(MediaType.APPLICATION_JSON_VALUE); // response의 Content Type : application/json을 클라이언트에게 알려줌
        response.setStatus(HttpStatus.UNAUTHORIZED.value());// response의 status가 401임을 클라이언트에게 Header로 전달
        response.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class)); // ErrorResponse객체를 JSON포맷으로 변환 후 출력
    }
}
