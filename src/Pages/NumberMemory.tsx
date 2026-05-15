import { useEffect, useRef, useState } from 'react'

function NumberMemory() {
  // State to track the current screen of the game

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
        const newLevel = level + 1
        setLevel(newLevel)
	    getRandomNumber(newLevel)
         

  }

  const startGame = () => {
      setScreen(1)
  }

  const retry = () => {
      setScreen(0) 
      setLevel(0)
  }

  const getRandomNumber = (newLevel: number) => {
        
        const min = 10 ** (newLevel - 1); // Smallest number with x digits
        const max = 10 ** newLevel - 1;   // Largest number with x digits
        setNumber((Math.floor(Math.random() * (max - min + 1)) + min).toString())
        makeInvisible()
  }

  // For making words dissappear after set time
  const makeInvisible = () => {
      setVisibility(true)
      
      setTimeout(() => {
          setVisibility(false);
      }, 3000);
  }

  
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
              <p>How many levels can you complete?</p>
              <button onClick={ () =>  {startGame(); updateLevel();}} >Play</button>
          </>
      )
  }
}

export default NumberMemory