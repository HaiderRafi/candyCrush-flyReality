import {
  formulaForColumnofFour,
  formulaForColumnofThree,
  
  generateInvalidMoves,
} from "../../formulas";
import {
  checkForRowOfFour,
  checkForRowOfThree,
  isColumnOfFour,
  isColumnOfThree,
} from "../../moveCheckLogic";

export const dragEndReducer = (state) => {
    
  const newBoard = [...state.board];
  let { boardSize, squareBeingDragged, squareBeingReplaced } = state;
  const squareBeingDraggedId = parseInt(
    squareBeingDragged?.getAttribute("candy-id")
  );
  const squareBeingReplacedId = parseInt(
    squareBeingReplaced?.getAttribute("candy-id")
  );

  newBoard[squareBeingReplacedId] = squareBeingDragged?.getAttribute("src");
  newBoard[squareBeingDraggedId] = squareBeingReplaced?.getAttribute("src");

  const validMoves = [
    squareBeingDraggedId - 1,
    squareBeingDraggedId - boardSize,
    squareBeingDraggedId + 1,
    squareBeingDraggedId + boardSize,
  ];

  const validMove = validMoves.includes(squareBeingReplacedId);

  const isAColumnOfFourResult = isColumnOfFour(
    newBoard,
    boardSize,
    formulaForColumnofFour(boardSize)
  );

  const isARowOfFourResult = checkForRowOfFour(
    newBoard,
    boardSize,
    generateInvalidMoves(boardSize, true)
  );

  const isAColumnOfThreeResult = isColumnOfThree(
    newBoard,
    boardSize,
    formulaForColumnofThree(boardSize)
  );

  const isARowOfThreeResult = checkForRowOfThree(
    newBoard,
    boardSize,
    generateInvalidMoves(boardSize)
  );

  if (
    squareBeingReplacedId &&
    validMove &&
    (isARowOfThreeResult ||
      isARowOfFourResult ||
      isAColumnOfFourResult ||
      isAColumnOfThreeResult)
  ) {
    squareBeingDragged = undefined;
    squareBeingReplaced = undefined;
  } else {
    newBoard[squareBeingReplacedId] = squareBeingReplaced?.getAttribute("src");
    newBoard[squareBeingDraggedId] = squareBeingDragged?.getAttribute("src");
  }
  state.board = newBoard;
};
