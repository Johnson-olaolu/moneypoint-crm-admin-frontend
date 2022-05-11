import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name : "messages",
    initialState : {
        messages : []
    },
    reducers : {
        getMessages : (state, action) => {
            state.messages  = action.payload
        },
        removeMessages : (state, action) => {
            state.messages = []
        }
    }
})
export const { getMessages, removeMessages} =  messagesSlice.actions

export default messagesSlice.reducer