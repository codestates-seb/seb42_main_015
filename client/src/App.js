import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./pages/Certified/SignUp";
import Login from "./pages/Certified/Login";
import CompleteLogout from "./pages/Certified/CompleteLogout";
import Main from "./pages/Main/Main";
import MyPage from "./pages/MyPage/MyPage";
import WriteLetter from "./pages/WriteLetter/WriteLetter";
import ReadLetter from "./pages/ReadLetter/ReadLetter";
import LetterBox from "./pages/LetterBox/LetterBox";
import SetPwd from "./pages/Certified/SetPwd";
import Layout from "./components/Layout";
import PwdChange from "./pages/MyPage/PwdChange";
import Trash from "./pages/MyPage/TrashList";
import CompleteSignup from "./pages/Certified/CompleteSignup";
import Preview from "./pages/WriteLetter/Preview";
import { setCookie, getCookie } from "./pages/Certified/Cookie";
import useStore from "./store/store";
import axios from "axios";
// ! 공백
function App() {
  const displayFooter = true;
  const { isLogin, setIsLogin } = useStore((state) => state);
  const { acessTokenExpire, setAcessTokenExpire } = useStore((state) => state);

  const initializeUserInfo = async () => {
    const loggedInfo = getCookie("accesstoken");
    if (loggedInfo) {
      setIsLogin(true);
      // console.log("accesstoken : ", getCookie("accesstoken"));
      // console.log("refreshToken : ", localStorage.getItem("refreshToken"));
    }
  };

  useEffect(() => {
    initializeUserInfo();
  }, [isLogin]);

  //! Authorization(AccessToken) 재발급
  //expire : Authorization : 1h // Refresh : 24h
  const accessExpire =
    new Date(getCookie("accesstoken_expire")).getTime() + 3600000;
  const presentTime = new Date().getTime();

  if (presentTime > accessExpire) {
    setAcessTokenExpire(!acessTokenExpire);
  }

  const reIssueToken = async () => {
    axios({
      method: "post",
      url: `/api/sendy/auth/reissue`,
      headers: {
        "ngrok-skip-browser-warning": "12",
        Refresh: localStorage.getItem("refreshToken"),
      },
    })
      .then((res) => {
        if (res.headers.getAuthorization) {
          //! accessToken -> cookie에 저장
          setCookie(
            "accesstoken",
            `Bearer ${res.headers.get("Authorization").split(" ")[1]}`,
            {
              path: "/",
              sucure: true,
              sameSite: "Strict",
              HttpOnly: " HttpOnly ",
            }
          );
          //! accessToken expire  -> cookie에 저장(60분)
          setCookie("accesstoken_expire", `${res.headers.get("Date")}`, {
            options,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    reIssueToken();
  }, [acessTokenExpire]);

  // ! 공백
  return (
    <BrowserRouter>
      <Header isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/letterbox" element={<LetterBox />} />
        <Route element={<Layout displayFooter={displayFooter} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/setpwd/:page" element={<SetPwd />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/pwdchange/:page" element={<PwdChange />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/writeletter" element={<WriteLetter />} />
          <Route path="/completeLogout" element={<CompleteLogout />} />
          <Route
            path="/readletter"
            element={<ReadLetter isLogin={isLogin} />}
          />
          <Route path="/completeSignup" element={<CompleteSignup />} />
          <Route path="/writeletter/preview" element={<Preview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// ! 공백
export default App;
