import React, { useState } from "react";
import TrashItem from "./TrashItem";
import GNB from "./GNB";
import * as M from "./TrashStyled";
import { AiOutlineCheck } from "react-icons/ai";

function TrashList() {
  const [checked, setChecked] = useState(false);

  return (
    <M.TrashWrap>
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
