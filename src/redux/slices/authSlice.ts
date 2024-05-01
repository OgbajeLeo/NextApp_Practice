import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  email: string;
  password: string;
}

interface AuthState {
  isLogged: boolean;
  user: User | null; 
}

const initialState: AuthState = {
  isLogged: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.isLogged = true;
      state.user = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    logout(state) {
      state.isLogged = false;
      state.user = null;
      localStorage.removeItem("currentUser"); 
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
