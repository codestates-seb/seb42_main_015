import React, { useState } from "react";
import * as L from "./LetterBoxStyled";
import { GrSearch } from "react-icons/gr";
import { AiOutlineCalendar } from "react-icons/ai";
import {
  RiArrowDropDownLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
} from "react-icons/ri";

function LetterBox() {
  const [lefttTab, setleftTab] = useState(false);
  const [rightTab, setRightTab] = useState(false);
  const [currentTab, setCurrentTab] = useState("최신순");

  const tabItem = ["최신순", "오래된 순", "북마크"];

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
                  <RiArrowUpSLine
                    onClick={''}
                  />
                  2023
                  <RiArrowDownSLine
                    onClick={''}
                  />
                </L.DateYear>
                <L.DateMonth>
                  <RiArrowUpSLine
                    onClick={''}
                  />
                  01
                  <RiArrowDownSLine
                    onClick={''}
                  />
                </L.DateMonth>
                ~
                <L.DateYear>
                  <RiArrowUpSLine
                    onClick={''}
                  />
                  2023
                  <RiArrowDownSLine
                    onClick={''}
                  />
                </L.DateYear>
                <L.DateMonth>
                  <RiArrowUpSLine
                    onClick={''}
                  />
                  01
                  <RiArrowDownSLine
                    onClick={''}
                  />
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
    </L.LetterBoxWrap>
  );
}

export default LetterBox;
