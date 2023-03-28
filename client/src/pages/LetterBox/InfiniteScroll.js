// // target 생성
// const [items, setItems] = useState([]);
// const [target, setTarget] = useState(null);

// // 데이터 페칭 함수 생성
// const page = 1;

// const fetchData = async () => {
//   const response = await fetch(`/api/db/${page}`);
//   const data = await response.json();
//   setItems((prev) => prev.concat(data.results));
//   page++;
// };

// useEffect(() => {
//   fetchData();
// }, []);

// // observe 생성
// useEffect(() => {
//   let observer;
//   if (target) {
//     // 콜백함수 생성
//     const onIntersect = async ([entry], observer) => {
//       if (entry.isIntersecting) {
//         observer.unobserve(entry.target);
//         await observer.observe(entry.target);
//       }
//     };
//     observer = new IntersectionObserver();
//     observer.observe(target);
//   }
// }, [target]);

// let pageOut = 1;
// let pageIn = 1;

import { getCookie } from "../Certified/Cookie";
import axios from "axios";

// export const getLettersOut = async () => {
//   return axios({
//     method: "get",
//     url: `/api/sendy/mailbox/messages/out`,
//     headers: {
//       "ngrok-skip-browser-warning": "230325",
//       Authorization: getCookie("accesstoken"),
//     },
//   });
// };

// const getPageLettersIn = async () => {
//   return axios({
//     method: "get",
//     url: `/api/sendy/mailbox/messages/in`,
//     headers: {
//       "ngrok-skip-browser-warning": "230325",
//       Authorization: getCookie("accesstoken"),
//     },
//   });
// };

// useEffect(() => {
//   getPageLettersOut().then((res) => setOutLetters(res.data.data));
//   // getPageLettersOut().then((res) => console.log(res.data.page));
//   getPageLettersIn().then((res) => setInLetters(res.data.data));
// }, []);

// console.log(outLetters);
// useEffect(() => {
//   let observer;
//   if (target) {
//     // 콜백함수 생성
//     const onIntersect = async ([entry], observer) => {
//       if (entry.isIntersecting) {
//         observer.unobserve(entry.target);
//         await observer.observe(entry.target);
//       }
//     };
//     observer = new IntersectionObserver();
//     observer.observe(target);
//   }
// }, [target]);

// const getMore = () => {
//   setPageOut((prev) => prev + 1);
//   console.log("무한 스크롤 요청🥲");
// };

// useEffect(() => {
//   let observer;
//   if (target) {
//     observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           // console.log(entries);
//           observer.unobserve(entries.target)
//           getMore();
//         }
//       },
//       { threshold: 1 }
//     );
//     //옵져버 탐색 시작
//     observer.observe(target.current);
//   }
//   return () => observer && observer.disconnect()
// }, [target]);

// useEffect(() => {});

// const DateBox = outLetters.map((date) => {
//   console.log(date.messageCreatedAt.slice(0, 7));
//   return date.messageCreatedAt.slice(0, 7);
// });
// console.log(isSearchOut)

// {isSend ? (
//   getOut.map((outLetter) => {
//     return (
//       <LetterItem
//         key={outLetter.messageId}
//         outLetter={outLetter}
//         select={select}
//         trash={trash}
//       />
//     );
//   })
// ) : isSearchIn.length === 0 ? (
//   <L.NotSearch>해당하는 편지를 찾을 수 없어요.</L.NotSearch>
// ) : (
//   isSearchIn.map((inLetter) => {
//     return (
//       <LetterItem
//         key={inLetter.messageId}
//         inLetter={inLetter}
//         select={select}
//         trash={trash}
//       />
//     );
//   })
// )}
