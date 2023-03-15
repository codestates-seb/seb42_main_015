import React from "react";
import * as M from "./Mainstyled";
import {SectionsContainer, Section} from 'react-fullpage';
import { Link } from 'react-router-dom';

let options = {
  anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive'],
};

function Main () {
  return (
    <M.MainWrap>
      <SectionsContainer {...options}>
        <Section>
          <M.Column1>소개 페이지</M.Column1>
        </Section>
        <Section>
          <M.Column2>테마 및 기능 설명</M.Column2>
        </Section>
        <Section>
          <M.Column3>테마 및 기능 설명</M.Column3>
        </Section>
        <Section>
          <M.Column4>테마 및 기능 설명</M.Column4>
        </Section>
        <Section>
          <M.Column5>테마 및 기능 설명</M.Column5>
        </Section>
      </SectionsContainer>
    </M.MainWrap>  
  );
}

export default Main;


