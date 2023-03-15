import React from "react";
import * as C from "./FormStyled";
import { Link } from "react-router-dom";

const CompleteLogout = () => {
  return (
    <>
      <C.Container>
        <C.LogoutForm>
          <div className="Left">
            <img src={require("../../asset/네잎클로버.png")} alt="Googole" />
          </div>
          <div className="Middle">
            <img
              src={require("../../asset/노랑도트고양이.png")}
              alt="Googole"
            />
            <div className="text">다음에 또 만나요 !</div>
            <Link to="/">
              <button>Main Page</button>
            </Link>
          </div>
          <div className="Right">
            <img src={require("../../asset/네잎클로버.png")} alt="Googole" />
          </div>
        </C.LogoutForm>
      </C.Container>
    </>
  );
};

export default CompleteLogout;
