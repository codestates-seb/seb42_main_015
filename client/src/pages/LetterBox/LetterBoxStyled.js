import styled from "styled-components";
import { PALETTE_V1 } from "../../style/color";
import { FONT_STYLE_V1 } from "../../style/fontStyle";
import { BREAKPOINTMOBILE } from "../../breakpoint";
import 구름 from "../../asset/letterTheme/구름-theme.png";
import 군대 from "../../asset/letterTheme/군대-theme.png";
import 냥냥편지 from "../../asset/letterTheme/냥냥편지-theme.png";
import 리본 from "../../asset/letterTheme/리본-theme.png";
import 수박 from "../../asset/letterTheme/수박-theme.png";
import 알록달록 from "../../asset/letterTheme/알록달록-theme.png";
import 얼룩 from "../../asset/letterTheme/얼룩-theme.png";
import 오리 from "../../asset/letterTheme/오리-theme.png";
import 정월대보름 from "../../asset/letterTheme/정월대보름-theme.png";
import 체리 from "../../asset/letterTheme/체리-theme.png";
import 클로버 from "../../asset/letterTheme/클로버-theme.png";

export const LetterBoxWrap = styled.div`
  width: 100%;
  min-height: 90vh;
  ${FONT_STYLE_V1.body.body_15_light}
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
    font-size: 2rem;
    margin: 0 1rem;
  }
`;

export const Search = styled.input`
  flex-grow: 2;
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  ${FONT_STYLE_V1.body.body_15_light}
`;

export const PeriodBox = styled.div`
  width: 28vw;
  height: 118px;
  border: 1px solid black;
  position: absolute;
  top: ${(props) => props.top || "39px"};
  right: ${(props) => props.right || "-1px"};
  background-color: ${(props) =>
    props.backgroundColor || PALETTE_V1.background};
  z-index: 10;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 200px;
  }
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
  ${FONT_STYLE_V1.body.body_20_light}
`;

export const DateYear = styled.li`
  margin: 0 2rem;
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
  width: 100%;
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
  ${FONT_STYLE_V1.body.body_20_light}
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
  align-content: flex-start;
  /* padding-left: 2rem; */
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    padding-left: 0;
  }
`;

export const ItemBox = styled.div`
  width: 250px;
  height: 350px;
  /* background-color: white; */
  border: ${(props) => (props.borderColor ? props.borderColor : "black")};
  box-shadow: ${(props) => props.shadowColor};
  margin-left: 3rem;
  margin-bottom: 3rem;
  padding: 4rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  background-image: url(${알록달록});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ItemTitle = styled.div`
  ${FONT_STYLE_V1.title.title_18_medium}
  margin-bottom: 2rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.title.title_25_medium}
  }
`;

export const ItemContents = styled.p`
  ${FONT_STYLE_V1.body.body_15_light}
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.body.body_20_light}
  }
`;

export const ItemDate = styled.div`
  ${FONT_STYLE_V1.title.title_14_medium}
  margin-bottom: 0.5rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.title.title_18_medium}
  }
`;

export const BookMark = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  img {
    width: 5rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    img {
      width: 8rem;
    }
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

export const DeleteButtonOff = styled.div`
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

export const DeleteButtonON = styled.div`
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

export const ReceiveButton = styled.div`
  width: 60px;
  height: 60px;
  border: 3px solid ${PALETTE_V1.orange_dark};
  border-radius: 50%;
  position: fixed;
  bottom: 200px;
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
    bottom: 150px;
    right: 10px;
  }
`;

export const SendButton = styled.div`
  width: 60px;
  height: 60px;
  border: 3px solid ${PALETTE_V1.orange_dark};
  border-radius: 50%;
  position: fixed;
  bottom: 200px;
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
    bottom: 150px;
    right: 10px;
  }
`;
