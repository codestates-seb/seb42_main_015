import React from "react";
import * as L from "./LetterBoxStyled";
import LetterList from "./LetterList";

function LetterView({select, trash }) {
  return (
    <L.ListWrap>
      <LetterList select={select} trash={trash} />
    </L.ListWrap>
  );
}

export default LetterView;
