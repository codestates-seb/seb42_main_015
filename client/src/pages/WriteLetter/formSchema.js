import * as yup from "yup";

export const formSchema = yup.object({
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
