import axios from "axios";
import { getCookie } from "../Certified/Cookie";

export const postMessage = async (letterContents) => {
  return axios({
    method: "post",
    url: "/api/sendy/messages/write",
    headers: {
      Authorization: getCookie("accesstoken"),
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
        "ngrok-skip-browser-warning": "230325",
        "Content-Type": "multipart/form-data",
        Authorization: getCookie("accesstoken"),
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
      "ngrok-skip-browser-warning": "230327",
      Authorization: getCookie("accesstoken"),
    },
  });
};
export const getUserInfo = (memberId) => {
  return axios({
    method: "get",
    url: `/api/sendy/users/${memberId}`,
    headers: {
      "ngrok-skip-browser-warning": "230325",
      Authorization: getCookie("accesstoken"),
    },
  });
};
export const postVerifyNickName = (nickname) => {
  return axios({
    method: "post",
    url: `/api/sendy/users/verify/nickname`,
    headers: {
      "ngrok-skip-browser-warning": "230325",
      Authorization: getCookie("accesstoken"),
    },
    data: { nickname },
  });
};
export const deleteProfileImage = (memberId) => {
  return axios({
    method: "post",
    url: `/api/sendy/users/edit/reset-profile/${memberId}`,
    headers: {
      "ngrok-skip-browser-warning": "230325",
      Authorization: getCookie("accesstoken"),
    },
  });
};
