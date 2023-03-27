import { create } from "zustand";


const useStore = create((set) => ({
  currentPage: null,
  changeCurrentPage: (page) => set((state) => ({ currentPage: page })),
  isLogin: false,
  setIsLogin: (loginState) => set((state) => ({ isLogin: loginState })),
  contentFont: "프리텐다드",
  changeContentFont: (font) => set((state) => ({ contentFont: font })),
  memberId: null,
  setMemberId: (memberId) => set((state) => ({ memberId: memberId })),
  letterContents: {
    toName: null,
    fromName: null,
    content: null,
    password: null,
    urlName: null,
  },
  setLetterContents: (contents) =>
    set((state) => ({ letterContents: contents })),
  outLetters: [],
  setOutLetters: (outLetters) => set((state) => ({ outLetters })),
  inLetters: [],
  setInLetters: (inLetters) => set((state) => ({ inLetters })),
  isSend: false, 
  setIsSend: (isSend) => set((state) => ({ isSend })),
}));

export default useStore;
