import { createSlice } from "@reduxjs/toolkit";
import { signInUser, signUpUser } from "./authThunks";
interface InitialStateType {
  token: null | string;
  loading: boolean;
  error: null | string;
  success: null | string;
}
const initialState: InitialStateType = {
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
  success: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.loading = false;
      state.error = null;
      state.success = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // Signup
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })

      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.msg;
      })

      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Signin
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })

      .addCase(signInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.msg;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })

      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
export const { logout, clearState } = authSlice.actions;
