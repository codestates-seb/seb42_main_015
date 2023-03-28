import React from "react";
import * as L from "./LetterBoxStyled";
import LetterList from "./LetterList";

function LetterView({
  select,
  trash,
  isSearchOut,
  isSearchIn,
  isFocus,
  isFilterOut,
  isFilterIn,
  leftTab,
  rightTab
}) {
  return (
    <L.ListWrap>
      <LetterList
        select={select}
        trash={trash}
        isSearchOut={isSearchOut}
        isSearchIn={isSearchIn}
        isFocus={isFocus}
        isFilterOut={isFilterOut}
        isFilterIn={isFilterIn}
        leftTab={leftTab}
        rightTab={rightTab}
      />
    </L.ListWrap>
  );
}

export default LetterView;
