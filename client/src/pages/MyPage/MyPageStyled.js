import styled from "styled-components";
import { PALETTE_MYPAGE, PALETTE_V1 } from "../../style/color";
import { FONT_STYLE_V1 } from "../../style/fontStyle";

export const MyPageContainer = styled.div``;
export const FlexWrapper1 = styled.div`
  background: linear-gradient(
    to bottom,
    ${PALETTE_MYPAGE.gradation_green},
    ${PALETTE_V1.background}
  );
`;
export const GNBWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const GNBMenu = styled.div`
  ${FONT_STYLE_V1.title.title_14_medium}
`;
export const UserInfoCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  border: 2px solid ${PALETTE_V1.text_primary};
  max-width: 1200px;
  aspect-ratio: 4/1;
`;
export const UserImage = styled.img`
  background-color: pink;
  border: 1px solid ${PALETTE_V1.text_primary};
  border-radius: 50%;
  min-width: 130px;
  min-height: 130px;
  width: 130px;
  height: 130px;
`;
export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  min-width: 170px;
  height: 140px;
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
  padding-top: 1rem;
`;
