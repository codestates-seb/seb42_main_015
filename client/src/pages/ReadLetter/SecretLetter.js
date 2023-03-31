import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./ReadStyled";
import * as yup from "yup";
import useStore from "../../store/store";

const ReadLetter = ({ setEnterPassword }) => {
  const { letterPassword, setLetterPassword } = useStore();

  const FormScheme = yup.object().shape({
    numberpassword: yup
      .string()
      .required("숫자로 이루어진 비밀번호 4자리를 입력해주세요.")
      .matches(
        /^(?=.*?[0-9]).{4}$/,
        "숫자로 이루어진 비밀번호 4자리를 입력해주세요."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(FormScheme) });

  const onSubmit = async (data) => {
    const { numberpassword } = data;
    if (String(letterPassword) === String(numberpassword)) {
      alert("비밀번호가 일치합니다! 어떤 편지가 왔을까요?");
      setEnterPassword(true);
    } else {
      alert("비밀번호가 일치하지 않습니다. 편지를 열 수 없어요.");
    }
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
