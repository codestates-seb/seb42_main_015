import React, { useState } from "react";
import * as L from "./LetterBoxStyled";
import axios from "axios";
import { getCookie } from "../Certified/Cookie";
import { Link } from "react-router-dom";
import Refresh from "../../util/Refresh";

function LetterInItem({ letter, trash, selectId, setSelectId }) {
  const {
    bookMark,
    content,
    messageCreatedAt,
    outgoingNickname,
    receivingId,
    themeName,
    urlName,
  } = letter;
  const [mark, setMark] = useState(bookMark);
  const [select, setSelect] = useState(false);
  const [border, setBorder] = useState("1px solid black");
  const [shadow, setShadow] = useState("none");

  const date = new Date(messageCreatedAt).toLocaleDateString();

  const handleSelect = () => {
    setSelect(!select);

    if (trash && select) {
      setBorder("3px solid red");
      setShadow("1px 0px 30px 0px rgba(255,0,0,0.5)");
      setSelectId([...selectId, receivingId]);
    }
    if (trash && !select) {
      setBorder("1px solid black");
      setShadow("none");
      setSelectId(selectId.filter((el) => el !== receivingId));
    }
  };

  const handleBookMark = () => {
    setMark(!mark);
    axios({
      method: "patch",
      url: `/api/sendy/mailbox/bookmark/receiving/${receivingId}`,
      headers: {
        "ngrok-skip-browser-warning": "230327",
        Authorization: getCookie("accesstoken"),
      },
      data: { bookMark: !mark },
    })
    .catch((err) => {
      if (err.response.status === 401) {
        Refresh().then(() => handleBookMark());
      }
    });
  };

  return (
    <>
      {trash ? (
        <L.ItemBox
          onClick={handleSelect}
          borderColor={border}
          shadowColor={shadow}
          currentLetterTheme={themeName}
        >
          <L.BookMark>
            {mark ? (
              <img src={require("../../asset/bookmark-on.png")} alt="" />
            ) : (
              <img src={require("../../asset/bookmark-off.png")} alt="" />
            )}
          </L.BookMark>
          <L.ItemCase>
            <L.ItemDate>{date}</L.ItemDate>
            <L.ItemTitle>from. {outgoingNickname}</L.ItemTitle>
            <L.ItemContents>{content}</L.ItemContents>
          </L.ItemCase>
        </L.ItemBox>
      ) : (
        <L.ItemBox
          onClick={handleSelect}
          borderColor={"1px solid black"}
          shadowColor={"none"}
          currentLetterTheme={themeName}
        >
          <L.BookMark onClick={handleBookMark}>
            {mark ? (
              <img src={require("../../asset/bookmark-on.png")} alt="" />
            ) : (
              <img src={require("../../asset/bookmark-off.png")} alt="" />
            )}
          </L.BookMark>
          <Link
            to={`/readletter/${urlName}`}
            state={{
              name: "receivingId",
              body: receivingId,
            }}
          >
            <L.ItemCase>
              <L.ItemDate>{date}</L.ItemDate>
              <L.ItemTitle>from. {outgoingNickname}</L.ItemTitle>
              <L.ItemContents>{content}</L.ItemContents>
            </L.ItemCase>
          </Link>
        </L.ItemBox>
      )}
    </>
  );
}

export default LetterInItem;
