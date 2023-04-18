import React, { useCallback, useEffect, useState } from "react";
import * as L from "./LetterBoxStyled";
import LetterInItem from "./LetterInItem";
import useStore from "../../store/store";
import { useInView } from "react-intersection-observer";
import { getCookie } from "../Certified/Cookie";
import axios from "axios";
import Refresh from "../../util/Refresh";

function LetterReceiving({
  trash,
  isFocus,
  searchIn,
  filteredIn,
  selectId,
  setSelectId,
  setCurrentFilter,
  isPeriod,
  periodIn,
}) {
  const { inLetters, setInLetters } = useStore();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView();

  const getLetters = useCallback(
    async (page) => {
      return await axios({
        method: "get",
        url: `/api/sendy/mailbox/messages/in?page=${page}`,
        headers: {
          "ngrok-skip-browser-warning": "230328",
          Authorization: getCookie("accessToken"),
        },
      });
    },
    [inLetters]
  );

  // console.log("원본 데이터", inLetters);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentFilter("최신순");
    getLetters(1);
  }, []);

  useEffect(() => {
    getLetters(page)
      .then((res) => {
        setInLetters(
          page === 1 ? res.data.data : [...inLetters, ...res.data.data]
        );
      })
      .catch((err) => {
        if (err.response.status === 401) {
          Refresh().then(() =>
            getLetters(page).then((res) => {
              setInLetters(
                page === 1 ? res.data.data : [...inLetters, ...res.data.data]
              );
            })
          );
        }
      });
  }, [page]);

  // useEffect(() => {
  //   getLetters(page);
  // }, [page]);

  useEffect(() => {
    if (inView && !isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setIsLoading(false);
        // console.log("무한 스크롤 요청🥲");
      }, 1500);
    }
  }, [inView]);

  return (
    <L.ListContainer>
      {/* <L.ListDateContainer>
        <L.ListDate>2023.03</L.ListDate>
        <L.ListBar></L.ListBar>
      </L.ListDateContainer> */}
      <L.ItemWrap>
        <L.ItemContainer>
          {isFocus ? (
            searchIn.length === 0 ? (
              <L.NotSearch>해당하는 편지를 찾을 수 없어요.</L.NotSearch>
            ) : (
              searchIn.map((letter) => {
                return (
                  <LetterInItem
                    key={letter.receivingId}
                    letter={letter}
                    trash={trash}
                  />
                );
              })
            )
          ) : isPeriod ? (
            periodIn.map((letter) => {
              return (
                <LetterInItem
                  key={letter.receivingId}
                  letter={letter}
                  trash={trash}
                  selectId={selectId}
                  setSelectId={setSelectId}
                />
              );
            })
          ) : (
            filteredIn.map((letter) => {
              return (
                <LetterInItem
                  key={letter.receivingId}
                  letter={letter}
                  trash={trash}
                  selectId={selectId}
                  setSelectId={setSelectId}
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
