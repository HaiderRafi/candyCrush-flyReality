import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import boardSlice from "./boardSlice";

const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false, // Allow non-serializable values
    }),
  ];

let store=configureStore({
    reducer:{
        candyCrush:boardSlice
    },
    middleware,

});

export default store;
