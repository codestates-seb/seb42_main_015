package com.witchdelivery.messageapp.exception;

import lombok.Getter;

@Getter
public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "MEMBER NOT FOUND"),
    MEMBER_EXISTS(409, "MEMBER EXISTS");

    private final int status;
    private  final String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
