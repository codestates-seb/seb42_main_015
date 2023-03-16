import React, { useEffect } from "react";
import * as M from "./MyPageStyled";
import { BiEditAlt } from "react-icons/bi";
import GNB from "./GNB";
import useStore from "../../store/store";

function MyPage() {
  const { isLogin, setIsLogin, currentPage, changeCurrentPage } = useStore(
    (state) => state
  );
  useEffect(() => {
    changeCurrentPage("MyPage");
  }, []);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

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
