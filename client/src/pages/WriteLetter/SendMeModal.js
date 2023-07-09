import React, { useEffect } from "react";
import * as W from "./WriteStyled";
import RoundButton from "../commons/RoundButton";
import Calendar from "./Calendar";

function SendMeModal({
  setOpenSendMe,
  startDate,
  setStartDate,
  setSendMeChecked,
  sendMeModalRef,
  browserSize,
  setBrowserSize,
}) {
  useEffect(() => {
    setBrowserSize(window.innerWidth);
  }, []);
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
    <W.ModalWrapper className="sendme-modal" ref={sendMeModalRef}>
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
        <W.ButtonWrapper id="sendme-modal-button-wrapper">
          <RoundButton
            width={
              browserSize < 767 ? "60px" : browserSize < 1024 ? "80px" : "100px"
            }
            height={
              browserSize < 767 ? "30px" : browserSize < 1024 ? "35px" : "40px"
            }
            onClick={handleCloseModal}>
            취소
          </RoundButton>
          <RoundButton
            width={
              browserSize < 767 ? "60px" : browserSize < 1024 ? "80px" : "100px"
            }
            height={
              browserSize < 767 ? "30px" : browserSize < 1024 ? "35px" : "40px"
            }
            onClick={handleConfirm}
            backgroundColor="#A5EF8A">
            확인
          </RoundButton>
        </W.ButtonWrapper>
      </W.ButtonContainer>
    </W.ModalWrapper>
  );
}

export default SendMeModal;
