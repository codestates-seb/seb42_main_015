import { css } from "styled-components";
import { PALETTE_V1 } from "./color";

export const FONT_STYLE_V1 = {
  title: {},
  body: {
    body_8_light: css`
      font-family: "Pretendard-Light";
      font-size: 0.8rem;
      color: ${PALETTE_V1.text_primary};
    `,
    body_10_light: css`
      font-family: "Pretendard-Light";
      font-size: 1rem;
      color: ${PALETTE_V1.text_primary};
    `,
    body_12_light: css`
      font-family: "Pretendard-Light";
      font-size: 1.2rem;
      color: ${PALETTE_V1.text_primary};
    `,
  },
};
