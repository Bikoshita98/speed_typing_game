import {useState,useEffect,useRef} from "react"

function useWordGame(startingTime = 10){
  const [text, setText] = useState('');
  const [timer, setTimer] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  function handleChange(e){
  const {value} = e.target
  setText(value)
  }

  function calculateWordCount(string){
    const wordArr = string.trim().split(' ')
    const filteredWords = wordArr.filter(word => word!== "")
    return filteredWords.length;
  }

  function startGame(){
    setIsTimeRunning(true)
    setTimer(startingTime)
    setText("")
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(text))
  }

  useEffect(() => {
    if(isTimeRunning && timer > 0){
      setTimeout(() => {
        setTimer(time => time - 1)
      }, 1000)
    }
    else if(timer === 0){
      endGame();  
    }
  },[timer,isTimeRunning])

  return {textBoxRef, handleChange, text, isTimeRunning, timer, startGame, wordCount}

}

export default useWordGame