import React, { useEffect, useState } from "react";
import * as W from "./WriteStyled";
import RoundButton from "../commons/RoundButton";
import Calendar from "./Calendar";

function SendMeModal({
  openSendMe,
  setOpenSendMe,
  startDate,
  setStartDate,
  setSendMeChecked,
  sendMeChecked,
}) {
  const handleCloseModal = () => {
    setStartDate(
      new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() + 1
      )
    );
    setSendMeChecked(false);
    setOpenSendMe(false);
  };
  const handleConfirm = () => {
    setOpenSendMe(false);
  };

  return (
    <W.ModalWrapper>
      <W.ModalTitle>예약시간</W.ModalTitle>
      <W.TimeBoxWrapper>
        <W.BallonWrapper>
          <Calendar startDate={startDate} setStartDate={setStartDate} />
        </W.BallonWrapper>
      </W.TimeBoxWrapper>
      <W.ReservationText>
        <div>예약시간을 기준으로 나에게 편지가 발송됩니다.</div>
        <div>편지 발송 알림은 마이페이지에서 확인할 수 있습니다.</div>
      </W.ReservationText>
      <W.ButtonContainer>
        <W.ButtonWrapper id="sendMeModalButton">
          <RoundButton onClick={handleCloseModal}>취소</RoundButton>
          <RoundButton onClick={handleConfirm} backgroundColor="#A5EF8A">
            확인
          </RoundButton>
        </W.ButtonWrapper>
      </W.ButtonContainer>
    </W.ModalWrapper>
  );
}

export default SendMeModal;
