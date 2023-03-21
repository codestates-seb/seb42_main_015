import React, { useState } from "react";
import * as M from "./MyPageStyled";
import { HiArrowRight } from "react-icons/hi";
import SquareButton from "../commons/SquareButton";

function ResignModal() {
  const [modalStage, setModalStage] = useState(0);
  const title = ["비밀번호 확인", "탈퇴 시 주의사항", ""];
  const notice = [
    [
      `회원탈퇴를 위해 사용자 인증이 필요합니다.`,
      `현재 비밀번호를 입력해주세요.`,
    ],
    [
      `우편함에 저장된 편지 내용은 모두 삭제됩니다.`,
      `탈퇴한 회원 정보는 복구가 불가합니다.`,
    ],
    [`그동안 감사했습니다. 안녕히 가세요!`],
  ];
  const handleStage = () => {
    if (modalStage === 2) {
    } else {
      setModalStage(modalStage + 1);
    }
  };
  return (
    <M.ModalWrapper>
      <M.ModalTitle>{title[modalStage]}</M.ModalTitle>
      <div className="notice">
        {notice[modalStage].map((el) => (
          <p>
            {el}
            <br />
          </p>
        ))}
      </div>
      {modalStage === 0 ? (
        <M.PwdInput placeholder="Password"></M.PwdInput>
      ) : (
        <></>
      )}
      {modalStage === 2 ? <SquareButton>잘 가</SquareButton> : <></>}
      <M.NextIconWrapper onClick={handleStage}>
        <HiArrowRight size="25" />
      </M.NextIconWrapper>
    </M.ModalWrapper>
  );
}

export default ResignModal;
