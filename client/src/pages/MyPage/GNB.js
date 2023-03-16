import React from "react";
import * as M from "./MyPageStyled";
import useStore from "../../store/store";

function GNB() {
  const { currentPage } = useStore((state) => state);

  return (
    <M.GNBWrapper>
      <M.GNBMenu className={currentPage === "MyPage" ? "active" : ""}>
        내정보
      </M.GNBMenu>
      <M.GNBMenu>비밀번호 수정</M.GNBMenu>
      <M.GNBMenu>휴지통</M.GNBMenu>
    </M.GNBWrapper>
  );
}

export default GNB;
