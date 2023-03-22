import styled from "styled-components";
import { PALETTE_V1 } from "../../style/color";
import { FONT_STYLE_V1 } from "../../style/fontStyle";
import BREAKPOINTMOBILE from "../../breakpoint";

export const LetterBoxWrap = styled.div`
  width: 100%;
  min-height: 90vh;
  ${FONT_STYLE_V1.body.body_10_light}
`;

export const FilterContainer = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
`;

export const SearchContainer = styled.div`
  flex-grow: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid black;
  position: relative;
  .icon {
    font-size: 1.5rem;
    margin: 0 1rem;
  }
`;

export const Search = styled.input`
  flex-grow: 2;
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
`;

export const PeriodBox = styled.div`
  width: 300px;
  height: 118px;
  border: 1px solid black;
  position: absolute;
  top: ${(props) => props.top || "39px"};
  right: ${(props) => props.right || "-1px"};
  background-color: ${(props) =>
    props.backgroundColor || PALETTE_V1.background};
`;

export const Line = styled.div`
  width: 100%;
  height: 20px;
  background-color: #464646;
`;

export const Date = styled.ul`
  width: 100%;
  height: 98px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${FONT_STYLE_V1.body.body_15_light}
`;

export const DateYear = styled.li`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DateMonth = styled.li`
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DropdownContainer = styled.div`
  width: 196px;
  height: 40px;
  position: relative;
  cursor: pointer;
  .icon {
    font-size: 2rem;
  }
`;

export const CurrentSelectBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const CurrentSelect = styled.span`
  flex-grow: 2;
  text-align: center;
  padding-left: 2rem;
`;

export const Dropdown = styled.ul`
  width: 100%;
  height: 120px;
  position: absolute;
  top: 40px;
  right: 1px;
`;

export const DropdownItem = styled.li`
  width: 196px;
  height: 40px;
  border: 1px solid black;
  border-right: none;
  margin-top: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    font-weight: bold;
  }
`;

// 우편함 리스트
export const ViewWrap = styled.div`
  width: 100%;
`;

export const Gradient = styled.div`
  width: 1000px;
  height: 1000px;
  background: radial-gradient(
    circle,
    rgba(255, 246, 164, 1) 0%,
    rgba(255, 246, 164, 0) 50%
  );
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export const ListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ListContainer = styled.div`
  width: 100%;
  margin-top: 5rem;
`;

export const ListDateContainer = styled.div`
  width: 200px;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 150px;
  }
`;

export const ListDate = styled.div`
  text-align: right;
  margin-bottom: 0.5rem;
  ${FONT_STYLE_V1.body.body_15_light}
`;

export const ListBar = styled.div`
  width: 200px;
  border-bottom: 1px solid black;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 150px;
  }
`;

export const ItemWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    justify-content: center;
    padding-left: 0;
  }
`;

export const ItemContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: center; */
  align-content: flex-start;
  padding-left: 5rem;
`;

export const ItemBox = styled.div`
  width: 250px;
  height: 350px;
  background-color: white;
  border: 1px solid black;
  margin-left: 3rem;
  margin-bottom: 3rem;
  padding: 4rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ItemImg = styled.img`
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 300px;
    height: 400px;
    margin-left: 1rem;
  }
`;

export const ItemTitle = styled.div`
  ${FONT_STYLE_V1.title.title_14_medium}
  margin-bottom: 2rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    font-size: 2rem;
  }
`;

export const ItemContents = styled.p`
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    font-size: 1.2rem;
  }
`;

export const ItemDate = styled.div`
  margin-top: 9rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-top: 5rem;
  }
`;
