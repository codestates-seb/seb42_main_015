import React from "react";
import styled from "styled-components";
import { PALETTE_V1 } from "../../style/color";

const ModalContainer = styled.div``;
const ModalHeader = styled.div``;
const circle = styled.div`
  border: 1px soild ${PALETTE_V1.text_primary};
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor || "none"};
`;

function Modal() {
  return (
    <ModalContainer>
      <ModalHeader>
        <circle backgroundColor={PALETTE_V1.red_modal_button} />
        <circle backgroundColor={PALETTE_V1.yellow_modal_button} />
        <circle backgroundColor={PALETTE_V1.green_modal_button} />
      </ModalHeader>
    </ModalContainer>
  );
}

export default Modal;
