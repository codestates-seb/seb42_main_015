import React, { forwardRef } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCalendar } from "react-icons/ai";
registerLocale("ko", ko);

export default function Calendar({ startDate, setStartDate }) {
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="custom-input" onClick={onClick} ref={ref}>
      {value}
      <AiOutlineCalendar id="calendar-icon" />
    </button>
  ));
  const afterOneYear = new Date( //1년 후 까지만 설정할 수 있음
    new Date().getFullYear() + 1,
    new Date().getMonth(),
    new Date().getDate()
  );
  return (
    <DatePicker
      locale="ko" // 달력 한글화
      dateFormat="yyyy/MM/dd aa hh:mm" //데이터 포맷
      startDate={startDate} //시작일
      selected={startDate} // 날짜 state
      onChange={setStartDate} // 날짜 설정 콜백 함수
      customInput={<ExampleCustomInput />}
      minDate={startDate} // 과거 날짜 disable
      maxDate={afterOneYear}
      showTimeInput
      timeIntervals={30}
      popperModifiers={{
        // 모바일 web 환경에서 화면을 벗어나지 않도록 하는 설정
        preventOverflow: {
          enabled: true,
        },
      }}
    />
  );
}
