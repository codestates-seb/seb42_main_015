import React, { useRef, useState } from "react";
import GNB from "./GNB";
import * as M from "./TrashStyled";
import { AiOutlineArrowUp } from "react-icons/ai";
import { RiUserReceivedLine, RiUserSharedLine } from "react-icons/ri";
import TrashOutgoing from "./TrashOutgoing";
import TrashReceiving from "./TrashReceiving";

function TrashList() {
  const [isSend, setIsSend] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef();

  const handleModal = (e) => {
    if (openModal && !modalRef.current.contains(e.target)) {
      setOpenModal(false);
    }
  };

  return (
    <M.TrashWrap onClick={handleModal}>
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
      <GNB />
      {isSend ? (
        <TrashOutgoing openModal={openModal} setOpenModal={setOpenModal} modalRef={modalRef} />
      ) : (
        <TrashReceiving openModal={openModal} setOpenModal={setOpenModal} modalRef={modalRef} />
      )}
    </M.TrashWrap>
  );
}

export default TrashList;
