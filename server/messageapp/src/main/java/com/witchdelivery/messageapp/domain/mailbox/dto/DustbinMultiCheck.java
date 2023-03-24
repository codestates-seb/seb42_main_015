package com.witchdelivery.messageapp.domain.mailbox.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class DustbinMultiCheck {
    private List<Long> ids;
}
