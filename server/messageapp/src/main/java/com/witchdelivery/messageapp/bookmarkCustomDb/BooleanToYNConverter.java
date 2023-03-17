package com.witchdelivery.messageapp.bookmarkCustomDb;


import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class BooleanToYNConverter implements AttributeConverter<Boolean, String> {

    @Override
    public String convertToDatabaseColumn(Boolean attribute) {
        return (attribute != null && attribute) ? "Y" : "N";
    }

    @Override
    public Boolean convertToEntityAttribute(String yn) {
        return "Y".equalsIgnoreCase(yn);
    }
}

/**
 * Y 또는 N 을 Boolean 으로 컨버트
 *
 * @param yn Y 또는 N
 * @return Boolean 대소문자 상관없이 Y 인 경우 true, N 인 경우 false
 */