import styled from "styled-components";
import { BREAKPOINTMOBILE } from "../../breakpoint";
import { FONT_STYLE_READ, FONT_STYLE_LOGIN } from "../../style/fontStyle";
import pwd from "../../asset/pwd.png";
import email from "../../asset/mail.png";
import { PALETTE_V1 } from "../../style/color";

//todo : 전체 편지지 wrapper
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 87vh;
  padding: 3rem 2rem;
  overflow: hidden;
  padding-bottom: 70px;

  .ReadContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      max-width: 39rem;
    }

    .top-sub {
      display: flex;
      justify-content: space-evenly;
      margin: 0 0 0 32rem;
      @media screen and (max-width: 1024px) {
        margin: 0 0 0 44rem;
      }
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        margin: 0 0 0 15rem;
      }
      .soundButtons {
        display: flex;
        justify-content: space-evenly;
        background: #d3d3d3;
        border-radius: 3rem;
        padding: 4px 5px 0px 5px;
        width: 8rem;
        height: 3rem;
        margin-top: 0.2rem;
        cursor: pointer;
        @media screen and (max-width: 1024px) {
          margin-top: 0rem;
          width: 9rem;
          height: 3.6rem;
          padding: 3px 4px 20px 5px;
        }

        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          margin-top: -0.1rem;
          height: 3.3rem;
          padding: 0px 4px 30px 4px;
        }
      }
      .speech-icon,
      .pause-icon {
        padding: 3px;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          padding: 6px;
        }

        &:hover {
          padding: 3px;
          background: white;
          border-radius: 50%;
          @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
            padding: 6px;
          }
        }
      }
    }
  }
`;

//todo :비밀번호 편지 페이지 wrapper
export const SWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 87vh;
  padding: 3rem 2rem;
  overflow: hidden;
  padding-bottom: 300px;
`;

//todo : 비밀번호 입력 form
export const Secretform = styled.form`
  display: flex;
  padding: 5rem 5rem;
  height: 60vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  @media screen and (max-width: 1024px) {
    height: 50vh;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    height: 40vh;
  }

  div {
    display: flex;
    ${FONT_STYLE_READ.title_19_medium}

    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      font-size: 16px;
    }
  }
  .pwdInput {
    display: flex;
    width: 27rem;
    height: 2.7rem;
    background-size: 1.5rem;
    padding: 1rem 4rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1.2px solid #000;
    background-image: url("${pwd}");
    background-color: initial;
    background-repeat: no-repeat;
    background-position: left;
    background-size: 21px;
    letter-spacing: 3px;

    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      width: 24rem;
      font-size: 1.5rem;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7rem;
    height: 2.5rem;
    border: 1.2px solid #000;
    background-color: #fcfbf4;
    ${FONT_STYLE_READ.btn_8_light}
    font-size: 15px;
    margin-left: 75%;
    cursor: pointer;

    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      width: 60px;
      height: 23px;
      font-size: 12px;
      margin-left: 65%;
    }
    @media screen and (max-width: 1024px) {
      height: 25px;
      font-size: 13px;
      height: 2.8rem;
    }
  }
  p {
    color: red;
    margin: -5rem 0 -2rem;
    font-size: 14px;
    @media screen and (max-width: 1024px) {
      margin: -5.5rem 0 -2rem;
      font-size: 13px;
    }
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      margin: -5rem 0 -2rem;
      font-size: 7px;
    }
  }
`;

