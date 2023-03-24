package com.witchdelivery.messageapp.domain.member.mapper;

import com.witchdelivery.messageapp.domain.member.dto.MemberResponseDto;
import com.witchdelivery.messageapp.domain.member.dto.PatchNicknameDto;
import com.witchdelivery.messageapp.domain.member.dto.PatchPasswordDto;
import com.witchdelivery.messageapp.domain.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member patchPasswordDtoToMember(PatchPasswordDto patchPasswordDto);

    Member patchNicknameDtoToMember(PatchNicknameDto patchNicknameDto);

    MemberResponseDto memberToMemberResponseDto(Member member);

    List<MemberResponseDto> membersToMemberResponseDtos(List<Member> members);
}
