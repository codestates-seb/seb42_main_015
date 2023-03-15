import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as L from "./FormStyled";
import Google from "../../asset/구글.png";
import Kakao from "../../asset/카카오.png";
import img1 from "../../asset/해바라기.png";
import img2 from "../../asset/하늘.png";

function Login() {
  //handleSubmit을 가져옵니다.
  const { register, watch, handleSubmit } = useForm();
  //"제출"을 했을 때 무슨일이 일어나는지 확인해봅시다.
  const onValid = (data) => console.log(data, "onvalid");
  const onInvalid = (data) => console.log(data, "onInvalid");

  return (
    <>
      <L.Background>
        <L.Container>
          <L.BackgroundYellow />
          <L.LogForm onSubmit={handleSubmit(onValid, onInvalid)}>
            <li className="formLeft">
              <ul className="login-form">
                <li className="loginText">Log in</li>
                <input
                  className="idInput"
                  {...register("id")}
                  type="text"
                  placeholder="email address"
                />
                <input
                  className="pwdInput"
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
                    <img src={Kakao} alt="Kakao" />
                  </div>
                </div>
              </ul>
            </li>
            <li className="formRight">
              <ui className="welcome">welcome!</ui>
              <div className="imgWrapper">
                <div className="section1">
                  <img src={img1} alt="Sunflower"></img>
                  <span className="box">sunflower</span>
                </div>
                <div className="section2">
                  <img src={img2} alt="Sky"></img>
                  <span className="box">cloud</span>
                </div>
              </div>
              <div className="oauth-form">
                <div className="oauth-head">Log in With</div>
                <div className="oauth">
                  <img src={Google} alt="Googole" />
                  <img src={Kakao} alt="Kakao" />
                </div>
              </div>
            </li>
          </L.LogForm>
        </L.Container>
      </L.Background>
    </>
  );
}

export default Login;
