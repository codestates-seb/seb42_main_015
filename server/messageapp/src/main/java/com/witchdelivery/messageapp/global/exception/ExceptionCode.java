package com.witchdelivery.messageapp.global.exception;

import lombok.Getter;

@Getter
public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "MEMBER NOT FOUND"),
    MEMBER_EMAIL_EXISTS(409, "MEMBER EMAIL EXISTS"),
    MEMBER_NAME_EXISTS(409, "MEMBER NAME EXISTS"),
    MESSAGE_NOT_FOUND(404, "MESSAGE NOT FOUND"),
    FILE_NOT_FOUND(404, "FILE NOT FOUND"),
    FILE_SIZE_EXCEEDED(400, "FILE SIZE EXCEEDED"),
    PASSWORD_NOT_MATCH(401, "PASSWORD NOT MATCH"),
    OUTGOING_NOT_FOUND(404, "OUTGOING NOT FOUND"),
    DUSTBIN_OUTGOING_NOT_FOUND(404, "DUSTBIN OUTGOING NOT FOUND"),
    RECEIVING_NOT_FOUND(404, "RECEIVING NOT FOUND"),
    DUSTBIN_RECEIVING_NOT_FOUND(404, "DUSTBIN RECEIVING NOT FOUND"),
    ACCESS_TOKEN_EXPIRED(401, "Access token expired");

    private final int status;
    private  final String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
