import styled from "styled-components";
import { PALETTE_MYPAGE, PALETTE_V1 } from "../../style/color";
import { FONT_STYLE_V1 } from "../../style/fontStyle";
import sendme from "../../asset/myPage-sendme.png";

export const MyPageContainer = styled.div`
  height: 100vh;
`;
export const FlexWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GNBWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 540px;
  justify-content: space-around;
  padding-left: 80px;
  padding-bottom: 50px;
`;
export const GNBMenu = styled.div`
  ${FONT_STYLE_V1.title.title_12_medium}
  border: 1px solid ${PALETTE_V1.text_primary};
  background-color: #ffffff;
  padding: 0.3rem 0.4rem;
  height: 37px;
  width: 135px;
  text-align: center;
  &.active {
    background-color: ${PALETTE_V1.yellow_primary};
    padding-top: 1rem;
    height: 50px;
  }
`;
export const FlexWrapper3 = styled.div`
  display: flex;
  justify-content: center;
`;
export const UserInfoCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  border: 2px solid ${PALETTE_V1.text_primary};
  /* max-width: 65vw; */
  aspect-ratio: 4/1;
  min-width: 667px;
  box-shadow: 15px 15px ${PALETTE_V1.yellow_primary},
    17px 17px ${PALETTE_V1.text_primary}, 13px 17px ${PALETTE_V1.text_primary},
    17px 13px ${PALETTE_V1.text_primary};
`;
export const FlexWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;
export const UserImage = styled.img`
  background-color: pink;
  border: 1px solid ${PALETTE_V1.text_primary};
  border-radius: 50%;
  width: 130px;
  height: 130px;
  margin-bottom: 5px;
`;
export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 80%;
  min-width: 170px;
  border-left: 2px solid ${PALETTE_V1.text_primary};
`;
export const UserName = styled.div`
  ${FONT_STYLE_V1.title.title_14_medium}
  padding: 1rem 1rem;
`;
export const SignUpDate = styled.div`
  ${FONT_STYLE_V1.body.body_10_light}
  padding-right: 10px;
`;
export const NameDateWrapper = styled(FlexWrapper2)`
  border-bottom: 2px solid ${PALETTE_V1.text_primary};
  justify-content: space-between;
  align-items: center;
`;
export const UserEmail = styled.div`
  ${FONT_STYLE_V1.body.body_10_light}
  padding: 0.8rem 1rem;
`;
export const ReadletterLink = styled.a`
  ${FONT_STYLE_V1.body.body_10_light}
  border-bottom:1px solid ${PALETTE_V1.text_primary};
  margin-right: 10px;
  cursor: pointer;
`;
export const EmailWrapper = styled(FlexWrapper2)`
  justify-content: space-between;
  align-items: center;
`;
export const EditButton = styled.div`
  ${FONT_STYLE_V1.body.body_8_light}
  margin-bottom: 5px;
  margin-right: 3px;
  position: absolute;
  right: -14px;
  bottom: -4px;
  cursor: pointer;
`;
export const Sticker = styled.img.attrs({ src: `${sendme}` })`
  position: absolute;
  width: 200px;
  z-index: 200;
  bottom: -80px;
  right: -100px;
  transform: rotate(-40deg);
`;
export const StickerWrapper = styled.div`
  position: relative;
`;
export const ResignationWrapper = styled.div`
  border-top: 2px solid ${PALETTE_V1.text_primary};
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
`;
export const ResignLink = styled(ReadletterLink).attrs({ href: "#" })`
  border-bottom: none;
  margin-top: 20px;
  margin-right: 20px;
`;
