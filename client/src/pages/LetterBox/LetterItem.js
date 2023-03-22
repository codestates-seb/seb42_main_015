import React, { useState } from "react";
import * as L from "./LetterBoxStyled";

function LetterItem({ select, trash }) {
  const [mark, setMark] = useState(false);
  const [border, setBorder] = useState("1px solid black");
  const [shadow, setShadow] = useState("none");
  const handleClick = () => {
    if (trash === true && select === true) {
      setBorder("3px solid red");
      setShadow("1px 0px 30px 0px rgba(255,0,0,0.5)")
      setMark(false);
      if (border === "3px solid red") {
        setBorder("1px solid black");
        setShadow("none");
        setMark(false);
      }
    } else {
      setBorder("1px solid black");
      setShadow("none");
    }
  };

  return (
    <L.ItemBox onClick={handleClick} borderColor={border} shadowColor={shadow}>
      <L.BookMark
        onClick={() => {
          setMark(!mark);
        }}
      >
        {mark ? (
          <img src={require("../../asset/bookmark-red.png")} alt='' />
        ) : (
          <img src={require("../../asset/bookmark-grey.png")} alt=''  />
        )}
      </L.BookMark>
      <L.ItemDate>2023.03.20</L.ItemDate>
      <L.ItemTitle>From. 김햄찌</L.ItemTitle>
      <L.ItemContents>
        내가 만든 쿠키 너를 위해 구웠지, but you know that it ain't for free,
        yeah 내가 만든 쿠키 너무 부드러우니 (what?) 자꾸만 떠오르니 (ayy) 널
        choco'-chip 으로 sprinkle로 입맛 버리게 만들고 싶어 숨기고 있지만 널 더
        보고 싶어 If you want it, you can get it, if you want it 네 목소리를 또
        들려줘, boy
      </L.ItemContents>
    </L.ItemBox>
  );
}

export default LetterItem;
