import { useEffect, useRef, useState } from 'react'

function NumberMemory() {
  // State to track the current screen of the game

  const [digits, setDigits] = useState<number>(1);
  const [level, setLevel] = useState<number>(0);
  const [screen, setScreen] = useState<number>(0);
  const [number, setNumber] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const [visibility, setVisibility] = useState(true); // Keeps track of the visibility of the words 

  const checkAnswer = () => {

        if (number != input) {
            setScreen(-1)
            return 
        }
      updateLevel()
      
  }

  const updateLevel = () => {
      if (level == 0) {
          setLevel(1)
      }
      else {
        setDigits(digits + 1)
          setLevel(level + 1) 
      }

  }

  const startGame = () => {
      setScreen(1)
  }

  const retry = () => {
      setScreen(0) 
      setLevel(0)
      setDigits(1)
  }

  
  useEffect(() => {
        console.log(digits)
        const min = 10 ** (digits - 1); // Smallest number with x digits
        const max = 10 ** digits - 1;   // Largest number with x digits
        setNumber((Math.floor(Math.random() * (max - min + 1)) + min).toString());
  }, [level]);

  // useEffect for making numbers dissappear after set time
  useEffect(() => {
      setVisibility(true)
      
      setTimeout(() => {
          setVisibility(false);
      }, 3000);
  }, [level])

  
  const inputRef = useRef<HTMLInputElement>(null);
  //useEffect to focus on the input whenever visibility changes
  useEffect(() => {
    
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [visibility]);

  if (screen == 1) {
      return (
      <>
          <h1>Type in the number</h1>
          {visibility ? <p>{number}</p> : <p></p>}
          <p>Level {level}</p>
          {visibility ? <p></p> : <input ref={inputRef} type="text" onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => {if (e.key == "Enter") checkAnswer()}}/>}  
          {visibility ? <p></p> : <button onClick={checkAnswer}>Submit</button> }
      </>
      )
  }
  
  else if (screen == -1){
      return (
          <>
              <h1>Game over</h1>
              <p>You reached level {level}!</p>
              <button onClick={retry}>Try again?</button>
          </>
      )
  }
  else {
      return (
          <>
              <h1>Memorize the number!</h1>
              <p>Memorize the number. The amount of digits to remember increases based on the level</p>
              <p>You many levels can you complete?</p>
              <button onClick={ () =>  {startGame(); updateLevel();}} >Play</button>
          </>
      )
  }
}

export default NumberMemory