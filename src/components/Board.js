import React from "react";
import { useSelector } from "react-redux";
import Tile from "./Tile";

const Board = () => {
  let board = useSelector((store) => store.candyCrush.board);
  let boardsize=useSelector((store)=>store.candyCrush.boardSize);

  console.log(board);

  return (
    <div className="flex flex-wrap rounded-lg" style={{width:`${6.25*boardsize}rem`}}>
      {board.map((data, index) => {
        return <Tile candy={data} key={index} candyId={index} />;
      })}
    </div>
  );
};

export default Board;
