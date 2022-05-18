import { createSlice } from "@reduxjs/toolkit";
import { ICustomerSupport } from "../interface/customer-support.interface";
import { IUser } from "../interface/user.interface";


// Slice
const userSlice = createSlice({
	name: "user",
	initialState: {
		user:null ,
	} as { user : { user : IUser , customerSupport? : ICustomerSupport}  | null},
	reducers: {
		userLogin: (state, action) => {
			state.user = action.payload;
		},
		userLogout: (state, action) => {
			state.user = null;
		},
	},
});

export const { userLogin, userLogout} = userSlice.actions

export default userSlice.reducer
