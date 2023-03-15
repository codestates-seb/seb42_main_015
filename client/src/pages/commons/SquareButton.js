import styled from "styled-components";
import { PALETTE_V1 } from "../../style/color";
import { FONT_STYLE_V1 } from "../../style/fontStyle";

const StyledSquareButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid ${PALETTE_V1.text_primary};
  min-width: 100px;
  width: 100px;
  height: 40px;
  margin-right: 10px;
  ${FONT_STYLE_V1.body.body_10_light}
`;

function SquareButton({ children, ...rest }) {
  return <StyledSquareButton {...rest}>{children}</StyledSquareButton>;
}

export default SquareButton;
