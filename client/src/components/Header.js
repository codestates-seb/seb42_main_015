import React from "react";
import styled from "styled-components";
import BREAKPOINTMOBILE from "../breakpoint";
import { Link } from "react-router-dom";
import logo from "../asset/작은편지.png";

const HeaderComponent = styled.header`
  align-items: center;
  box-sizing: border-box;
  background: #fcfbf4;
  border-bottom: 1px solid #312f2b;
  display: flex;
  height: 40px;
  width: 100vw;
  position: sticky;
  left: 0;
  z-index: 999;
`;

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0px 50px;
  width: 100%;

  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin: 0px 30px;
  }

  .logo {
    padding: 0px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Sriracha";
    font-size: 22px;
    padding-bottom: 4px;
  }

  .logo-img {
    display: inline-block;
    width: 22px;
    height: 16px;
    margin-left: 3px;
  }

  #nav-container {
    display: flex;
    li {
      padding: 0px 20px;
    }
    a {
      line-height: 36px;
      font-size: 13px;
      color: #000000;
      font-family: "Inria Sans", sans-serif;
    }
    li:hover {
      border-radius: 100%;
      background: #fde44370;
    }
  }
`;

function Header({ isLogin }) {
  return (
    <>
      <HeaderComponent>
        <HeaderContainer>
          <Link to="/">
            <h1 className="logo">
              Sendy
              <img className="logo-img" src={logo} />
            </h1>
          </Link>
          {isLogin ? (
            <div id="nav-container">
              <li>
                <Link to="/">Write</Link>
              </li>
              <li>
                <Link to="/">mail</Link>
              </li>
              <li>
                <Link to="/mypage">mypage</Link>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>
            </div>
          ) : (
            <div id="nav-container">
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </div>
          )}
        </HeaderContainer>
      </HeaderComponent>
    </>
  );
}

export default Header;
