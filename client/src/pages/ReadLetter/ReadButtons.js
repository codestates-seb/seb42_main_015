import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import * as R from "./ReadStyled";
import { PALETTE_V1 } from "../../style/color";
import ShadowButton from "../commons/ShadowButton";
import Modal from "../commons/Modal";
import LoginModal from "./LoginModal";
import { HiOutlineArrowUturnLeft, HiOutlineTrash } from "react-icons/hi2";
import axios from "axios";
import { getCookie } from "../Certified/Cookie";
import { Loading } from "../../components/Loading";
import Refresh from "../../util/Refresh";

const ReadButtons = ({
  isLogin,
  isKeeping = false,
  handleMessageSaved,
  ModalRef,
  onDownloadBtn,
  isClickModal,
  setIsClickModal,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { urlName } = useParams();
  //로딩상태
  const [isLoading, setIsLoading] = useState(false);
  //휴지통 정보
  const [isDustbin, setIsDustbin] = useState({
    receivingId: "",
    outgoingId: "",
  });
  // 우편함에서 넘어온 정보
  const getMailboxId = () => {
    if (location.state) {
      if (location.state.name === "outgoingId") {
        setIsDustbin({
          ...isDustbin,
          outgoingId: location.state.body,
        });
      } else if (location.state.name === "receivingId") {
        setIsDustbin({
          ...isDustbin,
          receivingId: location.state.body,
        });
      }
    }
  };

  //todo :보관하기
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
      .then((res) => {
        setIsLoading(false);
        handleMessageSaved(true);
        alert("편지가 저장되었습니다.\n 이제 우편함에서 확인할 수 있어요!");
        setIsDustbin({
          ...isDustbin,
          receivingId: res.data.receivingId,
        });
      })
      .catch((err) => {
        setIsLoading(false);
        while (err.response.status === 401) {
          Refresh().then(() => handleKeeping());
        }
      });
  };

  //Todo : 편지 삭제하기
  const onRemove = async () => {
    if (
      window.confirm(
        "정말로 삭제하시겠습니까?\n삭제된 편지는 [마이페이지-휴지통]에서 확인할 수 있습니다."
      )
    )
      if (!isDustbin.outgoingId) {
        //outgoingId가 없다면 === 수신편지라면
        await axios({
          method: "patch",
          url: `/api/sendy/mailbox/receiving/delete`,
          headers: {
            "ngrok-skip-browser-warning": "12",
            Authorization: getCookie("accesstoken"),
          },
          data: {
            ids: [isDustbin.receivingId],
          },
        })
          .then(() => {
            setIsLoading(false);
            alert("삭제되었습니다.");
            navigate("/letterbox");
            window.location.reload();
          })
          .catch((err) => {
            setIsLoading(false);
            while (err.response.status === 401) {
              Refresh().then(() => onRemove());
            }
          });
        //outgoingId가 있다면 === 발신편지라면
      } else if (isDustbin.outgoingId) {
        await axios({
          method: "patch",
          url: `/api/sendy/mailbox/outgoing/delete`,
          headers: {
            "ngrok-skip-browser-warning": "12",
            Authorization: getCookie("accesstoken"),
          },
          data: {
            ids: [isDustbin.outgoingId],
          },
        })
          .then(() => {
            setIsLoading(false);
            alert("삭제되었습니다.");
            navigate("/letterbox");
            window.location.reload();
          })
          .catch((err) => {
            setIsLoading(false);
            while (err.response.status === 401) {
              Refresh().then(() => onRemove());
            }
          });
      }
  };

  //todo : useEffect
  useEffect(() => {
    getMailboxId();
  }, [location?.state?.name]);

  return (
    <>
      {isLoading ? <Loading /> : ""}
      <R.Buttons>
        {(isLogin && isKeeping) || isDustbin?.outgoingId ? (
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
          isKeeping || isDustbin?.outgoingId ? (
            // 저장되어 있다면 -> 보관완료
            <ShadowButton
              className="button"
              backgroundColor={PALETTE_V1.aready_keep_button}
              state="block"
              display="block"
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
