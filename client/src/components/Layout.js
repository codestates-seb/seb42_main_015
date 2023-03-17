import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

function Layout({ displayFooter }) {
  return (
    <BodyWrap>
      <Outlet />
      {displayFooter && <Footer />}
    </BodyWrap>
  );
}

export default Layout;

const BodyWrap = styled.div``;