import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BREAKPOINTMOBILE from "../breakpoint";

const Background = styled.div`
  height: 90vh;
  background-color: #fcfbf4;
  overflow: hidden;
`;

const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  overflow: hidden;
  width: 62rem;
  height: 42rem;
  background-color: #fff;
  border: 1px solid black;
  display: flex;
  margin-bottom: 2rem;

  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 20rem;
    height: 32rem;
  }

  .formLeft {
    flex-grow: 1;
    flex-direction: column;
    border-right: 1px solid #000;
    padding: 10px 30px 30px;
    flex-direction: column;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      border-right: 0px solid #000;
      font-size: 2rem;
    }

    .login-form {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        font-size: 2.5rem;
      }
      .loginText {
        font-size: 4rem;
        font-family: "Sriracha";
        -webkit-text-stroke: 1px #000;
        color: #fff;
      }

      > input {
        width: 425px;
      }

      .sub-form {
        flex-direction: row;
        justify-content: space-around;

        li {
          padding: 4px 0;
          &:first-child {
            margin: 0;
          }
        }
      }
    }
  }

  .formRight {
    flex-grow: 1;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      display: none;
    }
    .welcome {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Raleway", sans-serif;
      font-size: 2rem;
      margin-top: 3rem;
    }
  }
`;

function Login() {
  //handleSubmit을 가져옵니다.
  const { register, watch, handleSubmit } = useForm();
  //"제출"을 했을 때 무슨일이 일어나는지 확인해봅시다.
  const onValid = (data) => console.log(data, "onvalid");
  const onInvalid = (data) => console.log(data, "onInvalid");

  return (
    <>
      <Background>
        <Container>
          <Form onSubmit={handleSubmit(onValid, onInvalid)}>
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
                  <li>
                    <Link to="/signup">forget Password</Link>
                  </li>
                  <li>
                    <Link to="/signup">sign up</Link>
                  </li>
                </div>
              </ul>
            </li>
            <li className="formRight">
              <ui className="welcome">welcome!</ui>
            </li>
          </Form>
        </Container>
      </Background>
    </>
  );
}

export default Login;

const Gradient = styled.div`
  height: 40%;
  background: linear-gradient(
    180deg,
    rgb(105, 209, 115) 0%,
    rgba(255, 155, 99, 0) 100%
  );
`;

const Vrticalline = styled.div`
  display: flex;
  width: 45rem;
  height: 20rem;
  border-left: 1px solid #000000;
  border-right: 1px solid #000000;
  margin-left: 12rem;

  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 12rem;
    height: 20rem;
    margin-left: 10rem;
  }
`;
