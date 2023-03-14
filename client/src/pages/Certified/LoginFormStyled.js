import styled from "styled-components";
import BREAKPOINTMOBILE from "../../breakpoint";
import { FONT_STYLE_LOGIN } from "../../style/fontStyle";

export const Background = styled.div`
  height: 90vh;
  background-color: #fcfbf4;
  overflow: hidden;
`;
export const BackgroundYellow = styled.div`
  /* border: 1px solid black;
  /* background: #fff59f;
  height: 40vh; */
`;

export const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  overflow: hidden;
  width: 62rem;
  height: 42rem;
  background-color: #fff;
  border: 1px solid black;
  display: flex;
  margin-bottom: 2rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 20rem;
    height: 32rem;
  }

  .formLeft {
    flex-grow: 1;
    border-right: 1px solid #000;
    padding: 10px 30px 30px;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      border-right: 0px solid #000;
      font-size: 2rem;
      padding: 10px 20px 30px;
    }
    .login-form {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;

      .loginText {
        ${FONT_STYLE_LOGIN.title.title_40_medium}
        margin: 1.3rem 0px 3.4rem;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          font-size: 2.5rem;
          margin-bottom: 2.2rem;
        }
      }

      input {
        width: 26.5rem;
        height: 2rem;
        margin-bottom: 3.3rem;
        padding: 1.2rem;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #000;
        font-size: 14px;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          width: 14rem;
          font-size: 11px;
          margin-bottom: 1.5rem;
        }
      }
      .btn {
        width: 18rem;
        height: 3.2rem;
        border: 1px solid #000;
        ${FONT_STYLE_LOGIN.button.button_13_light}
        background: #fff06c;
        margin-top: 3rem;
        padding-top: 0.5rem;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          width: 14rem;
          height: 2.2rem;
          font-size: 12px;
          margin-top: 1.4rem;
          margin-bottom: 0.4rem;
          padding-top: 0.5rem;
        }
      }
      .sub-form {
        display: flex;
        ${FONT_STYLE_LOGIN.body.body_9_light}
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          font-size: 11px;
        }
        li {
          padding: 0 20px;
          @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
            padding: 0 10px;
          }
        }
      }
    }
    .oauth-form {
      display: none;
      flex-direction: column;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        display: flex;
        .oauth-head {
          padding: 50px 20px 13px;
          ${FONT_STYLE_LOGIN.body.body_8_light}
        }
        .oauth {
          justify-content: space-around;
          img {
            width: 1.8rem;
            margin: 0 10px;
            cursor: pointer;
          }
        }
      }
    }
  }

  .formRight {
    flex-grow: 5;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      display: none;
    }
    .welcome {
      ${FONT_STYLE_LOGIN.title.title_20_medium}
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3rem;
    }
  }
`;
