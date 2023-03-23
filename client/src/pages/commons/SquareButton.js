import styled from "styled-components";
import { BREAKPOINTMOBILE } from "../../breakpoint";
import { PALETTE_V1 } from "../../style/color";
import { FONT_STYLE_V1 } from "../../style/fontStyle";

const StyledSquareButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid #000000;
  min-width: 100px;
  width: 100px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
  ${FONT_STYLE_V1.body.body_13_light}
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    min-width: 85px;
    width: 85px;
    height: 35px;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    min-width: 70px;
    width: 70px;
    height: 30px;
  }
`;

function SquareButton({ children, ...rest }) {
  return <StyledSquareButton {...rest}>{children}</StyledSquareButton>;
}

export default SquareButton;
