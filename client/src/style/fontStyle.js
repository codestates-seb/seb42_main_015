import { css } from "styled-components";
import { PALETTE_WRITELETTER } from "./color";

export const FONT_STYLE_WRITELETTER = {
  title: {},
  body: {
    body_8_light: css`
      font-family: "Pretendard-Light";
      font-size: 0.8rem;
      color: ${PALETTE_WRITELETTER.text_primary};
    `,
    body_10_light: css`
      font-family: "Pretendard-Light";
      font-size: 1rem;
      color: ${PALETTE_WRITELETTER.text_primary};
    `,
    body_12_light: css`
      font-family: "Pretendard-Light";
      font-size: 1.2rem;
      color: ${PALETTE_WRITELETTER.text_primary};
    `,
  },
};
