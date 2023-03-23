import React from "react";
import * as W from "./WriteStyled";
import { FONT_STYLE_CONTENT, FONT_STYLE_V1 } from "../../style/fontStyle";
import useStore from "../../store/store";

function FontMenu() {
  const { contentFont, changeContentFont } = useStore((state) => state);

  const handleChangeContentFont = (e) => {
    changeContentFont(e.target.textContent);
  };
  return (
    <W.FontContainer>
      <W.FontEl
        font={FONT_STYLE_V1.body.body_18_light}
        onClick={handleChangeContentFont}
        className={contentFont === "프리텐다드" ? "active" : ""}>
        프리텐다드
      </W.FontEl>
      <W.FontEl
        font={FONT_STYLE_CONTENT.pixel_18}
        onClick={handleChangeContentFont}
        className={contentFont === "도스샘물" ? "active" : ""}>
        도스샘물
      </W.FontEl>
      <W.FontEl
        font={FONT_STYLE_CONTENT.gangwonedu_18_bold}
        onClick={handleChangeContentFont}
        className={
          contentFont === "강원교육모두체"
            ? "zero-padding active"
            : "zero-padding"
        }>
        강원교육모두체
      </W.FontEl>
    </W.FontContainer>
  );
}

export default FontMenu;
