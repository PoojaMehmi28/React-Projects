import gamelogo from './images/game-logo.png';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log  from './components/Log';
import { Winningcombination } from './components/Winningcombination.js';
import GameOver from './components/GameOver.js';
import { useState } from "react";
import './App.css';

const initialGameBoard =[
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }
 return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  });
  const [gameTurns, setGameTurns] = useState([]);
  //  const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for(const turn of gameTurns){
      const {square , player } = turn;
      const {row, col } = square;
      gameBoard[row][col] = player;
  }
   
  let winner = null;

  for( const combination of Winningcombination){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = players[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex){
      //setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  
      setGameTurns(prevTurns => {
        const currentPlayer = deriveActivePlayer(prevTurns);
        // const currentPlayer = deriveActivePlayer(prevTurns);
        // let currentPlayer = 'X';

        // if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        //   currentPlayer = 'O';
        // }
        const updatedTurns = [
          {square: {row: rowIndex,col: colIndex} , player: currentPlayer }, 
          ...prevTurns];
        return updatedTurns;
      });
  }

  function handleRestart(){
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevTurns => {
      return {
        ...prevTurns,
        [symbol]: newName
      };
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={gamelogo} className="App-logo" alt="logo" />
        <h2>
         Tic-Tac-Toe
        </h2>
      </header>
      <main>
        <div id="game-container">
            <ol id="players" className='highlight-player'>
              <Player initialname="Player 1" symbol={"X"} isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
              <Player initialname="Player 2" symbol={"O"} isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
            </ol>
            {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
            <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
        </div>
      </main>
      <Log turns={gameTurns}/>
    </div>
  );
}

export default App;
