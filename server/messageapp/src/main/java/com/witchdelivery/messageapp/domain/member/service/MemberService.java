package com.witchdelivery.messageapp.domain.member.service;

import com.witchdelivery.messageapp.domain.member.dto.MemberResponseDto;
import com.witchdelivery.messageapp.domain.member.entity.MemberImage;
import com.witchdelivery.messageapp.domain.member.repository.MemberImageRepository;
import com.witchdelivery.messageapp.infra.file.S3Info;
import com.witchdelivery.messageapp.infra.file.S3Service;
import com.witchdelivery.messageapp.security.utils.CustomAuthorityUtils;
import com.witchdelivery.messageapp.domain.member.dto.MemberPostDto;
import com.witchdelivery.messageapp.domain.member.repository.MemberRepository;
import com.witchdelivery.messageapp.domain.member.entity.Member;
import com.witchdelivery.messageapp.global.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {
    private final MemberDbService memberDbService;
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;  // 패스워드 암호화
    private final CustomAuthorityUtils customAuthorityUtils;    // 사용자 권한 설정
    private final CustomBeanUtils<Member> customBeanUtils;    // FIXME 미사용으로 인한 삭제
    private final S3Service s3Service;

    @Value("${default.image.address}")
    private String defaultImageAddress;   // 사용자 프로필 기본 이미지

    /**
     * 사용자 등록(회원가입) 메서드
     * @param memberPostDto
     * @return
     */
    public Member createMember(MemberPostDto memberPostDto) {
        memberDbService.verifiedExistedEmail(memberPostDto.getEmail()); // 이메일 검증
        memberDbService.verifiedExistedName(memberPostDto.getNickname());   // 닉네임 검증

        Member member = Member.builder()
                .email(memberPostDto.getEmail())
                .password(memberPostDto.getPassword())
                .nickname(memberPostDto.getNickname())
                .build();

        member.passwordEncode(passwordEncoder);
        member.authorizeUser(customAuthorityUtils);

        // 사용자 프로필 기본 이미지 설정
        MemberImage memberImage = MemberImage.builder()
                .filePath(defaultImageAddress)
                .build();
        member.addMemberFile(memberImage);

        return memberRepository.save(member);
    }

    /**
     * 단일 사용자 조회(마이페이지) 메서드
     * @param memberId
     * @return
     */
    public MemberResponseDto findMember(Long memberId) {
        Member findMember = memberDbService.findVerifiedMember(memberId);

        return MemberResponseDto.builder()
                .memberId(findMember.getMemberId())
                .email(findMember.getEmail())
                .nickname(findMember.getNickname())
                .profileImage(findMember.getMemberImage().getFilePath())
                .createdAt(findMember.getCreatedAt())
                .build();
    }

    /**
     * 전체 사용자 조회 메서드
     * @param page
     * @param size
     * @return
     */
    public Page<Member> findMembers(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return memberRepository.findAllByOrderByMemberIdDesc(pageRequest);
    }

    /**
     * 사용자 패스워드 변경 메서드
     * @param member
     * @return
     */
    public Member updatePassword(Member member) {
        Member findMember = memberDbService.findVerifiedMember(member.getMemberId());   // 사용자 검증
        member.passwordEncode(passwordEncoder); // 패스워드 암호화
        Member updateMember = customBeanUtils.copyNonNullProperties(member, findMember);  // copyNonNullProperties(원본 객체, 복사 객체)
        return memberRepository.save(updateMember);
    }

    /**
     * 사용자 닉네임 변경 메서드
     * @param member
     * @return
     */
    public Member updateNickname(Member member) {
        Member findMember = memberDbService.findVerifiedMember(member.getMemberId());   // 사용자 검증
        memberDbService.verifiedExistedName(member.getNickname());  // 닉네임 검증
        Member updateMember = customBeanUtils.copyNonNullProperties(member, findMember);    // copyNonNullProperties(원본 객체, 복사 객체)
        return memberRepository.save(updateMember);
    }

    /**
     * 사용자 삭제(회원탈퇴) 메서드
     * @param memberId
     */
    public void deleteMember(Long memberId) {
        Member findMember = memberDbService.findVerifiedMember(memberId);  // 사용자 검증
        memberRepository.delete(findMember);    // TODO 로직 수정
    }

    /**
     * 사용자 프로필 이미지 S3 업로드/수정 메서드
     * @param memberId
     * @param multipartFile
     * @return
     * @throws IOException
     */
    public void updateProfileS3(Long memberId, MultipartFile multipartFile) throws IOException {
        Member findMember = memberDbService.findVerifiedMember(memberId);   // 사용자 검증

        String dir = "memberImage"; // 사용자 프로필 이미지 디렉토리 지정
        S3Info s3Info = s3Service.s3ImageUpload(multipartFile, dir);    // 이미지 업로드

        if (!findMember.getMemberImage().getFilePath().equals(defaultImageAddress)) {
            s3Service.s3ImageDelete(findMember.getMemberImage().getFileName(), dir);
        }

        MemberImage memberImage = MemberImage.builder()
                .originFileName(s3Info.getOriginFileName())
                .fileName(s3Info.getFileName())
                .filePath(s3Info.getFilePath())
                .fileSize(s3Info.getFileSize())
                .build();

        findMember.addMemberFile(memberImage);  // FK 저장

        memberRepository.save(findMember);
    }
}
