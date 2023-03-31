import React from "react";
import { useNavigate } from "react-router-dom";

function Redirect(state) {
  const navigate = useNavigate();
  switch (state) {
    case "login":
      if (sessionStorage.getItem("memberId")) {
        navigate("/");
      }
      break;
    default:
      return;
  }
}

export default Redirect;
