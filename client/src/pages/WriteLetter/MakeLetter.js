import React from "react";
import * as M from "../MyPage/MyPageStyled";
import * as W from "./WriteStyled";
import linkIcon from "../../asset/link.png";
import keyIcon from "../../asset/key.png";
import RoundButton from "../commons/RoundButton";
import ShadowButton from "../commons/ShadowButton";
import { FONT_STYLE_V1 } from "../../style/fontStyle";
import { PALETTE_V1 } from "../../style/color";
import addImage from "../../asset/add-image.png";

function MakeLetter({ makeLetterModalRef }) {
  return (
    <W.ModalWrapper className="make-letter" ref={makeLetterModalRef}>
      <M.ModalTitle>편지 생성</M.ModalTitle>
      <div className="make-letter-wrapper">
        <W.FlexRowWrapper className="align-items">
          <W.Label>URL</W.Label>
          <p id="necessity">(필수)</p>
        </W.FlexRowWrapper>

        <W.FlexRowWrapper className="URL-wrapper">
          <W.FlexRowWrapper className="align-items">
            <div>https:/sendy/letter/</div>
            <W.MakeLetterInput className="URL-input"></W.MakeLetterInput>
          </W.FlexRowWrapper>
          <RoundButton
            width="65px"
            height="32px"
            fontStyle={FONT_STYLE_V1.body.body_8_light}
            backgroundColor={PALETTE_V1.yellow_basic}>
            중복체크
          </RoundButton>
        </W.FlexRowWrapper>
      </div>
      <W.FlexColunmWrapper>
        <W.FlexRowWrapper className="align-items">
          <W.Label>편지 비밀번호</W.Label>
          <p id="necessity">(선택) </p>
        </W.FlexRowWrapper>
        <W.MakeLetterInput
          backgroundImg={keyIcon}
          placeholder=" * * * *"></W.MakeLetterInput>
      </W.FlexColunmWrapper>
      <W.FlexRowWrapper className="align-items">
        <W.Label>뒷면 사진 업로드</W.Label>
        <p id="necessity">(선택)</p>
      </W.FlexRowWrapper>
      <W.UploadBox>
        <div className="drag-file">
          <img src={addImage} alt="파일 아이콘" className="image" />
          <p className="message">업로드할 파일 끌어놓기</p>
          <img src="" alt="미리보기 이미지" class="preview"></img>
        </div>
        <label className="file-label" for="chooseFile">
          파일 선택
        </label>
        <input
          className="file"
          id="chooseFile"
          type="file"
          onchange="dropFile.handleFiles(this.files)"
          accept="image/png, image/jpeg, image/gif"
        />
      </W.UploadBox>

      <W.FlexRowWrapper className="button-wrapper">
        <ShadowButton backgroundColor={PALETTE_V1.yellow_basic}>
          완료
        </ShadowButton>
      </W.FlexRowWrapper>
    </W.ModalWrapper>
  );
}

export default MakeLetter;
