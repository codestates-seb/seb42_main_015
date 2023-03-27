import React, { useEffect, useRef, useState } from "react";
import * as M from "./MyPageStyled";
import { BiEditAlt } from "react-icons/bi";
import { BsImageFill } from "react-icons/bs";
import GNB from "./GNB";
import useStore from "../../store/store";
import Modal from "../commons/Modal";
import ResignModal from "./ResignModal";
import axiosCall from "../../util/axiosCall";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { getCookie } from "../Certified/Cookie";

function MyPage() {
  const { currentPage, changeCurrentPage } = useStore((state) => state);
  const [openResignModal, setOpenResignModal] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [createdAtLocale, setCreatedAtLocale] = useState(null);
  const [userInfo, setUserInfo] = useState({
    nickname: null,
    email: null,
    createdAt: null,
  });
  const [hasFile, setHasFile] = useState(false);
  const [image, setImage] = useState(null);
  const modalRef = useRef();
  const memberId = sessionStorage.getItem("memberId");
  console.log(sessionStorage.getItem("memberId"));
  // const queryClient = useQueryClient();
  // const info = useQuery(
  //   "nickName",
  //   axiosCall({
  //     method: "GET",
  //     url: "/api/sendy/users/2",
  //   })
  // );
  const getUserInfo = async () => {
    return axios({
      method: "get",
      url: `/api/sendy/users/{memberId}`,
      headers: {
        "ngrok-skip-browser-warning": "230325",
        Authorization: getCookie("accesstoken"),
      },
    });
  };

  useEffect(() => {
    console.log(memberId);
    changeCurrentPage("MyPage");
    getUserInfo()
      .then((res) => setUserInfo(res.data))
      .then((res) =>
        setCreatedAtLocale(
          `${new Date(userInfo.createdAt).getFullYear()}. ${new Date(
            userInfo.createdAt
          ).getMonth()}. ${new Date(userInfo.createdAt).getDate()}`
        )
      );
  }, []);
  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
  // useEffect(() => {
  //   console.log(info);
  // }, [info]);
  const renderFile = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      setHasFile(true);
    };
  };
  const checkFileSize = (file) => {
    let maxSize = 4 * 1024 * 1024;
    let fileSize = file.size;
    if (fileSize > maxSize) {
      alert("첨부파일 사이즈는 4MB 이내로 등록 가능합니다.");
      return false;
    }
    return true;
  };
  const handleFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (checkFileSize(e.target.files[0])) {
        renderFile(e.target.files[0]);
      }
    }
  };
  const handleModal = (e) => {
    if (openResignModal && !modalRef.current.contains(e.target)) {
      setOpenResignModal(false);
    }
  };
  const handleOpenResignModal = () => {
    setOpenResignModal(!openResignModal);
  };
  const handleIsEditable = (e) => {
    if (e.target.className === "cancel") {
    }
    setIsEditable(!isEditable);
  };

  return (
    <M.MyPageContainer onClick={handleModal}>
      {openResignModal ? (
        <M.ResignBackground>
          <Modal
            ContainerHeight={"350px"}
            children={
              <ResignModal
                modalRef={modalRef}
                setOpenResignModal={setOpenResignModal}
              />
            }
          />
        </M.ResignBackground>
      ) : (
        <></>
      )}
      <M.FlexWrapper1>
        <GNB />
        <M.FlexWrapper3>
          <M.StickerWrapper>
            <M.Sticker></M.Sticker>
            <M.UserInfoCard className="userinfo-card">
              <M.FlexWrapper2>
                {isEditable ? (
                  <>
                    <label
                      onChange={handleFile}
                      className="file-label"
                      htmlFor="chooseFile">
                      <BsImageFill className="image-icon" />
                    </label>
                    <input
                      id="chooseFile"
                      type="file"
                      onChange={handleFile}
                      accept="image/png, image/jpeg, image/gif"
                      multiple={false}></input>
                  </>
                ) : (
                  <></>
                )}
                <M.UserImage src={image}></M.UserImage>
              </M.FlexWrapper2>
              <M.UserInfoWrapper>
                <M.NameDateWrapper>
                  {isEditable ? (
                    <input
                      className="username-input"
                      placeholder={userInfo.nickname}></input>
                  ) : (
                    <M.UserName>{userInfo.nickname}</M.UserName>
                  )}
                  <M.SignUpDate>가입일 : {createdAtLocale}</M.SignUpDate>
                </M.NameDateWrapper>
                <M.EmailWrapper>
                  <M.UserEmail>{userInfo.email}</M.UserEmail>
                  <M.ReadletterLink className="hover-effect" href="/letterbox">
                    내 편지 보러가기👉
                  </M.ReadletterLink>
                  {isEditable ? (
                    <>
                      <M.EditButton
                        className="edit-done"
                        onClick={handleIsEditable}>
                        수정완료
                      </M.EditButton>
                      <M.EditButton
                        className="cancel"
                        onClick={handleIsEditable}>
                        취소
                      </M.EditButton>
                    </>
                  ) : (
                    <M.EditButton onClick={handleIsEditable}>
                      edit
                      <BiEditAlt></BiEditAlt>
                    </M.EditButton>
                  )}
                </M.EmailWrapper>
              </M.UserInfoWrapper>
            </M.UserInfoCard>
          </M.StickerWrapper>
        </M.FlexWrapper3>
      </M.FlexWrapper1>{" "}
      <M.ResignationWrapper>
        <M.ResignLink onClick={handleOpenResignModal}>
          회원탈퇴하기
        </M.ResignLink>
      </M.ResignationWrapper>
    </M.MyPageContainer>
  );
}

export default MyPage;
