import styled from "styled-components";
import BREAKPOINTMOBILE from "../../breakpoint";
import { FONT_STYLE_V1 } from "../../style/fontStyle";

export const TrashWrap = styled.div`
  height: 1000px;
  background: #fcfbf4;
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
  /* position: fixed; */
  width: 80vw;
  height: 40px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
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
  text-align: center;
  margin-left: 3rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-left: 1rem;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.div`
  margin-right: 3rem;
  ${FONT_STYLE_V1.title.title_10_medium}
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-right: 1rem;
  }
`;

export const ItemBox = styled.li`
  width: 80vw;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  ${FONT_STYLE_V1.body.body_10_light}
`;

export const ItemName = styled.div`
  flex-grow: 1.5;
  border-right: 1px solid black;
  margin-right: 3rem;
  text-align: center;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-right: 1rem;
  }
`;

export const ItemContent = styled.div`
  flex-grow: 5;
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