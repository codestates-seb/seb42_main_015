import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from './pages/Main';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
