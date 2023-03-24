import styled from "styled-components";
import { BREAKPOINTMOBILE } from "../../breakpoint";
import { FONT_STYLE_V1 } from "../../style/fontStyle";
import { PALETTE_V1 } from "../../style/color";

export const TrashWrap = styled.div`
  height: 1000px;
  background: #fcfbf4;
  ${FONT_STYLE_V1.body.body_15_light}
`;

export const TrashContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

export const TrashTable = styled.div`
  width: 80vw;
`;

export const TrashTableMenu = styled.div`
  ${FONT_STYLE_V1.title.title_16_medium}
  width: 80vw;
  height: 40px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .select-all {
    border: 2px solid black;
  }
`;

export const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin: 0 0.5rem;
    transform: scale(0.7);
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.div`
  margin-right: 3rem;
`;

export const ItemBox = styled.li`
  width: 80vw;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const ItemName = styled.div`
  flex-grow: 1.5;
  border-right: 1px solid black;
  margin-right: 3rem;
  text-align: center;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-right: 1rem;
    padding-right: 1rem;
  }
`;

export const ItemContent = styled.div`
  flex-grow: 5;
  margin-right: 0.5rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 100px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: keep-all;
  }
`;

export const ItemDate = styled.div`
  flex-grow: 1;
  color: #cccccc;
`;

export const ModalBox = styled.div`
  width: 300px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    margin-bottom: 1.5rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 224px;
  }
`;
export const ModalText = styled.div`
  margin-bottom: 1rem;
`;
export const ModalButton = styled.div`
  background-color: #ddd;
  border: 2px solid ${PALETTE_V1.text_primary};
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(1) {
    margin-right: 1rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-top: 3rem;
  }
`;

export const TopButton = styled.div`
  width: 60px;
  height: 60px;
  border: 3px solid ${PALETTE_V1.orange_dark};
  border-radius: 50%;
  position: fixed;
  bottom: 40px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  background-color: white;
  color: ${PALETTE_V1.orange_dark};
  cursor: pointer;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 10px;
  }
`;

export const ReceiveButton = styled.div`
  width: 60px;
  height: 60px;
  border: 3px solid ${PALETTE_V1.orange_dark};
  border-radius: 50%;
  position: fixed;
  bottom: 120px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  background-color: white;
  color: ${PALETTE_V1.orange_dark};
  cursor: pointer;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 50px;
    height: 50px;
    bottom: 85px;
    right: 10px;
  }
`;

export const SendButton = styled.div`
  width: 60px;
  height: 60px;
  border: 3px solid ${PALETTE_V1.orange_dark};
  border-radius: 50%;
  position: fixed;
  bottom: 120px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  background-color: ${PALETTE_V1.orange_dark};
  color: white;
  cursor: pointer;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 50px;
    height: 50px;
    bottom: 85px;
    right: 10px;
  }
`;
