import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBoardSize } from "../utils/redux/boardSlice";

const GridSize = () => {
  let dispatch = useDispatch();

  let [input, setInput] = useState(10);

  function handleChange(e) {
    const newSize = e.target.value;
    setInput(newSize);
    // dispatch(updateBoardSize(newSize));
  }

  console.log(input);
  return (
    <>
      <div>
        <input
          className="w-56 h-12"
          type="number"
          value={input}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </>
  );
};

export default GridSize;
