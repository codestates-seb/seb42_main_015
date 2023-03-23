package com.witchdelivery.messageapp.domain.member.mapper;

import com.witchdelivery.messageapp.domain.member.dto.MemberPatchDto;
import com.witchdelivery.messageapp.domain.member.dto.MemberPostDto;
import com.witchdelivery.messageapp.domain.member.dto.MemberResponseDto;
import com.witchdelivery.messageapp.domain.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);

    MemberResponseDto memberToMemberResponseDto(Member member);

    List<MemberResponseDto> membersToMemberResponseDtos(List<Member> members);
}
