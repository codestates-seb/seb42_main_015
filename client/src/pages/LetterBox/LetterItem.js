import React, { useState } from "react";
import * as L from "./LetterBoxStyled";

// "outgoingId": 5,
//       "messageId": 5,
//       "toName": "제노",
//       "content": "람보르기니처럼 달려",
//       "messageCreatedAt": "2023-03-23T19:06:41.669232",
//       "bookMark": false,
//       "memberId": 1

function LetterItem({ outLetter, select, trash }) {
  const { bookMark, content, messageCreatedAt, toName } = outLetter;
  const [mark, setMark] = useState(bookMark);
  const [border, setBorder] = useState("1px solid black");
  const [shadow, setShadow] = useState("none");

  const date = new Date(messageCreatedAt).toLocaleDateString();

  const handleClick = () => {
    if (trash === true && select === true) {
      setBorder("3px solid red");
      setShadow("1px 0px 30px 0px rgba(255,0,0,0.5)");
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
          <img src={require("../../asset/bookmark-red.png")} alt="" />
        ) : (
          <img src={require("../../asset/bookmark-grey.png")} alt="" />
        )}
      </L.BookMark>
      <L.ItemDate>{date}</L.ItemDate>
      <L.ItemTitle>{toName ? `To. ${toName}` : ''}</L.ItemTitle>
      <L.ItemContents>{content}</L.ItemContents>
    </L.ItemBox>
  );
}

export default LetterItem;
