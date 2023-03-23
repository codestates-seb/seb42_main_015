import React, { useEffect, useState, useRef } from "react";
import * as W from "./WriteStyled";
import { HiOutlineCheck } from "react-icons/hi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useStore from "../../store/store";

function LetterContent({
  openExplaination,
  openSendMe,
  setOpenSendMe,
  sendMeChecked,
  setSendMeChecked,
  startDate,
  setContentLength,
  finalTranscript,
  resetTranscript,
  currentLetterTheme,
  browserSize,
}) {
  const weekday = ["일", "월", "화", "수", "목", "금", "토"];
  const currentDate = `${new Date().getFullYear()}.${(
    "00" +
    (new Date().getMonth() + 1)
  ).slice(-2)}.${("00" + new Date().getDate()).slice(-2)} ${
    weekday[new Date().getDay()]
  }`;
  const { contentFont, changeContentFont } = useStore((state) => state);
  const formSchema = yup.object({
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
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });

  const textarea = useRef();

  useEffect(() => {
    textarea.current.focus();
  }, []);

  useEffect(() => {
    textarea.current.value += " " + finalTranscript;
    resetTranscript();
  }, [finalTranscript]); //listening일 때로 바꾸기

  const handleSendMe = () => {
    setOpenSendMe(!openSendMe);
    setSendMeChecked(true);
  };
  const handleContentLength = (e) => {
    setContentLength(e.target.value.length);
  };
  return (
    <W.LetterBox currentLetterTheme={currentLetterTheme}>
      <W.FlexWrapper1>
        <W.BallonWrapper className="to-wrapper">
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
            browserSize > 767 ? (
              <W.BallonBottom1 id="ballon6">
                편지를 받을 사람 이름을 적습니다.
              </W.BallonBottom1>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </W.BallonWrapper>
        <W.Date>{currentDate}</W.Date>
      </W.FlexWrapper1>
      <W.SendMeWrapper>
        <W.BallonWrapper>
          <W.SendMeCheckBox
            className={sendMeChecked ? "active" : ""}
            onClick={handleSendMe}></W.SendMeCheckBox>
          {sendMeChecked ? (
            <HiOutlineCheck id="check-icon" onClick={handleSendMe} />
          ) : (
            <></>
          )}
        </W.BallonWrapper>
        <W.BallonWrapper>
          <W.SendMeLabel>나에게보내기</W.SendMeLabel>
          {openExplaination ? (
            browserSize > 767 ? (
              <W.BallonLeft id="ballon1">
                나에게 편지를 작성할 수 있습니다.
              </W.BallonLeft>
            ) : (
              <W.BallonTop>나에게 편지를 작성할 수 있습니다.</W.BallonTop>
            )
          ) : (
            <></>
          )}
        </W.BallonWrapper>
        {sendMeChecked ? (
          <span>{`${startDate.getFullYear()}/${
            startDate.getMonth() + 1
          }/${startDate.getDate()} ${startDate.getHours()}:${startDate.getMinutes()}`}</span>
        ) : (
          <></>
        )}
      </W.SendMeWrapper>
      <W.ContentTextarea
        font={contentFont}
        name="content"
        onInput={handleContentLength}
        {...register("content")}
        ref={textarea}></W.ContentTextarea>
      <W.FromWrapper>
        <W.BallonWrapper className="from-wrapper">
          <W.NameInputWrapper className="from-input">
            From
            <W.NameInput
              type="text"
              name="senderName"
              className="from-input"
              {...register("senderName")}></W.NameInput>
          </W.NameInputWrapper>
          {errors.senderName && (
            <W.ErrorMessage className="from-input">
              {errors.senderName.message}
            </W.ErrorMessage>
          )}
          {openExplaination ? (
            browserSize > 767 ? (
              <W.BallonBottom1 id="ballon7">
                편지를 보내는 사람 이름을 적습니다.
              </W.BallonBottom1>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </W.BallonWrapper>
      </W.FromWrapper>
    </W.LetterBox>
  );
}

export default LetterContent;
