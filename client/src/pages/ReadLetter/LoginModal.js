import * as L from "./ReadStyled";
import Modal from "../commons/Modal";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const LoginModal = () => {
  const formShema = yup.object({
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
        /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "영문 소문자, 숫자, 특수문자를 포함한 8~16자리를 입력해주세요."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(formShema) });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <Modal ContainerHeight={"500px"}>
      <L.ModalWrapper>
        <div className="loginText">Log in</div>
        <div className="oauth">
          <img src={require("../../asset/구글.png")} alt="Googole" />
          <img src={require("../../asset/카카오.png")} alt="Kakao" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="emailInput"
            {...register("email")}
            type="email"
            name="email"
            placeholder="email address"
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            className="pwdInput"
            {...register("password")}
            type="password"
            name="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <input
            className="btn"
            type="submit"
            value="Log in"
            disabled={isSubmitting}
          />
        </form>
        <div className="sub-form">
          <Link to="/setpwd">
            <li>forget Password</li>
          </Link>
          <Link to="/signup">
            <li>sign up</li>
          </Link>
        </div>
      </L.ModalWrapper>
    </Modal>
  );
};

export default LoginModal;
