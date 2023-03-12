import React from "react";
import {SectionsContainer, Section} from 'react-fullpage';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

let options = {
  anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
};

function Main () {
  return (
    <SectionsContainer {...options}>
      <Body>
        <Section>
          <Column1>
            <h1>Welcom to Roobits</h1>
            <div>소중한 사람들과 추억을 남겨보세요!</div>
            <div>D-Day를 더 특별하게 만들어 드립니다.</div>
            <Link to="/myroom">
              <button>나의 룸 보기</button>
            </Link>
          </Column1>
        </Section>
        <Section>
          <Column2>소개 페이지</Column2>
        </Section>
        <Section>
          <Column3>테마 및 기능 설명</Column3>
        </Section>
      </Body>
    </SectionsContainer>
  );
}

export default Main;

const Body = styled.div`

`;
const Column1 = styled.div`
  background-color: red;
`;
const Column2 = styled.div`
  background-color: blue;
`;
const Column3 = styled.div`
  background-color: green;
`;
