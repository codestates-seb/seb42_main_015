import React, { useCallback, useEffect, useRef, useState } from "react";
import * as M from "../MyPage/MyPageStyled";
import * as W from "./WriteStyled";
import keyIcon from "../../asset/key.png";
import RoundButton from "../commons/RoundButton";
import ShadowButton from "../commons/ShadowButton";
import { FONT_STYLE_V1 } from "../../style/fontStyle";
import { PALETTE_V1 } from "../../style/color";
import addImage from "../../asset/add-image.png";
import { BiX } from "react-icons/bi";

function MakeLetter({ makeLetterModalRef }) {
  const [dragOver, setDragOver] = useState(false);
  const [hasFile, setHasFile] = useState(false);
  const [image, setImage] = useState(null);
  const selectFileRef = useRef();
  const renderFile = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      setHasFile(true);
    };
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items) {
      if (
        e.dataTransfer.items[0].getAsFile().type !==
        ("image/png" || "image/jpeg" || "image/gif")
      ) {
        alert("이미지 파일만 업로드 가능합니다.");
        return;
      }
      if (e.dataTransfer.items.length > 1) {
        alert("사진은 하나만 업로드 가능합니다.");
        return;
      }
      const file = e.dataTransfer.items[0].getAsFile();
      renderFile(file);
    } else {
      renderFile(e.dataTransfer.files[0]);
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };
  const handleFile = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      let maxSize = 4 * 1024 * 1024;
      let fileSize = e.target.files[0].size;
      if (fileSize > maxSize) {
        alert("첨부파일 사이즈는 4MB 이내로 등록 가능합니다.");
      } else {
        renderFile(e.target.files[0]);
      }
    }
  };

  const handleDeleteFlie = (e) => {
    setHasFile(false);
    setImage(null);
  };

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
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className={dragOver ? "drag-file high-light" : "drag-file"}>
          <W.FlexRowWrapper className="upload-box">
            <W.FlexColunmWrapper className="align-center">
              <img src={addImage} alt="파일 아이콘" className="image" />
              <p className="message">업로드할 파일 끌어놓기</p>
            </W.FlexColunmWrapper>

            {hasFile ? (
              <div className="preview-container" draggable>
                <img src={image} alt="preview" className="preview" />
                <div className="icon-container" onClick={handleDeleteFlie}>
                  <BiX className="x-icon" />
                </div>
              </div>
            ) : (
              <></>
            )}
          </W.FlexRowWrapper>
        </div>
        <label
          onChange={handleFile}
          className="file-label"
          htmlFor="chooseFile">
          파일 선택
        </label>
        <input
          className="file"
          id="chooseFile"
          type="file"
          onChange={handleFile}
          ref={selectFileRef}
          accept="image/png, image/jpeg, image/gif"
          multiple={false}
        />
      </W.UploadBox>

      <W.FlexRowWrapper className="button-wrapper">
        <ShadowButton backgroundColor={PALETTE_V1.yellow_basic}>
          미리보기
        </ShadowButton>
        <ShadowButton backgroundColor={PALETTE_V1.yellow_basic}>
          완료
        </ShadowButton>
      </W.FlexRowWrapper>
    </W.ModalWrapper>
  );
}

export default MakeLetter;
