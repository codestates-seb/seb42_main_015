import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Google from "../../asset/구글.png";
import Kakao from "../../asset/카카오.png";
import * as L from "./LoginFormStyled";

function Login() {
  //handleSubmit을 가져옵니다.
  const { register, watch, handleSubmit } = useForm();
  //"제출"을 했을 때 무슨일이 일어나는지 확인해봅시다.
  const onValid = (data) => console.log(data, "onvalid");
  const onInvalid = (data) => console.log(data, "onInvalid");

  return (
    <>
      <L.Background>
        <L.BackgroundYellow>
          <L.Container>
            <L.Form onSubmit={handleSubmit(onValid, onInvalid)}>
              <li className="formLeft">
                <ul className="login-form">
                  <li className="loginText">Log in</li>
                  <input
                    {...register("id")}
                    type="text"
                    placeholder="email address"
                  />
                  <input
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                  />
                  <input className="btn" type="submit" value="Log in" />

                  <div className="sub-form ">
                    <Link to="/">
                      <li>forget Password</li>
                    </Link>
                    <Link to="/signup">
                      <li>sign up</li>
                    </Link>
                  </div>
                  <div className="oauth-form">
                    <div className="oauth-head">Log in With</div>
                    <div className="oauth">
                      <img src={Google} alt="Googole" />
                      <img src={Kakao} alt="Googole" />
                    </div>
                  </div>
                </ul>
              </li>
              <li className="formRight">
                <ui className="welcome">welcome!</ui>
              </li>
            </L.Form>
          </L.Container>
        </L.BackgroundYellow>
      </L.Background>
    </>
  );
}

export default Login;
