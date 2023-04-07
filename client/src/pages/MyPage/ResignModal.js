import React, { useEffect, useState } from "react";
import * as M from "./MyPageStyled";
import { BsArrowRight } from "react-icons/bs";
import SquareButton from "../commons/SquareButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { checkPassword, deleteMember } from "../commons/axios";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../Certified/Cookie";
import Refresh from "../../util/Refresh";

function ResignModal({ setOpenResignModal, modalRef }) {
  const [modalStage, setModalStage] = useState(0);
  const title = ["비밀번호 확인", "⛔ 탈퇴 시 주의사항 ⛔", ""];
  const notice = [
    [
      `회원탈퇴를 위해 사용자 인증이 필요합니다.`,
      `현재 비밀번호를 입력해주세요.`,
    ],
    [
      `우편함에 저장된 편지 내용은 모두 삭제됩니다.`,
      `탈퇴한 회원 정보는 복구가 불가합니다.`,
    ],
    [`그동안 감사했습니다.`, `안녕히 가세요!`],
  ];
  const formSchema = yup.object({
    password: yup
      .string()
      .required("영문 소문자, 숫자, 특수문자를 포함한 8~16자리를 입력해주세요.")
      .min(8, "최소 8자리 이상 입력해주세요.")
      .max(16, "최대 16자까지 가능합니다.")
      .matches(
        /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/,
        "영문 소문자, 숫자, 특수문자를 포함한 8~16자리를 입력해주세요."
      ),
  });
  const {
    register,
    watch,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });

  const handleStage = (e) => {
    if (isValid) {
      if (e._reactName === "onKeyUp" && e.key === "Enter") {
        setModalStage(modalStage + 1);
      } else if (e._reactName === "onClick") {
        setModalStage(modalStage + 1);
      }
    }
  };

  const handleQuit = () => {
    setOpenResignModal(false);
  };

  const navigate = useNavigate();
  const handleDeletemember = () => {
    navigate("/");
    deleteMember()
      .then(() => {
        sessionStorage.clear();
        localStorage.clear();
        removeCookie("accessToken", {
          path: "/",
        });
        navigate("/");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const [isRightPassword, setIsRightPassword] = useState(null);
  const handleCheckPassword = () => {
    checkPassword(watch("password"))
      .then(() => {
        setIsRightPassword(true);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setIsRightPassword(false);
        } else if (err.response.status === 401) {
          Refresh().then(() => {
            checkPassword(watch("password"))
              .then(() => {
                setIsRightPassword(true);
              })
              .catch((err) => {
                if (err.response.status === 400) {
                  setIsRightPassword(false);
                }
              });
          });
        }
      });
  };

  return (
    <M.ModalWrapper ref={modalRef}>
      <M.ModalTitle>{title[modalStage]}</M.ModalTitle>
      <div className="notice">
        {notice[modalStage].map((el, idx) => (
          <p key={modalStage + "-" + idx}>
            {el}
            <br />
          </p>
        ))}
      </div>
      {modalStage === 0 ? (
        <div className="input-wrapper">
          <div className="align-center">
            <M.PwdInput
              placeholder="Password"
              {...register("password")}
              onKeyUp={handleStage}></M.PwdInput>
          </div>

          {errors.password && (
            <M.PwdError>{errors.password.message}</M.PwdError>
          )}
          {isRightPassword === false ? (
            <M.PwdError>현재 비밀번호와 일치하지 않습니다.</M.PwdError>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
      {modalStage === 2 ? (
        <M.FlexWrapper3>
          <SquareButton onClick={handleQuit}>취소</SquareButton>
          <SquareButton onClick={handleDeletemember}>작별인사하기</SquareButton>
        </M.FlexWrapper3>
      ) : (
        <></>
      )}
      <M.NextIconWrapper
        onClick={(e) => {
          if (modalStage === 0) {
            handleCheckPassword();
          } else {
            handleStage(e);
          }
        }}>
        {modalStage === 2 ? (
          <></>
        ) : (
          <BsArrowRight className={isValid ? "active" : ""} size="30" />
        )}
      </M.NextIconWrapper>
    </M.ModalWrapper>
  );
}

export default ResignModal;
