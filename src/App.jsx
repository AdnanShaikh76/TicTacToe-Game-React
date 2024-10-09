import { useState } from "react";
import React from "react";
import Card from "./card";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);

  console.log(state);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    console.log("clicked on", index);
    if(state[index] !== null){
      return
    }
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "O";
    setState(copyState);
    setIsXturn(!isXturn);
  };

  const handleReset = () =>{
    setState(Array(9).fill(null))
  }

  return (
    <div className="w-full flex items-center justify-center gap-1">
      
      {isWinner ? <> <h3 className="font-semibold text-2xl "s>{isWinner} won</h3> <button className="mx-4 my-3 px-4 py-2 rounded-md bg-slate-500 text-white" onClick={handleReset}>Reset Game</button> </>: <>
      <h3 className="font-semibold text-2xl mx-14">Its " { isXturn ? "X" : "O"} " Turn</h3>
      <div className="my-5">
        <Card onClick={() => handleClick(0)} value={state[0]} />
        <Card onClick={() => handleClick(1)} value={state[1]} />
        <Card onClick={() => handleClick(2)} value={state[2]} />
      </div>
      <div className="my-5">
        <Card onClick={() => handleClick(3)} value={state[3]} />
        <Card onClick={() => handleClick(4)} value={state[4]} />
        <Card onClick={() => handleClick(5)} value={state[5]} />
      </div>
      <div className="my-5">
        <Card onClick={() => handleClick(6)} value={state[6]} />
        <Card onClick={() => handleClick(7)} value={state[7]} />
        <Card onClick={() => handleClick(8)} value={state[8]} />
      </div>
      </>
      }
    </div>
  );
}

export default App;
