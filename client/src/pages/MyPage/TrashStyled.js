import styled from "styled-components";
// import { FONT_STYLE_V1 } from "../style/fontStyle";
// import { PALETTE_V1 } from "../style/color";

export const TrashWrap = styled.div`
  height: 1000px;
  background: #fcfbf4;
`;

// export const GNBWrap = styled.ul`
//   display: flex;
//   margin-left: 5rem;
// `;

// export const GNBMenu = styled.li`
//   width: 120px;
//   height: 40px;
//   background-color: white;
//   border: 1px solid black;
//   border-top: none;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-right: 1rem;
//   &:hover {
//   }
// `;

// export const GNBMenuOn = styled.li`
//   width: 120px;
//   height: 55px;
//   background-color: #fff06c;
//   border: 1px solid black;
//   border-top: none;
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   padding-bottom: 0.5rem;
// `;

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
`
export const ItemName = styled.div`
  flex-grow: 1.5;
  border-right: 1px solid black;
  margin-right: 3rem;
  text-align: center;
`;

export const ItemContent = styled.div`
  flex-grow: 5;
`;

export const ItemDate = styled.div`
  flex-grow: 1;
  color: #cccccc;
`;