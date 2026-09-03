import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  theme: string;
}

const initialState: initialStateType = {
  theme: localStorage.getItem("theme") || "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    darkTheme: (state) => {
      state.theme = "dark";
      localStorage.setItem("theme", "dark");
    },
    lightTheme: (state) => {
      state.theme = "light";
      localStorage.setItem("theme", "light");
    },
  },
});

export default themeSlice.reducer;
export const { darkTheme, lightTheme } = themeSlice.actions;
