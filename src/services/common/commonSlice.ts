import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@typings/User";

export interface CommonState {
  user: User;
}

const initialState: CommonState = {
  user: {
    profileId: "",
    nickname: "",
    email: "",
  },
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { setUser, resetUser } = commonSlice.actions;

export default commonSlice;
