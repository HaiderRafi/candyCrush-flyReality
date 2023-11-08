import { createSlice } from "@reduxjs/toolkit";
import { moveBelowReducer } from "./reducers/moveBelow";
import { dragEndReducer } from "./reducers/dragEnd";

let boardSlice=createSlice({
    name:"candyCrush",
    initialState:{
        board:[],
        boardSize:10,
        squareBeingDragged:undefined,
        squareBeingReplaced:undefined

    },
    reducers:{
        updateBoard:(state,action)=>{
            state.board=action.payload;
        },

        updateBoardSize:(state,action)=>{
            state.boardSize=action.payload

        },
        dragStart:(state,action)=>{
            state.squareBeingDragged=action.payload

        },
        dragDrop:(state,action)=>{
            state.squareBeingReplaced=action.payload

        },
        dragEnd:dragEndReducer,
        moveBelow:moveBelowReducer

    }
})

export const {updateBoard,updateBoardSize,moveBelow,dragStart,dragDrop,dragEnd}= boardSlice.actions
export default boardSlice.reducer;