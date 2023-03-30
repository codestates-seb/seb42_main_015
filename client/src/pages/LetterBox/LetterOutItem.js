import React, { useState } from "react";
import * as L from "./LetterBoxStyled";
import axios from "axios";
import { getCookie } from "../Certified/Cookie";
import { Link } from "react-router-dom";

function LetterOutItem({ letter, select, trash }) {
  const {
    bookMark,
    content,
    messageCreatedAt,
    toName,
    outgoingId,
    themeName,
    urlName,
  } = letter;
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

  const handleBookMark = () => {
    setMark(!mark);
    axios({
      method: "patch",
      url: `/api/sendy/mailbox/bookmark/outgoing/${outgoingId}`,
      headers: {
        "ngrok-skip-browser-warning": "230327",
        Authorization: getCookie("accesstoken"),
      },
      data: { bookMark: !mark },
    });
  };

  return (
    <L.ItemBox
      onClick={handleClick}
      borderColor={border}
      shadowColor={shadow}
      currentLetterTheme={themeName}
    >
      <L.BookMark onClick={handleBookMark}>
        {mark ? (
          <img src={require("../../asset/bookmark-red.png")} alt="" />
        ) : (
          <img src={require("../../asset/bookmark-grey.png")} alt="" />
        )}
      </L.BookMark>
      <Link
        to={`/readletter/${urlName}`}
        state={{
          name: "outgoingId",
          body: outgoingId,
        }}
      >
        <L.ItemCase>
          <L.ItemDate>{date}</L.ItemDate>
          <L.ItemTitle>
            To. <br /> {toName}
          </L.ItemTitle>
          <L.ItemContents>{content}</L.ItemContents>
        </L.ItemCase>
      </Link>
    </L.ItemBox>
  );
}

export default LetterOutItem;
