import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/es/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import tickets from "./ticketStore"
import messages from "./messageStore"
import user from "./userStore"

const reducers = combineReducers({
    tickets,
	user,
	messages
})

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: [thunk],
});

export default store;
