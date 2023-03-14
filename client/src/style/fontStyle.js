import { css } from "styled-components";
import { PALETTE_V1, PALETTE_LOGIN } from "./color";

export const FONT_STYLE_V1 = {
  title: {
    title_8_medium: css`
      font-family: "Pretendard-Medium";
      font-size: 0.8rem;
      color: ${PALETTE_V1.text_primary};
    `,
    title_10_medium: css`
      font-family: "Pretendard-Medium";
      font-size: 1rem;
      color: ${PALETTE_V1.text_primary};
    `,
    title_12_medium: css`
      font-family: "Pretendard-Medium";
      font-size: 1.2rem;
      color: ${PALETTE_V1.text_primary};
    `,
    title_14_medium: css`
      font-family: "Pretendard-Medium";
      font-size: 1.4rem;
      color: ${PALETTE_V1.text_primary};
    `,
  },
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
    title_30_regular: css`
      font-family: "Sriracha", cursive;
      font-size: 3rem;
      color: #ffffff;
    `,
  },
  textarea: {
    textarea_10_light: css`
      font-family: "Pretendard-Light";
      font-size: 1rem;
      color: ${PALETTE_V1.text_primary};
      line-height: 2rem;
    `,
  },
};

export const FONT_STYLE_LOGIN = {
  title: {
    title_40_medium: css`
      font-family: "Sriracha";
      font-size: 4.2rem;
      -webkit-text-stroke: 1px #000;
      color: ${PALETTE_LOGIN.loginText};
    `,
    title_20_medium: css`
      font-family: "Raleway", sans-serif;
      font-size: 2rem;
    `,
  },
  body: {
    body_8_light: css`
      font-family: "IBM Plex Sans Thai Looped", sans-serif;
      font-size: 0.8rem;
      color: ${PALETTE_LOGIN.subText};
    `,
    body_9_light: css`
      font-family: "IBM Plex Sans Thai Looped", sans-serif;
      font-size: 0.9rem;
      color: ${PALETTE_LOGIN.subText};
    `,
    body_10_light: css`
      font-family: "Raleway", sans-serif;
      font-size: 1rem;
    `,
  },
  button: {
    button_13_light: css`
      font-family: "IBM Plex Sans Thai Looped", sans-serif;
      font-size: 1.3rem;
    `,
  },
};
