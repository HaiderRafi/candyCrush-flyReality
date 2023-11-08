import React from "react";
import { useDispatch } from "react-redux";
import { dragDrop, dragEnd, dragStart } from "../utils/redux/boardSlice";

const Tile = (props) => {
    let dispatch=useDispatch();
  return (
    <div
      className="h-24 w-24 justify-center items-center m-0.5 p-2 rounded-lg select-none"
      style={{
        boxShadow: "inset 5px 5px 15px #062525,inset -5px -5px 15px #aaaab7bb",
      }}
    >
      <img
        src={props?.candy}
        
        alt=""
        className="h-20 w-20"
        candy-id={props.candyId}
        draggable={true}
        onDragStart={(e) => dispatch(dragStart(e.target))}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => e.preventDefault()}
        onDragLeave={(e) => e.preventDefault()}
        onDrop={(e) => dispatch(dragDrop(e.target))}
        onDragEnd={() => dispatch(dragEnd())}
      />
    </div>
  );
};

export default Tile;
