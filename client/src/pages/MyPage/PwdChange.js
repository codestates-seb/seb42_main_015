import React, { useEffect, useState } from "react";
import * as M from "./PwdChangeStyled";
import { AiOutlineEnter, AiOutlineLock } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import GNB from "./GNB";
import ShadowButton from "../commons/ShadowButton";
import { getCookie } from "../Certified/Cookie";
import axios from "axios";
import Refresh from "../../util/Refresh";

function PwdChange() {
  const navigate = useNavigate();
  const { page } = useParams();
  const [user, setUser] = useState();
  const [currentPwd, setCurrentPwd] = useState();
  const [changePwd, setChangePwd] = useState();
  const memberId = sessionStorage.getItem("memberId");

  useEffect(() => {
    handleUser();
  }, []);

  const handleUser = () => {
    axios({
      method: "get",
      url: `/api/sendy/users/${memberId}`,
      headers: {
        "ngrok-skip-browser-warning": "230327",
        Authorization: getCookie("accessToken"),
      },
    })
      .then((res) => setUser(res.data))
      .catch((err) => {
        if (err.response.status === 401) {
          Refresh().then(() => handleUser());
        }
      });
  };

  const handleCurrentPwd = () => {
    axios({
      method: "post",
      url: `/api/sendy/users/verify/password/${memberId}`,
      headers: {
        "ngrok-skip-browser-warning": "230327",
        Authorization: getCookie("accessToken"),
      },
      data: { password: currentPwd },
    })
      .then((res) => navigate("/pwdchange/2"))
      .catch((err) => {
        if (err.response.status === 401) {
          Refresh().then(() => handleCurrentPwd());
        }
      });
  };

  const handleChangePwd = () => {
    axios({
      method: "patch",
      url: `/api/sendy/users/password/${memberId}`,
      headers: {
        "ngrok-skip-browser-warning": "230327",
        Authorization: getCookie("accessToken"),
      },
      data: { curPassword: currentPwd, newPassword: changePwd },
    })
      .then((res) => navigate("/pwdchange/3"))
      .catch((err) => {
        if (err.response.status === 401) {
          Refresh().then(() => handleChangePwd());
        }
      });
  };

  const formSchma = yup.object({
    confirm: yup.string().required("비밀번호가 일치하지 않습니다."),
    password: yup
      .string()
      .required("영문 소문자, 숫자, 특수문자를 포함한 8~16자리를 입력해주세요.")
      .min(8, "최소 8자리 이상 입력해주세요.")
      .max(16, "최대 16자까지 가능합니다.")
      .matches(
        /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/,
        "영문 소문자, 숫자, 특수문자를 포함한 8~16자리를 입력해주세요."
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchma) });

  return (
    <M.PwdChangeWrap>
      <GNB />
      <M.PwdChangeContainer>
        <M.CardBox />
        {page !== "3" && (
          <M.PwdChangeContents>
            <M.UserBox>
              <M.UserImg>
                <img src={user?.profileImage} alt="" />
              </M.UserImg>
              <M.UserName>{user?.nickname}</M.UserName>
            </M.UserBox>
            <M.PwdBox>
              <M.PwdChangeTitle>Password</M.PwdChangeTitle>
              {page === "1" && (
                <M.InputContainer>
                  <M.Explain>
                    비밀번호 변경을 위해 <br /> 기존 비밀번호 확인이 필요합니다.
                  </M.Explain>
                  <M.InputCase>
                    <AiOutlineLock />
                    <M.PwdInput
                      type="password"
                      name="confirm"
                      placeholder="password"
                      {...register("confirm")}
                      onChange={(e) => setCurrentPwd(e.target.value)}
                    />
                    <AiOutlineEnter
                      className="icon"
                      onClick={handleCurrentPwd}
                    />
                  </M.InputCase>
                  {errors.confirm && (
                    <M.ErrorMsg>{errors.confirm.message}</M.ErrorMsg>
                  )}
                </M.InputContainer>
              )}
              {page === "2" && (
                <M.InputContainer>
                  <M.PwdLabel>Password</M.PwdLabel>
                  <M.InputCase>
                    <M.PwdInput
                      name="password"
                      type="password"
                      {...register("password")}
                      onChange={(e) => setChangePwd(e.target.value)}
                    />
                    {errors.password && (
                      <M.ErrorMsg>{errors.password.message}</M.ErrorMsg>
                    )}
                  </M.InputCase>
                  <M.PwdLabel>Password Confirm</M.PwdLabel>
                  <M.InputCase>
                    <M.PwdInput
                      type="password"
                      name="passwordConfirm"
                      {...register("passwordConfirm")}
                    />
                  </M.InputCase>
                  {errors.passwordConfirm && (
                    <M.ErrorMsg>{errors.passwordConfirm.message}</M.ErrorMsg>
                  )}
                  <M.ButtonBox>
                    <M.Button onClick={handleChangePwd}>확인</M.Button>
                  </M.ButtonBox>
                </M.InputContainer>
              )}
            </M.PwdBox>
          </M.PwdChangeContents>
        )}
        {page === "3" && (
          <M.SuccessWrap>
            <M.SuccessContainer>
              <M.SuccessImg
                className="suc1"
                src={require("../../asset/뽀시래기/보라 뽀시래기.png")}
                alt=""
              />
              <M.SuccessImg
                className="suc2"
                src={require("../../asset/뽀시래기/빨주노 뽀시래기.png")}
                alt=""
              />
              <M.SuccessImg
                className="suc3"
                src={require("../../asset/뽀시래기/초록 뽀시래기.png")}
                alt=""
              />
              <M.SuccessImg
                className="suc4"
                src={require("../../asset/뽀시래기/파랑 뽀시래기.png")}
                alt=""
              />
              <M.SuccessImg
                className="suc5"
                src={require("../../asset/뽀시래기/핑크 뽀시래기.png")}
                alt=""
              />
              <M.SuccessImg
                className="suc6"
                src={require("../../asset/뽀시래기/핑크 여러개 뽀시래기.png")}
                alt=""
              />
              <M.SuccessImg
                className="suc7"
                src={require("../../asset/뽀시래기/하트 뽀시래기.png")}
                alt=""
              />
              <M.SuccessTitle>비밀번호 변경 완료</M.SuccessTitle>
              <M.SuccessContent>
                비밀번호 변경이 완료되었습니다.
                <br />
                로그인 페이지에서 로그인 해주세요.
              </M.SuccessContent>
              <ShadowButton
                backgroundColor="#FFFB95"
                onClick={() => navigate("/login")}
              >
                Login
              </ShadowButton>
            </M.SuccessContainer>
          </M.SuccessWrap>
        )}
      </M.PwdChangeContainer>
    </M.PwdChangeWrap>
  );
}

export default PwdChange;
