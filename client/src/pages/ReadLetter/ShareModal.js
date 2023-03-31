import React from "react";
import Modal from "../commons/Modal";
import styled from "styled-components";
import completeCat from "../../asset/completeCat.png";

const Container = styled.div`
  .complete-cat {
    width: 20rem;
  }
`;

function ShareModal() {
  return (
    <Modal>
      <Container>
        <h1>완성된 편지를 친구에게 전달해보세요!</h1>
        <img
          className="complete-cat"
          src={completeCat}
          alt="종이비행기 날리는 고양이 그림"
        />
      </Container>
    </Modal>
  );
}

export default ShareModal;
