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
    title_20_medium: css`
      font-family: "Pretendard-Medium";
      font-size: 2rem;
      color: ${PALETTE_V1.text_primary};
    `,
    title_30_medium: css`
      font-family: "Pretendard-Medium";
      font-size: 3rem;
      color: ${PALETTE_V1.text_primary};
    `,
    title_20_medium: css`
      font-family: "Pretendard-Medium";
      font-size: 2rem;
      color: ${PALETTE_V1.text_primary};
    `,
    title_40_medium: css`
      font-family: "Pretendard-Medium";
      font-size: 4rem;
      color: ${PALETTE_V1.text_primary};
    `,
    title_20_thin: css`
      font-family: "Pretendard-Thin";
      font-size: 2rem;
      color: ${PALETTE_V1.text_primary};
    `,
    title_40_thin: css`
      font-family: "Pretendard-Thin";
      font-size: 4rem;
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
    body_15_light: css`
    font-family: "Pretendard-Light";
    font-size: 1.5rem;
    color: ${PALETTE_V1.text_primary};
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
export const FONT_STYLE_LOGO = {
  title: {
    title_25_medium: css`
      font-family: "Sriracha";
      font-size: 2.5rem;
      color: black;
      line-height: 2rem;
    `,
  }
}
export const FONT_STYLE_LOGIN = {
  title: {
    title_40_medium: css`
      font-family: "Sriracha";
      font-size: 4.2rem;
      -webkit-text-stroke: 1px #000;
      color: ${PALETTE_LOGIN.loginText};
    `,
    title_25_medium: css`
      font-family: "Raleway", sans-serif;
      font-size: 2.5rem;
    `,
    title_22_medium: css`
      font-family: "Raleway", sans-serif;
      font-size: 2.2rem;
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

export const FONT_STYLE_LOGOUT = {
  title_20_medium: css`
    font-family: "Caveat", cursive;
    font-size: 2rem;
  `,
  title_15_medium: css`
    font-family: "Caveat", cursive;
    font-size: 1.5rem;
  `,
  title_14_medium: css`
    font-family: "B612", sans-serif;
    font-size: 1.4rem;
  `,
  title_9_medium: css`
    font-family: "B612", sans-serif;
    font-size: 0.9rem;
  `,
};
