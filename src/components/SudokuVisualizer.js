import React, { useState } from "react";
import "./SudokuVisualizer.css";
import { useNavigate } from 'react-router-dom';

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
const SudokuVisualizer = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate('/', { state: { from: 'merge' } });
  };
  const [grid, setGrid] = useState([
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0],
  ]);

  const arr = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0],
  ];

  let N = 9;


   const solveSudoku=(grid, row, col)=>{
      if (row === N - 1 && col === N){
        return true;
      }
          
      if (col === N)
      {
          row++;
          col = 0;
      }
      if (grid[row][col] !== 0)
          return solveSudoku(grid, row, col + 1);
   
      for(let num = 1; num < 10; num++)
      {
          if (isSafe(grid, row, col, num))
          {
              grid[row][col] = num;
              const newGrid = [...grid];
              newGrid[row][col] = num;
              setGrid(newGrid);
              if (solveSudoku(grid, row, col + 1))
                  return true;
          }
           
          grid[row][col] = 0;
      }
      return false;
  }
   
  function isSafe(grid, row, col, num)
  {
      for(let x = 0; x <= 8; x++)
          if (grid[row][x] === num)
              return false;
      for(let x = 0; x <= 8; x++)
          if (grid[x][col] === num)
              return false;
      let startRow = row - row % 3,
          startCol = col - col % 3;      
      for(let i = 0; i < 3; i++)
          for(let j = 0; j < 3; j++)
              if (grid[i + startRow][j + startCol] === num)
                  return false;
    return true;
  }
  const solve=()=>{
    setGrid(arr);
  }
  return (
    <><center> 
    <div className="grid">
      {grid.map((row, i) => (
        <div className="row" key={i}>
            
          {row.map((col, j) => (
            <input
              type="text"
              className="col"
              key={j}
              value={col !== 0 ? col : ""}
              onChange={async(e) => {
                await delay(100);
                const newGrid = [...grid];
                newGrid[i][j] = parseInt(e.target.value) || 0;
                setGrid(newGrid);
              }}
            />
          )
          )}
        </div>
      ))}
    </div>
    </center>
    <button onClick={home} >Home</button>
    <button  onClick={()=>!solveSudoku(grid, 0, 0)?alert("Invaild Sudoku"):alert("It is the Valid Sudoku")}>Sudoku Vaid Or Not</button>
    <button  onClick={solve}>Reset Board</button>
   
    </>
  );
};
//export sudoku Hello Pat
export default SudokuVisualizer;
