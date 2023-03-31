import React from "react";
import { useState } from "react";
import * as W from "./WriteStyled";
import addImage from "../../asset/add-image.png";
import { BiX } from "react-icons/bi";

function ImageInput({ image, setImage, imageFile, setImageFile }) {
  const [dragOver, setDragOver] = useState(false);
  const [hasFile, setHasFile] = useState(false);
  const renderFile = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      setHasFile(true);
    };
  };
  const checkFileSize = (file) => {
    let maxSize = 4 * 1024 * 1024;
    let fileSize = file.size;
    if (fileSize > maxSize) {
      alert("첨부파일 사이즈는 4MB 이내로 등록 가능합니다.");
      return false;
    }
    return true;
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
    if (e.dataTransfer.items) {
      if (e.dataTransfer.items.length > 1) {
        alert("사진은 하나만 업로드 가능합니다.");
        return;
      } else if (
        e.dataTransfer.items[0].getAsFile().type !== "image/jpeg" &&
        e.dataTransfer.items[0].getAsFile().type !== "image/png" &&
        e.dataTransfer.items[0].getAsFile().type !== "image/gif"
      ) {
        alert("이미지 파일만 업로드 가능합니다.");
        return;
      } else if (checkFileSize(e.dataTransfer.items[0].getAsFile())) {
        renderFile(e.dataTransfer.items[0].getAsFile());
        setImageFile(e.dataTransfer.items[0].getAsFile());
      }
    } else {
      if (e.dataTransfer.files.length > 1) {
        alert("사진은 하나만 업로드 가능합니다.");
        return;
      } else if (
        e.dataTransfer.files[0].type !== "image/png" &&
        e.dataTransfer.files[0].type !== "image/jpeg" &&
        e.dataTransfer.files[0].type !== "image/gif"
      ) {
        alert("이미지 파일만 업로드 가능합니다.");
        return;
      } else if (checkFileSize(e.dataTransfer.files[0])) {
        renderFile(e.dataTransfer.files[0]);
        setImageFile(e.dataTransfer.files[0]);
      }
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };
  const handleDragleave = (e) => {
    setDragOver(false);
  };
  const handleFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (checkFileSize(e.target.files[0])) {
        renderFile(e.target.files[0]);
        setImageFile(e.target.files[0]);
      }
    }
  };
  const handleDeleteFlie = (e) => {
    setHasFile(false);
    setImage(null);
  };
  return (
    <div>
      <W.FlexRowWrapper className="align-items">
        <W.Label>뒷면 사진 업로드</W.Label>
        <p id="necessity">(선택)</p>
      </W.FlexRowWrapper>
      <W.UploadBox>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragleave}
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
          accept="image/png, image/jpeg, image/gif"
          multiple={false}
        />
      </W.UploadBox>
    </div>
  );
}

export default ImageInput;
