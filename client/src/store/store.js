import { set } from "date-fns";
import { create } from "zustand";

const useStore = create((set) => ({
  currentPage: null,
  changeCurrentPage: (page) => set((state) => ({ currentPage: page })),
  isLogin: false,
  setIsLogin: (loginState) => set((state) => ({ isLogin: loginState })),
  contentFont: "프리텐다드",
  changeContentFont: (font) => set((state) => ({ contentFont: font })),
  letterContents: {
    toName: null,
    fromName: null,
    content: null,
    password: null,
    urlName: null,
    font: "프리텐다드",
    theme: null,
  },
  setLetterContents: (contents) =>
    set((state) => ({ letterContents: contents })),
  outLetters: [],
  setOutLetters: (outLetters) => set((state) => ({ outLetters })),
  inLetters: [],
  setInLetters: (inLetters) => set((state) => ({ inLetters })),
  isSend: false,
  setIsSend: (isSend) => set((state) => ({ isSend })),
  isFilterOut: [],
  setIsFilterOut: (isFilterOut) => set((state) => ({ isFilterOut })),
  isFilterIn: [],
  setIsFilterIn: (isFilterIn) => set((state) => ({ isFilterIn })),
  acessTokenExpire: false,
  setAcessTokenExpire: (token) => set((state) => ({ acessTokenExpire: token })),
  letterPassword: "",
  setLetterPassword: (password) =>
    set((state) => ({ letterPassword: password })),
  messageId: "",
  setMessageId: (messageId) => set((state) => ({ messageId: messageId })),
}));

export default useStore;
