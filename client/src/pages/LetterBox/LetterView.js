import React from 'react'
import * as L from './LetterBoxStyled';
import LetterList from './LetterList';

function LetterView() {
  return (
    <L.ListWrap>
      <LetterList />
    </L.ListWrap>
  )
}

export default LetterView