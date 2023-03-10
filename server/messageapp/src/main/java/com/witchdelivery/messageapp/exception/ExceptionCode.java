package com.witchdelivery.messageapp.exception;

import lombok.Getter;

@Getter
public enum ExceptionCode {
    USER_NOT_FOUND(404, "USER NOT FOUND"),
    USER_EXISTS(409, "USER EXISTS");

    private final int status;
    private  final String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
