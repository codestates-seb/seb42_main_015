import React from "react";
import styled from "styled-components";
import { PALETTE_V1 } from "../../style/color";
import { FONT_STYLE_V1 } from "../../style/fontStyle";

const StyledContainer = styled.div`
  position: relative;
`;
const StyledButton = styled.button`
  ${FONT_STYLE_V1.body.body_10_light}
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid ${PALETTE_V1.text_primary};
  min-width: 100px;
  width: 100px;
  height: 40px;
  margin-right: 10px;
  z-index: 80;
  position: relative;
  pointer-events: ${(props) => (props.state === "block" ? "none" : "auto")};

  &:active {
    transform: translate(3px, 3px);
    transition: transform 0s linear;
  }
`;
const StyledShadow = styled.div`
  background-color: ${PALETTE_V1.text_primary};
  min-width: 100px;
  width: 100px;
  height: 40px;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 50;
`;
function ShadowButton({ children, ...rest }) {
  return (
    <StyledContainer>
      <StyledButton {...rest}>{children}</StyledButton>
      <StyledShadow />
    </StyledContainer>
  );
}

export default ShadowButton;
