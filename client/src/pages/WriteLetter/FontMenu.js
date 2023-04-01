import React from "react";
import * as W from "./WriteStyled";
import { FONT_STYLE_CONTENT, FONT_STYLE_V1 } from "../../style/fontStyle";
import useStore from "../../store/store";

function FontMenu() {
  const { letterContents, setLetterContents } = useStore();
  const { fontName } = letterContents;
  const handleChangeContentFont = (e) => {
    setLetterContents({ ...letterContents, fontName: e.target.textContent });
  };
  return (
    <W.FontContainer>
      <W.FontEl
        font={FONT_STYLE_V1.body.body_18_light}
        onClick={handleChangeContentFont}
        className={fontName === "프리텐다드" ? "active" : ""}>
        프리텐다드
      </W.FontEl>
      <W.FontEl
        font={FONT_STYLE_CONTENT.pixel_18}
        onClick={handleChangeContentFont}
        className={fontName === "도스샘물" ? "active" : ""}>
        도스샘물
      </W.FontEl>
      <W.FontEl
        font={FONT_STYLE_CONTENT.gangwonedu_18_bold}
        onClick={handleChangeContentFont}
        className={
          fontName === "강원교육모두체" ? "zero-padding active" : "zero-padding"
        }>
        강원교육모두체
      </W.FontEl>
      <W.FontEl
        font={FONT_STYLE_CONTENT.scoredream_16}
        onClick={handleChangeContentFont}
        className={fontName === "에스코어 드림" ? "active" : ""}>
        에스코어 드림
      </W.FontEl>
      <W.FontEl
        font={FONT_STYLE_CONTENT.taebaek_16}
        onClick={handleChangeContentFont}
        className={fontName === "태백 은하수체" ? "active" : ""}>
        태백 은하수체
      </W.FontEl>
      <W.FontEl
        font={FONT_STYLE_CONTENT.dachelove_18}
        onClick={handleChangeContentFont}
        className={fontName === "다채사랑" ? "active" : ""}>
        다채사랑
      </W.FontEl>
      <W.FontEl
        font={FONT_STYLE_CONTENT.whiteangle_18}
        onClick={handleChangeContentFont}
        className={fontName === "백의의 천사" ? "active" : ""}>
        백의의 천사
      </W.FontEl>
      <W.FontEl
        font={FONT_STYLE_CONTENT.gothicgoding_18}
        onClick={handleChangeContentFont}
        className={fontName === "고딕 아니고 고딩" ? "active" : ""}>
        고딕 아니고 고딩
      </W.FontEl>
      <W.FontEl
        font={FONT_STYLE_CONTENT.hyukee_18}
        onClick={handleChangeContentFont}
        className={fontName === "혁이체" ? "active" : ""}>
        혁이체
      </W.FontEl>
      <W.FontEl
        font={FONT_STYLE_CONTENT.leeseoyun_18}
        onClick={handleChangeContentFont}
        className={fontName === "이서윤체" ? "active" : ""}>
        이서윤체
      </W.FontEl>
      <W.FontEl
        font={FONT_STYLE_CONTENT.sangsang_20}
        onClick={handleChangeContentFont}
        className={fontName === "신비는 일곱살" ? "active" : ""}>
        신비는 일곱살
      </W.FontEl>
      <W.FontEl
        font={FONT_STYLE_CONTENT.cafe24oneprettynight_18}
        onClick={handleChangeContentFont}
        className={fontName === "카페24 고운밤" ? "active" : ""}>
        카페24 고운밤
      </W.FontEl>
      <W.FontEl
        font={FONT_STYLE_CONTENT.jejumyeongjo_18}
        onClick={handleChangeContentFont}
        className={fontName === "제주명조" ? "active" : ""}>
        제주명조
      </W.FontEl>
      <W.FontEl
        font={FONT_STYLE_CONTENT.ridibatang_18}
        onClick={handleChangeContentFont}
        className={fontName === "리디바탕" ? "active" : ""}>
        리디바탕
      </W.FontEl>
      <W.FontEl
        font={FONT_STYLE_CONTENT.nanumneo_16}
        onClick={handleChangeContentFont}
        className={fontName === "나눔스퀘어 네오" ? "active" : ""}>
        나눔스퀘어 네오
      </W.FontEl>
    </W.FontContainer>
  );
}

export default FontMenu;
