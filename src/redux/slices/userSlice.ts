import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const initialState: any = [{
//     username: "",
//     email: "",
//     password: "",
// }];

interface User {
  username: string;
  email: string;
  password: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        
        addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    deleteUser(state, action: PayloadAction<string>) {
      state.users = state.users.filter((user) => user.email !== action.payload);
 
        }
    }
})

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer