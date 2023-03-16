import React from "react";
import * as M from "./MyPageStyled";
import { BiEditAlt } from "react-icons/bi";
import GNB from "./GNB";

function MyPage() {
  return (
    <M.MyPageContainer>
      <M.FlexWrapper1>
        <GNB />
        <M.UserInfoCard>
          <M.FlexWrapper2>
            <M.UserImage></M.UserImage>
            <M.EditButton>
              edit
              <BiEditAlt></BiEditAlt>
            </M.EditButton>
          </M.FlexWrapper2>
          <M.UserInfoWrapper>
            <M.UserName>김햄찌</M.UserName>
            <M.UserAboutMe>저는 김햄찌입니다요</M.UserAboutMe>
          </M.UserInfoWrapper>
        </M.UserInfoCard>
      </M.FlexWrapper1>
    </M.MyPageContainer>
  );
}

export default MyPage;
