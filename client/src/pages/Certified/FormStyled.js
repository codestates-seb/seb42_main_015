import styled from "styled-components";
import BREAKPOINTMOBILE from "../../breakpoint";
import { FONT_STYLE_LOGIN, FONT_STYLE_LOGOUT } from "../../style/fontStyle";
import email from "../../asset/mail.png";
import pwd from "../../asset/pwd.png";
import user1 from "../../asset/user1.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  padding-bottom: 3rem;
`;
export const BackgroundYellow = styled.div`
  display: flex;
  position: relative;
  border: 1px solid black;
  background: #fff59f;
  margin: 1rem 0rem 0rem 2rem;
  width: 60rem;
  height: ${(props) => (props.theme === "login" ? "40rem" : "41rem")};
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 20rem;
    height: ${(props) => (props.theme === "login" ? "31rem" : "36rem")};
  }
`;

export const LogForm = styled.div`
  position: absolute;
  display: flex;
  width: 60rem;
  height: ${(props) => (props.theme === "login" ? "41rem" : "42rem")};
  background-color: #fff;
  border: 1px solid black;
  margin-bottom: 2rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 20rem;
    height: ${(props) => (props.theme === "login" ? "32rem" : "37rem")};
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
        margin: ${(props) =>
          props.theme === "login" ? "1.3rem 0px 3.4rem" : "1.3rem 0px 3rem"};
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          font-size: 2.5rem;
          margin: ${(props) =>
            props.theme === "login"
              ? "1.5rem 0rem 2.2rem"
              : "0.8rem 0rem 2rem"};
        }
      }
      input {
        width: 23rem;
        height: 2rem;
        margin-bottom: ${(props) =>
          props.theme === "login" ? "3.3rem" : "2.5rem"};
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
        background-image: url("${user1}");
        background-size: 1.3rem;
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
        margin-top: ${(props) => (props.theme === "login" ? "2.7rem" : "1rem")};
        cursor: pointer;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          width: 14rem;
          height: 2.2rem;
          font-size: 12px;
          margin-top: 1.4rem;
          margin-bottom: 0.6rem;
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
          padding: ${(props) =>
            props.theme === "login" ? "50px 20px 13px" : "45px 20px 13px"};

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
    flex-grow: ${(props) => (props.theme === "login" ? "1" : "0")};
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      display: none;
    }
    .welcome {
      ${FONT_STYLE_LOGIN.title.title_22_medium};
      display: flex;
      align-items: center;
      justify-content: center;
      margin: ${(props) =>
        props.theme === "login" ? "3rem 0 2.5rem" : "6rem 0 3rem"};
    }
    .imgWrapper {
      display: flex;
      flex-direction: column;
      ${FONT_STYLE_LOGIN.body.body_10_light};
      margin-top: ${(props) => (props.theme === "login" ? "0" : "5rem")};
      flex-shrink: 2;

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
        ${FONT_STYLE_LOGIN.body.body_8_light}
        padding: ${(props) =>
          props.theme === "login" ? "60px 20px 5px" : "90px 20px 5px"};
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

export const LogoutForm = styled.div`
  display: flex;
  min-height: 80vh;
  width: 90vw;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 50rem;
  }
  .Left {
    justify-content: flex-end;
    display: flex;
    flex-grow: 2;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      flex-grow: 1;
      justify-content: flex-start;
    }
    img {
      margin-top: 10rem;
      width: 16rem;
      height: 16rem;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        width: 12rem;
        height: 12rem;
      }
    }
  }

  .Middle {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      flex-grow: 2;
    }
    img {
      margin-top: 18rem;
      align-items: center;
      width: 28rem;
      height: 28rem;
      transform: rotate(20deg);
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        margin-top: 22rem;
        width: 20rem;
        height: 20rem;
      }
    }
    .text {
      margin-top: 2rem;
      justify-content: center;
      ${FONT_STYLE_LOGOUT.title_20_medium}
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        ${FONT_STYLE_LOGOUT.title_15_medium}
      }
    }
    button {
      justify-content: center;
      border: 1px solid black;
      background-color: #fcfbf4;
      ${FONT_STYLE_LOGOUT.title_14_medium}
      margin-top: 3rem;
      padding: 2px;
      width: 15rem;
      height: 4.2rem;
      cursor: pointer;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        margin-top: 2rem;
        width: 10rem;
        height: 3rem;
        ${FONT_STYLE_LOGOUT.title_9_medium}
      }
    }
  }

  .Right {
    justify-content: flex-start;
    display: flex;
    flex-grow: 2;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      flex-grow: 1;
      justify-content: flex-end;
    }
    img {
      margin-top: 45rem;
      width: 16rem;
      height: 16rem;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        width: 12rem;
        height: 12rem;
      }
    }
  }
`;
