import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const user = action.payload.data

            //set niali dari state
            state.user = user

            //set nilai dari local storage
            localStorage.setItem("user", JSON.stringify(user))
        },
        logoutUser: (state) => {
            state.user = null
            localStorage.removeItem("user")
            toast.success("Logout Success")
        }
    }
})

export const {loginUser, logoutUser} = userSlice.actions

export default userSlice.reducer