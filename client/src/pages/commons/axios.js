import axios from "axios";
import { getCookie } from "../Certified/Cookie";

export const postMessage = async (letterContents) => {
  return axios({
    method: "post",
    url: "/api/sendy/messages/write",
    headers: {
      Authorization: getCookie("accessToken"),
    },
    data: letterContents,
  });
};
export const postMessageImage = async (imageFile, urlName) => {
  if (imageFile) {
    let formData = new FormData();
    formData.append("image", imageFile);
    return axios({
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: getCookie("accessToken"),
      },
      url: `/api/sendy/messages/write/image/${urlName}`,
      data: formData,
    });
  }
};
export const getUrlNameExist = async (urlName) => {
  return axios({
    method: "get",
    url: `/api/sendy/messages/exists/${urlName}`,
    headers: {
      Authorization: getCookie("accessToken"),
    },
  });
};
export const getUserInfo = (memberId) => {
  return axios({
    method: "get",
    url: `/api/sendy/users/${memberId}`,
    headers: {
      Authorization: getCookie("accessToken"),
    },
  });
};

export const postVerifyNickName = (nickname) => {
  return axios({
    method: "post",
    url: `/api/sendy/users/verify/nickname`,
    headers: {
      Authorization: getCookie("accessToken"),
    },
    data: { nickname },
  });
};
export const deleteProfileImage = (memberId) => {
  return axios({
    method: "post",
    url: `/api/sendy/users/edit/reset-profile/${memberId}`,
    headers: {
      Authorization: getCookie("accessToken"),
    },
  });
};
export const deleteMember = () => {
  const memberId = sessionStorage.getItem("memberId");
  return axios({
    method: "delete",
    url: `/api/sendy/users/delete/${memberId}`,
    headers: {
      Authorization: getCookie("accessToken"),
    },
  });
};
export const checkPassword = (password) => {
  const memberId = sessionStorage.getItem("memberId");
  return axios({
    method: "post",
    url: `/api/sendy/users/verify/password/${memberId}`,
    headers: {
      Authorization: getCookie("accessToken"),
    },
    data: { password },
  });
};
