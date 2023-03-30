import React, { useCallback, useEffect, useState } from "react";
import * as L from "./LetterBoxStyled";
import LetterInItem from "./LetterInItem";
import useStore from "../../store/store";
import { useInView } from "react-intersection-observer";
import { getCookie } from "../Certified/Cookie";
import axios from "axios";

function LetterReceiving({ select, trash, isFocus, isSearchIn }) {
  const { inLetters, setInLetters, isFilterIn, setIsFilterIn } = useStore();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView();

  const getLetters = useCallback(async () => {
    return await axios({
      method: "get",
      url: `/api/sendy/mailbox/messages/in?page=${page}`,
      headers: {
        "ngrok-skip-browser-warning": "230328",
        Authorization: getCookie("accesstoken"),
      },
    })
      .then((res) => setInLetters(inLetters.concat(res.data.data)))
      .then((res) => setIsFilterIn(inLetters));
  }, [page]);

  useEffect(() => {
    setIsLoading(true);
    getLetters();
    setIsLoading(false);
  }, [page]);

  // console.log(inLetters);

  useEffect(() => {
    if (inView && !isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setIsLoading(false);
        console.log("무한 스크롤 요청🥲");
      }, 1500);
    }
  }, [inView]);

  return (
    <L.ListContainer>
      <L.ListDateContainer>
        <L.ListDate>2023.03</L.ListDate>
        <L.ListBar></L.ListBar>
      </L.ListDateContainer>
      <L.ItemWrap>
        <L.ItemContainer>
          {isFocus ? (
            isSearchIn.length === 0 ? (
              <L.NotSearch>해당하는 편지를 찾을 수 없어요.</L.NotSearch>
            ) : (
              isSearchIn.map((letter) => {
                return (
                  <LetterInItem
                    key={letter.messageId}
                    letter={letter}
                    select={select}
                    trash={trash}
                  />
                );
              })
            )
          ) : (
            isFilterIn.map((letter) => {
              return (
                <LetterInItem
                  key={letter.messageId}
                  letter={letter}
                  select={select}
                  trash={trash}
                />
              );
            })
          )}
          <L.TargetBox ref={ref}>{isLoading && "Loading..."}</L.TargetBox>
        </L.ItemContainer>
      </L.ItemWrap>
    </L.ListContainer>
  );
}

export default LetterReceiving;