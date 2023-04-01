import React, { useEffect } from "react";
import * as M from "./Mainstyled";
import { SectionsContainer, Section } from "react-fullpage";
import { BsEnvelope } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

let options = {
  anchors: ["sendyOne", "sendyTwo", "sendyThree", "sendyFour", "sendyFive"],
  // navigation: false,
};

function Main() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
                <M.Button onClick={() => navigate("/login")}>
                  <BsEnvelope className="button-icon" />
                  편지 작성하러 가기
                </M.Button>
              </M.IntroTextbox>
            </M.Intro>
          </M.Column1>
        </Section>
        <Section>
          <M.Column2>
            <M.TextboxRight>
              <M.SubTitle>원하는 테마를 고르고 <br />  편지를 작성하세요.</M.SubTitle>
              <M.SubContents>
                편지지를 넘겨 원하는 테마를 골라보세요. <br /> 편지 작성이 완료
                되었다면, 원하는 주소명으로 <br /> 만들어집니다. <br />
                <p className="ex">예시&#41; https://sendy/letter/happy-birthday</p>
              </M.SubContents>
              <M.Button onClick={() => navigate("/login")}>
                <BsEnvelope className="button-icon" />
                편지 작성하러 가기
              </M.Button>
            </M.TextboxRight>
            <M.ImgboxOne>
              <img
                className="main"
                src={require("../../asset/theme.gif")}
                alt=""
              />
              <img
                className="flower"
                src={require("../../asset/mainImg/right3.png")}
                alt=""
              />
            </M.ImgboxOne>
          </M.Column2>
        </Section>
        <Section>
          <M.Column3>
            <M.ImgboxTwo>
              <img
                className="main"
                src={require("../../asset/mainImg/self.png")}
                alt=""
              />
              <img
                className="main-sticker1"
                src={require("../../asset/mainImg/masking-tape.png")}
                alt=""
              />
              <img
                className="main-sticker2"
                src={require("../../asset/mainImg/main3.png")}
                alt=""
              />
            </M.ImgboxTwo>
            <M.TextboxLeft>
              <M.SubTitle>나에게 편지를 보내보세요.</M.SubTitle>
              <M.SubContents>
                편지 작성에서 '나에게 쓰기'를 클릭한 후, <br />
                원하는 시간에 편지를 받아보세요! <br />
                스스로에게 위로와 사랑을 전해보세요.💕
              </M.SubContents>
              <M.Button onClick={() => navigate("/login")}>
                <BsEnvelope className="button-icon" />
                편지 작성하러 가기
              </M.Button>
            </M.TextboxLeft>
          </M.Column3>
        </Section>
        <Section>
          <M.Column4>
            <M.TextboxRight>
              <M.SubTitle>
                주고 받은 편지를 보며 <br/> 추억을 떠올려 보세요&#58;&#41;
              </M.SubTitle>
              <M.SubContents>
                받은 편지와 보낸 편지를 우편함에서 확인할 수 있어요! <br />
                (해당 서비스는 회원가입 후 이용이 가능합니다)
              </M.SubContents>
              <M.Button onClick={() => navigate("/login")}>
                <BsEnvelope className="button-icon" />
                편지 작성하러 가기
              </M.Button>
            </M.TextboxRight>
            <M.ImgboxThree margin='4rem' >
              <img
                className="main"
                src={require("../../asset/mainImg/main4.gif")}
                alt=""
              />
              <img
                className="main-sticker3"
                src={require("../../asset/mainImg/sticker3.png")}
                alt=""
              />
              <img
                className="main-sticker4"
                src={require("../../asset/mainImg/sticker4.png")}
                alt=""
              />
            </M.ImgboxThree>
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
                <M.Button onClick={() => navigate("/login")}>
                  <BsEnvelope className="button-icon" />
                  편지 작성하러 가기
                </M.Button>
              </M.LastTextBox>
            </M.Last>
            <M.FakeLast>
              <M.SendyBottom>
                <M.Track>
                  <M.TrackImgReverse>
                    <img
                      src={require("../../asset/mainImg/bottom.png")}
                      alt=""
                    />
                  </M.TrackImgReverse>
                  <M.TrackImgReverse>
                    <img
                      src={require("../../asset/mainImg/bottom.png")}
                      alt=""
                    />
                  </M.TrackImgReverse>
                  <M.TrackImgReverse>
                    <img
                      src={require("../../asset/mainImg/bottom.png")}
                      alt=""
                    />
                  </M.TrackImgReverse>
                  <M.TrackImgReverse>
                    <img
                      src={require("../../asset/mainImg/bottom.png")}
                      alt=""
                    />
                  </M.TrackImgReverse>
                </M.Track>
              </M.SendyBottom>
            </M.FakeLast>
            <M.Footer>
              <M.FooterContainer>
                <M.Logo>
                  Sendy
                  <img
                    className="logo-img"
                    src={require("../../asset/작은편지.png")}
                  />
                </M.Logo>
                <M.Info>
                  <li>© 2023 Witch`s delivery service All rights reserved.</li>
                  <li>이진주 최지윤 김유림 심효은 윤선진 이시온</li>
                  <li>문의 abcd19234@gmail.com</li>
                </M.Info>
              </M.FooterContainer>
            </M.Footer>
          </M.Column5>
        </Section>
      </SectionsContainer>
    </M.MainWrap>
  );
}

export default Main;
