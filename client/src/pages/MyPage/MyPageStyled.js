import styled from "styled-components";
import { PALETTE_V1 } from "../../style/color";
import { FONT_STYLE_V1 } from "../../style/fontStyle";
import sendme from "../../asset/myPage-sendme.png";
import pwd from "../../asset/pwd.png";
import {
  BREAKPOINTMOBILE,
  BREAKPOINTMOBILE2,
  BREAKPOINTTABLET,
} from "../../breakpoint";

export const MyPageContainer = styled.div`
  overflow-x: hidden;
  height: 105vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const FlexWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .profile-img {
    width: fit-content;
    position: relative;
    justify-content: center;
    align-items: center;
  }
  .image-icon {
    color: rgba(0, 0, 0, 50%);
    font-size: 5rem;
  }
  .file-label {
    position: absolute;
    top: 5rem;
  }
  #chooseFile {
    display: none;
  }
  .delete-image {
    ${FONT_STYLE_V1.body.body_12_light}
    color: grey;
    cursor: pointer;
    margin-top: 0.5rem;
  }
  @media screen and (max-width: 1023px) and (min-width: 767px) {
    .file-label {
      top: 4.5rem;
    }
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) and (min-width: 481px) {
    .file-label {
      top: 4rem;
    }
  }
  @media screen and (max-width: 481px) {
    .file-label {
      top: 3rem;
    }
  }
`;
export const GNBWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 80px;
  padding-bottom: 50px;
  width: 45rem;
  @media screen and (min-width: ${BREAKPOINTMOBILE2}px) and (max-width: ${BREAKPOINTMOBILE}px) {
    padding-left: 60px;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE2}px) {
    padding-left: 25px;
    width: 40rem;
  }
  @media screen and (max-width: 320px) {
    padding-left: 20px;
    width: 32rem;
  }
`;
export const GNBMenu = styled.div`
  ${FONT_STYLE_V1.title.title_16_medium}
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.2rem solid ${PALETTE_V1.text_primary};
  border-top: none;
  background-color: #ffffff;
  padding: 0.8rem 0.6rem;
  height: 3.5rem;
  width: 11rem;
  text-align: center;
  cursor: pointer;
  /* min-width: 125px; */
  &.active {
    background-color: ${PALETTE_V1.yellow_primary};
    padding-top: 1rem;
    height: 5rem;
  }
  @media screen and (max-width: 320px) {
    width: 9rem;
  }
`;
export const FlexWrapper3 = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: max-content;
`;
export const UserInfoCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  border: 0.2rem solid ${PALETTE_V1.text_primary};
  aspect-ratio: 4/1;
  width: 100%;
  height: 100%;
  min-width: 137px;
  box-shadow: 1.5rem 1.5rem ${PALETTE_V1.yellow_primary},
    1.7rem 1.7rem ${PALETTE_V1.text_primary},
    1.3rem 1.7rem ${PALETTE_V1.text_primary},
    1.7rem 1.3rem ${PALETTE_V1.text_primary};
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    aspect-ratio: 1/4;
    justify-content: center;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    box-shadow: 1.3rem 1.3rem ${PALETTE_V1.yellow_primary},
      1.5rem 1.5rem ${PALETTE_V1.text_primary},
      1.1rem 1.5rem ${PALETTE_V1.text_primary},
      1.5rem 1.1rem ${PALETTE_V1.text_primary};
  }
