import React, { useState } from "react";
import * as W from "./WriteStyled";
import styled from "styled-components";
import { FONT_STYLE_V1 } from "../../style/fontStyle";
import completeCat from "../../asset/completeCat.png";
import useStore from "../../store/store";
import { BsClipboard, BsFillClipboardCheckFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import ShadowButton from "../commons/ShadowButton";
import ShareButton from "../commons/ShareButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  .complete-cat {
    width: 30rem;
  }
  .url-wrapper {
    display: flex;
    align-items: center;
    .clipboard-icon {
      margin-left: 1rem;
      padding-bottom: 5px;
      font-size: 2.5rem;
      cursor: pointer;
    }
  }
  .letterbox-wrapper {
    margin-top: 2rem;
  }
  .letterbox-button {
  }
`;
const Title = styled.div`
  font-family: "LeeSeoyun";
  font-size: 4.5rem;
`;
const Text = styled.a`
  font-family: "LeeSeoyun";
  font-size: 2rem;
`;

function Complete() {
  const [doneCopy, setDoneCopy] = useState(false);
  const params = useParams();
  const handleCopy = () => {
    navigator.clipboard.writeText(
      `https://www.sendy.site/readletter/${params.urlName}`
    );
    setDoneCopy(true);
  };
  const navigate = useNavigate();
  const handleGoLetterBox = () => {
    navigate("/letterbox");
  };
  return (
    <Container>
      <Title>편지가 완성되었어요!</Title>
      <img
        className="complete-cat"
        src={completeCat}
        alt="종이비행기 날리는 고양이 그림"
      />
      <Text>url 주소를 친구에게 전송해보세요!</Text>
      <div className="url-wrapper">
        <Text
          href={`https://www.sendy.site/readletter/${params.urlName}`}>{`https://www.sendy.site/readletter/${params.urlName}`}</Text>
        {doneCopy ? (
          <BsFillClipboardCheckFill
            className="clipboard-icon"
            onClick={handleCopy}
          />
        ) : (
          <BsClipboard className="clipboard-icon" onClick={handleCopy} />
        )}
      </div>
      <div className="letterbox-wrapper">
        <ShadowButton className="letterbox-button" onClick={handleGoLetterBox}>
          우편함 가기
        </ShadowButton>
      </div>
      <ShareButton urlName={params.urlName} />
    </Container>
  );
}

export default Complete;
