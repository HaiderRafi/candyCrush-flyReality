export const isColumnOfFour = (newBoard, boardSize, formulaForColumnofFour) => {
  for (let i = 0; i <= formulaForColumnofFour; i++) {
    let columnOfFour = [i, i + boardSize, i + boardSize * 2, i + boardSize * 3];
    let decidedColor = newBoard[i];
    let isBlank = newBoard[i] === "";

    if (
      columnOfFour.every(
        (candy) => newBoard[candy] === decidedColor && !isBlank
      )
    ) {
      columnOfFour.forEach((candy) => (newBoard[candy] = ""));
      return true;
    }
  }
};


export const isColumnOfThree = (newBoard, boardSize, formulaForColumnofThree) => {
    for (let i = 0; i <= formulaForColumnofThree; i++) {
      let columnOfThree = [i, i + boardSize, i + boardSize * 2];
      let decidedColor = newBoard[i];
      let isBlank = newBoard[i] === "";
  
      if (
        columnOfThree.every(
          (candy) => newBoard[candy] === decidedColor && !isBlank
        )
      ) {
        columnOfThree.forEach((candy) => (newBoard[candy] = ""));
        return true;
      }
    }
  };


  export let checkForRowOfFour=(newBoard,boardSize,invalidMoves)=>{
    for(let i=0;i<boardSize*boardSize;i++){
        let rowOfFour=[i,i+1,i+2,i+3]
        let decidedColor = newBoard[i];
        let isBlank = newBoard[i] === "";
        if(invalidMoves.includes(i)) continue;

        if (
            rowOfFour.every(
              (candy) => newBoard[candy] === decidedColor && !isBlank
            )
          ) {
            rowOfFour.forEach((candy) => (newBoard[candy] = ""));
            return true;
          }
    }
}

export let checkForRowOfThree=(newBoard,boardSize,invalidMoves)=>{
    for(let i=0;i<boardSize*boardSize;i++){
        let rowOfThree=[i,i+1,i+2]
        let decidedColor = newBoard[i];
        let isBlank = newBoard[i] === "";
        if(invalidMoves.includes(i)) continue;

        if (
            rowOfThree.every(
              (candy) => newBoard[candy] === decidedColor && !isBlank
            )
          ) {
            rowOfThree.forEach((candy) => (newBoard[candy] = ""));
            return true;
          }
    }
}