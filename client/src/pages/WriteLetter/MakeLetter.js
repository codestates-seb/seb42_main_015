import React, { useEffect, useState } from "react";
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
import { formSchema } from "./formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Refresh from "../../util/Refresh";
import {
  getUrlNameExist,
  postMessage,
  postMessageImage,
} from "../commons/axios";

function MakeLetter({ makeLetterModalRef }) {
  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });
  const [dragOver, setDragOver] = useState(false);
  const [hasFile, setHasFile] = useState(false);
  const [image, setImage] = useState(null);
  const { letterContents, setLetterContents } = useStore();
  const [imageFile, setImageFile] = useState();
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
  const [canUseUrl, setCanUseUrl] = useState(null);
  const handleCheckUrlName = () => {
    getUrlNameExist(letterContents.urlName)
      .then(() => {
        setCanUseUrl(true);
      })
      .catch((err) => {
        if (err.response.status === 409) {
          setCanUseUrl(false);
        } else if (err.response.status === 401) {
          Refresh().then(() => {
            getUrlNameExist(letterContents.urlName).then(() => {
              setCanUseUrl(true);
            });
          });
        }
      });
  };

  const navigate = useNavigate();
  const handleMakeLetter = () => {
    return postMessage(letterContents)
      .then(() => {
        postMessageImage(imageFile, letterContents.urlName);
      })
      .then(() => {
        navigate(`/readletter/${letterContents.urlName}`);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          Refresh()
            .then(() => {
              postMessage(letterContents);
            })
            .then(() => {
              postMessageImage(imageFile, letterContents.urlName).then(() => {
                navigate(`/readletter/${letterContents.urlName}`);
              });
            });
        } else {
          console.log(err);
        }
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
    setCanUseUrl(null);
    e.target.value = e.target.value.replace(
      /[ㄱ-힣~!@#$%^&*()_+|<>?:{}=\\`"';\.\,\[\]/]/g,
      ""
    );
    setLetterContents({ ...letterContents, urlName: e.target.value });
  };

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
              <div>https://www.sendy.site/readletter/</div>
              {canUseUrl ? (
                <W.MakeLetterInput
                  disabled
                  className="URL-input"
                  maxLength="15"
                  {...register("urlName")}
                />
              ) : (
                <W.MakeLetterInput
                  className="URL-input"
                  onInput={handleUrlReg}
                  {...register("urlName")}
                />
              )}

              {errors.urlName && (
                <W.ErrorMessage className="make-letter">
                  {errors.urlName.message}
                </W.ErrorMessage>
              )}
              {canUseUrl === false ? (
                <W.ErrorMessage className="url-verify-error">
                  중복된 url입니다.
                </W.ErrorMessage>
              ) : (
                <></>
              )}
            </div>
          </W.FlexRowWrapper>
          {canUseUrl ? (
            <BsFillCheckCircleFill className="done-check-icon" />
          ) : (
            <RoundButton
              className="check-button"
              width="65px"
              height="32px"
              fontStyle={FONT_STYLE_V1.body.body_12_light}
              backgroundColor={PALETTE_V1.yellow_basic}
              onClick={handleCheckUrlName}>
              중복체크
            </RoundButton>
          )}
        </W.FlexRowWrapper>
      </div>
      <W.FlexColunmWrapper>
        <W.FlexRowWrapper className="align-items">
          <W.Label>편지 비밀번호</W.Label>
          <p id="necessity">(선택) </p>
        </W.FlexRowWrapper>
        <div className="position-relative">
          <W.MakeLetterInput
            className="password-input"
            backgroundImg={keyIcon}
            placeholder=" * * * *"
            onInput={(e) => {
              if (e.target.value !== "") {
                setLetterContents({
                  ...letterContents,
                  password: e.target.value,
                });
              } else {
                setLetterContents({
                  ...letterContents,
                  password: null,
                });
              }
            }}
            maxLength="4"
            {...register("password")}></W.MakeLetterInput>
          {errors.password && (
            <W.ErrorMessage className="password-error">
              {errors.password.message}
            </W.ErrorMessage>
          )}
        </div>
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
        <ShadowButton
          onClick={handlePreview}
          backgroundColor={PALETTE_V1.yellow_basic}>
          미리보기
        </ShadowButton>
        {canUseUrl &&
        (letterContents?.password?.length === 4 ||
          letterContents.password === null) ? (
          <ShadowButton
            backgroundColor={PALETTE_V1.yellow_basic}
            onClick={handleMakeLetter}>
            완료
          </ShadowButton>
        ) : (
          <ShadowButton disabled backgroundColor="#d9d9d9">
            완료
          </ShadowButton>
        )}
      </W.FlexRowWrapper>
    </W.ModalWrapper>
  );
}

export default MakeLetter;
