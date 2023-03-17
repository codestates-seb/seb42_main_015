import React, { useEffect, useState } from "react";
import * as W from "./WriteStyled";
import { HiOutlineCheck } from "react-icons/hi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function LetterContent({ openExplaination, sendMe, setSendMe }) {
  const formShema = yup.object({
    receiverName: yup
      .string()
      .required("1 ~ 15자를 입력해주세요.")
      .min(1, "최소 1자리 이상 입력해주세요.")
      .max(15, "최대 15자까지 가능합니다."),
    content: yup
      .string()
      .required("7000자 미만으로 입력해주세요.")
      .max(7000, "최대 7000자까지 가능합니다."),
    senderName: yup
      .string()
      .required("1 ~ 15자를 입력해주세요.")
      .min(1, "최소 1자리 이상 입력해주세요.")
      .max(15, "최대 15자까지 가능합니다."),
  });
  const {
    register,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(formShema) });
  const weekday = ["일", "월", "화", "수", "목", "금", "토"];
  const currentDate = `${new Date().getFullYear()}.${new Date().getMonth()}.${new Date().getDate()} ${
    weekday[new Date().getDay()]
  }`;
  const handleSendMe = () => {
    setSendMe(!sendMe);
  };

  return (
    <W.LetterBox>
      <W.FlexWrapper1>
        <W.BallonWrapper>
          <W.NameInputWrapper>
            To
            <W.NameInput
              name="receiverName"
              type="text"
              {...register("receiverName")}
            />
          </W.NameInputWrapper>
          {errors.receiverName && (
            <W.ErrorMessage>{errors.receiverName.message}</W.ErrorMessage>
          )}
          {openExplaination ? (
            <W.BallonBottom1 id="ballon6">
              편지를 받을 사람 이름을 적습니다.
            </W.BallonBottom1>
          ) : (
            <></>
          )}
        </W.BallonWrapper>
        <W.Date>{currentDate}</W.Date>
      </W.FlexWrapper1>
      <W.SendMeWrapper>
        <W.BallonWrapper>
          <W.SendMeCheckBox
            className={sendMe ? "active" : ""}
            onClick={handleSendMe}></W.SendMeCheckBox>
          {sendMe ? (
            <HiOutlineCheck id="check-icon" size="25" onClick={handleSendMe} />
          ) : (
            <></>
          )}
        </W.BallonWrapper>
        <W.BallonWrapper>
          <W.SendMeLabel>나에게보내기</W.SendMeLabel>
          {openExplaination ? (
            <W.BallonLeft id="ballon1">
              나에게 편지를 작성할 수 있습니다.
            </W.BallonLeft>
          ) : (
            <></>
          )}
        </W.BallonWrapper>
      </W.SendMeWrapper>
      <W.ContentTextarea
        name="content"
        {...register("content")}></W.ContentTextarea>
      <W.FromWrapper>
        <W.BallonWrapper>
          <W.NameInputWrapper>
            From
            <W.NameInput
              type="text"
              name="senderName"
              {...register("senderName")}></W.NameInput>
          </W.NameInputWrapper>
          {errors.senderName && (
            <W.ErrorMessage>{errors.senderName.message}</W.ErrorMessage>
          )}
          {openExplaination ? (
            <W.BallonBottom1 id="ballon7">
              편지를 보내는 사람 이름을 적습니다.
            </W.BallonBottom1>
          ) : (
            <></>
          )}
        </W.BallonWrapper>
      </W.FromWrapper>
    </W.LetterBox>
  );
}

export default LetterContent;
