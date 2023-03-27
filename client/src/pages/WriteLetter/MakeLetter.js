import React, { useCallback, useEffect, useRef, useState } from "react";
import * as W from "./WriteStyled";
import keyIcon from "../../asset/key.png";
import RoundButton from "../commons/RoundButton";
import ShadowButton from "../commons/ShadowButton";
import { FONT_STYLE_V1 } from "../../style/fontStyle";
import { PALETTE_V1 } from "../../style/color";
import addImage from "../../asset/add-image.png";
import { BiX } from "react-icons/bi";
import useStore from "../../store/store";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { getCookie } from "../Certified/Cookie";

function MakeLetter({ makeLetterModalRef }) {
  const formSchema = yup.object({
    urlName: yup
      .string()
      .required(
        "url은 영문 소문자 또는 숫자가 포함되고 문자 구분자로 -를 사용할 수 있습니다."
      )
      .min(1, "최소 1자리 이상 입력해주세요.")
      .max(15, "최대 15자까지 가능합니다."),
    password: yup
      .string()
      .required("비밀번호는 숫자 4자리입니다.")
      .min(4, "4자리를 입력해주세요.")
      .max(4, "4자리를 입력해주세요")
      .matches(/[0-9]{4}/, "숫자 4자리를 입력해주세요"),
  });
  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });
  const [dragOver, setDragOver] = useState(false);
  const [hasFile, setHasFile] = useState(false);
  const [image, setImage] = useState(null);
  const { letterContents, setLetterContents } = useStore((state) => state);

  const renderFile = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      setHasFile(true);
      // setLetterContents({...letterContents, })
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
      }
    }
  };
  const handleDeleteFlie = (e) => {
    setHasFile(false);
    setImage(null);
  };
  const handleMakeLetter = () => {
    console.log(letterContents);
    return axios({
      method: "post",
      url: "/api/sendy/messages/write",
      headers: {
        "ngrok-skip-browser-warning": "12",
        Authorization: getCookie("accesstoken"),
      },
      body: JSON.stringify({ ...letterContents }),
    });
  };
  const handlePreview = () => {
    sessionStorage.setItem(
      "preview",
      JSON.stringify({ ...letterContents, image })
    );
    window.open("/writeletter/preview");
  };
  const handleUrlReg = (e) => {
    e.target.value = e.target.value.replace(
      /[ㄱ-힣~!@#$%^&*()_+|<>?:{}=\\`"';\.\,\[\]/]/g,
      ""
    );
    setLetterContents({ ...letterContents, urlName: e.target.value });
  };
  useEffect(() => {
    if (isValid) {
      setLetterContents({
        ...letterContents,
        password: watch("password"),
        urlName: watch("urlName"),
      });
    }
  }, [isValid]);

  return (
    <W.ModalWrapper className="make-letter" ref={makeLetterModalRef}>
      <W.ModalTitle>편지 생성</W.ModalTitle>
      <div className="make-letter-wrapper">
        <W.FlexRowWrapper className="align-items">
          <W.Label>URL</W.Label>
          <p id="necessity">(필수)</p>
        </W.FlexRowWrapper>
        <W.FlexRowWrapper className="URL-wrapper">
          <W.FlexRowWrapper className="align-items URL-input">
            <div className="position-relative">
              <div>https://www.sendy.site/letter</div>
              <W.MakeLetterInput
                className="URL-input"
                onKeyUp={handleUrlReg}
                {...register("urlName")}
              />
              {errors.urlName && (
                <W.ErrorMessage className="make-letter">
                  {errors.urlName.message}
                </W.ErrorMessage>
              )}
            </div>
          </W.FlexRowWrapper>
          <RoundButton
            className="check-button"
            width="65px"
            height="32px"
            fontStyle={FONT_STYLE_V1.body.body_12_light}
            backgroundColor={PALETTE_V1.yellow_basic}>
            중복체크
          </RoundButton>
        </W.FlexRowWrapper>
      </div>
      <W.FlexColunmWrapper>
        <W.FlexRowWrapper className="align-items">
          <W.Label>편지 비밀번호</W.Label>
          <p id="necessity">(선택) </p>
          {errors.password && (
            <W.ErrorMessage>{errors.password.message}</W.ErrorMessage>
          )}
        </W.FlexRowWrapper>
        <W.MakeLetterInput
          className="password-input"
          backgroundImg={keyIcon}
          placeholder=" * * * *"
          onKeyUp={(e) =>
            setLetterContents({ ...letterContents, password: e.target.value })
          }
          {...register("password")}></W.MakeLetterInput>
      </W.FlexColunmWrapper>
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

      <W.FlexRowWrapper className="button-wrapper">
        {/* <Link to="preview" state={{ ...letterContents }} target="_blank">
          <ShadowButton backgroundColor={PALETTE_V1.yellow_basic}>
            미리보기
          </ShadowButton>
        </Link> */}
        <ShadowButton
          onClick={handlePreview}
          backgroundColor={PALETTE_V1.yellow_basic}>
          미리보기
        </ShadowButton>
        <ShadowButton
          backgroundColor={PALETTE_V1.yellow_basic}
          onClick={handleMakeLetter}>
          완료
        </ShadowButton>
      </W.FlexRowWrapper>
    </W.ModalWrapper>
  );
}

export default MakeLetter;
