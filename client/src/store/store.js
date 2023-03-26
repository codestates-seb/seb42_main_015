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
    toName: "",
    fromName: "",
    content: "",
    password: "",
    urlName: "",
  },
  setLetterContents: (contents) =>
    set((state) => ({ letterContents: contents })),
}));

export default useStore;