`;
export const FlexWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: max-content;
  height: max-content;
  justify-content: center;
  align-items: center;
  .image-icon {
    color: rgba(0, 0, 0, 50%);
    font-size: 5rem;
  }
  .file-label {
    position: absolute;
  }
  #chooseFile {
    display: none;
  }
  .delete-image {
    ${FONT_STYLE_V1.body.body_12_light}
    cursor: pointer;
  }
  @media screen and (max-width: 1023px) and (min-width: 767px) {
    margin-top: 5%;
    margin-bottom: 2%;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) and (min-width: 481px) {
    margin-top: 4%;
    margin-bottom: 7%;
  }
  @media screen and (max-width: 481px) {
    margin-top: 4%;
    margin-bottom: 7%;
  }
`;
export const UserImage = styled.img`
  background-color: pink;
  border: 1px solid ${PALETTE_V1.text_primary};
  border-radius: 50%;
  width: 180px;
  height: 180px;
  aspect-ratio: 1 / 1;
  @media screen and (max-width: 1023px) and (min-width: 767px) {
    width: 130px;
    height: 130px;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) and (min-width: 481px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 481px) {
    width: 85px;
    height: 85px;
  }
`;
export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 2px solid ${PALETTE_V1.text_primary};
  width: 70%;
  height: max-content;
  @media screen and (max-width: 1023px) and (min-width: 767px) {
    border-left: none;
    width: 80%;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) and (min-width: 481px) {
    border-left: none;
    height: max-content;
  }
  @media screen and (max-width: 481px) {
    border-left: none;
  }
`;
export const UserName = styled.div`
  ${FONT_STYLE_V1.title.title_20_medium}
  padding: 1rem 1rem;
`;
export const SignUpDate = styled.div`
  ${FONT_STYLE_V1.body.body_14_light}
  padding-right: 10px;
