import { create } from "zustand";

const useStore = create((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  deleteUser: (index) =>
    set((state) => ({
      users: state.users.filter((_, i) => i !== index),
    })),
  updateUser: (index, updatedUser) =>
    set((state) => ({
      users: state.users.map((user, i) =>
        i === index ? updatedUser : user
      ),
    })),
}));

export default useStore;
