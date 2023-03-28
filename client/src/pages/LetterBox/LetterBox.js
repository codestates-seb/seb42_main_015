import React, { useState, useEffect } from "react";
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
import { BsArrowRightCircle } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import useStore from "../../store/store";

function LetterBox() {
  const { outLetters } = useStore((state) => state);
  const { inLetters } = useStore((state) => state);
  const { isSend, setIsSend } = useStore((state) => state);
  const [leftTab, setleftTab] = useState(false);
  const [rightTab, setRightTab] = useState(false);
  const [currentTab, setCurrentTab] = useState("최신순");
  const [select, setSelect] = useState(false);
  const [trash, setTrash] = useState(false);
  const [yearL, setYearL] = useState(2023);
  const [monthL, setMonthL] = useState(1);
  const [yearR, setYearR] = useState(2023);
  const [monthR, setMonthR] = useState(1);
  const [isFocus, setIsFocus] = useState(false);
  const [isSearchOut, setIsSearchOut] = useState(outLetters);
  const [isSearchIn, setIsSearchIn] = useState(inLetters);
  const { isFilterOut, setIsFilterOut } = useStore((state) => state);
  const [isFilterIn, setIsFilterIn] = useState(inLetters);
  const tabItem = ["최신순", "오래된 순", "북마크"];

  // console.log(outLetters);

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
    setleftTab(!leftTab);
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
      periodR = `${yearR}-0${monthR}`;
    }
    if (isSend === true) {
      outLetters.filter((letter) =>
        letter.messageCreatedAt >= periodL && letter.messageCreatedAt <= periodR
          ? setIsFilterOut(letter)
          : []
      );
    }
    if (isSend === false) {
      inLetters.filter((letter) =>
        letter.messageCreatedAt >= periodL && letter.messageCreatedAt <= periodR
          ? setIsFilterIn(letter)
          : []
      );
    }
  };

  // 시간순 & 북마크
  const handleFilter = (e) => {
    setCurrentTab(e.target.textContent);
    setRightTab(false);

    if (isSend === true && e.target.textContent === "최신순") {
      setIsFilterOut(outLetters);
    }
    if (isSend === false && e.target.textContent === "최신순") {
      setIsFilterIn(inLetters);
    }
    if (isSend === true && e.target.textContent === "북마크") {
      outLetters.filter((letter) =>
        letter.bookmark === true ? setIsFilterOut(letter) : []
      );
    }
    if (isSend === false && e.target.textContent === "북마크") {
      inLetters.filter((letter) =>
        letter.bookmark === true ? setIsFilterIn(letter) : []
      );
    }
  };

  // console.log(isFilterOut);

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
    setTrash(!trash);
    setSelect(!select);
  };

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
          <AiOutlineCalendar className="icon" onClick={handleDate} />
          {leftTab ? (
            <L.PeriodBox>
              <L.Line>
                <L.Reset onClick={() => window.location.reload()}>
                  초기화 <BiRefresh className="reset" />
                </L.Reset>
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
                <BsArrowRightCircle className="submit" onClick={handleDate} />
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
              {tabItem.map((el, idx) => (
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
          select={select}
          trash={trash}
          searchData={handleSearch}
          isSearchOut={isSearchOut}
          isSearchIn={isSearchIn}
          isFocus={isFocus}
          isFilterOut={isFilterOut}
          isFilterIn={isFilterIn}
          leftTab={leftTab}
          rightTab={rightTab}
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
        <L.DeleteButtonON onClick={handleDelete}>
          <HiOutlineTrash />
        </L.DeleteButtonON>
      ) : (
        <L.DeleteButtonOff onClick={handleDelete}>
          <HiOutlineTrash />
        </L.DeleteButtonOff>
      )}
      {isSend ? (
        <L.SendButton onClick={() => setIsSend(!isSend)}>
          <RiUserSharedLine />
        </L.SendButton>
      ) : (
        <L.ReceiveButton onClick={() => setIsSend(!isSend)}>
          <RiUserReceivedLine />
        </L.ReceiveButton>
      )}
    </L.LetterBoxWrap>
  );
}

export default LetterBox;
