import React from "react";
import * as M from "./MyPageStyled";
import useStore from "../../store/store";
import { useNavigate } from "react-router-dom";

function GNB() {
  const { currentPage, changeCurrentPage } = useStore((state) => state);
  const navigate = useNavigate();

  const handleClick = (e) => {
    switch (e.target.textContent) {
      case "내정보":
        changeCurrentPage("MyPage");
        navigate("/mypage");
        break;
      case "비밀번호 수정":
        changeCurrentPage("PwdChange");
        navigate("/pwdchange");
        break;
      case "휴지통":
        changeCurrentPage("Trash");
        navigate("/trash");
        break;
      default:
        break;
    }
  };

  return (
    <M.GNBWrapper>
      <M.GNBMenu
        onClick={handleClick}
        className={currentPage === "MyPage" ? "active" : ""}>
        내정보
      </M.GNBMenu>
      <M.GNBMenu
        onClick={handleClick}
        className={currentPage === "PwdChange" ? "active" : ""}>
        비밀번호 수정
      </M.GNBMenu>
      <M.GNBMenu
        onClick={handleClick}
        className={currentPage === "Trash" ? "active" : ""}>
        휴지통
      </M.GNBMenu>
    </M.GNBWrapper>
  );
}

export default GNB;
