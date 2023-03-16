import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as L from "./FormStyled";

function Login() {
  //handleSubmit을 가져옵니다.
  const { register, watch, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <L.Container>
        <L.BackgroundYellow theme="login" />
        <L.LogForm theme="login" onSubmit={handleSubmit(onSubmit)}>
          <div className="formLeft">
            <div className="login-form">
              <div className="loginText">Log in</div>
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
                  <img src={require("../../asset/구글.png")} alt="Googole" />
                  <img src={require("../../asset/카카오.png")} alt="Kakao" />
                </div>
              </div>
            </div>
          </div>
          <div className="formRight">
            <div className="welcome">welcome!</div>
            <div className="imgWrapper">
              <div className="section1">
                <img
                  src={require("../../asset/해바라기.png")}
                  alt="Sunflower"
                ></img>
                <span className="box">sunflower</span>
              </div>
              <div className="section2">
                <img src={require("../../asset/하늘.png")} alt="Sky"></img>
                <span className="box">cloud</span>
              </div>
            </div>
            <div className="oauth-form">
              <div className="oauth-head">Log in With</div>
              <div className="oauth">
                <img src={require("../../asset/구글.png")} alt="Googole" />
                <img src={require("../../asset/카카오.png")} alt="Kakao" />
              </div>
            </div>
          </div>
        </L.LogForm>
      </L.Container>
    </>
  );
}

export default Login;
