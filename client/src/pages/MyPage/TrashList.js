import React, { useState } from "react";
import TrashItem from "./TrashItem";
import GNB from "./GNB";
import * as M from "./TrashStyled";
import { AiOutlineCheck } from "react-icons/ai";
import Modal from "../commons/Modal";
import { AiOutlineArrowUp } from "react-icons/ai";
import { RiUserReceivedLine, RiUserSharedLine } from "react-icons/ri";

function TrashList() {
  const [checked, setChecked] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  // const modalRef = useRef();

  // const handleModal = (e) => {
  //   if (openModal && !modalRef.current.contains(e.target)) {
  //     setOpenModal(false);
  //   }
  // };

  // const onRemove = () => {
  //   if (
  //     window.confirm(
  //       "정말로 삭제하시겠습니까?\n삭제된 편지는 [마이페이지-휴지통]에서 확인할 수 있습니다."
  //     )
  //   ) {
  //     alert("삭제되었습니다.");
  //   } else {
  //     return;
  //   }
  // };

  return (
    <M.TrashWrap>
      <GNB />
      <M.TrashContainer>
        {openModal && (
          <Modal ContainerHeight="280px" ContainerWidth="300px">
            <M.ModalBox>
              <img src={require("../../asset/Sad.png")} alt="" />
              <M.ModalText>삭제하면 다시는 편지를 보지 못해요</M.ModalText>
              <M.ButtonBox>
                <M.ModalButton onClick={() => setOpenModal(!openModal)}>취소</M.ModalButton>
                <M.ModalButton>잘 가</M.ModalButton>
              </M.ButtonBox>
            </M.ModalBox>
          </Modal>
        )}
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
