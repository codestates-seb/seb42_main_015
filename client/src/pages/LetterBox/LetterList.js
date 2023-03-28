import React, { useCallback, useEffect, useState } from "react";
import * as L from "./LetterBoxStyled";
import LetterItem from "./LetterItem";
import useStore from "../../store/store";
import { useInView } from "react-intersection-observer";
import { getCookie } from "../Certified/Cookie";

function LetterList({ select, trash }) {
  const { isSend } = useStore((state) => state);
  const [getOut, setGetOut] = useState([]);
  const [getIn, setGetIn] = useState([]);
  const [pageOut, setPageOut] = useState(1);
  const [pageIn, setPageIn] = useState(1);
  const [isLoadingOut, setIsLoadingOut] = useState(false);
  const [isLoadingIn, setIsLoadingIn] = useState(false);
  const [ref, inView] = useInView();
  const { outLetters, setOutLetters } = useStore((state) => state);
  const { inLetters, setInLetters } = useStore((state) => state);

  const getLettersOut = useCallback(async () => {
    setIsLoadingOut(true);
    const res = await fetch(`/api/sendy/mailbox/messages/out?page=${pageOut}`, {
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": "230328",
        Authorization: getCookie("accesstoken"),
      },
    });
    const data = await res.json();
    setGetOut((prev) => [...prev, ...data.data]);
    setIsLoadingOut(false);
  }, [pageOut]);

  const getLettersIn = useCallback(async () => {
    setIsLoadingIn(true);
    const res = await fetch(`/api/sendy/mailbox/messages/in?page=${pageIn}`, {
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": "230328",
        Authorization: getCookie("accesstoken"),
      },
    });
    const data = await res.json();
    setGetIn((prev) => [...prev, ...data.data]);
    setIsLoadingIn(false);
  }, [pageIn]);

  useEffect(() => {
    getLettersOut();
    setOutLetters(getOut);
  }, [getLettersOut]);

  useEffect(() => {
    getLettersIn();
    setInLetters(getIn);
  }, [getLettersIn]);

  useEffect(() => {
    if (inView && !isLoadingOut && isSend === true) {
      setIsLoadingOut(true);
      setTimeout(() => {
        setPageOut((prev) => prev + 1);
        setIsLoadingOut(false);
        console.log("무한 스크롤 요청🥲");
      }, 1500);
    } else if (inView && !isLoadingIn && isSend === false) {
      setIsLoadingIn(true);
      setTimeout(() => {
        setPageIn((prev) => prev + 1);
        setIsLoadingIn(false);
        console.log("무한 스크롤 요청😇");
      }, 1500);
    }
  }, [inView]);

  // console.log(getOut);
  // console.log(getIn);

  return (
    <L.ListContainer>
      <L.ListDateContainer>
        <L.ListDate>2023.03</L.ListDate>
        <L.ListBar></L.ListBar>
      </L.ListDateContainer>
      <L.ItemWrap>
        <L.ItemContainer>
          {isSend
            ? getOut.map((outLetter) => {
                return (
                  <LetterItem
                    key={outLetter.messageId}
                    outLetter={outLetter}
                    select={select}
                    trash={trash}
                  />
                );
              })
            : getIn.map((inLetter) => {
                return (
                  <LetterItem
                    key={inLetter.messageId}
                    inLetter={inLetter}
                    select={select}
                    trash={trash}
                  />
                );
              })}
          <L.TargetBox ref={ref}>
            {(isLoadingOut || isLoadingIn) && "Loading..."}
          </L.TargetBox>
        </L.ItemContainer>
      </L.ItemWrap>
    </L.ListContainer>
  );
}

export default LetterList;
