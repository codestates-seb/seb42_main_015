package com.witchdelivery.messageapp.response;

import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class PageResponseDto<T> {
    private List<T> data;
    private int page;
    private int size;
    private long totalElements;
    private int totalPages;

    public PageResponseDto(List<T> data, Page pageInfo) {
        this.data = data;
        this.page = pageInfo.getNumber() +1;
        this.size = pageInfo.getSize();
        this.totalPages = pageInfo.getTotalPages();
        this.totalElements = pageInfo.getTotalElements();
    }
}
