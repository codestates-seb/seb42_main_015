import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as L from "./ReadStyled";
import axios from "axios";
import { setCookie, getCookie } from "../Certified/Cookie";
import { GoogleOauthLogin } from "../Certified/OauthGoogle";
import { formSchema, headers, options } from "../Certified/FormSchema.js";

const LoginModal = ({ ModalRef, setIsKeeping }) => {
  //로그인되면 모달 닫기
  const CloseModal = () => {
    alert("로그인되었습니다.");
    console.log("accesstoken", getCookie("accesstoken"));
    setIsKeeping(false);
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });

  //! 로그인 제출 버튼
  const onFormSubmit = async (data) => {
    const { email, password } = data;
    await axios
      .post(
        `/api/sendy/auth/login`,
        { username: email, password: password },
        {
          headers,
        }
      )
      .then((res) => {
        CloseModal();
        if (res.headers.getAuthorization) {
          //! refresh token은 -> local storage에 저장
          localStorage.setItem("refreshToken", res.headers.get("Refresh"));
          //! access token은 -> cookie에 저장
          setCookie(
            "accesstoken",
            res.headers.get("Authorization").split(" ")[1],
            {
              options,
            }
          );
        }
      })
      .catch((err) => {
        console.log(err);
        alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
      });
  };

  return (
    <L.ModalWrapper ref={ModalRef}>
      <div className="loginText">Log in</div>
      <div className="oauth">
        <img
          src={require("../../asset/구글.png")}
          alt="Googole"
          onClick={GoogleOauthLogin}
        />
      </div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
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
          onClick={CloseModal}
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
  );
};

export default LoginModal;
