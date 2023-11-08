import { candies } from "./candyData";

export const createBoard=(boardSize)=>{
    return Array(boardSize * boardSize)
    .fill(null)
    .map(function () {
      return candies[Math.floor(Math.random() * candies.length)];
    });
}