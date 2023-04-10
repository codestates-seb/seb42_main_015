import React from "react";
import * as L from "./LetterBoxStyled";
import { GrSearch } from "react-icons/gr";
import { AiOutlineCalendar } from "react-icons/ai";
import {
  RiArrowDropDownLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { RxThickArrowRight } from "react-icons/rx";
import { BiRefresh } from "react-icons/bi";

function LetterHeader({
  date,
  onChangeDate,
  filters,
  setIsFocus,
  onSearch,
  onFilter,
  onSubmitDate,
  currentFilter,
  leftTab,
  setLeftTab,
  rightTab,
  setRightTab,
  setIsPeriod
}) {

  const handleReset = () => {
    window.location.reload();
    setIsPeriod(false);
  }

  return (
    <L.LetterHeaderWrap>
      <L.SearchContainer>
        <GrSearch className="icon" />
        <L.Search
          type="text"
          placeholder="Search..."
          onChange={onSearch}
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
              <L.LineBtn onClick={handleReset}>
                초기화 <BiRefresh className="period-btn" />
              </L.LineBtn>
              <L.LineBtn>
                <RxThickArrowRight
                  className="period-btn"
                  onClick={() => onSubmitDate()}
                />
              </L.LineBtn>
            </L.Line>
            <L.Date>
              <L.DateYear>
                <RiArrowUpSLine
                  onClick={() => onChangeDate("startYear", "plus")}
                />
                {date.startYear}
                <RiArrowDownSLine
                  onClick={() => onChangeDate("startYear", "minus")}
                />
              </L.DateYear>
              <L.DateMonth>
                <RiArrowUpSLine
                  onClick={() => onChangeDate("startMonth", "plus")}
                />
                {date.startMonth}
                <RiArrowDownSLine
                  onClick={() => onChangeDate("startMonth", "minus")}
                />
              </L.DateMonth>
              ~
              <L.DateYear>
                <RiArrowUpSLine
                  onClick={() => onChangeDate("EndYear", "plus")}
                />
                {date.EndYear}
                <RiArrowDownSLine
                  onClick={() => onChangeDate("EndYear", "minus")}
                />
              </L.DateYear>
              <L.DateMonth>
                <RiArrowUpSLine
                  onClick={() => onChangeDate("EndMonth", "plus")}
                />
                {date.EndMonth}
                <RiArrowDownSLine
                  onClick={() => onChangeDate("EndMonth", "minus")}
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
          <L.CurrentSelect>{currentFilter}</L.CurrentSelect>
          <RiArrowDropDownLine className="icon" />
        </L.CurrentSelectBox>
        {rightTab ? (
          <L.Dropdown>
            {filters.map((el, idx) => (
              <L.DropdownItem key={idx} onClick={onFilter}>
                {el}
              </L.DropdownItem>
            ))}
          </L.Dropdown>
        ) : (
          false
        )}
      </L.DropdownContainer>
    </L.LetterHeaderWrap>
  );
}

export default LetterHeader;