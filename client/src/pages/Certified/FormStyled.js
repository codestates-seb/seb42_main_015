import styled from "styled-components";
import { BREAKPOINTMOBILE } from "../../breakpoint";
import { FONT_STYLE_LOGIN, FONT_STYLE_LOGOUT } from "../../style/fontStyle";
import email from "../../asset/mail.png";
import pwd from "../../asset/pwd.png";
import user1 from "../../asset/user1.png";
import * as P from "./SetPwdStyled";

//TODO :로그인, 회원가입 영역
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  padding: 0rem 2rem 0rem;
  overflow: hidden;
`;

//TODO :로그인, 회원가입 노랑 백그라운드
export const BackgroundYellow = styled.div`
  display: flex;
  position: absolute;
  border: 1px solid black;
  background: #fff59f;
  margin: 0rem 0rem 0rem 2rem;
  width: 60rem;
  height: ${(props) => (props.theme === "login" ? "41rem" : "45rem")};
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: ${(props) => (props.theme === "login" ? "29rem" : "33rem")};
    height: ${(props) => (props.theme === "login" ? "45rem" : "58.5rem")};
  }
`;

//TODO :로그인, 회원가입 흰색 form
export const LogForm = styled.form`
  position: absolute;
  display: flex;
  width: 60rem;
  height: ${(props) => (props.theme === "login" ? "41rem" : "45rem")};
  background-color: #fff;
  border: 1px solid black;
  margin-bottom: 2rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: ${(props) => (props.theme === "login" ? "29rem" : "33rem")};
    height: ${(props) => (props.theme === "login" ? "45rem" : "58.5rem")};
  }
  .formLeft {
    flex-grow: 1;
    width: ${(props) => (props.theme === "login" ? "360px" : "490px")};
    border-right: 1px solid #000;
    padding: 10px 20px 10px;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      border-right: 0px solid #000;
      font-size: 2rem;
      padding: 10px 20px 10px;
    }
    .login-form {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;

      .loginText {
        ${FONT_STYLE_LOGIN.title.title_37_medium}
        margin: ${(props) =>
          props.theme === "login" ? "1.5rem 0px 4.5rem" : "0rem 0px 1.8rem"};
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          font-size: 3.8rem;
          margin: ${(props) =>
            props.theme === "login" ? "0.5rem 0rem 3rem" : "0.1rem 0 2.2rem"};
        }
      }
      input {
        width: 25rem;
        height: 3.2rem;
        margin-bottom: ${(props) =>
          props.theme === "login" ? "3.5rem" : "2rem"};
        margin-top: 0.5rem;
        padding: 0rem 3rem;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #000;
        background-repeat: no-repeat;
        background-position: left;
        background-size: 21px;
        font-size: 15px;
        border-radius: 1px;
        -webkit-border-radius: 0;
        -webkit-appearance: none;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          background-size: 15px;
          font-size: 11px;
          margin-bottom: ${(props) =>
            props.theme === "login" ? "3.5rem" : "2.5rem"};
          width: ${(props) => (props.theme === "login" ? "21rem" : "25rem")};
        }
      }
      .userInput {
        background-image: url("${user1}");
      }
      .emailInput {
        background-image: url("${email}");
      }
      .pwdInput {
        background-image: url("${pwd}");
        background-size: 23px;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          background-size: 17px;
        }
      }
      .err {
        display: flex;
        justify-content: flex-start;
        color: red;
        margin-top: ${(props) =>
          props.theme === "login" ? "-2.6rem;" : "-1.6rem;"};
        margin-bottom: ${(props) =>
          props.theme === "login" ? "1.4rem;" : "0.4rem;"};
        /* padding: 1px 10px; */
        font-size: 12px;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          margin-top: ${(props) =>
            props.theme === "login" ? "-3rem;" : "-2.1rem;"};
          margin-bottom: ${(props) =>
            props.theme === "login" ? "0.6rem;" : "0.1rem;"};
          padding: 0 6px 0 12px;
          font-size: 7.5px;
        }
      }

      .btn {
        width: 17rem;
        height: 3.2rem;
        border-radius: 1px;
        -webkit-border-radius: 0;
        -webkit-appearance: none;
        border: 1px solid #000;
        ${FONT_STYLE_LOGIN.button.button_13_light}
        background: #fff06c;
        margin-top: ${(props) =>
          props.theme === "login" ? "1.5rem" : "0.7rem"};
        cursor: pointer;
        margin-bottom: ${(props) =>
          props.theme === "login" ? "2rem" : "1.5rem"};
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          margin: ${(props) =>
            props.theme === "login" ? "1.5rem 0 1rem " : "1rem 0 1rem "};
          width: ${(props) => (props.theme === "login" ? "21rem" : "25rem")};
          height: 4rem;
        }
      }
      .sub-form {
        display: flex;
        ${FONT_STYLE_LOGIN.body.body_9_light}
        font-size: 12px;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          font-size: 7px;
        }
        li {
          padding: 0 20px;
          @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
            padding: 0 5px;
          }
        }
      }
      label {
        position: relative;
      }
      .duplicate,
      .duplicate-check,
      .code-check {
        position: absolute;
        top: 1.1rem;
        right: 0.7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        ${FONT_STYLE_LOGIN.button.button_4_light};
        font-size: 12px;
        border: 1px solid #505050;
        background: #ffcb12;
        width: 4.3rem;
        height: 1.9rem;
        cursor: pointer;
        -webkit-box-pack: center;
        border-radius: 9999px;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          width: 5.5rem;
          height: 2.3rem;
          top: 0.9rem;
          font-size: 9px;
        }

        :hover {
          box-shadow: 0px 0px 0px 1px transparent, 0px 0px 0px 4px transparent,
            0px 6px 16px rgb(0 0 0 / 12%);
          transform: scale(1.02);
        }
      }
      .duplicate-check {
        background: #d3d3d3;
      }
      .code-check {
        background: rgb(241, 67, 67);
        color: white;
      }
    }
    .oauth-form {
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        display: flex;
        .oauth-head {
          justify-content: center;
          display: flex;
          padding: ${(props) =>
            props.theme === "login" ? "30px 20px 13px" : "25px 20px 10px"};

          ${FONT_STYLE_LOGIN.body.body_8_light}
        }
        img {
          width: 2.8rem;
          height: 2.8rem;
          cursor: pointer;
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
      > img {
        width: 100%;
      }

      .section1 {
        padding: 0rem 4rem;
        display: flex;
        flex-direction: row;
        img {
          margin-left: 0rem;
          width: 9.2rem;
          transform: rotate(-4deg);
        }
        .box {
          border: 1px solid black;
          padding: 0px 22px;
          height: 1.5rem;
          margin: 4rem 0rem 2rem -1.2rem;
          background: #fff;
          z-index: 1;
        }
      }
      .section2 {
        display: flex;
        flex-direction: row;
        padding: 0rem 6rem 0rem 0rem;
        img {
          width: 9.2rem;
          margin-left: 15rem;
        }
        .box {
          border: 1px solid black;
          padding: 1px 37px;
          height: 1.5rem;
          margin: 3.7rem 4rem 0rem -15.5rem;
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
        font-size: 12px;
        padding: ${(props) =>
          props.theme === "login" ? "48px 20px 5px" : "70px 20px 5px"};
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

//TODO :로그아웃 완료 페이지
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
      margin-top: 8rem;
      width: 16rem;
      height: 16rem;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        margin-top: 9rem;
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
      margin-top: 13rem;
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
      justify-content: center;
      ${FONT_STYLE_LOGOUT.title_20_medium}
      font-size: 2.8rem;
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
      width: 13rem;
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
      margin-top: 43rem;
      width: 16rem;
      height: 16rem;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        margin-top: 45rem;
        width: 12rem;
        height: 12rem;
      }
    }
  }
`;

//TODO :회원가입 완료 페이지
export const CompleteContainer = styled.div`
  width: 60rem;
  height: 48rem;
  margin-right: 1.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 60%;
    height: 38rem;
  }

  button {
    justify-content: center;
    border: 1px solid black;
    background-color: #fcfbf4;
    ${FONT_STYLE_LOGOUT.button_14_san}
    margin-top: 2rem;
    padding: 2px;
    width: 12rem;
    height: 4.2rem;
    cursor: pointer;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      margin-top: 2rem;
      width: 10rem;
      height: 3.4rem;
      ${FONT_STYLE_LOGOUT.title_10_medium}
    }
  }
