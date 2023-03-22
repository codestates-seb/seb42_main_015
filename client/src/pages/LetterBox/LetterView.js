import React, { useEffect, useState } from "react";
import * as L from "./LetterBoxStyled";
import LetterList from "./LetterList";

function LetterView() {
  // target 생성
  const [items, setItems] = useState([]);
  const [target, setTarget] = useState(null);

  // 데이터 페칭 함수 생성
  const page = 1;

  const fetchData = async () => {
    const response = await fetch(`/api/db/${page}`);
    const data = await response.json();
    setItems((prev) => prev.concat(data.results));
    page++;
  };

  useEffect(() => {
    fetchData();
  }, []);

  // observe 생성
  useEffect(() => {
    let observer;
    if (target) {
      // 콜백함수 생성
      const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          await observer.observe(entry.target);
        }
      };
      observer = new IntersectionObserver();
      observer.observe(target);
    }
  }, [target]);

  return (
    <L.ListWrap>
      <LetterList ref={setTarget} />
      <LetterList />
      <LetterList />
    </L.ListWrap>
  );
}

export default LetterView;