`;
export const NameDateWrapper = styled(FlexWrapper2)`
  border-bottom: 2px solid ${PALETTE_V1.text_primary};
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin-bottom: 5%;
  .username-input {
    ${FONT_STYLE_V1.body.body_15_light}
    border: none;
    border-bottom: 0.1rem solid ${PALETTE_V1.text_primary};
    margin: 1rem 1rem;
    height: 2.3rem;
    width: 10rem;
    background-color: ${PALETTE_V1.yellow_light};
    &:focus {
      outline: none;
      background-color: ${PALETTE_V1.yellow_light};
    }
    &::-webkit-input-placeholder {
      ${FONT_STYLE_V1.body.body_15_light}
      color: gray;
    }
  }
  .edit-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    .nickname-error {
      position: absolute;
      ${FONT_STYLE_V1.body.body_10_light}
      color: red;
      top: -0.5rem;
      left: 1rem;
    }
  }
  .verified-icon {
    font-size: 2rem;
  }
  @media screen and (max-width: 1023px) {
    border-bottom: none;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;
export const UserEmail = styled.div`
  ${FONT_STYLE_V1.body.body_15_light}
  padding: 0.8rem 1rem;
`;
export const ReadletterLink = styled.a`
  ${FONT_STYLE_V1.body.body_13_light}
  border-bottom: 1px solid ${PALETTE_V1.text_primary};
  margin-right: 10px;
  white-space: nowrap;
  cursor: pointer;
  margin: 0.8rem 1rem;
  z-index: 20;
  &.hover-effect {
    ::before {
      content: "";
      position: absolute;
      width: 0rem;
      transition: width 0.3s ease-out;
    }
    &:hover::before {
      content: "";
      position: absolute;
      top: 5.2rem;
      z-index: -10;
      height: 0.8rem;
      width: 10.3rem;
      background-color: ${PALETTE_V1.yellow_basic};
    }
  }
`;
export const EmailWrapper = styled(FlexWrapper2)`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 95%;
  margin-top: 0;
  .position-relative {
    position: relative;
  }
  @media screen and (max-width: 1023px) {
    align-items: center;
  }
`;
export const EditButton = styled.div`
  ${FONT_STYLE_V1.body.body_13_light}
  margin-bottom: 5px;
  margin-right: 3px;
  position: absolute;
  right: 20px;
  bottom: 0px;
  cursor: pointer;
  z-index: 250;
  display: flex;
  align-items: center;
  padding: 0.3rem;
  &.cancel {
    right: 7rem;
    &:hover::before {
      width: 2.2rem;
    }
  }
  &.edit-done {
    ::before {
      content: "";
      z-index: -10;
      width: 0rem;
      transition: width 0.3s ease-out;
    }
    &:hover::before {
      content: "";
      position: absolute;
      top: 1rem;
      height: 0.8rem;
      width: 4.6rem;
      background-color: ${PALETTE_V1.yellow_basic};
    }
  }
  ::before {
    content: "";
    z-index: -10;
    width: 0rem;
    transition: width 0.3s ease-out;
  }
  &:hover::before {
    content: "";
    position: absolute;
    top: 1rem;
    height: 0.8rem;
    width: 3rem;
    background-color: ${PALETTE_V1.yellow_basic};
  }
  @media screen and (max-width: 1023px) {
    bottom: -30px;
    right: 0px;
    &.cancel {
    }
  }
`;
export const Sticker = styled.img.attrs({ src: `${sendme}` })`
  position: absolute;
  width: 200px;
  z-index: 200;
  bottom: -70px;
  right: -100px;
  transform: rotate(-40deg);
  @media screen and (max-width: 1023px) {
    width: 180px;
    bottom: -80px;
    right: -80px;
    transform: rotate(-30deg);
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 150px;
    bottom: -70px;
    right: -70px;
    transform: rotate(-30deg);
  }
  @media screen and (max-width: 481px) {
    width: 120px;
    bottom: -60px;
    right: -60px;
    transform: rotate(-30deg);
  }
  @media screen and (max-width: 370px) {
    width: 110px;
    bottom: -55px;
    right: -55px;
    transform: rotate(-30deg);
  }
`;
export const StickerWrapper = styled.div`
  margin-top: 10%;
  width: 70%;
  height: 25vh;
  max-width: 720px;
  min-width: 149px;
  min-height: 216px;
  position: relative;
  @media screen and (max-width: 1023px) and (min-width: 767px) {
    width: 55%;
    height: 50vh;
    min-height: 350px;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) and (min-width: 481px) {
    height: 80%;
    height: 40vh;
    min-height: 342px;
  }
  @media screen and (max-width: 481px) {
    height: 70%;
    height: 35vh;
    min-height: 300px;
  }
`;
export const ResignationWrapper = styled.div`
  position: relative;
  border-top: 2px solid ${PALETTE_V1.text_primary};
  display: flex;
  justify-content: flex-end;
`;
export const ResignLink = styled(ReadletterLink)`
  border-bottom: none;
  margin-top: 3rem;
  margin-right: 2.5rem;
  margin-bottom: 3rem;
`;
export const ResignBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 300;
`;
export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 3rem 1rem 3rem;
  height: 90%;
  justify-content: space-evenly;
  .notice {
    ${FONT_STYLE_V1.body.body_14_light}
    text-align: center;
    p {
      padding-top: 5px;
    }
  }
  .input {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .input-wrapper {
    .align-center {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
export const ModalTitle = styled.div`
  ${FONT_STYLE_V1.title.title_25_medium}
`;
export const PwdInput = styled.input.attrs({ type: "password" })`
  outline: none;
  border: none;
  font-size: 1.8rem;
  background-image: url(${pwd});
  background-size: 1.5rem;
  background-repeat: no-repeat;
  border-bottom: 1px solid ${PALETTE_V1.text_primary};
  background-position: left center;
  padding: 0rem 3rem;
  height: 2.8rem;
  width: 15rem;
  &::placeholder {
    ${FONT_STYLE_V1.body.body_13_light}
    color: grey;
  }
`;
export const NextIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .active {
    cursor: pointer;
    padding: 4px;
    &:hover {
      background-color: #dbdbdb;
      border-radius: 50%;
    }
  }
`;
export const PwdError = styled.div`
  ${FONT_STYLE_V1.body.body_8_light}
  color: ${PALETTE_V1.red_modal_button};
  padding-top: 10px;
`;
