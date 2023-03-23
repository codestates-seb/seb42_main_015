package com.witchdelivery.messageapp.domain.member.controller;

import com.witchdelivery.messageapp.domain.member.dto.VerifiedExistedDto;
import com.witchdelivery.messageapp.domain.member.dto.MemberResponseDto;
import com.witchdelivery.messageapp.domain.member.mapper.MemberMapper;
import com.witchdelivery.messageapp.domain.member.dto.MemberPatchDto;
import com.witchdelivery.messageapp.domain.member.dto.MemberPostDto;
import com.witchdelivery.messageapp.domain.member.entity.Member;
import com.witchdelivery.messageapp.domain.member.service.MemberDbService;
import com.witchdelivery.messageapp.domain.member.service.MemberService;
import com.witchdelivery.messageapp.global.response.PageResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.io.IOException;

@RestController
@RequestMapping("/sendy/users")
@RequiredArgsConstructor
public class MemberController {
    private final MemberDbService memberDbService;
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    /**
     * 사용자 등록(회원가입) 컨트롤러 메서드
     * @param memberPostDto
     * @return
     */
    @PostMapping("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto) {
        memberService.createMember(memberPostDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    /**
     * 이메일 중복 검증 컨트롤러 메서드
     * @param emailDto
     * @return
     */
    @PostMapping("/email")
    public ResponseEntity postEmail(@Valid @RequestBody VerifiedExistedDto.EmailDto emailDto) {
        memberDbService.verifiedExistedEmail(emailDto.getEmail());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * 닉네임 중복 검증 컨트롤러 메서드
     * @param nicknameDto
     * @return
     */
    @PostMapping("/nickname")
    public ResponseEntity postNickname(@Valid @RequestBody VerifiedExistedDto.NicknameDto nicknameDto) {
        memberDbService.verifiedExistedName(nicknameDto.getNickname());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * 단일 사용자 조회(마이페이지) 컨트롤러 메서드
     * @param memberId
     * @return
     */
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") Long memberId) {
        MemberResponseDto memberResponseDto = memberService.findMember(memberId);
        return new ResponseEntity<>(memberResponseDto, HttpStatus.OK);
    }

    /**
     * 전체 사용자 조회 컨트롤러 메서드
     * @param page
     * @param size
     * @return
     */
    @GetMapping
    public ResponseEntity getMembers(@Positive @RequestParam(required = false, defaultValue = "1") int page,
                                     @Positive @RequestParam(required = false, defaultValue = "20") int size) {
        Page<Member> members = memberService.findMembers(page -1, size);
        return new ResponseEntity<>(new PageResponseDto<>(memberMapper.membersToMemberResponseDtos(members.getContent()), members), HttpStatus.OK);
    }

    // TODO 닉네임 수정 메서드
    // TODO 패스워드 수정 메서드
    /**
     * 사용자 정보 수정 컨트롤러 메서드
     * @param memberId
     * @param memberPatchDto
     * @return
     */
    @PatchMapping("/edit/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") Long memberId, @RequestBody MemberPatchDto memberPatchDto) {
        memberPatchDto.setMemberId(memberId);
        Member response = memberService.updateMember(memberMapper.memberPatchDtoToMember(memberPatchDto));
        return new ResponseEntity<>(memberMapper.memberToMemberResponseDto(response), HttpStatus.OK);
    }

    /**
     * 사용자 프로필 이미지 S3 업로드/수정 컨트롤러 메서드
     * @param memberId
     * @param multipartFile
     * @throws IOException
     */
    @PostMapping("/profile/{member-id}")
    public void postFile(@PathVariable("member-id") Long memberId,
                         @RequestParam(value = "image") MultipartFile multipartFile) throws IOException {
        memberService.updateProfileS3(memberId, multipartFile);
    }

    /**
     * 사용자 삭제(회원탈퇴) 컨트롤러 메서드
     * @param memberId
     * @return
     */
    @DeleteMapping("/delete/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") Long memberId) {
        memberService.deleteMember(memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
