import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import boardSlice, { moveBelow, updateBoard, updateBoardSize } from "./utils/redux/boardSlice";
import { createBoard } from "./utils/createBoard";
import Board from "./components/Board";
import { checkForRowOfFour, checkForRowOfThree, isColumnOfFour, isColumnOfThree } from "./utils/moveCheckLogic";
import { formulaForColumnofFour, formulaForColumnofThree, generateInvalidMoves } from "./utils/formulas";

function App() {

  let dispatch=useDispatch();
  let board = useSelector((store) => store.candyCrush.board);
  let boardsize=useSelector((store)=>store.candyCrush.boardSize);
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
      isColumnOfFour(newBoard,boardsize,formulaForColumnofFour(boardsize))
      checkForRowOfFour(newBoard,boardsize,generateInvalidMoves(boardsize,true))
      isColumnOfThree(newBoard,boardsize,formulaForColumnofThree(boardsize))
      checkForRowOfThree(newBoard,boardsize,generateInvalidMoves(boardsize,true))
      dispatch(updateBoard(newBoard))
      dispatch(moveBelow())
    }, 150);

    return()=>{
      clearInterval(timeout)
    }
  },[board,boardsize,dispatch])
  return (
    <>
      <div className="flex items-center justify-center h-screen">
       <Board/>
      </div>
    </>
  );
}

export default App;
