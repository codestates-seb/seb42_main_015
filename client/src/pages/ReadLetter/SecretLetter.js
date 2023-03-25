import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./ReadStyled";
import axios from "axios";
import { getCookie } from "../Certified/Cookie";
import FormScheme from "../Certified/FormScheme";

const ReadLetter = ({ enterPassword, setEnterPassword }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(FormScheme) });

  // alert("비밀번호가 일치합니다! 어떤 편지가 왔을까요?");
  // setEnterPassword(!enterPassword);
  // //! 추후 비밀번호가 맞는지 검증절차 필요

  const onSubmit = async (data) => {
    const { numberpassword } = data;
    console.log(numberpassword);
    await axios
      //hisdf -> {urlName}
      .get(`/api/sendy/messages/hisdf`, {
        headers: {
          "ngrok-skip-browser-warning": "12",
          Authorization: `${getCookie("accesstoken")}`,
        },
      })
      .then((res) => {
        console.log(res.body);
        if (res.body.password === numberpassword) {
          alert("비밀번호가 일치합니다! 어떤 편지가 왔을까요?");
          //todo : numberpassword -> Zstand에 넣어서 readletter에게 전달
          setEnterPassword(!enterPassword);
        } else {
          alert("비밀번호가 일치하지 않습니다. 편지를 열 수 없어요.");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <>
      <S.SWrapper theme="scret">
        <S.Secretform onSubmit={handleSubmit(onSubmit)}>
          <div className="head">편지 비밀번호를 입력해주세요.</div>
          <input
            className="pwdInput"
            name="numberpassword"
            type="password"
            placeholder="Password"
            {...register("numberpassword")}
          />
          {errors.numberpassword && <p>{errors.numberpassword.message}</p>}
          <input
            className="btn"
            type="submit"
            value="확인"
            disabled={isSubmitting}
          />
        </S.Secretform>
      </S.SWrapper>
    </>
  );
};

export default ReadLetter;
