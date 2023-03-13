import React from "react";
import {AiOutlineEnter} from 'react-icons/ai';
import {BsEnvelopeAt} from 'react-icons/bs';
import styled from "styled-components";
import { FONT_STYLE_V1 } from "../../style/fontStyle";

export function CardContents() {
  return (
    <Contents>
      <div className="user">
        <span className="profile"><img src='' alt='' /></span>
        <span>김햄찌</span>
      </div>
      <EmailAuth>
        <div className="contents-text">
          <div className="title">Password</div>
          <p>비밀번호 변경을 위해 <br/> 이메일 인증이 필요합니다.</p>
          <label for='email'>Email</label>
          <div className="email-container">
            <BsEnvelopeAt className="email-icon" />
            <input type='email' id='email' placeholder="email address"/>  
            <AiOutlineEnter />
          </div>
        </div>
        
      </EmailAuth>
    </Contents>
  );
}

const Contents = styled.div`
  
  .user {
    height: 70px;
    display: flex;
    align-items: center;
    padding: 1rem;
    .profile {
      padding: 15px 25px;
      border: 1px solid black;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }
`;

const EmailAuth = styled.div`
  ${FONT_STYLE_V1.body.body_10_light}
  display: flex;
  flex-direction: column;
  align-items: center;
  .contents-text {
    height: 385px;
    .title {
      ${FONT_STYLE_V1.body.title_30_regular}
      -webkit-text-stroke: 1px black;
      text-align: center;
    }
    p {
      text-align: center;
      margin-bottom: 4rem;
    }
    label {
      ${FONT_STYLE_V1.body.body_12_light}
      font-weight: bold;
    }
    .email-container {
      width: 400px;
      border-bottom: 1px solid black;
      display: flex;
      margin-top: 1rem;
      .email-icon {
        font-size: 1.5rem;
        margin-right: 1rem;
      }
      input#email {
        flex-grow: 2;
        outline: none;
        border: none;
      }
    }
    input#auth-number {
      width: 50px;
      height: 60px;
      margin-right: 0.5rem;
      font-size: 3rem;
      text-align: center;
      &:focus {
        background-color: #ddd;
      }
    }
  }
  /* .contents-next {
    flex-grow: 1;
    width: 100%;
    text-align: right;
    .next {
      font-size: 2rem;
      margin-right: 1rem;
    }
  } */
`;

export function CardContents2 () {
  console.log('test')
  return (
    <Contents>
      <div className="user">
        <span className="profile"><img src='' alt='' /></span>
        <span>김햄찌</span>
      </div>
      <EmailAuth>
        <div className="contents-text">
          <div className="title">Password</div>
          <p>이메일로 전송된 <br/> 인증번호를 입력해주세요.</p>
          <div>
            <input type='text' id='auth-number'  />
            <input type='text' id='auth-number' />
            <input type='text' id='auth-number' />
            <input type='text' id='auth-number' />
            <input type='text' id='auth-number' />
          </div>
        </div>
      </EmailAuth>
    </Contents>
  );
}