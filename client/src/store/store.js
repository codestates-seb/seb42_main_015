import { create } from "zustand";


const useStore = create((set) => ({
  currentPage: null,
  changeCurrentPage: (page) => set((state) => ({ currentPage: page })),
  isLogin: false,
  setIsLogin: (loginState) => set((state) => ({ isLogin: loginState })),
  contentFont: "프리텐다드",
  changeContentFont: (font) => set((state) => ({ contentFont: font })),
  letterContents: {
    toName: "",
    fromName: "",
    content: "",
    password: "",
    urlName: "",
  },
  setLetterContents: (contents) =>
    set((state) => ({ letterContents: contents })),
  outLetters: [],
  setOutLetters: (outLetters) => set((state) => ({ outLetters })),
  inLetters: [],
  setInLetters: (inLetters) => set((state) => ({ inLetters })),
  isSend: false, 
  setIsSend: (isSend) => set((state) => ({ isSend })),
  acessTokenExpire: false,
  setAcessTokenExpire: (token) => set((state) => ({ acessTokenExpire: token })),
}));

export default useStore;
