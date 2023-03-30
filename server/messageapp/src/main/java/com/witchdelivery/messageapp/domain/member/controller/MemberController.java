package com.witchdelivery.messageapp.domain.member.controller;

import com.witchdelivery.messageapp.domain.member.dto.*;
import com.witchdelivery.messageapp.domain.member.mapper.MemberMapper;
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

@RequestMapping("/sendy/users")
@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberDbService memberDbService;
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    /**
     * 사용자 등록(회원가입) API
     * @param memberSignupDto
     * @return
     */
    @PostMapping("/signup")
    public ResponseEntity signupMember(@Valid @RequestBody MemberSignupDto memberSignupDto) {
        memberService.createMember(memberSignupDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    /**
     * 이메일 중복 검증 API
     * @param checkEmailDto
     * @return
     */
    @PostMapping("/verify/email")
    public ResponseEntity checkEmail(@Valid @RequestBody CheckEmailDto checkEmailDto) {
        memberDbService.verifiedExistedEmail(checkEmailDto.getEmail());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * 닉네임 중복 검증 API
     * @param checkNicknameDto
     * @return
     */
    @PostMapping("/verify/nickname")
    public ResponseEntity checkNickname(@Valid @RequestBody CheckNicknameDto checkNicknameDto) {
        memberDbService.verifiedExistedName(checkNicknameDto.getNickname());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * 패스워드 일치 검증 API
     * @param memberId
     * @param checkPasswordDto
     * @return
     */
    @PostMapping("/verify/password/{member-id}")
    public ResponseEntity checkPassword(@PathVariable("member-id") Long memberId,
                                        @Valid @RequestBody CheckPasswordDto checkPasswordDto) {
        Member findMember = memberDbService.findVerifiedMemberId(memberId); // 사용자 검증
        memberDbService.findMatchedPassword(findMember, checkPasswordDto.getPassword());    // 패스워드 검증
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * 단일 사용자 조회(마이페이지) API
     * @param memberId
     * @return
     */
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") Long memberId) {
        MemberResponseDto memberResponseDto = memberService.findMember(memberId);
        return new ResponseEntity<>(memberResponseDto, HttpStatus.OK);
    }

    // 인터페이스 미구현 예정
    /**
     * 전체 사용자 조회 API
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

    /**
     * 마이페이지 사용자 패스워드 수정 API
     * @param memberId
     * @param patchPasswordInMyPageDto
     * @return
     */
    @PatchMapping("/password/{member-id}")
    public ResponseEntity patchPasswordInMyPage(@PathVariable("member-id") Long memberId,
                                                @Valid @RequestBody PatchPasswordInMyPageDto patchPasswordInMyPageDto) {
        patchPasswordInMyPageDto.setMemberId(memberId);
        memberService.updatePasswordInMyPage(memberId, patchPasswordInMyPageDto.getCurPassword(), patchPasswordInMyPageDto.getNewPassword());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * 로그인페이지 사용자 패스워드 수정 API
     * @param patchPasswordInLoginPageDto
     * @return
     */
    @PatchMapping("/password")
    public ResponseEntity patchPasswordInLoginPage(@Valid @RequestBody PatchPasswordInLoginPageDto patchPasswordInLoginPageDto) {
        patchPasswordInLoginPageDto.setEmail(patchPasswordInLoginPageDto.getEmail());
        memberService.updatePasswordInLoginPage(patchPasswordInLoginPageDto.getEmail(), patchPasswordInLoginPageDto.getNewPassword());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * 사용자 닉네임 수정 API
     * @param memberId
     * @param patchNicknameDto
     * @return
     */
    @PatchMapping("/edit/nickname/{member-id}")
    public ResponseEntity patchNickname(@PathVariable("member-id") Long memberId,
                                        @Valid @RequestBody PatchNicknameDto patchNicknameDto) {
        patchNicknameDto.setMemberId(memberId);
        Member response = memberService.updateNickname(memberMapper.patchNicknameDtoToMember(patchNicknameDto));
        return new ResponseEntity<>(memberMapper.memberToMemberResponseDto(response), HttpStatus.OK);
    }   // FIXME 리팩토링

    /**
     * S3 사용자 프로필 이미지 업로드/수정 API
     * @param memberId
     * @param multipartFile
     * @throws IOException
     */
    @PostMapping("/edit/profile/{member-id}")
    public ResponseEntity postProfileImage(@PathVariable("member-id") Long memberId,
                                           @RequestParam(value = "image") MultipartFile multipartFile) throws IOException {
        memberService.updateProfileS3(memberId, multipartFile);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * S3 사용자 프로필 기본 이미지 재설정 API
     * @param memberId
     * @return
     */
    @PostMapping("/edit/reset-profile/{member-id}")
    public ResponseEntity resetProfileImage(@PathVariable("member-id") Long memberId) {
        memberService.resetProfileS3(memberId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * 사용자 삭제(회원탈퇴) API
     * @param memberId
     * @return
     */
    @DeleteMapping("/delete/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") Long memberId) {
        memberService.deleteMember(memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
