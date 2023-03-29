import React, { useCallback, useEffect, useState } from "react";
import * as L from "./LetterBoxStyled";
import LetterItem from "./LetterItem";
import useStore from "../../store/store";
import { useInView } from "react-intersection-observer";
import { getCookie } from "../Certified/Cookie";

function LetterList({
  select,
  trash,
  isSearchOut,
  isSearchIn,
  isFocus,
  isFilterOut,
  isFilterIn,
  leftTab,
  rightTab,
}) {
  const { isSend } = useStore((state) => state);
  const { outLetters, setOutLetters } = useStore((state) => state);
  const { inLetters, setInLetters } = useStore((state) => state);
  const [getOut, setGetOut] = useState([]);
  const [getIn, setGetIn] = useState([]);
  const [pageOut, setPageOut] = useState(1);
  const [pageIn, setPageIn] = useState(1);
  const [isLoadingOut, setIsLoadingOut] = useState(false);
  const [isLoadingIn, setIsLoadingIn] = useState(false);
  const [ref, inView] = useInView();

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
    setOutLetters(outLetters.concat(data.data));
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
    setInLetters(inLetters.concat(data.data));
    setGetIn((prev) => [...prev, ...data.data]);
    setIsLoadingIn(false);
  }, [pageIn]);

  useEffect(() => {
    getLettersOut();
  }, [getLettersOut]);

  useEffect(() => {
    getLettersIn();
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
  // console.log(isFocus);

  return (
    <L.ListContainer>
      <L.ListDateContainer>
        <L.ListDate>2023.03</L.ListDate>
        <L.ListBar></L.ListBar>
      </L.ListDateContainer>
      <L.ItemWrap>
        <L.ItemContainer>
          {isFocus ? (
            isSend ? (
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
            )
          ) : isSend ? (
            leftTab || rightTab ? (
              isFilterOut.map((outLetter) => {
                return (
                  <LetterItem
                    key={outLetter.messageId}
                    outLetter={outLetter}
                    select={select}
                    trash={trash}
                  />
                );
              })
            ) : (
              getOut.map((outLetter) => {
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
          ) : leftTab || rightTab ? (
            isFilterIn.map((inLetter) => {
              return (
                <LetterItem
                  key={inLetter.messageId}
                  inLetter={inLetter}
                  select={select}
                  trash={trash}
                />
              );
            })
          ) : (
            getIn.map((inLetter) => {
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
          <L.TargetBox ref={ref}>
            {(isLoadingOut || isLoadingIn) && "Loading..."}
          </L.TargetBox>
        </L.ItemContainer>
      </L.ItemWrap>
    </L.ListContainer>
  );
}

export default LetterList;
