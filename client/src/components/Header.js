import React from "react";
import styled from "styled-components";
import BREAKPOINTMOBILE from "../breakpoint";
import { Link } from "react-router-dom";

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
    margin: 0px 20px;
  }

  .logo {
    width: 166px;
    height: 100%;
    padding: 0px 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: "Sriracha";
    font-size: 22px;
  }

  .logo-img {
    display: inline-block;
    width: 150px;
  }

  #nav-container {
    display: flex;
    li {
      padding: 6px 12px;
    }
    a {
      line-height: 36px;
      font-size: 13px;
      color: #000000;
      padding-right: 20px;
      font-family: "Inria Sans", sans-serif;
    }
    li:hover {
      background: #e3e6e8;
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
              <span className="logo-img"></span>
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
