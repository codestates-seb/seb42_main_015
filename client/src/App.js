import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from "./pages/Certified/SignUp";
import Login from "./pages/Certified/Login";
import CompleteLogout from "./pages/Certified/CompleteLogout";
import Main from "./pages/Main/Main";
import MyPage from "./pages/MyPage/MyPage";
import WriteLetter from "./pages/WriteLetter/WriteLetter";
import Trash from "./pages/MyPage/TrashList";
import ReadLetter from "./pages/ReadLetter/ReadLetter";
import LetterBox from "./pages/LetterBox/LetterBox";
<<<<<<< HEAD
=======
import Layout from "./components/Layout";
>>>>>>> b55161733221b596abcbb1a8194b7a1659d50e7c

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const displayFooter = true;

  return (
    <BrowserRouter>
      <Header isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Main />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/writeletter" element={<WriteLetter />} />
        <Route path="/completeLogout" element={<CompleteLogout />} />
        <Route path="/readletter" element={<ReadLetter />} />
        <Route path="/letterbox" element={<LetterBox />} />
=======
        <Route element={<Layout displayFooter={displayFooter} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/writeletter" element={<WriteLetter />} />
          <Route path="/completeLogout" element={<CompleteLogout />} />
          <Route path="/readletter" element={<ReadLetter />} />
          <Route path="letterbox" element={<LetterBox />} />
        </Route>
>>>>>>> b55161733221b596abcbb1a8194b7a1659d50e7c
      </Routes>
    </BrowserRouter>
  );
}

export default App;
