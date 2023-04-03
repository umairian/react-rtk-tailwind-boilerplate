import { createSlice } from "@reduxjs/toolkit";
import reducers from "../reducers/Auth";

const initialState = {
    isLoggedIn: false,
    token: null,
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers,
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;