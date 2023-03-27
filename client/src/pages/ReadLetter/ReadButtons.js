// import { Link, useParams } from "react-router-dom";
// import * as R from "./ReadStyled";
// import { PALETTE_V1 } from "../../style/color";
// import ShadowButton from "../commons/ShadowButton";
// import Modal from "../commons/Modal";
// import LoginModal from "./LoginModal";
// import { HiOutlineArrowUturnLeft, HiOutlineTrash } from "react-icons/hi2";
// import axios from "axios";
// import { getCookie } from "../Certified/Cookie";

// const ReadButtons = ({
//   isLogin,
//   isKeeping,
//   setIsKeeping,
//   ModalRef,
//   onDownloadBtn,
// }) => {
//   const { urlName } = useParams();

//   //보관하기
//   const handleKeeping = async () => {
//     await axios({
//       method: "patch",
//       url: `/api/sendy/messages/saved/${urlName}`,
//       headers: {
//         "ngrok-skip-browser-warning": "12",
//         Authorization: getCookie("accesstoken"),
//       },
//       body: {},
//     })
//       .then(() => {
//         setIsKeeping(!isKeeping);
//         window.location.reload();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   //! 휴지통 alert
//   //outgoing 인지 receiving인지 우편함에서 상태 받아와야함 !
//   const onRemove = () => {
//     if (
//       window.confirm(
//         "정말로 삭제하시겠습니까?\n삭제된 편지는 [마이페이지-휴지통]에서 확인할 수 있습니다."
//       )
//     ) {
//       alert("삭제되었습니다.");
//     } else {
//       return;
//     }
//   };

//   return (
//     <>
//       <R.Buttons>
//         {isLogin ? (
//           <>
//             <Link to="/letterbox">
//               <HiOutlineArrowUturnLeft
//                 size="30"
//                 className="goback"
//                 visibility="visible"
//               />
//             </Link>
//             <HiOutlineTrash
//               size="30"
//               className="trash"
//               onClick={onRemove}
//               visibility="visible"
//             />
//           </>
//         ) : (
//           <>
//             <HiOutlineArrowUturnLeft
//               size="30"
//               className="goback"
//               visibility="hidden"
//             />
//             <HiOutlineTrash size="30" className="trash" visibility="hidden" />
//           </>
//         )}
//         <ShadowButton
//           className="button"
//           backgroundColor={PALETTE_V1.yellow_button}
//           state="none-block"
//           onClick={onDownloadBtn}
//         >
//           이미지 저장
//         </ShadowButton>
//         {isLogin && isKeeping ? (
//           <ShadowButton
//             className="button"
//             backgroundColor={PALETTE_V1.aready_keep_button}
//             state="block"
//           >
//             보관완료
//           </ShadowButton>
//         ) : isKeeping ? (
//           <ShadowButton
//             className="button"
//             backgroundColor={PALETTE_V1.yellow_button}
//             onClick={handleKeeping}
//             state="none-block"
//           >
//             보관하기
//           </ShadowButton>
//         ) : (
//           <ShadowButton
//             className="button"
//             backgroundColor={PALETTE_V1.yellow_button}
//             state="none-block"
//             onClick={handleKeeping}
//           >
//             보관하기
//           </ShadowButton>
//         )}
//         {}
//         {isKeeping ? (
//           <R.ModalBackground>
//             <Modal
//               ModalRef={ModalRef}
//               ContainerHeight={"420px"}
//               ContainerWidth={"370px"}
//               children={
//                 <LoginModal ModalRef={ModalRef} setIsKeeping={setIsKeeping} />
//               }
//             />
//           </R.ModalBackground>
//         ) : (
//           <></>
//         )}
//       </R.Buttons>
//     </>
//   );
// };

// export default ReadButtons;

import { Link } from "react-router-dom";
import * as R from "./ReadStyled";
import { PALETTE_V1 } from "../../style/color";
import ShadowButton from "../commons/ShadowButton";
import Modal from "../commons/Modal";
import LoginModal from "./LoginModal";
import { HiOutlineArrowUturnLeft, HiOutlineTrash } from "react-icons/hi2";

const ReadButtons = ({
  isLogin,
  isKeeping,
  setIsKeeping,
  ModalRef,
  onDownloadBtn,
}) => {
  //'보관하기' 버튼 누르면 모달 나오는 이벤트 핸들러

  const handleKeeping = () => {
    setIsKeeping(!isKeeping);
  };

  //! 휴지통 alert
  const onRemove = () => {
    if (
      window.confirm(
        "정말로 삭제하시겠습니까?\n삭제된 편지는 [마이페이지-휴지통]에서 확인할 수 있습니다."
      )
    ) {
      alert("삭제되었습니다.");
    } else {
      return;
    }
  };

  return (
    <>
      <R.Buttons>
        {isLogin ? (
          <>
            <Link to="/letterbox">
              <HiOutlineArrowUturnLeft size="30" className="goback" />
            </Link>
            <HiOutlineTrash size="30" className="trash" onClick={onRemove} />
          </>
        ) : (
          <></>
        )}
        <ShadowButton
          className="button"
          backgroundColor={PALETTE_V1.yellow_button}
          state="none-block"
          onClick={onDownloadBtn}
        >
          이미지 저장
        </ShadowButton>
        {isLogin ? (
          <ShadowButton
            className="button"
            backgroundColor={PALETTE_V1.aready_keep_button}
            state="block"
          >
            보관완료
          </ShadowButton>
        ) : (
          <ShadowButton
            className="button"
            backgroundColor={PALETTE_V1.yellow_button}
            state="none-block"
            onClick={handleKeeping}
          >
            보관하기
          </ShadowButton>
        )}
        {isKeeping ? (
          <R.ModalBackground>
            <Modal
              ModalRef={ModalRef}
              ContainerHeight={"420px"}
              ContainerWidth={"370px"}
              children={
                <LoginModal ModalRef={ModalRef} setIsKeeping={setIsKeeping} />
              }
            />
          </R.ModalBackground>
        ) : (
          <></>
        )}
      </R.Buttons>
    </>
  );
};

export default ReadButtons;
