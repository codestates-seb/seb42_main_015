import styled from "styled-components";
import {FONT_STYLE_V1} from '../../style/fontStyle'

export const LetterBoxWrap = styled.div`
  width: 100vw;
  min-height: 90vh;
`;

export const FilterContainer = styled.div`
  width: 100vw;
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
`;

export const PeriodBox = styled.div`
  width: 300px;
  height: 118px;
  border: 1px solid black;
  position: absolute;
  top: 39px;
  right: -1px;
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
  width: 196px;
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
