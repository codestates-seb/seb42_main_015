import * as yup from "yup";

const FormScheme = yup.object().shape({
  username: yup
    .string()
    .required("한글, 영문, 숫자로 이루어진 2~10자리를 입력해주세요.")
    .min(2, "최소 2자리 이상 입력해주세요.")
    .max(10, "최대 10자까지 가능합니다.")
    .matches(
      /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/,
      "한글, 영문, 숫자로 이루어진 2~10자리를 입력해주세요."
    ),
  email: yup
    .string()
    .required("이메일을 입력해주세요")
    .email("이메일 형식이 아닙니다."),
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
  numberpassword: yup
    .string()
    .required("숫자로 이루어진 비밀번호 4자리를 입력해주세요.")
    .matches(
      /^(?=.*?[0-9]).{4}$/,
      "숫자로 이루어진 비밀번호 4자리를 입력해주세요."
    ),
});

export default FormScheme;
