import create from "zustand";

interface Name {
  firstName: string;
  lastName: string;
}

interface User {
  id: string;
  email: string;
  name: Name;
}

interface Auth {
  user: User | null;
  setUser: (user: User | null) => void;
}

const useAuth = create<Auth>((set) => ({
  user: null,
  setUser(user) {
    set(() => ({ user }));
  },
}));

export default useAuth;
