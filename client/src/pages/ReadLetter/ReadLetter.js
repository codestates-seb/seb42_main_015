import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import * as R from "./ReadStyled";
import SecretLetter from "./SecetLetter";

const ReadLetter = () => {
  const [enterPassword, setEnterPassword] = useState(false);

  return (
    <>
      {enterPassword ? (
        <R.SWrapper theme="open">
          <div>오픈</div>
        </R.SWrapper>
      ) : (
        <SecretLetter />
      )}
    </>
  );
};

export default ReadLetter;
