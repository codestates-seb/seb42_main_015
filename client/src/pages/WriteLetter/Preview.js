import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as R from "../ReadLetter/ReadStyled";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import SecretLetter from "../ReadLetter/SecretLetter";
import { AiOutlineSound } from "react-icons/ai";
import { HiPause } from "react-icons/hi2";
import ReadButtons from "../ReadLetter/ReadButtons";
import axios from "axios";

const Preview = ({ isLogin }) => {
  const url = new URL(window.location.href);
  const urlParams = url.searchParams.get("password"); //url파라미터값
  const { id } = useParams();
  console.log(id);

  const [enterPassword, setEnterPassword] = useState(false);
  //보관하기를 클릭했을 때 비로그인(저장X)인지 로그인(저장준비 완료)아닌지
  const [isKeeping, setIsKeeping] = useState(false);
  //편지 정보 가져오기
  const [data, setData] = useState([]);

  //! 이미지 저장 기능
  //useRef로 -> DOM 선택
  const LetterRef = useRef();
  //이미지로 저장하기 버튼
  const onDownloadBtn = () => {
    const letter = LetterRef.current;
    domtoimage.toBlob(letter).then((blob) => {
      saveAs(blob, "letter.png");
    });
  };

  //! 모달 영역 밖 클릭 시 모달 닫기
  const ModalRef = useRef();
  const handleModal = (e) => {
    if (isKeeping && !ModalRef.current.contains(e.target)) {
      setIsKeeping(false);
    }
  };

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "12",
  };

  //! 전체 편지정보 가져오기
  useEffect(() => {
    const getLetterData = async () => {
      await axios
        .get(`/api/sendy/messages/${id}/${urlParams}`, { headers })
        .then((res) => {
          setData(res.body);
        })
        .catch((err) => {
          // alert(err);
          // console.log(err);
        });
    };
    getLetterData();
  }, [data]);

  return (
    <>
      <R.Wrapper>
        <div className="ReadContainer" onClick={handleModal}>
          <div className="top-sub">
            <R.EnterSeret>
              비밀번호
              <input placeholder="****" />
            </R.EnterSeret>
          </div>
          <R.Letterpaper ref={LetterRef}>
            <div className="top">
              <div className="to">To. 김햄찌</div>
              <div className="date">2023.03.17 금</div>
            </div>
            <div className="content">{R.LetterEx}</div>
            <div className="from">From. 오디토</div>
          </R.Letterpaper>
          <ReadButtons
            ModalRef={ModalRef}
            isKeeping={isKeeping}
            setIsKeeping={setIsKeeping}
            isLogin={isLogin}
            onDownloadBtn={onDownloadBtn}
          />
        </div>
      </R.Wrapper>
    </>
  );
};

export default Preview;
