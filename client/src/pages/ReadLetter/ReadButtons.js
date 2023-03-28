import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as R from "./ReadStyled";
import { PALETTE_V1 } from "../../style/color";
import ShadowButton from "../commons/ShadowButton";
import Modal from "../commons/Modal";
import LoginModal from "./LoginModal";
import { HiOutlineArrowUturnLeft, HiOutlineTrash } from "react-icons/hi2";
import axios from "axios";
import { getCookie } from "../Certified/Cookie";
import { Loading } from "../../components/Loading";
import useStore from "../../store/store";

const ReadButtons = ({
  isLogin,
  isKeeping,
  setIsKeeping,
  ModalRef,
  onDownloadBtn,
  isClickModal,
  setIsClickModal,
}) => {
  const { urlName } = useParams();
  const navigate = useNavigate();
  //로딩상태
  const [isLoading, setIsLoading] = useState(false);
  //해당 편지 메세지 ID
  const { messageId, setMessageId } = useStore((state) => state);

  //'보관하기' 버튼 누르면 모달 나오는 이벤트 핸들러
  const handleKeeping = async () => {
    //모달 열기
    setIsClickModal(!isClickModal);
    setIsLoading(true);
    await axios({
      method: "patch",
      url: `/api/sendy/messages/saved/${urlName}`,
      headers: {
        "ngrok-skip-browser-warning": "12",
        Authorization: getCookie("accesstoken"),
      },
      data: {},
    })
      .then(() => {
        setIsLoading(false);
        setIsKeeping(true);
        setTimeout(() => {
          alert("편지가 저장되었습니다.\n 이제 우편함에서 확인할 수 있어요!");
        }, 100);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  //Todo : 해당 편지가 수신편지인지, 발신편지인지 확인 과정 필요
  //! 휴지통 alert
  const onRemove = async () => {
    if (
      window.confirm(
        "정말로 삭제하시겠습니까?\n삭제된 편지는 [마이페이지-휴지통]에서 확인할 수 있습니다."
      )
    ) {
      await axios({
        method: "patch",
        url: `/api/sendy/mailbox/dustbin/receiving/delete`,
        headers: {
          "ngrok-skip-browser-warning": "12",
          Authorization: getCookie("accesstoken"),
        },
        data: {
          ids: [messageId],
        },
      })
        .then(() => {
          alert("삭제되었습니다.");
          navigate("/letterbox");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  };

  return (
    <>
      {isLoading ? <Loading /> : ""}
      <R.Buttons>
        {isLogin && isKeeping ? (
          // 로그인&보관하기 되어 있으면 -> 우편함, 휴지통 아이콘 보이게
          <>
            <Link to="/letterbox">
              <HiOutlineArrowUturnLeft
                size="30"
                className="goback"
                visibility="visible"
              />
            </Link>
            <HiOutlineTrash
              size="30"
              className="trash"
              onClick={onRemove}
              visibility="visible"
            />
          </>
        ) : (
          // 아니라면 hidden
          <>
            <Link to="/letterbox">
              <HiOutlineArrowUturnLeft
                size="30"
                className="goback"
                visibility="hidden"
              />
            </Link>
            <HiOutlineTrash
              size="30"
              className="trash"
              onClick={onRemove}
              visibility="hidden"
            />
          </>
        )}
        <ShadowButton
          className="button"
          backgroundColor={PALETTE_V1.yellow_button}
          state="none-block"
          onClick={onDownloadBtn}
        >
          이미지 저장
        </ShadowButton>
        {isLogin ? (
          //로그인 되어 있다면 -> 저장 여부 확인
          isKeeping ? (
            // 저장되어 있다면 -> 보관완료
            <ShadowButton
              className="button"
              backgroundColor={PALETTE_V1.aready_keep_button}
              state="block"
            >
              보관완료
            </ShadowButton>
          ) : (
            //저장 안되어 있다면 -> 보관하기
            <ShadowButton
              className="button"
              backgroundColor={PALETTE_V1.yellow_button}
              state="none-block"
              onClick={handleKeeping}
            >
              보관하기
            </ShadowButton>
          )
        ) : (
          //로그인 안되어 있다면
          <ShadowButton
            className="button"
            backgroundColor={PALETTE_V1.yellow_button}
            state="none-block"
            onClick={handleKeeping}
          >
            보관하기
          </ShadowButton>
        )}
        {isClickModal && !isLogin ? (
          <R.ModalBackground>
            <Modal
              ModalRef={ModalRef}
              ContainerHeight={"420px"}
              ContainerWidth={"370px"}
              children={
                <LoginModal
                  ModalRef={ModalRef}
                  setIsKeeping={setIsKeeping}
                  setIsClickModal={setIsClickModal}
                />
              }
            />
          </R.ModalBackground>
        ) : (
          <></>
        )}
      </R.Buttons>
    </>
  );
};

export default ReadButtons;
