import { useState } from 'react';


function Square({value, onSquareClick}) {

  return <button className="square" onClick={onSquareClick}>
    {value}
  </button>
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [xIsNext, setXIsNext] = useState(true); // sets this value to true ()
  const winner = calculateWinner(squares)
  let status;
  if (winner) {
    status = `Winner ${winner}`  
  } else {
    status = `next player is ${xIsNext ?  'X' : 'O'}`
  }
  function handleClick(i){
    if (squares[i] || calculateWinner(squares)) {
      return // don't change the value of existing 
    }
      

    const nextSquares = squares.slice() //intentional to preserve immutability of the nextSquares
    if (xIsNext){
      nextSquares[i] = 'X'
    }
    else {
      nextSquares[i] = 'O'
    }
    
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  
  }

  // when calling You don’t want to call handleClick until the user clicks!
  // that's why fat arrow the handle click
  return (
    <>
        <div>{status}</div>
         <div className="board-row">
          <Square value={squares[0]} onSquareClick={()=> {handleClick(0)}}/>
          <Square value={squares[1]} onSquareClick={()=> {handleClick(1)}}/>
          <Square value={squares[2]} onSquareClick={()=> {handleClick(2)}}/>
         </div>
         <div className="board-row">
          <Square value={squares[3]} onSquareClick={()=> {handleClick(3)}}/>
          <Square value={squares[4]} onSquareClick={()=> {handleClick(4)}}/>
          <Square value={squares[5]} onSquareClick={()=> {handleClick(5)}}/>
         </div>
         <div className="board-row">
          <Square value={squares[6]} onSquareClick={()=> {handleClick(6)}}/>
          <Square value={squares[7]} onSquareClick={()=> {handleClick(7)}}/>
          <Square value={squares[8]} onSquareClick={()=> {handleClick(8)}}/>
         </div>
    </>
  );
}

function calculateWinner(squares){
  const lines = [
    [0,1,2],

  ]
  for (var i = 0; i < lines.length; i++ ) {
    let checkWin = lines[i]
    console.log('checkWIn', checkWin)
    console.log(squares[checkWin[0]], squares[checkWin[0]], squares[checkWin[1]], squares[checkWin[2]])
    console.log('here', squares[checkWin[0]],  squares[checkWin[1]])
    if(squares[checkWin[0]] && (squares[checkWin[0]] === squares[checkWin[1]] === squares[checkWin[2]])){
      console.log('winner')
      return squares[checkWin[0]]
    }
  }
  return null
}

export default App;
