import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    current_user: {
      name: "John Doe",
      username: "johnDoe",
      id: 1,
      user_token:"xassdjkyuA()ls"
    },
  },
  reducers: {},
});

export const authActions = authSlice.actions;
export default authSlice;
