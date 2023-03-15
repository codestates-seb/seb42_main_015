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

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <BrowserRouter>
      <Header isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/writeletter" element={<WriteLetter />} />
        <Route path="/completeLogout" element={<CompleteLogout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
