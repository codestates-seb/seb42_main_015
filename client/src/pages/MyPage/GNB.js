import React from "react";
import * as M from "./MyPageStyled";

function GNB() {
  return (
    <M.GNBWrapper>
      <M.GNBMenu>내정보</M.GNBMenu>
      <M.GNBMenu>비밀번호 수정</M.GNBMenu>
      <M.GNBMenu>휴지통</M.GNBMenu>
    </M.GNBWrapper>
  );
}

export default GNB;
