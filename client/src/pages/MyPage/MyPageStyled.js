import styled from "styled-components";
import { PALETTE_MYPAGE, PALETTE_V1 } from "../../style/color";
import { FONT_STYLE_V1 } from "../../style/fontStyle";
import sendme from "../../asset/myPage-sendme.png";

export const MyPageContainer = styled.div`
  height: 100vh;
`;
export const FlexWrapper1 = styled.div``;
export const GNBWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const GNBMenu = styled.div`
  ${FONT_STYLE_V1.title.title_14_medium}
  border: 1px solid ${PALETTE_V1.text_primary};
  background-color: #ffffff;
  padding: 0.3rem 0.4rem;
  &.active {
    background-color: ${PALETTE_V1.yellow_primary};
    padding-top: 0.7rem;
  }
`;
export const UserInfoCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  border: 2px solid ${PALETTE_V1.text_primary};
  max-width: 65vw;
  aspect-ratio: 4/1;

  box-shadow: 15px 15px ${PALETTE_V1.yellow_primary},
    17px 17px ${PALETTE_V1.text_primary}, 13px 17px ${PALETTE_V1.text_primary},
    17px 13px ${PALETTE_V1.text_primary};
`;
export const FlexWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
`;
export const UserImage = styled.img`
  background-color: pink;
  border: 1px solid ${PALETTE_V1.text_primary};
  border-radius: 50%;
  min-width: 10vw;
  min-height: 10vw;
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
  ${FONT_STYLE_V1.title.title_12_medium}
  border-bottom: 2px solid ${PALETTE_V1.text_primary};
  padding: 1rem 1rem;
  width: 100%;
`;
export const UserAboutMe = styled.div`
  ${FONT_STYLE_V1.body.body_10_light}
  padding: 0.8rem 1rem;
`;
export const EditButton = styled.div`
  ${FONT_STYLE_V1.body.body_8_light}
  margin-bottom: 5px;
  margin-right: 3px;
`;
export const Sticker = styled.img.attrs({ src: `${sendme}` })``;
