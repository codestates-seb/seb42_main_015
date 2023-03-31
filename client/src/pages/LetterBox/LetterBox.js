import React, { useEffect, useState } from "react";
import * as L from "./LetterBoxStyled";
import LetterView from "./LetterView";
import { GrSearch } from "react-icons/gr";
import { AiOutlineCalendar, AiOutlineArrowUp } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import {
  RiArrowDropDownLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiUserReceivedLine,
  RiUserSharedLine,
} from "react-icons/ri";
import { RxThickArrowRight } from "react-icons/rx";
import { BiRefresh } from "react-icons/bi";
import useStore from "../../store/store";
import { getCookie } from "../Certified/Cookie";
import axios from "axios";
import Refresh from "../../util/Refresh";

function LetterBox() {
  const {
    outLetters,
    inLetters,
    isSend,
    setIsSend,
    setIsFilterOut,
    setIsFilterIn,
  } = useStore();
  const [leftTab, setLeftTab] = useState(false);
  const [rightTab, setRightTab] = useState(false);
  const [currentTab, setCurrentTab] = useState("최신순");
  const [trash, setTrash] = useState(false);
  const [yearL, setYearL] = useState(2023);
  const [monthL, setMonthL] = useState(1);
  const [yearR, setYearR] = useState(2023);
  const [monthR, setMonthR] = useState(1);
  const [isFocus, setIsFocus] = useState(false);
  const [isSearchOut, setIsSearchOut] = useState(outLetters);
  const [isSearchIn, setIsSearchIn] = useState(inLetters);
  const [selectId, setSelectId] = useState([]);
  const filterItem = ["최신순", "오래된 순", "북마크"];

  // 기간 필터
  const handleMonthLUp = () => {
    if (+monthL > 0 && +monthL < 12) {
      setMonthL(+monthL + 1);
    }
  };
  const handleMonthLDown = () => {
    if (+monthL > 1 && +monthL < 13) {
      setMonthL(+monthL - 1);
    }
  };
  const handleYearLUp = () => {
    if (yearL >= 2023) {
      setYearL(yearL + 1);
    }
  };
  const handleYearLDown = () => {
    if (yearL > 2023) {
      setYearL(yearL - 1);
    }
  };
  const handleMonthRUp = () => {
    if (+monthR > 0 && +monthR < 12) {
      setMonthR(+monthR + 1);
    }
  };
  const handleMonthRDown = () => {
    if (+monthR > 1 && +monthR < 13) {
      setMonthR(+monthR - 1);
    }
  };
  const handleYearRUp = () => {
    if (yearR >= 2023) {
      setYearR(yearR + 1);
    }
  };
  const handleYearRDown = () => {
    if (yearR > 2023) {
      setYearR(yearR - 1);
    }
  };

  // 기간
  const handleDate = () => {
    setLeftTab(!leftTab);
    let periodL;
    let periodR;
    if (monthL < 10) {
      periodL = `${yearL}-0${monthL}`;
    } else {
      periodL = `${yearL}-${monthL}`;
    }
    if (monthL < 10) {
      periodR = `${yearR}-0${monthR}`;
    } else {
      periodR = `${yearR}-${monthR}`;
    }
    if (isSend === true) {
      return setIsFilterOut(
        outLetters.filter(
          (letter) =>
            letter.messageCreatedAt.slice(0, 7) >= periodL &&
            letter.messageCreatedAt.slice(0, 7) <= periodR
        )
      );
    }
    if (isSend === false) {
      return setIsFilterIn(
        inLetters.filter(
          (letter) =>
            letter.messageCreatedAt.slice(0, 7) >= periodL &&
            letter.messageCreatedAt.slice(0, 7) <= periodR
        )
      );
    }
  };

  // 시간순 & 북마크
  const handleFilter = (e) => {
    setCurrentTab(e.target.textContent);
    setRightTab(false);
    // 최신순
    if (isSend === true && e.target.textContent === "최신순") {
      return setIsFilterOut(outLetters);
    } else if (isSend === false && e.target.textContent === "최신순") {
      return setIsFilterIn(inLetters);
    }
    // 오래된 순
    if (isSend === true && e.target.textContent === "오래된 순") {
      return setIsFilterOut(outLetters.reverse());
    } else if (isSend === false && e.target.textContent === "오래된 순") {
      return setIsFilterIn(inLetters.reverse());
    }
    // 북마크
    if (isSend === true && e.target.textContent === "북마크") {
      return setIsFilterOut(
        outLetters.filter((letter) => letter.bookMark === true)
      );
    } else if (isSend === false && e.target.textContent === "북마크") {
      return setIsFilterIn(
        inLetters.filter((letter) => letter.bookMark === true)
      );
    }
  };

  // 검색
  const handleSearch = (e) => {
    if (isSend === true) {
      return setIsSearchOut(
        outLetters.filter((letter) => letter.toName.includes(e.target.value))
      );
    }
    if (isSend === false) {
      return setIsSearchIn(
        inLetters.filter((letter) =>
          letter.outgoingNickname.includes(e.target.value)
        )
      );
    }
  };

  // 삭제
  const handleDelete = () => {
    if (isSend) {
      axios({
        method: "patch",
        url: `/api/sendy/mailbox/outgoing/delete`,
        headers: {
          "ngrok-skip-browser-warning": "230327",
          Authorization: getCookie("accesstoken"),
        },
        data: { ids: selectId },
      })
      .then(() => window.location.reload())
      .catch((err) => {
        if (err.response.status === 401) {
          Refresh().then(() => handleDelete());
        }
      });
    }
    if (!isSend) {
      axios({
        method: "patch",
        url: `/api/sendy/mailbox/receiving/delete`,
        headers: {
          "ngrok-skip-browser-warning": "230327",
          Authorization: getCookie("accesstoken"),
        },
        data: { ids: selectId },
      })
      .then(() => window.location.reload())
      .catch((err) => {
        if (err.response.status === 401) {
          Refresh().then(() => handleDelete());
        }
      });
    }
  };

  // console.log(selectId);

  return (
    <L.LetterBoxWrap>
      <L.FilterContainer>
        <L.SearchContainer>
          <GrSearch className="icon" />
          <L.Search
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
          <AiOutlineCalendar
            className="icon"
            onClick={() => setLeftTab(!leftTab)}
          />
          {leftTab ? (
            <L.PeriodBox>
              <L.Line>
                <L.LineBtn onClick={() => window.location.reload()}>
                  초기화 <BiRefresh className="period-btn" />
                </L.LineBtn>
                <L.LineBtn>
                  <RxThickArrowRight
                    className="period-btn"
                    onClick={handleDate}
                  />
                </L.LineBtn>
              </L.Line>
              <L.Date>
                <L.DateYear>
                  <RiArrowUpSLine onClick={handleYearLUp} />
                  {yearL}
                  <RiArrowDownSLine onClick={handleYearLDown} />
                </L.DateYear>
                <L.DateMonth>
                  <RiArrowUpSLine onClick={handleMonthLUp} />
                  {monthL}
                  <RiArrowDownSLine onClick={handleMonthLDown} />
                </L.DateMonth>
                ~
                <L.DateYear>
                  <RiArrowUpSLine onClick={handleYearRUp} />
                  {yearR}
                  <RiArrowDownSLine onClick={handleYearRDown} />
                </L.DateYear>
                <L.DateMonth>
                  <RiArrowUpSLine onClick={handleMonthRUp} />
                  {monthR}
                  <RiArrowDownSLine onClick={handleMonthRDown} />
                </L.DateMonth>
              </L.Date>
            </L.PeriodBox>
          ) : (
            false
          )}
        </L.SearchContainer>
        <L.DropdownContainer>
          <L.CurrentSelectBox onClick={() => setRightTab(!rightTab)}>
            <L.CurrentSelect>{currentTab}</L.CurrentSelect>
            <RiArrowDropDownLine className="icon" />
          </L.CurrentSelectBox>
          {rightTab ? (
            <L.Dropdown>
              {filterItem.map((el, idx) => (
                <L.DropdownItem key={idx} onClick={handleFilter}>
                  {el}
                </L.DropdownItem>
              ))}
            </L.Dropdown>
          ) : (
            false
          )}
        </L.DropdownContainer>
      </L.FilterContainer>
      <L.ViewWrap>
        <LetterView
          trash={trash}
          isFocus={isFocus}
          isSearchOut={isSearchOut}
          isSearchIn={isSearchIn}
          selectId={selectId}
          setSelectId={setSelectId}
        />
        <L.Gradient />
      </L.ViewWrap>
      <L.TopButton
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <AiOutlineArrowUp />
      </L.TopButton>
      {trash ? (
        <>
          <L.DeleteButton onClick={handleDelete}>
            휴지통
            <br />
            보내기
          </L.DeleteButton>
          <L.DeleteButtonON onClick={() => setTrash(!trash)}>
            <HiOutlineTrash />
          </L.DeleteButtonON>
        </>
      ) : (
        <L.DeleteButtonOff onClick={() => setTrash(!trash)}>
          <HiOutlineTrash />
        </L.DeleteButtonOff>
      )}
      {isSend ? (
        <L.SendButton onClick={() => setIsSend(!isSend)}>
          보낸 <br/> 편지
        </L.SendButton>
      ) : (
        <L.ReceiveButton onClick={() => setIsSend(!isSend)}>
          받은 <br/> 편지
        </L.ReceiveButton>
      )}
    </L.LetterBoxWrap>
  );
}

export default LetterBox;
