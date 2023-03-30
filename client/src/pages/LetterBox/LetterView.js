import React from "react";
import * as L from "./LetterBoxStyled";
import LetterOutgoing from "./LetterOutgoing";
import LetterReceiving from "./LetterReceiving";
import useStore from "../../store/store";

function LetterView({
  trash,
  isFocus,
  isSearchOut,
  isSearchIn,
  selectId,
  setSelectId,

}) {
  const { isSend } = useStore();
  return (
    <L.ListWrap>
      {isSend ? (
        <LetterOutgoing
          trash={trash}
          isFocus={isFocus}
          isSearchOut={isSearchOut}
          selectId={selectId}
          setSelectId={setSelectId}
       
        />
      ) : (
        <LetterReceiving
          trash={trash}
          isFocus={isFocus}
          isSearchIn={isSearchIn}
          selectId={selectId}
          setSelectId={setSelectId}
 
        />
      )}
    </L.ListWrap>
  );
}

export default LetterView;
