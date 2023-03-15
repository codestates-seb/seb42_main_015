import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import MyPage from "./pages/MyPage";
import SignUp from "./pages/Certified/SignUp";
import Login from "./pages/Certified/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WriteLetter from "./pages/WriteLetter/WriteLetter";
import Trash from "./pages/MyPage/TrashList";

function App() {
  const [isLogin, setIsLogin] = useState(false);

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
