import React from "react";
import * as L from "./LetterBoxStyled";

function LetterItem() {
  return (
    <L.ItemBox>
      <L.ItemTitle>김햄찌의 귀빠진 날</L.ItemTitle>
      <L.ItemContents>
        내가 만든 쿠키 너를 위해 구웠지, but you know that it ain't for free,
        yeah 내가 만든 쿠키 너무 부드러우니 (what?) 자꾸만 떠오르니 (ayy) 널
        choco'-chip 으로 sprinkle로 입맛 버리게 만들고 싶어 숨기고 있지만 널 더
        보고 싶어 If you want it, you can get it, if you want it 네 목소리를 또
        들려줘, boy
      </L.ItemContents>
      <L.ItemDate>2023.03.20</L.ItemDate>
    </L.ItemBox>
  );
}

export default LetterItem;
