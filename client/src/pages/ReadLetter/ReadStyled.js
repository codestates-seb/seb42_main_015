import styled from "styled-components";
import { BREAKPOINTMOBILE, BREAKPOINTMOBILE2 } from "../../breakpoint";
import { FONT_STYLE_READ, FONT_STYLE_LOGIN } from "../../style/fontStyle";
import { PALETTE_V1 } from "../../style/color";
import pwd from "../../asset/pwd.png";
import email from "../../asset/mail.png";

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
    .top-sub {
      display: flex;
      justify-content: space-evenly;
      margin: 0 0 0 22rem;
      .soundButtons {
        display: flex;
        justify-content: space-evenly;
        background: #d3d3d3;
        border-radius: 3rem;
        padding: 5px 5px;
        width: 6rem;
        height: 2.5rem;
        margin-top: 0.2rem;
        cursor: pointer;
      }
      .speech-icon,
      .pause-icon {
        padding: 3px;
        &:hover {
          padding: 3px;
          background: white;
          border-radius: 50%;
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
  /* margin-top: -5rem; */
  padding: 5rem 5rem;
  width: 50vw;
  height: 40vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    padding: 5rem 1rem;
  }
  div {
    display: flex;
    ${FONT_STYLE_READ.title_20_medium}
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      font-size: 1rem;
    }
  }
  .pwdInput {
    display: flex;
    width: 23rem;
    height: 2.3rem;
    background-size: 1.5rem;
    padding: 0rem 3rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #000;
    background-image: url("${pwd}");
    background-color: initial;
    background-repeat: no-repeat;
    background-position: left;
    background-size: 1.5rem;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {0
      background-size: 1.2rem;
      width: 13rem;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6.7rem;
    height: 2.1rem;
    border: 1px solid #838383;
    background-color: #fcfbf4;
    ${FONT_STYLE_READ.btn_8_light}
    margin-left: 70%;
    cursor: pointer;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      width: 5rem;
      height: 1.6rem;
      font-size: 0.5rem;
      margin-left: 55%;
    }
  }
  p {
    color: red;
    margin: -2rem 0 1rem;
    font-size: 14px;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      font-size: 11px;
    }
  }
`;

//todo : 편지 조회 페이지에서 맨위 비밀번호 input
export const EnterSeret = styled.div`
  display: flex;
  justify-content: center;
  width: 12rem;
  padding: 0.5rem 0.7rem 0.5rem 1.5rem;
  border: 2px solid #000000;
  ${FONT_STYLE_READ.body_8_Medium}
  margin : 0.2rem 0 2rem 2rem;

  input {
    ${FONT_STYLE_READ.body_8_light}
    border: none;
    background-color: initial;
    margin-left: 20px;
    padding: 0 5px;
    width: 4rem;
    letter-spacing: 6px;
  }
`;

//todo : 편지 letter wrapper
export const FlexColunmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const Letterpaper = styled(FlexColunmWrapper)`
  aspect-ratio: 3/5;
  background-color: #ffffff;
  flex-direction: column;
  border: 2px solid #000000;
  padding: 2.5rem 3rem 2.5rem 3rem;
  min-width: 680px;
  max-width: 680px;

  .top {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 1rem;
    padding: 1rem 2rem 1rem 1rem;
    ${FONT_STYLE_READ.body_9_Medium}
  }

  .content {
    ${FONT_STYLE_READ.body_10_light};
    letter-spacing: 2px;
    line-height: 2rem;
    padding: 1rem 2rem 1rem 1rem;
    aspect-ratio: 3/5;
    overflow: auto;
  }

  .from {
    display: flex;
    ${FONT_STYLE_READ.body_9_Medium};
    justify-content: flex-end;
    padding: 1rem 2rem 1rem 1rem;
  }
`;

//todo : 아래 버튼들(우편함 돌아가기, 휴지통, 이미지저장, 보관하기)
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  padding: 0rem 0rem 0rem 23.5rem;

  > div {
    display: flex;
    padding-left: 1.5rem;
  }
  .goback {
    display: flex;
    margin: 0.2rem 10rem 0 -23rem;
    cursor: pointer;
  }
  .trash {
    display: flex;
    margin-right: 8px;
    cursor: pointer;
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
  height: 90%;

  .loginText {
    ${FONT_STYLE_LOGIN.title.title_40_medium}
    margin:1rem 0px 1rem;
    font-size: 3rem;
  }
  .oauth {
    justify-content: space-around;
    margin-bottom: 0.7rem;
    img {
      width: 2rem;
      margin: 0 10px;
      cursor: pointer;
    }
  }
  form {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      width: 16rem;
      height: 2.3rem;
      margin: 1rem 0 0;
      padding: 0rem 2rem;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid #000;
      background-repeat: no-repeat;
      background-position: left;
      font-size: 11px;
      margin-bottom: 0.7rem;
    }
    .emailInput {
      background-image: url("${email}");
      background-size: 1.2rem;
    }
    .pwdInput {
      background-image: url("${pwd}");
      background-size: 1.3rem;
    }
    .btn {
      width: 10rem;
      height: 2.5rem;
      border: 1px solid #000;
      ${FONT_STYLE_LOGIN.button.button_13_light}
      font-size: 13px;
      background: #fff06c;
      margin: 1.5rem 0;
    }
    p {
      color: red;
      font-size: 10px;
    }
  }
  .sub-form {
    display: flex;
    ${FONT_STYLE_LOGIN.body.body_9_light}
    font-size: 0.6rem;
  }
  li {
    padding: 0 10px;
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
