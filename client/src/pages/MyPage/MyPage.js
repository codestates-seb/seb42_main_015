import React, { useEffect } from "react";
import * as M from "./MyPageStyled";
import { BiEditAlt } from "react-icons/bi";
import GNB from "./GNB";
import useStore from "../../store/store";

function MyPage() {
  const { currentPage, changeCurrentPage } = useStore((state) => state);

  useEffect(() => {
    changeCurrentPage("MyPage");
  }, []);

  return (
    <M.MyPageContainer>
      <M.FlexWrapper1>
        <GNB />
        <M.FlexWrapper3>
          <M.StickerWrapper>
            <M.Sticker></M.Sticker>
            <M.UserInfoCard>
              <M.FlexWrapper2>
                <M.UserImage></M.UserImage>
                <M.EditButton>
                  edit
                  <BiEditAlt></BiEditAlt>
                </M.EditButton>
              </M.FlexWrapper2>
              <M.UserInfoWrapper>
                <M.NameDateWrapper>
                  <M.UserName>김햄찌</M.UserName>
                  <M.SignUpDate>가입일: 2022.06.19</M.SignUpDate>
                </M.NameDateWrapper>
                <M.EmailWrapper>
                  <M.UserEmail>kimhamjji@gmail.com</M.UserEmail>
                  <M.ReadletterLink>내 편지 보러가기👉</M.ReadletterLink>
                </M.EmailWrapper>
              </M.UserInfoWrapper>
            </M.UserInfoCard>
          </M.StickerWrapper>
        </M.FlexWrapper3>
      </M.FlexWrapper1>{" "}
      <M.ResignationWrapper>
        <M.ResignLink>회원탈퇴하기</M.ResignLink>
      </M.ResignationWrapper>
    </M.MyPageContainer>
  );
}

export default MyPage;
