import React from "react";
import * as W from "./WriteStyled";

function Explanation() {
  return (
    <W.ExplanationContainer>
      <W.ExplanationWrapper>
        <W.BallonTop id="ballon2">글씨체를 변경할 수 있습니다.</W.BallonTop>
        <W.BallonTop id="ballon3">글자 수를 확인할 수 있습니다.</W.BallonTop>
        <W.BallonBottom1 id="ballon4">
          작성을 마무리하고 편지를 생성합니다.
        </W.BallonBottom1>
        <W.BallonBottom2 id="ballon5">
          작성한 편지를 미리 볼 수 있습니다.
        </W.BallonBottom2>
        <W.BallonBottom1 id="ballon6">
          편지를 받을 사람 이름을 적습니다.
        </W.BallonBottom1>
        <W.BallonBottom1 id="ballon7">
          편지를 보내는 사람 이름을 적습니다.
        </W.BallonBottom1>
      </W.ExplanationWrapper>
      <W.ExplanationBackground />
    </W.ExplanationContainer>
  );
}

export default Explanation;
