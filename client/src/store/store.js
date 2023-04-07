import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      currentPage: null,
      changeCurrentPage: (page) => set((state) => ({ currentPage: page })),
      isLogin: false,
      setIsLogin: (loginState) => set((state) => ({ isLogin: loginState })),
      letterContents: {
        toName: null,
        fromName: null,
        content: null,
        password: null,
        urlName: null,
        fontName: "프리텐다드",
        themeName: null,
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
      setAcessTokenExpire: (token) =>
        set((state) => ({ acessTokenExpire: token })),
      letterPassword: "",
      setLetterPassword: (password) =>
        set((state) => ({ letterPassword: password })),
      messageId: "",
      setMessageId: (messageId) => set((state) => ({ messageId: messageId })),
    }),
    {
      name: "total-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useStore;
