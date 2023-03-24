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
import axios from "axios";

function LetterBox() {
  const [lefttTab, setleftTab] = useState(false);
  const [rightTab, setRightTab] = useState(false);
  const [currentTab, setCurrentTab] = useState("최신순");
  const [select, setSelect] = useState(false);
  const [trash, setTrash] = useState(false);
  const [isSend, setIsSend] = useState(false);

  const tabItem = ["최신순", "오래된 순", "북마크"];
  const [yearL, setYearL] = useState(2023);
  const [monthL, setMonthL] = useState(1);
  const [yearR, setYearR] = useState(2023);
  const [monthR, setMonthR] = useState(1);

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

  const handleDelete = () => {
    setTrash(!trash);
    setSelect(!select);
  };

  useEffect(() => {
    axios.get("/api/sendy/mailbox/messages/out", {
      headers: { "ngrok-skip-browser-warning": "230324" },
    })
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <L.LetterBoxWrap>
      <L.FilterContainer>
        <L.SearchContainer>
          <GrSearch className="icon" />
          <L.Search />
          <AiOutlineCalendar
            className="icon"
            onClick={() => setleftTab(!lefttTab)}
          />
          {lefttTab ? (
            <L.PeriodBox>
              <L.Line />
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
              {tabItem.map((el) => (
                <L.DropdownItem onClick={() => setCurrentTab(el)}>
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
        <LetterView select={select} trash={trash} />
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
