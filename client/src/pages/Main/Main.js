import React from "react";
import * as M from "./Mainstyled";
import { SectionsContainer, Section } from "react-fullpage";
import { BsEnvelope } from "react-icons/bs";
// ! 공백
let options = {
  anchors: [
    "sectionOne",
    "sectionTwo",
    "sectionThree",
    "sectionFour",
    "sectionFive",
  ],
  // navigation: false,
};
// ! 공백
function Main() {
  return (
    <M.MainWrap>
      <SectionsContainer {...options}>
        <Section>
          <M.Column1>
            <M.LeftImgBox>
              <img
                className="left1"
                src={require("../../asset/mainImg/left1.png")}
                alt=""
              />
              <img
                className="left2"
                src={require("../../asset/mainImg/left2.png")}
                alt=""
              />
              <img
                className="left3"
                src={require("../../asset/mainImg/left3.png")}
                alt=""
              />
              <img
                className="left4"
                src={require("../../asset/mainImg/left4.png")}
                alt=""
              />
              <img
                className="left5"
                src={require("../../asset/mainImg/left5.png")}
                alt=""
              />
              <img
                className="sendy"
                src={require("../../asset/mainImg/Send Your memory.png")}
                alt=""
              />
            </M.LeftImgBox>
            <M.RightImgBox>
              <img
                className="right1"
                src={require("../../asset/mainImg/right1.png")}
                alt=""
              />
              <img
                className="right2"
                src={require("../../asset/mainImg/right2.png")}
                alt=""
              />
              <img
                className="right3"
                src={require("../../asset/mainImg/right3.png")}
                alt=""
              />
              <img
                className="sendy"
                src={require("../../asset/mainImg/Sendy.png")}
                alt=""
              />
            </M.RightImgBox>
            <M.Intro>
              <M.IntroTextbox>
                <M.Title>
                  당신만을 위한 <strong>편지 홈피</strong>
                  {/* <M.HighLight /> */}
                  <div className="high-light"></div>
                </M.Title>
                <M.Contents>따뜻한 마음을 전해보세요.</M.Contents>
                <M.Button>
                  <BsEnvelope className="button-icon" />
                  편지 작성하러 가기
                </M.Button>
              </M.IntroTextbox>
              <M.IntroImgbox></M.IntroImgbox>
            </M.Intro>
          </M.Column1>
        </Section>
        <Section>
          <M.Column2>
            <M.Textbox>
              <img
                className="flower"
                src={require("../../asset/mainImg/right3.png")}
                alt=""
              />
              <M.SubTitle>원하는 테마를 고르고 편지를 작성하세요.</M.SubTitle>
              <M.SubContents>
                편지지를 넘겨 원하는 테마를 골라보세요. <br /> 편지 작성이 완료
                되었다면, 원하는 주소명으로 <br /> 만들어집니다.
                <span className="ex">
                  예시) https://sendy/letter/친구야-생일-축하해
                </span>
              </M.SubContents>
              <M.Button>
                <BsEnvelope className="button-icon" />
                편지 작성하러 가기
              </M.Button>
            </M.Textbox>
            <M.Imgbox></M.Imgbox>
          </M.Column2>
        </Section>
        <Section>
          <M.Column3>
            <M.Imgbox></M.Imgbox>
            <M.Textbox>
              <M.SubTitle>나에게 편지를 보내보세요.</M.SubTitle>
              <M.SubContents>
                편지 작성에서 '나에게 쓰기'를 클릭한 후, <br />
                원하는 시간에 편지를 받아보세요! <br />
                스스로에게 위로와 사랑을 전해보세요.💕
              </M.SubContents>
              <M.Button>
                <BsEnvelope className="button-icon" />
                편지 작성하러 가기
              </M.Button>
            </M.Textbox>
          </M.Column3>
        </Section>
        <Section>
          <M.Column4>
            <M.Textbox>
              <M.SubTitle>
                주고 받은 편지를 보며 추억을 떠올려 보세요.
              </M.SubTitle>
              <M.SubContents>
                받은 편지와 보낸 편지를 우편함에서 확인할 수 있어요! <br />
                (해당 서비스는 회원가입 후 이용이 가능합니다.)
              </M.SubContents>
              <M.Button>
                <BsEnvelope className="button-icon" />
                편지 작성하러 가기
              </M.Button>
            </M.Textbox>
            <M.Imgbox></M.Imgbox>
          </M.Column4>
        </Section>
        <Section>
          <M.Column5>
            <M.SendyTop>
              <M.Track>
                <M.TrackImg>
                  <img src={require("../../asset/mainImg/top.png")} alt="" />
                </M.TrackImg>
                <M.TrackImg>
                  <img src={require("../../asset/mainImg/top.png")} alt="" />
                </M.TrackImg>
                <M.TrackImg>
                  <img src={require("../../asset/mainImg/top.png")} alt="" />
                </M.TrackImg>
                <M.TrackImg>
                  <img src={require("../../asset/mainImg/top.png")} alt="" />
                </M.TrackImg>
                <M.TrackImg>
                  <img src={require("../../asset/mainImg/top.png")} alt="" />
                </M.TrackImg>
              </M.Track>
            </M.SendyTop>
            <M.Last>
              <M.LastTextBox>
                <M.LastTitle>
                  sendy에서 편지를 작성하고, <br />
                  주고 받은 편지를 보며 추억해봐요!
                </M.LastTitle>
                <M.Button>
                  <BsEnvelope className="button-icon" />
                  편지 작성하러 가기
                </M.Button>
              </M.LastTextBox>
            </M.Last>
            <M.FakeLast>
              <M.SendyBottom>
                <M.Track>
                  <M.TrackImg>
                    <img
                      src={require("../../asset/mainImg/bottom.png")}
                      alt=""
                    />
                  </M.TrackImg>
                  <M.TrackImg>
                    <img
                      src={require("../../asset/mainImg/bottom.png")}
                      alt=""
                    />
                  </M.TrackImg>
                  <M.TrackImg>
                    <img
                      src={require("../../asset/mainImg/bottom.png")}
                      alt=""
                    />
                  </M.TrackImg>
                  <M.TrackImg>
                    <img
                      src={require("../../asset/mainImg/bottom.png")}
                      alt=""
                    />
                  </M.TrackImg>
                </M.Track>
              </M.SendyBottom>
            </M.FakeLast>
            <M.Footer>
              <ul className="menuContainer">
                <div className="logo">
                  Sendy
                  <img className="logo-img" src="../../asset/작은편지.png" />
                </div>

                <div className="imfomation">
                  <li>© 2023 Witch`s delivery service All rights reserved.</li>
                  <li>이진주 최지윤 김유림 심효은 윤선진 이시온</li>
                  <li>문의 abcd19234@gmail.com</li>
                </div>
              </ul>
            </M.Footer>
          </M.Column5>
        </Section>
      </SectionsContainer>
    </M.MainWrap>
  );
}

export default Main;