//todo : 편지 조회 페이지에서 맨위 비밀번호 input
export const EnterSeret = styled.div`
  display: flex;
  justify-content: center;
  width: 12rem;
  padding: 0.7rem 0.7rem 0.7rem 0.7rem;
  border: 2px solid #000000;
  ${FONT_STYLE_READ.body_8_Medium}
  font-size : 1rem;
  margin: 0.2rem 0 2rem 2rem;
  @media screen and (max-width: 1024px) {
    width: 13rem;
    font-size: 1.2rem;
    padding: 0.7rem 0.5rem 0.7rem 0.5rem;
  }

  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin: 0rem 0 1.2rem 2rem;
    padding: 0.7rem 0.5rem 0.7rem 0.5rem;
    height: 3.4rem;
    font-size: 0.7rem;
    width: 13rem;
  }

  p {
    ${FONT_STYLE_READ.body_8_light}
    font-size : 1rem;
    border: none;
    background-color: initial;
    margin-left: 10px;
    padding: 0 5px;
    width: 4rem;
    letter-spacing: 6px;

    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      margin-left: 5px;
      width: 5rem;
      letter-spacing: 3px;
    }
  }
`;

//todo : 편지 letter wrapper
export const FlexColunmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;

  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 39rem;
  }
`;

//편지 내용(To, 날짜 , content, from)
export const Letterpaper = styled(FlexColunmWrapper)`
  aspect-ratio: 3/5;
  background-color: #ffffff;
  flex-direction: column;
  border: 2px solid #000000;
  padding: 2.5rem 2.5rem;
  min-width: 680px;
  max-width: 680px;

  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    min-width: 18rem;
    padding: 2rem 1.4rem;
  }

  .top {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 1rem;
    padding: 1rem 2rem 1rem 1rem;
    ${FONT_STYLE_READ.body_9_Medium}
    font-size: 1.5rem;
    @media screen and (max-width: 1024px) {
      font-size: 1.7rem;
    }

    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      padding: 0.5rem 1.2rem 1rem 1rem;
      font-size: 11px;
    }
  }

  .content {
    ${FONT_STYLE_READ.body_10_light};
    letter-spacing: 2px;
    line-height: 2.5rem;
    padding: 1rem 2rem 1rem 1rem;
    aspect-ratio: 3/5;
    overflow: auto;
    font-size: 1.3rem;
    &::-webkit-scrollbar {
      width: 1rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #d9d9d9;
      border-radius: 7px;
      border: 1.5px solid;
    }
    &::-webkit-scrollbar-track {
      background-color: ${PALETTE_V1.background};
      border-radius: 7px;
      border: 1.5px solid;
    }
    @media screen and (max-width: 1024px) {
      line-height: 2.8rem;
      font-size: 16px;
    }

    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      padding: 0.7rem 1.2rem 1.5rem 1.2rem;
      font-size: 11px;
      line-height: 2.2rem;
    }
  }

  .from {
    display: flex;
    ${FONT_STYLE_READ.body_9_Medium};
    justify-content: flex-end;
    padding: 1rem 2rem 1rem 1rem;
    font-size: 1.5rem;
    @media screen and (max-width: 1024px) {
      font-size: 1.7rem;
    }

    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      padding: 1.4rem 1.2rem 0.5rem 0rem;
      font-size: 11px;
    }
  }
`;

//todo : 아래 버튼들(우편함 돌아가기, 휴지통, 이미지저장, 보관하기)
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 8rem;
  padding: 0rem 0rem 0rem 32rem;
  @media screen and (max-width: 1024px) {
    padding: 0rem 0rem 0rem 38rem;
  }

  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    padding: 0rem 0rem 0rem 10rem;
  }

  .button {
    font-size: 1.2rem;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      font-size: 1.4rem;
    }
    @media screen and (max-width: 1024px) {
      font-size: 1.4rem;
    }
  }

  > div {
    display: flex;
    padding-left: 1.5rem;
    @media screen and (max-width: 1024px) {
      padding-left: 1.6rem;
    }

    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      padding-left: 0.9rem;
    }
  }
  .goback {
    display: flex;
    margin: 0.2rem 20rem 0 -31rem;
    cursor: pointer;
    @media screen and (max-width: 1024px) {
      margin: 0.2rem 35rem 0 -37rem;
    }
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      margin: 0.2rem 10rem 0 -9rem;
      width: 2.8rem;
      height: 2.8rem;
    }
  }
  .trash {
    display: flex;
    margin-right: 8px;
    cursor: pointer;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      width: 3rem;
      height: 3rem;
    }
  }
`;

