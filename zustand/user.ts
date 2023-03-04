import { create } from "zustand"

const userStore = create((set) => ({
    user: null,
    token: '',
    setUser: (): void => set({ user: localStorage.getItem('user') }),
    setToken: (token: string): void => set({ token })
}));

export default userStore;
