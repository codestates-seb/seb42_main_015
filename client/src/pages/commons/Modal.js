import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { PALETTE_V1 } from "../../style/color";
const ModalBack = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: none;
  display: flex;
  z-index: 200;
  justify-content: center;
  align-items: center;
  min-width: 963px;
`;
const ModalContainer = styled.div`
  position: absolute;
  background-color: #ffffff;
  width: ${(props) => props.ContainerWidth || "400px"};
  height: ${(props) => props.ContainerHeight || "600px"};
  border: 2px solid ${PALETTE_V1.text_primary};
  z-index: 300;
`;
const ModalHeader = styled.div`
  position: relative;
  border-bottom: 2px solid ${PALETTE_V1.text_primary};
  height: 2.1rem;
`;
const CircleWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 8px;
`;
const Circle = styled.div`
  border: 1.5px solid ${PALETTE_V1.text_primary};
  border-radius: 50%;
  height: 50%;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.backgroundColor || "none"};
`;

function Modal(props) {
  //모달 열리면 뒤에 배경 스크롤 못하게 막음
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed;
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  //모달 열렸는지, 닫혔는지
  const [isModalOpen, setIsModalOpen] = useState(false);
  const el = useRef();
  //모달 영역 밖 클릭시 모달 닫기
  const handleCloseModal = ({ target }) => {
    if (isModalOpen && !el.current.contains(target)) setIsModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleCloseModal);
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  });

  console.log(el);

  return (
    <ModalBack>
      <ModalContainer
        ref={el}
        ContainerHeight={props.ContainerHeight}
        ContainerWidth={props.ContainerWidth}
      >
        <ModalHeader>
          <CircleWrapper>
            <Circle backgroundColor={PALETTE_V1.red_modal_button} />
            <Circle backgroundColor={PALETTE_V1.yellow_modal_button} />
            <Circle backgroundColor={PALETTE_V1.green_modal_button} />
          </CircleWrapper>
        </ModalHeader>
        {props.children}
      </ModalContainer>
    </ModalBack>
  );
}

export default Modal;
