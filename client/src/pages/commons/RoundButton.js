import styled from "styled-components";
import { PALETTE_V1 } from "../../style/color";
import { FONT_STYLE_V1 } from "../../style/fontStyle";

const StyledRoundButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid ${PALETTE_V1.text_primary};
  border-radius: 50%;
  min-width: ${(props) => props.width || "100px"};
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "40px"};
  margin-right: 10px;
  ${FONT_STYLE_V1.body.body_10_light}
`;

function RoundButton({ children, ...rest }) {
  return <StyledRoundButton {...rest}>{children}</StyledRoundButton>;
}

export default RoundButton;
