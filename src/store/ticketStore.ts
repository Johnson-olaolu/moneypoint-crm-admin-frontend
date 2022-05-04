import { createSlice } from "@reduxjs/toolkit";

// Slice
const ticketSlice = createSlice({
	name: "ticket",
	initialState: {
		tickets: [],
	},
	reducers: {
		loadTickets: (state, action) => {
			state.tickets = action.payload;
		},
		removeTickets: (state, action) => {
			state.tickets = [];
		},
	},
});

export const { loadTickets, removeTickets } = ticketSlice.actions

export default ticketSlice.reducer
