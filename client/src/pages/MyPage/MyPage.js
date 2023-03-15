import React from "react";
import * as M from "./MyPageStyled";
import { BiEditAlt } from "react-icons/bi";

function MyPage() {
  return (
    <M.MyPageContainer>
      <M.FlexWrapper1>
        <M.GNBWrapper>
          <M.GNBMenu>내정보</M.GNBMenu>
          <M.GNBMenu>비밀번호 수정</M.GNBMenu>
          <M.GNBMenu>휴지통</M.GNBMenu>
        </M.GNBWrapper>
        <M.UserInfoCard>
          <M.UserImage></M.UserImage>
          <M.UserInfoWrapper>
            <M.UserName>김햄찌</M.UserName>
            <M.UserAboutMe>
              저는 김햄찌입니다요
              <M.EditButton>
                edit
                <BiEditAlt></BiEditAlt>
              </M.EditButton>
            </M.UserAboutMe>
          </M.UserInfoWrapper>
        </M.UserInfoCard>
      </M.FlexWrapper1>
    </M.MyPageContainer>
  );
}

export default MyPage;