//todo : 편지 content hard cording
export const LetterEx = `이 노래는 it's about you baby
Only you
You, you, you
You, you, you, you
내가 힘들 때, 울 것 같을 때
기운도 이젠 나지 않을 때
It's you 날 걱정하네
It's you 날 웃게하네
말 안 해도 돼
Boy, what do you say?
멀리든 언제든지 달려와
(They keep on asking me, "Who is he?")
바쁜 척도 없이 넌 나타나
(They keep on asking me, "Who is he?")
이게 말이 되니? 난 물어봐
(They keep on asking me, "Who is he?")
너는 말야
He's the one that's living in my system, baby
Oh my, oh my God 예상했어 나
I was really hoping that he will come through
Oh my, oh my God 단 너뿐이야
Asking all the time about what I should do
No, I can never let him go
너만 생각나 twenty-four
난 행운아야 정말로 I know, I know
널 알기 전까지는 나 의미 없었어 전부 다
내 맘이 끝이 없는 걸 I know, I know
I'm going crazy, right?
어디서든, 몇 번이든
There ain't nothing else that I would hold on to
I hear his voice through all the noise
잠시라도 내 손 놓지 마 no, no
걱정 없잖아 'cause I got someone
혼자라도 괜찮아 'cause I love someone
멀리든 언제든지 달려와
(They keep on asking me, "Who is he?")
바쁜 척도 없이 넌 나타나
(They keep on asking me, "Who is he?")
이게 말이 되니? 난 물어봐
(They keep on asking me, "Who is he?")
너는 말야
He's the one that's living in my system, baby
Oh my, oh my God 예상했어 나
I was really hoping that he will come through
Oh my, oh my God 단 너뿐이야
Asking all the time about what I should do
No, I can never let him go
너만 생각나 twenty-four
난 행운아야 정말로 I know, I know
널 알기 전까지는 나 의미 없었어 전부 다
내 맘이 끝이 없는 걸 I know, I know
He's the one that's living in my system baby
`;

//todo : 보관하기 로그인 모달
export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px 20px;

  .loginText {
    ${FONT_STYLE_LOGIN.title.title_34_medium}
    margin: 0em 0px 1.5rem;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      ${FONT_STYLE_LOGIN.title.title_42_medium}
      margin: 1rem 0px 3rem;
    }
  }
  .oauth {
    justify-content: space-around;
    margin-bottom: 0.5rem;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      margin-bottom: 1.5rem;
    }

    img {
      width: 2.5rem;
      margin: 0 10px;
      cursor: pointer;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        width: 3rem;
      }
    }
  }
  form {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      width: 22rem;
      height: 3rem;
      margin: 1rem 0 0;
      padding: 0rem 2.2rem;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid #000;
      background-repeat: no-repeat;
      background-position: left;
      font-size: 0.8rem;
      margin-bottom: 0.4rem;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        width: 23rem;
        margin-bottom: 2rem;
      }
    }
    .emailInput {
      background-image: url("${email}");
      background-size: 1.5rem;
    }
    .pwdInput {
      background-image: url("${pwd}");
      background-size: 1.6rem;
    }
    .btn {
      width: 13rem;
      height: 3rem;
      border: 1px solid #000;
      ${FONT_STYLE_LOGIN.button.button_13_light}
      font-size: 13px;
      background: #fff06c;
      margin: 1.5rem 0;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        height: 3.3rem;
        margin: 4rem 0 2rem;
      }
    }
    p {
      color: red;
      padding: 0 30px;
      ${FONT_STYLE_READ.body_10_light}
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        ${FONT_STYLE_READ.body_7_light}
        padding: 0 12px;
      }
    }
  }
  .sub {
    display: flex;
    ${FONT_STYLE_LOGIN.body.body_9_light}
  }
  li {
    padding: 0 10px;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      padding: 0 7px;
    }
  }
`;

//todo : 보관하기 로그인 모달 백그라운드
export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;
