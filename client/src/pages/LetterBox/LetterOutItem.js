import React, { useState } from "react";
import * as L from "./LetterBoxStyled";
import axios from "axios";
import { getCookie } from "../Certified/Cookie";
import { Link } from "react-router-dom";

function LetterOutItem({ letter, trash, selectId, setSelectId }) {
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
  const [select, setSelect] = useState(false);
  const [border, setBorder] = useState("1px solid black");
  const [shadow, setShadow] = useState("none");

  const date = new Date(messageCreatedAt).toLocaleDateString();

  console.log(selectId);

  const handleSelect = () => {
    setSelect(!select);
    if (trash && select) {
      setBorder("3px solid red");
      setShadow("1px 0px 30px 0px rgba(255,0,0,0.5)");
      setSelectId([...selectId, outgoingId]);
    }
    if (trash && !select) {
      setBorder("1px solid black");
      setShadow("none");
      setSelectId(selectId.filter((el) => el !== outgoingId));
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
              <img src={require("../../asset/bookmark-red.png")} alt="" />
            ) : (
              <img src={require("../../asset/bookmark-grey.png")} alt="" />
            )}
          </L.BookMark>
          <L.ItemCase>
            <L.ItemDate>{date}</L.ItemDate>
            <L.ItemTitle>
              To. <br /> {toName}
            </L.ItemTitle>
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
      )}
    </>
  );
}

export default LetterOutItem;
