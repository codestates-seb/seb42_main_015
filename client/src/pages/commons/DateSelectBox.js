import React, { useState } from "react";
import * as L from "../LetterBox/LetterBoxStyled";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

function DateSelectBox(props) {
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState(1);

  const handleMonthUp = () => {
    if (+month > 0 && +month < 12) {
      setMonth(+month + 1);
    }
  };
  const handleMonthDown = () => {
    if (+month > 1 && +month < 13) {
      setMonth(+month - 1);
    }
  };
  const handleYearUp = () => {
    if (year >= 2023) {
      setYear(year + 1);
    }
  };
  const handleYearDown = () => {
    if (year > 2023) {
      setYear(year - 1);
    }
  };

  return (
    <L.PeriodBox
      backgroundColor={props.backgroundColor}
      top={props.top}
      right={props.right}>
      <L.Line />
      <L.Date>
        <L.DateYear>
          <RiArrowUpSLine onClick={handleYearUp} />
          {year}
          <RiArrowDownSLine onClick={handleYearDown} />
        </L.DateYear>
        <L.DateMonth>
          <RiArrowUpSLine onClick={handleMonthUp} />
          {month}
          <RiArrowDownSLine onClick={handleMonthDown} />
        </L.DateMonth>
        <L.DateMonth>
          <RiArrowUpSLine onClick={handleMonthUp} />
          <RiArrowDownSLine />
        </L.DateMonth>
      </L.Date>
    </L.PeriodBox>
  );
}

export default DateSelectBox;
