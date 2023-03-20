import React from "react";
import styled from "styled-components";
import BREAKPOINTMOBILE from "../breakpoint";
import { Link } from "react-router-dom";
import logo from "../asset/작은편지.png";
import postbox from "../asset/postbox.svg";

const HeaderComponent = styled.header`
  align-items: center;
  background: #fcfbf4;
  border-bottom: 1px solid #312f2b;
  display: flex;
  width: 100%;
  height: 60px;
  position: sticky;
  z-index: 90;
`;

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0px 50px;
  width: 100vw;

  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin: 0px 30px;
  }

  .logo {
    padding: 0px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Sriracha";
    font-size: 2.1rem;
    padding-bottom: 4px;

    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      font-size: 1.4rem;
    }
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
    .postImg {
      width: 35px;
      padding-top: 2px;
    }
  }
  a {
    line-height: 36px;
    font-size: 1.2rem;
    color: #000000;
    font-family: "Inria Sans", sans-serif;

    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      font-size: 0.8rem;
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
                <Link to="/writeletter">Write</Link>
              </li>
              <li>
                <Link to="/letterbox">
                  <img className="postImg" src={postbox} />
                </Link>
              </li>
              <li>
                <Link to="/mypage">mypage</Link>
              </li>
              <li>
                <Link to="/completeLogout">Logout</Link>
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
