import React from "react";
import * as L from "./LetterBoxStyled";
import LetterItem from "./LetterItem";
import useStore from "../../store/store";

function LetterList({ isSearchOut, isSearchIn, select, trash }) {
  // const { outLetters } = useStore((state) => state);
  // const { inLetters } = useStore((state) => state);
  const { isSend } = useStore((state) => state);

  // const DateBox = outLetters.map((date) => {
  //   console.log(date.messageCreatedAt.slice(0, 7));
  //   return date.messageCreatedAt.slice(0, 7);
  // });
  // console.log(isSearchOut);

  return (
    <L.ListContainer>
      <L.ListDateContainer>
        <L.ListDate>2023.03</L.ListDate>
        <L.ListBar></L.ListBar>
      </L.ListDateContainer>
      <L.ItemWrap>
        <L.ItemContainer>
          {isSend ? (
            isSearchOut.length === 0 ? (
              <L.NotSearch>해당하는 편지를 찾을 수 없어요.</L.NotSearch>
            ) : (
              isSearchOut.map((outLetter) => {
                return (
                  <LetterItem
                    key={outLetter.messageId}
                    outLetter={outLetter}
                    select={select}
                    trash={trash}
                  />
                );
              })
            )
          ) : isSearchIn.length === 0 ? (
            <L.NotSearch>해당하는 편지를 찾을 수 없어요.</L.NotSearch>
          ) : (
            isSearchIn.map((inLetter) => {
              return (
                <LetterItem
                  key={inLetter.messageId}
                  inLetter={inLetter}
                  select={select}
                  trash={trash}
                />
              );
            })
          )}
        </L.ItemContainer>
      </L.ItemWrap>
    </L.ListContainer>
  );
}

export default LetterList;
