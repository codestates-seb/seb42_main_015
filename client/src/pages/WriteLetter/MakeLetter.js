import React, { useState } from "react";
import * as W from "./WriteStyled";
import keyIcon from "../../asset/key.png";
import RoundButton from "../commons/RoundButton";
import ShadowButton from "../commons/ShadowButton";
import { FONT_STYLE_V1 } from "../../style/fontStyle";
import { PALETTE_V1 } from "../../style/color";
import useStore from "../../store/store";
import { useForm } from "react-hook-form";
import { formSchema } from "./formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Refresh from "../../util/Refresh";
import {
  getUrlNameExist,
  postMessage,
  postMessageImage,
} from "../commons/axios";
import ImageInput from "./ImageInput";
import { Loading } from "../../components/Loading";

function MakeLetter({ makeLetterModalRef }) {
  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });
  const [image, setImage] = useState(null);
  const { letterContents, setLetterContents } = useStore();
  const [imageFile, setImageFile] = useState();

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
      .catch((err) => {
        if (err.response.status === 401) {
          Refresh().then(() => {
            postMessage(letterContents).then(() => {
              postMessageImage(imageFile, letterContents.urlName).then(
                () => {}
              );
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
      /[A-Zㄱ-힣~!@#$%^&*()_+|<>?:{}=\\`"';\.\,\[\]/]/g,
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
      <ImageInput
        image={image}
        setImage={setImage}
        imageFile={imageFile}
        setImageFile={setImageFile}
      />
      <W.FlexRowWrapper className="button-wrapper">
        <ShadowButton
          onClick={handlePreview}
          backgroundColor={PALETTE_V1.yellow_basic}>
          미리보기
        </ShadowButton>
        {canUseUrl &&
        (letterContents?.password?.length === 4 ||
          letterContents.password === null) ? (
          <Link
            to={`/writeletter/complete/${letterContents?.urlName}`}
            state={{
              from: "writeletter",
            }}>
            <ShadowButton
              backgroundColor={PALETTE_V1.yellow_basic}
              onClick={handleMakeLetter}>
              완료
            </ShadowButton>
          </Link>
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
