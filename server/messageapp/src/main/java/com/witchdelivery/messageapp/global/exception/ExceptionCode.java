package com.witchdelivery.messageapp.global.exception;

import lombok.Getter;

@Getter
public enum ExceptionCode {
    // Email
    EMAIL_CODE_ALREADY_EXPIRED(404, "EMAIL CODE ALREADY EXPIRED"),
    EMAIL_CODE_MISMATCH(400, "EMAIL CODE MISMATCH"),
    // Member
    MEMBER_NOT_FOUND(404, "MEMBER NOT FOUND"),
    MEMBER_ALREADY_EXITED(404, "MEMBER ALREADY EXITED"),
    MEMBER_PASSWORD_MISMATCH(400, "MEMBER PASSWORD MISMATCH"),
    IMPOSSIBLE_SAME_PASSWORD(400, "IMPOSSIBLE SAME PASSWORD"),
    MEMBER_EMAIL_EXISTS(409, "MEMBER EMAIL EXISTS"),
    MEMBER_NAME_EXISTS(409, "MEMBER NAME EXISTS"),
    // File
    FILE_NOT_FOUND(404, "FILE NOT FOUND"),
    FILE_SIZE_EXCEEDED(400, "FILE SIZE EXCEEDED"),
    // Message
    MESSAGE_NOT_FOUND(404, "MESSAGE NOT FOUND"),
    // Outgoing
    OUTGOING_NOT_FOUND(404, "OUTGOING NOT FOUND"),
    DUSTBIN_OUTGOING_NOT_FOUND(404, "DUSTBIN OUTGOING NOT FOUND"),
    // Receiving
    RECEIVING_NOT_FOUND(404, "RECEIVING NOT FOUND"),
    DUSTBIN_RECEIVING_NOT_FOUND(404, "DUSTBIN RECEIVING NOT FOUND"),
    // Token
    ACCESS_TOKEN_EXPIRED(401, "ACCESS TOKEN EXPIRED");

    private final int status;
    private final String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
