import React from "react";
import * as L from "./LetterBoxStyled";
import LetterOutgoing from "./LetterOutgoing";
import LetterReceiving from "./LetterReceiving";
import useStore from "../../store/store";

function LetterView({
  select,
  trash,
  isFocus,
  isSearchOut,
  isSearchIn
}) {
  const { isSend } = useStore();
  return (
    <L.ListWrap>
      {isSend ? (
        <LetterOutgoing
          select={select}
          trash={trash}
          isFocus={isFocus}
          isSearchOut={isSearchOut}
        />
      ) : (
        <LetterReceiving
          select={select}
          trash={trash}
          isFocus={isFocus}
          isSearchIn={isSearchIn}
        />
      )}
    </L.ListWrap>
  );
}

export default LetterView;
