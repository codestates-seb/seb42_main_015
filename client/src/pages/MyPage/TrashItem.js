import React, { useState } from "react";
import * as M from "./TrashStyled";
import {AiOutlineCheck} from 'react-icons/ai';

function TrashItem() {
  const [checked, setChecked] = useState(false);

  return (
    <M.ItemBox>
      <M.CheckBox onClick={() => setChecked(!checked)}>
        {checked ? <AiOutlineCheck /> : false}
      </M.CheckBox>
      <M.ItemName>김햄찌</M.ItemName>
      <M.ItemContent>생일 축하해! 해바라기 맛있게 먹어!</M.ItemContent>
      <M.ItemDate>2023.03.08 수</M.ItemDate>
    </M.ItemBox>
  );
}

export default TrashItem;
