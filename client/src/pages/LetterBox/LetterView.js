import React from "react";
import * as L from "./LetterBoxStyled";
import LetterList from "./LetterList";

function LetterView({isSearchOut, isSearchIn, select, trash }) {
  return (
    <L.ListWrap>
      <LetterList isSearchOut={isSearchOut} isSearchIn={isSearchIn} select={select} trash={trash} />
    </L.ListWrap>
  );
}

export default LetterView;
