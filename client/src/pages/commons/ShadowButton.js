import React from "react";
import styled from "styled-components";
import { BREAKPOINTMOBILE, BREAKPOINTMOBILE2 } from "../../breakpoint";
import { PALETTE_V1 } from "../../style/color";
import { FONT_STYLE_V1 } from "../../style/fontStyle";

const StyledContainer = styled.div`
  position: relative;
`;
const StyledButton = styled.button`
  ${FONT_STYLE_V1.body.body_14_light}
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid ${PALETTE_V1.text_primary};
  min-width: 20px;
  min-height: 20px;
  width: 100px;
  height: 40px;
  margin-right: 10px;
  z-index: 80;
  position: relative;
  pointer-events: ${(props) => (props.state === "block" ? "none" : "auto")};
  cursor: pointer;

  &:active {
    transform: translate(3px, 3px);
    transition: transform 0s linear;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    font-size: 15px;
    min-width: 90px;
    width: 90px;
    height: 35px;
  }
  @media screen and (max-width: 540px) {
    font-size: 14px;
    min-width: 80px;
    width: 80px;
    height: 35px;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE2}px) {
    font-size: 12px;
    min-width: 70px;
    width: 70px;
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
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    min-width: 90px;
    width: 90px;
    height: 35px;
    top: 4px;
    right: 6px;
  }
  @media screen and (max-width: 540px) {
    min-width: 80px;
    width: 80px;
    height: 35px;
    top: 4px;
    right: 6px;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE2}px) {
    min-width: 70px;
    width: 70px;
    top: 3px;
    right: 7px;
  }
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
