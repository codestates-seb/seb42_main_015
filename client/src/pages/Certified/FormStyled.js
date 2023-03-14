import styled from "styled-components";
import BREAKPOINTMOBILE from "../../breakpoint";
import { FONT_STYLE_LOGIN } from "../../style/fontStyle";
import email from "../../asset/mail.png";
import pwd from "../../asset/pwd.png";
import user1 from "../../asset/user1.png";
import user2 from "../../asset/user2.png";
import img1 from "../../asset/강지.png";
import img2 from "../../asset/반듯한고양이.png";

export const Background = styled.div`
  height: 90vh;
  background-color: #fcfbf4;
  overflow: hidden;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
export const BackgroundYellow = styled.div`
  display: flex;
  position: relative;
  border: 1px solid black;
  background: #fff59f;
  margin: 1rem 0rem 0rem 2rem;
  height: 41rem;
  width: 60em;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 20rem;
    height: 31rem;
  }
`;
export const LogForm = styled.div`
  position: absolute;
  display: flex;
  width: 60rem;
  height: 41rem;
  background-color: #fff;
  border: 1px solid black;
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
        width: 23rem;
        height: 2rem;
        margin-bottom: 3.3rem;
        padding: 0rem 3rem;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #000;
        font-size: 14px;
        background-repeat: no-repeat;
        background-position: left;
        background-size: 1.5rem;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          width: 14rem;
          font-size: 11px;
          margin-bottom: 1.5rem;
        }
      }
      .idInput {
        background-image: url("${email}");
        background-size: 1.4rem;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          background-size: 1rem;
        }
      }
      .pwdInput {
        background-image: url("${pwd}");
        background-size: 1.5rem;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          background-size: 1.2rem;
        }
      }
      .btn {
        width: 17rem;
        height: 3.2rem;
        border: 1px solid #000;
        ${FONT_STYLE_LOGIN.button.button_13_light}
        background: #fff06c;
        margin-top: 2.7rem;
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
    flex-grow: 1;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      display: none;
    }
    .welcome {
      ${FONT_STYLE_LOGIN.title.title_20_medium}
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 3rem 0 2.5rem;
    }
    .imgWrapper {
      display: flex;
      flex-direction: column;
      ${FONT_STYLE_LOGIN.body.body_10_light};

      .section1 {
        padding: 0rem 5rem;
        display: flex;
        flex-direction: row;
        img {
          width: 9.2rem;
        }
        .box {
          border: 1px solid black;
          padding: 3px 25px;
          height: 1.5rem;
          margin: 4rem -1.3rem;
          background: #fff;
        }
      }
      .section2 {
        display: flex;
        flex-direction: row;
        img {
          width: 9.2rem;
          margin-left: 15rem;
        }
        .box {
          border: 1px solid black;
          padding: 1px 40px;
          height: 1.5rem;
          margin: 3.7rem 4rem 0rem -14rem;
          background: #fff;
        }
      }
    }
    .oauth-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .oauth-head {
        padding: 60px 20px 5px;
        ${FONT_STYLE_LOGIN.body.body_8_light}
      }
      .oauth {
        justify-content: space-around;
        img {
          width: 3.2rem;
          margin: 1rem 1rem 4rem;
          cursor: pointer;
        }
      }
    }
  }
`;

export const SignForm = styled.div`
  position: absolute;
  display: flex;
  width: 60rem;
  height: 48rem;
  background-color: #fff;
  border: 1px solid black;
  margin-bottom: 2rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 20rem;
    height: 37rem;
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
          margin: 0.8rem 0rem 2rem;
        }
      }
      input {
        width: 23rem;
        height: 2rem;
        margin-bottom: 3.3rem;
        padding: 0rem 3rem;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #000;
        font-size: 14px;
        background-repeat: no-repeat;
        background-position: left;
        background-size: 1.5rem;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          width: 14rem;
          font-size: 11px;
          margin-bottom: 1.5rem;
        }
      }
      .userInput {
        background-image: url("${user2}");
        background-size: 1.4rem;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          background-size: 1rem;
        }
      }
      .idInput {
        background-image: url("${email}");
        background-size: 1.4rem;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          background-size: 1rem;
        }
      }
      .pwdInput {
        background-image: url("${pwd}");
        background-size: 1.5rem;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          background-size: 1.2rem;
        }
      }
      .btn {
        width: 17rem;
        height: 3.2rem;
        border: 1px solid #000;
        ${FONT_STYLE_LOGIN.button.button_13_light}
        background: #fff06c;
        margin-top: 2.7rem;
        padding-top: 0.5rem;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          width: 14rem;
          height: 2.2rem;
          font-size: 12px;
          margin-top: 1.4rem;
          margin-bottom: 0.4rem;
          padding-top: 0.2rem;
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
            padding: 10px 0px 0px;
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
          padding: 45px 20px 13px;
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
    flex-grow: 1;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      display: none;
    }
    .welcome {
      ${FONT_STYLE_LOGIN.title.title_20_medium}
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 3rem 0 2.5rem;
    }
    .imgWrapper {
      display: flex;
      flex-direction: column;
      ${FONT_STYLE_LOGIN.body.body_10_light};

      .section1 {
        padding: 0rem 5rem;
        display: flex;
        flex-direction: row;
        img {
          width: 9.2rem;
        }
        .box {
          border: 1px solid black;
          padding: 3px 25px;
          height: 1.5rem;
          margin: 4rem -1.3rem;
          background: #fff;
        }
      }
      .section2 {
        display: flex;
        flex-direction: row;
        img {
          width: 9.2rem;
          margin-left: 15rem;
        }
        .box {
          border: 1px solid black;
          padding: 1px 40px;
          height: 1.5rem;
          margin: 3.7rem 4rem 0rem -14rem;
          background: #fff;
        }
      }
    }
    .oauth-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .oauth-head {
        padding: 60px 20px 5px;
        ${FONT_STYLE_LOGIN.body.body_8_light}
      }
      .oauth {
        justify-content: space-around;
        img {
          width: 3.2rem;
          margin: 1rem 1rem 4rem;
          cursor: pointer;
        }
      }
    }
  }
`;

export const S_BackgroundYellow = styled.div`
  display: flex;
  position: relative;
  border: 1px solid black;
  background: #fff59f;
  margin: 1rem 0rem 0rem 2rem;
  width: 60rem;
  height: 48rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 20rem;
    height: 36rem;
  }
`;
