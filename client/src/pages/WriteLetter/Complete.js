import React, { useState } from "react";
import styled from "styled-components";
import completeCat from "../../asset/completeCat.png";
import { BsClipboard, BsFillClipboardCheckFill } from "react-icons/bs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ShadowButton from "../commons/ShadowButton";
import ShareButton from "../commons/ShareButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  padding-top: 10rem;
  padding-bottom: 10rem;
  align-items: center;
  justify-content: flex-start;
  .complete-cat {
    width: 30rem;
  }
  .url-wrapper {
    display: flex;
    align-items: center;
    .clipboard-icon {
      margin-left: 1rem;
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
  const navigate = useNavigate();
  const location = useLocation();
  if (!location?.state?.from) {
    navigate("/");
  }

  const [doneCopy, setDoneCopy] = useState(false);
  const params = useParams();

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `https://www.sendy.site/readletter/${params.urlName}`
    );
    setDoneCopy(true);
    alert("클립보드에 복사되었습니다!");
  };

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
