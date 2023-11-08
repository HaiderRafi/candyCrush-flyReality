export let formulaForColumnofFour = (boardSize) => {
  return boardSize * boardSize - (boardSize + boardSize + boardSize) - 1;
};

export let formulaForColumnofThree = (boardSize) => {
  return boardSize * boardSize - (boardSize + boardSize) - 1;
};

export let formulaForMoveBelow=(boardSize)=>{
   return boardSize*boardSize-boardSize-1;
}

export let generateInvalidMoves = (boardSize, isFour = false) => {
  let invalidMoves = [];
  for (let i = 0; i <= boardSize * boardSize; i += boardSize) {
    if (isFour) invalidMoves.push(i - 3);
    invalidMoves.push(i - 2);
    invalidMoves.push(i - 1);
  }

  return invalidMoves;
};


