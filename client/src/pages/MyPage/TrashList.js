import React, { useState } from "react";
import TrashItem from "./TrashItem";
import GNB from "./GNB";
import * as M from "./TrashStyled";
import { AiOutlineCheck } from "react-icons/ai";

function TrashList() {
  const [checked, setChecked] = useState(false);

  return (
    <M.TrashWrap>
      {/* <M.GNBWrap>
        <M.GNBMenu>내 정보</M.GNBMenu>
        <M.GNBMenu>비밀번호 수정</M.GNBMenu>
        <M.GNBMenuOn>휴지통</M.GNBMenuOn>
      </M.GNBWrap> */}
      <GNB />
      <M.TrashContainer>
        <M.TrashTable>
          <M.TrashTableMenu>
            <M.CheckBox
              className="select-all"
              onClick={() => setChecked(!checked)}>
              {checked ? <AiOutlineCheck /> : false}
            </M.CheckBox>
            <M.ButtonBox>
              <M.Button>복구</M.Button>
              <M.Button>영구 삭제</M.Button>
            </M.ButtonBox>
          </M.TrashTableMenu>
          <TrashItem />
        </M.TrashTable>
      </M.TrashContainer>
    </M.TrashWrap>
  );
}

export default TrashList;
