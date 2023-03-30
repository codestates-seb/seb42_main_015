import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as M from "./MyPageStyled";
import { BiEditAlt } from "react-icons/bi";
import GNB from "./GNB";
import useStore from "../../store/store";
import Modal from "../commons/Modal";
import ResignModal from "./ResignModal";
import axios from "axios";
import { getCookie } from "../Certified/Cookie";
import RoundButton from "../commons/RoundButton";
import { FONT_STYLE_V1 } from "../../style/fontStyle";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsImageFill } from "react-icons/bs";
import {
  deleteProfileImage,
  getUserInfo,
  postVerifyNickName,
} from "../commons/axios";
import Refresh from "../../util/Refresh";

function MyPage() {
  const { changeCurrentPage } = useStore();
  const [openResignModal, setOpenResignModal] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [userInfo, setUserInfo] = useState({
    nickname: null,
    email: null,
    createdAt: null,
    profileImage: null,
  });
  const [image, setImage] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [nicknameVerify, setNicknameVerify] = useState(null);
  const modalRef = useRef();
  const [imageFile, setImageFile] = useState();

  const memberId = sessionStorage.getItem("memberId");
  useLayoutEffect(() => {
    changeCurrentPage("MyPage");
    getUserInfo(memberId)
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          Refresh().then(() => {
            getUserInfo(memberId).then((res) => {
              setUserInfo(res.data);
            });
          });
        }
      });
  }, []);

  const renderFile = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
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
        setImageFile(e.target.files[0]);
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
  const handleVerifyNickname = () => {
    if (nickname !== "" || nickname !== null) {
      postVerifyNickName(nickname)
        .then(() => {
          setNicknameVerify({ ...nicknameVerify, isVerified: true });
        })
        .catch((err) => {
          if (err.response.status === 409) {
            setNicknameVerify(false);
          } else if (err.response.status === 401) {
            Refresh().then(() => {
              postVerifyNickName(nickname).then(() => {
                setNicknameVerify(true);
              });
            });
          }
        });
    }
  };

  const patchNickname = () => {
    return axios({
      method: "patch",
      headers: {
        "ngrok-skip-browser-warning": "230325",
        Authorization: getCookie("accesstoken"),
      },
      url: `/api/sendy/users/edit/nickname/${memberId}`,
      data: { nickname },
    });
  };

  const postProfileImg = () => {
    let data = new FormData();
    data.append("image", imageFile);
    return axios({
      method: "post",
      headers: {
        "ngrok-skip-browser-warning": "230325",
        Authorization: getCookie("accesstoken"),
        "Content-Type": "multipart/form-data",
      },
      url: `/api/sendy/users/edit/profile/${memberId}`,
      data,
    });
  };
  const handleEditDone = () => {
    if (nickname && nickname !== userInfo && image) {
      return axios
        .all([patchNickname(), postProfileImg()])
        .then(() => {
          setNickname(null);
          setImage(null);
          setNicknameVerify(null);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            Refresh().then(() => {
              axios.all([patchNickname(), postProfileImg()]).then(() => {
                setNickname(null);
                setImage(null);
                setNicknameVerify(null);
              });
            });
          }
        });
    } else if (nickname && nickname !== userInfo) {
      patchNickname()
        .then(() => {
          setNickname(null);
          setNicknameVerify(null);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            Refresh().then(() => {
              patchNickname().then(() => {
                setNickname(null);
                setNicknameVerify(null);
              });
            });
          }
        });
    } else if (image) {
      postProfileImg()
        .then(() => {
          setImage(null);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            Refresh().then(() => {
              postProfileImg().then(() => {
                setImage(null);
              });
            });
          }
        });
    }
    window.location.reload();
  };
  const handleDeleteProfileImage = () => {
    deleteProfileImage(memberId)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.status === 401) {
          Refresh.then(() => {
            deleteProfileImage(memberId).then(() => {
              window.location.reload();
            });
          });
        }
      });
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
              <M.FlexWrapper1 className="profile-img">
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

                <M.UserImage src={image || userInfo.profileImage} />
                {isEditable ? (
                  <div
                    className="delete-image"
                    onClick={handleDeleteProfileImage}>
                    기본이미지로 변경
                  </div>
                ) : (
                  <></>
                )}
              </M.FlexWrapper1>
              <M.UserInfoWrapper>
                <M.NameDateWrapper>
                  {isEditable ? (
                    <div className="edit-box">
                      {nicknameVerify ? (
                        <input
                          disabled
                          className="username-input"
                          placeholder={userInfo.nickname}></input>
                      ) : (
                        <input
                          className="username-input"
                          placeholder={userInfo.nickname}
                          onInput={(e) => {
                            setNickname(e.target.value);
                            if (nicknameVerify === false) {
                              setNicknameVerify(null);
                            }
                          }}></input>
                      )}
                      {nicknameVerify === false ? (
                        <div className="nickname-error">
                          중복된 닉네임입니다.
                        </div>
                      ) : (
                        <></>
                      )}

                      {nicknameVerify ? (
                        <BsFillCheckCircleFill className="verified-icon" />
                      ) : (
                        <RoundButton
                          width="6rem"
                          height="2.6rem"
                          fontStyle={FONT_STYLE_V1.body.body_13_light}
                          onClick={handleVerifyNickname}>
                          중복검사
                        </RoundButton>
                      )}
                    </div>
                  ) : (
                    <M.UserName>{userInfo.nickname}</M.UserName>
                  )}
                  <M.SignUpDate>
                    가입일 :{" "}
                    {`${new Date(userInfo.createdAt).getFullYear()}. ${new Date(
                      userInfo.createdAt
                    ).getMonth()}. ${new Date(userInfo.createdAt).getDate()}`}
                  </M.SignUpDate>
                </M.NameDateWrapper>
                <M.EmailWrapper>
                  <M.UserEmail>{userInfo.email}</M.UserEmail>
                  <M.ReadletterLink className="hover-effect" href="/letterbox">
                    내 편지 보러가기👉
                  </M.ReadletterLink>
                  {isEditable ? (
                    <>
                      {nicknameVerify || image ? (
                        <M.EditButton
                          className="edit-done"
                          onClick={(e) => {
                            handleIsEditable(e);
                            handleEditDone();
                          }}>
                          수정완료
                        </M.EditButton>
                      ) : (
                        <M.EditButton
                          className="edit-done"
                          onClick={(e) => {
                            handleIsEditable(e);
                          }}>
                          수정완료
                        </M.EditButton>
                      )}

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
