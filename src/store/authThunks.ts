import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUpUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://note-sigma-black.vercel.app/api/v1/users/signUp",
        userData,
      );

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  },
);

export const signInUser = createAsyncThunk(
  "auth/signinUser",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://note-sigma-black.vercel.app/api/v1/users/signIn",
        userData,
      );

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  },
);
