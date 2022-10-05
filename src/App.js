import useWordGame from "./useWordGame";
import {useState, useEffect, useRef} from "react"

function App() {
  const {textBoxRef, handleChange, text, isTimeRunning, timer, startGame, wordCount} = useWordGame(5);

  return (
    <div className='container'>
      <h1>How fast can you type?</h1>
      <textarea ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}    
      />
      <h4>Time remaining: {timer}</h4>
      <button 
        onClick={startGame}
        disabled={isTimeRunning}>
        Start Game</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
