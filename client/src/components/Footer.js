import React from "react";
import styled from "styled-components";
import logo from "../asset/작은편지.png";
import wrapper from "../asset/푸터.png";

const FooterComponent = styled.footer`
  width: 100vw;
  height: max-content;
  background: #fcfbf4;
  border-top: 1px solid #312f2b;

  /* background-image: url("${wrapper}");
  background-size: cover; */

  color: #000000;
  padding: 1.2rem 1.2rem 1rem;
  width: 100vw;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: space-between;

  .menuContainer {
    .logo {
      padding: 0px 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Sriracha";
      font-size: 1.7rem;
    }
    .logo-img {
      display: inline-block;
      width: 22px;
      height: 16px;
      margin-left: 4px;
    }
  }
  .imfomation {
    font-family: "Pretendard-Light";
    display: flex;
    flex-direction: column;
    font-size: 0.7rem;
    li {
      padding: 4px 0;
      &:first-child {
        margin: 0;
      }
    }
  }
`;

const Footer = () => {
  return (
    <>
      <FooterComponent>
        <li className="menuContainer">
          <ul>
            <div className="logo">
              Sendy
              <img className="logo-img" src={logo} />
            </div>
          </ul>
        </li>
        <div className="imfomation">
          <li>© 2023 Witch`s delivery service All rights reserved.</li>
          <li>이진주 최지윤 김유림 심효은 윤선진 이시온</li>
          <li>문의 abcd19234@gmail.com</li>
        </div>
      </FooterComponent>
    </>
  );
};

export default Footer;
