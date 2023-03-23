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
  min-height: 85vh;
  padding: 3rem 2rem;
  overflow: hidden;
  padding-bottom: 70px;
`;

//TODO :로그인, 회원가입 노랑 백그라운드
export const BackgroundYellow = styled.div`
  display: flex;
  position: absolute;
  border: 1px solid black;
  background: #fff59f;
  margin: 1rem 0rem 0rem 2rem;
  width: 60rem;
  height: ${(props) => (props.theme === "login" ? "40rem" : "41rem")};
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: ${(props) => (props.theme === "login" ? "29rem" : "31rem")};
    height: ${(props) => (props.theme === "login" ? "45rem" : "51rem")};
  }
`;

//TODO :로그인, 회원가입 흰색 form
export const LogForm = styled.form`
  position: absolute;
  display: flex;
  width: 60rem;
  height: ${(props) => (props.theme === "login" ? "41rem" : "42rem")};
  background-color: #fff;
  border: 1px solid black;
  margin-bottom: 2rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: ${(props) => (props.theme === "login" ? "29rem" : "31rem")};
    height: ${(props) => (props.theme === "login" ? "45rem" : "51rem")};
  }
  .formLeft {
    flex-grow: 1;
    border-right: 1px solid #000;
    /* margin-right: ${(props) =>
      props.theme === "login" ? "0rem" : "1rem"}; */
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
        ${FONT_STYLE_LOGIN.title.title_42_medium}
        margin: ${(props) =>
          props.theme === "login" ? "1.7rem 0px 4rem" : "1rem 0px 2rem"};
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          font-size: 3.8rem;
          margin: ${(props) =>
            props.theme === "login" ? "0.5rem 0rem 3rem" : "0.1rem 0 2.2rem"};
        }
      }
      input {
        width: 23rem;
        height: 2.3rem;
        height: 3rem;
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
        background-size: 1.5rem;
        font-size: clamp(0.6rem, 3vw, 1rem);
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          margin-bottom: ${(props) =>
            props.theme === "login" ? "3.5rem" : "2.2rem"};
          width: ${(props) => (props.theme === "login" ? "20rem" : "23rem")};
        }
      }
      .userInput {
        background-image: url("${user1}");
        background-size: 1.3rem;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          background-size: 1.2rem;
        }
      }
      .emailInput {
        background-image: url("${email}");
        background-size: 1.4rem;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          background-size: 1.2rem;
        }
      }
      .pwdInput {
        background-image: url("${pwd}");
        background-size: 1.5rem;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          background-size: 1.3rem;
        }
      }
      p {
        color: red;
        margin-top: ${(props) =>
          props.theme === "login" ? "-2.6rem;" : "-1.6rem;"};
        margin-bottom: ${(props) =>
          props.theme === "login" ? "0.5rem;" : "0.1rem;"};
        padding: 0 7px;
        font-size: clamp(0.6rem, 3vw, 1rem);
        padding: 0 10px;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          margin-bottom: ${(props) =>
            props.theme === "login" ? "0.5rem;" : "0.4rem;"};
          padding: 0 12px;
        }
      }

      .btn {
        width: 17rem;
        height: 3.2rem;
        border: 1px solid #000;
        ${FONT_STYLE_LOGIN.button.button_13_light}
        background: #fff06c;
        margin-top: ${(props) => (props.theme === "login" ? "1.5rem" : "2rem")};
        cursor: pointer;
        margin-bottom: ${(props) =>
          props.theme === "login" ? "2rem" : "1.5rem"};
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          font-size: 12px;
          margin-top: ${(props) =>
            props.theme === "login" ? "2rem" : "1.5rem"};
          margin-bottom: 1rem;
        }
      }
      .sub-form {
        display: flex;
        ${FONT_STYLE_LOGIN.body.body_9_light}
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
      .duplicate-check {
        position: absolute;
        top: 1rem;
        right: 0.7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        ${FONT_STYLE_LOGIN.button.button_4_light};
        border: 1px solid #505050;
        background: #ffcb12;
        width: 4rem;
        height: 1.8rem;
        cursor: pointer;
        border-radius: 50%;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          width: 5.5rem;
          height: 2.3rem;
          top: 0.7rem;
        }

        :hover {
          box-shadow: 0px 0px 0px 1px transparent, 0px 0px 0px 4px transparent,
            0px 6px 16px rgb(0 0 0 / 12%);
          transform: scale(1.02);
        }
      }
      .duplicate-check {
        background: #d3d3d3;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          width: 3rem;
          height: 1.3rem;
          font-size: 6px;
          top: 1.7rem;
        }
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
