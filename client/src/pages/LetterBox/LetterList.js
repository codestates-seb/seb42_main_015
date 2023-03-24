import React from "react";
import * as L from "./LetterBoxStyled";
import LetterItem from "./LetterItem";

function LetterList({select, trash}) {
  return (
    <L.ListContainer>
      <L.ListDateContainer>
        <L.ListDate>2023.03</L.ListDate>
        <L.ListBar></L.ListBar>
      </L.ListDateContainer>
      <L.ItemWrap>
        <L.ItemContainer>
          <LetterItem select={select} trash={trash} />
          <LetterItem select={select} trash={trash} />
          <LetterItem select={select} trash={trash} />
          <LetterItem select={select} trash={trash} />
          <LetterItem select={select} trash={trash} />
          <LetterItem select={select} trash={trash} />
          <LetterItem select={select} trash={trash} />
          <LetterItem select={select} trash={trash} />
          <LetterItem select={select} trash={trash} />
          <LetterItem select={select} trash={trash} />
          <LetterItem select={select} trash={trash} />
          <LetterItem select={select} trash={trash} />
          <LetterItem select={select} trash={trash} />
          <LetterItem select={select} trash={trash} />
          <LetterItem select={select} trash={trash} />
        </L.ItemContainer>
      </L.ItemWrap>
    </L.ListContainer>
  );
}

export default LetterList;
