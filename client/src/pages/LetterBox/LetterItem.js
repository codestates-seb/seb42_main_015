import React, { useState } from "react";
import * as L from "./LetterBoxStyled";
import axios from "axios";
import { getCookie } from "../Certified/Cookie";
import useStore from "../../store/store";

function LetterItem({ outLetter, inLetter, select, trash }) {
  const { bookMark, content, messageCreatedAt, toName, outgoingId, themeName } = outLetter;
  const { isSend } = useStore((state) => state);
  const [mark, setMark] = useState(bookMark);
  const [border, setBorder] = useState("1px solid black");
  const [shadow, setShadow] = useState("none");

  const date = new Date(messageCreatedAt).toLocaleDateString();

  const handleClick = () => {
    if (trash === true && select === true) {
      setBorder("3px solid red");
      setShadow("1px 0px 30px 0px rgba(255,0,0,0.5)");
      setMark(false);
    }
  };

  const handleBookMarkOut = () => {
      // setMark(!mark);
      // console.log(!mark)
      // axios({
      //   method: "patch",
      //   url: `/api/sendy/mailbox/messages/bookmark/outgoing/${outgoingId}`,
      //   headers: {
      //     "ngrok-skip-browser-warning": "230327",
      //     Authorization: getCookie("accesstoken"),
      //   },
      //   data: { bookMark: true },
      // });
  };

  const handleBookMarkIn = () => {
    //   setMark(!mark);
    //   console.log(!mark);
    //   axios({
    //     method: "patch",
    //     url: `/api/sendy/mailbox/messages/bookmark/receiving/${inLetter.receivingId}`,
    //     headers: {
    //       "ngrok-skip-browser-warning": "230327",
    //       Authorization: getCookie("accesstoken"),
    //     },
    //     data: { bookMark: mark },
    //   });
  };

  return (
    <>
      {isSend ? (
        <L.ItemBox
          onClick={handleClick}
          borderColor={border}
          shadowColor={shadow}
          currentLetterTheme={themeName}
        >
          <L.BookMark onClick={handleBookMarkOut}>
            {bookMark ? (
              <img src={require("../../asset/bookmark-red.png")} alt="" />
            ) : (
              <img src={require("../../asset/bookmark-grey.png")} alt="" />
            )}
          </L.BookMark>
          <L.ItemDate>{date}</L.ItemDate>
          <L.ItemTitle>To. {toName}</L.ItemTitle>
          <L.ItemContents>{content}</L.ItemContents>
        </L.ItemBox>
      ) : (
        <L.ItemBox
          onClick={handleClick}
          borderColor={border}
          shadowColor={shadow}
          currentLetterTheme={inLetter.themeName}
        >
          <L.BookMark onClick={handleBookMarkIn}>
            {mark ? (
              <img src={require("../../asset/bookmark-red.png")} alt="" />
            ) : (
              <img src={require("../../asset/bookmark-grey.png")} alt="" />
            )}
          </L.BookMark>
          <L.ItemDate>{inLetter.date}</L.ItemDate>
          <L.ItemTitle>from. {inLetter.outgoingNickname}</L.ItemTitle>
          <L.ItemContents>{inLetter.content}</L.ItemContents>
        </L.ItemBox>
      )}
    </>
  );
}

export default LetterItem;
