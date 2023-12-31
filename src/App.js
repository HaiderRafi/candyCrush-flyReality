import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import boardSlice, { moveBelow, updateBoard, updateBoardSize } from "./utils/redux/boardSlice";
import { createBoard } from "./utils/createBoard";
import Board from "./components/Board";
import { checkForRowOfFour, checkForRowOfThree, isColumnOfFour, isColumnOfThree } from "./utils/moveCheckLogic";
import { formulaForColumnofFour, formulaForColumnofThree, generateInvalidMoves } from "./utils/formulas";
import ScoreBoard from "./components/ScoreBoard";
import GridSize from "./components/GridSize";

function App() {

  let dispatch=useDispatch();
  let board = useSelector((store) => store.candyCrush.board);
  let boardsize=useSelector((store)=>store.candyCrush.boardSize);
  let[score,setScore]=useState(0);
  // console.log(boardsize);
  // console.log(board);

  useEffect(()=>{
    dispatch(updateBoard(createBoard(boardsize)))
    // dispatch(updateBoardSize(9))
    // console.log(createBoard(boardsize));
  },[boardsize,dispatch])

  useEffect(()=>{
    let timeout=setTimeout(() => {
      let newBoard=[...board];
      isColumnOfFour(newBoard,boardsize,formulaForColumnofFour(boardsize), dispatch)
      checkForRowOfFour(newBoard,boardsize,generateInvalidMoves(boardsize,true), dispatch)
      isColumnOfThree(newBoard,boardsize,formulaForColumnofThree(boardsize), dispatch)
      checkForRowOfThree(newBoard,boardsize,generateInvalidMoves(boardsize,true), dispatch)
      dispatch(updateBoard(newBoard))
      dispatch(moveBelow())
      
      
    }, 150);

    return()=>{
      clearInterval(timeout)
    }
  },[board,boardsize,dispatch])
 
  return (
    <>
    <div className="flex items-center justify-center "><h1 className="text-6xl text-yellow-300 p-2" >CandyCrush</h1></div>
      <div className="flex items-center justify-center h-screen">
        {/* <GridSize/> */}
       <Board/>
       <ScoreBoard/>
      </div>
    </>
  );
}

export default App;
