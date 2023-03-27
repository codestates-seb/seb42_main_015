import React, { useRef, useState, useEffect } from "react";
import TrashItem from "./TrashItem";
import GNB from "./GNB";
import * as M from "./TrashStyled";
import { AiOutlineCheck } from "react-icons/ai";
import Modal from "../commons/Modal";
import { AiOutlineArrowUp } from "react-icons/ai";
import { RiUserReceivedLine, RiUserSharedLine } from "react-icons/ri";
import * as W from "../WriteLetter/WriteStyled";
import axios from "axios";

function TrashList() {
  const [checked, setChecked] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef();

  // 삭제 요청 만들기
  // 복구 요청 만들기
  useEffect(() => {
    axios
      .patch("/api/sendy/mailbox/dustbin/outgoing", {
        headers: {
          "ngrok-skip-browser-warning": "230325",
          Authorization:
            "Bearer eyJhbGciOiJIUzM4NCJ9.eyJyb2xlcyI6WyJVU0VSIl0sIm1lbWJlcklkIjo5LCJ1c2VybmFtZSI6InVzZXIxOTk3QGdtYWlsLmNvbSIsInN1YiI6InVzZXIxOTk3QGdtYWlsLmNvbSIsImlhdCI6MTY3OTcyMTMyNiwiZXhwIjoxNjc5NzIzMTI2fQ.zhuxBaDkJ5qT00QrLnRwh0q5yXRW8z0OwjJx4BefSWYRf3xa9QIFfwkQFkMmUYKx",
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleModal = (e) => {
    if (openModal && !modalRef.current.contains(e.target)) {
      setOpenModal(false);
    }
  };

  return (
    <M.TrashWrap onClick={handleModal}>
      {openModal ? <W.ExplainationBackground /> : <></>}
      {openModal && (
        <Modal ContainerHeight="280px" ContainerWidth="300px">
          <M.ModalBox ref={modalRef}>
            <img src={require("../../asset/Sad.png")} alt="" />
            <M.ModalText>삭제하면 다시는 편지를 보지 못해요</M.ModalText>
            <M.ButtonBox>
              <M.ModalButton onClick={() => setOpenModal(!openModal)}>
                취소
              </M.ModalButton>
              <M.ModalButton>잘 가</M.ModalButton>
            </M.ButtonBox>
          </M.ModalBox>
        </Modal>
      )}
      <GNB />
      <M.TrashContainer>
        <M.Warning>30일 뒤에 영구 삭제 됩니다.</M.Warning>
        <M.TrashTable>
          <M.TrashTableMenu>
            <M.CheckBox
              className="select-all"
              onClick={() => setChecked(!checked)}
            >
              {checked ? <AiOutlineCheck /> : false}
            </M.CheckBox>
            <M.ButtonBox>
              <M.Button>복구</M.Button>
              <M.Button
                onClick={() => {
                  setOpenModal(!openModal);
                }}
              >
                영구 삭제
              </M.Button>
            </M.ButtonBox>
          </M.TrashTableMenu>
          <TrashItem />
        </M.TrashTable>
      </M.TrashContainer>
      <M.TopButton
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <AiOutlineArrowUp />
      </M.TopButton>
      {isSend ? (
        <M.SendButton onClick={() => setIsSend(!isSend)}>
          <RiUserSharedLine />
        </M.SendButton>
      ) : (
        <M.ReceiveButton onClick={() => setIsSend(!isSend)}>
          <RiUserReceivedLine />
        </M.ReceiveButton>
      )}
    </M.TrashWrap>
  );
}

export default TrashList;
