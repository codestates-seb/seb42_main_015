import React from "react";
import * as L from "./LetterBoxStyled";
import LetterItem from "./LetterItem";

function LetterList() {
  return (
    <L.ListContainer>
      <L.ListDateContainer>
        <L.ListDate>2023.03</L.ListDate>
        <L.ListBar></L.ListBar>
      </L.ListDateContainer>
      <L.ItemWrap>
        <L.ItemContainer>
          <LetterItem />
          <LetterItem />
          <LetterItem />
          <LetterItem />
          <LetterItem />
          <LetterItem />
          <LetterItem />
          <LetterItem />
          <LetterItem />
          <LetterItem />
          <LetterItem />
          <LetterItem />
          <LetterItem />
        </L.ItemContainer>
      </L.ItemWrap>
    </L.ListContainer>
  );
}

export default LetterList;
