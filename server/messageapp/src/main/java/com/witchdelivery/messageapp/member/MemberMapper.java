package com.witchdelivery.messageapp.member;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto memberPostDto);

    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);

    MemberResponseDto memberToMemberResponseDto(Member member);

    List<MemberResponseDto> membersToMemberResponseDtos(List<Member> members);
}
