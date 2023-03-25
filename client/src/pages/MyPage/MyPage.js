import React, { useEffect, useRef, useState } from "react";
import * as M from "./MyPageStyled";
import { BiEditAlt } from "react-icons/bi";
import GNB from "./GNB";
import useStore from "../../store/store";
import Modal from "../commons/Modal";
import ResignModal from "./ResignModal";
import axiosCall from "../../util/axiosCall";
import { useQuery, useQueryClient } from "react-query";

function MyPage() {
  const { currentPage, changeCurrentPage } = useStore((state) => state);
  const [openResignModal, setOpenResignModal] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [userinfo, setUserInfo] = useState({
    nickName: null,
    email: null,
    createdAt: null,
  });
  const queryClient = useQueryClient();
  const info = useQuery(
    "nickName",
    axiosCall({
      method: "GET",
      url: "/api/sendy/users/2",
    })
  );
  const modalRef = useRef();

  useEffect(() => {
    changeCurrentPage("MyPage");
  }, []);
  useEffect(() => {
    console.log(info);
  }, [info]);

  const handleModal = (e) => {
    if (openResignModal && !modalRef.current.contains(e.target)) {
      setOpenResignModal(false);
    }
  };
  const handleOpenResignModal = () => {
    setOpenResignModal(!openResignModal);
  };
  const handleIsEditable = () => {
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
                <M.UserImage></M.UserImage>
                <M.EditButton onClick={handleIsEditable}>
                  edit
                  <BiEditAlt></BiEditAlt>
                </M.EditButton>
              </M.FlexWrapper2>
              <M.UserInfoWrapper>
                <M.NameDateWrapper>
                  {isEditable ? (
                    <input
                      className="username-input"
                      placeholder={userinfo.nickName}></input>
                  ) : (
                    <M.UserName>김햄찌</M.UserName>
                  )}
                  <M.SignUpDate>가입일: 2022.06.19</M.SignUpDate>
                </M.NameDateWrapper>
                <M.EmailWrapper>
                  <M.UserEmail>kimhamjji@gmail.com</M.UserEmail>
                  <M.ReadletterLink href="/letterbox">
                    내 편지 보러가기👉
                  </M.ReadletterLink>
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
