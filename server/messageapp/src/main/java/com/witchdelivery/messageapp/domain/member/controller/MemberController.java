package com.witchdelivery.messageapp.domain.member.controller;

import com.witchdelivery.messageapp.domain.member.mapper.MemberMapper;
import com.witchdelivery.messageapp.domain.member.dto.MemberPatchDto;
import com.witchdelivery.messageapp.domain.member.dto.MemberPostDto;
import com.witchdelivery.messageapp.domain.member.entity.Member;
import com.witchdelivery.messageapp.domain.member.service.MemberService;
import com.witchdelivery.messageapp.global.response.PageResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/sendy/users")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    @PostMapping("/signup")
    public ResponseEntity postMember(@RequestBody MemberPostDto memberPostDto) {
//        Member member = memberMapper.memberPostDtoToMember(memberPostDto);    // FIXME 미사용으로 인한 삭제
        memberService.createMember(memberPostDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") Long memberId) {
        Member member = memberService.findMember(memberId);
        return new ResponseEntity<>(memberMapper.memberToMemberResponseDto(member), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMembers(@Positive @RequestParam(required = false, defaultValue = "1") int page,
                                     @Positive @RequestParam(required = false, defaultValue = "20") int size) {
        Page<Member> members = memberService.findMembers(page -1, size);
        return new ResponseEntity<>(new PageResponseDto<>(memberMapper.membersToMemberResponseDtos(members.getContent()), members), HttpStatus.OK);
    }

    @PatchMapping("/edit/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") Long memberId, @RequestBody MemberPatchDto memberPatchDto) {
        memberPatchDto.setMemberId(memberId);
        Member response = memberService.updateMember(memberMapper.memberPatchDtoToMember(memberPatchDto));
        return new ResponseEntity<>(memberMapper.memberToMemberResponseDto(response), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") Long memberId) {
        memberService.deleteMember(memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