`;

export const CompleteTitle = styled.div`
  margin: 2rem 0;
  justify-content: center;
  ${FONT_STYLE_LOGOUT.title_30_Light}
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_LOGOUT.title_18_medium}
  }
`;

export const SuccessImges = () => {
  return (
    <>
      <P.SuccessImg
        className="suc1"
        src={require("../../asset/뽀시래기/보라 뽀시래기.png")}
        alt=""
      />
      <P.SuccessImg
        className="suc2"
        src={require("../../asset/뽀시래기/빨주노 뽀시래기.png")}
        alt=""
      />
      <P.SuccessImg
        className="suc3"
        src={require("../../asset/뽀시래기/초록 뽀시래기.png")}
        alt=""
      />
      <P.SuccessImg
        className="suc4"
        src={require("../../asset/뽀시래기/파랑 뽀시래기.png")}
        alt=""
      />
      <P.SuccessImg
        className="suc5"
        src={require("../../asset/뽀시래기/핑크 뽀시래기.png")}
        alt=""
      />
      <P.SuccessImg
        className="suc6"
        src={require("../../asset/뽀시래기/핑크 여러개 뽀시래기.png")}
        alt=""
      />
      <P.SuccessImg
        className="suc7"
        src={require("../../asset/뽀시래기/하트 뽀시래기.png")}
        alt=""
      />
    </>
  );
};
