import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./boardSlice";

let store=configureStore({
    reducer:{
        candyCrush:boardSlice
    }

});

export default store;
