import React, { useEffect, useState } from 'react'
import axios from 'axios'
import shuffle from "lodash.shuffle";

function Trivia() {

    const [isLoading, setIsLoading] = useState(false);
    
    const [result, setResult] = useState<any[]>([]);

    const [numQuestions, setNumQuestions] = useState(10);   
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");

    const [screen, setScreen] = useState(""); 
    const [level, setLevel] = useState(-1);

    const [correctAnswer, setCorrectAnswer] = useState<string>();
    const [guessedAnswer, setGuessedAnswer] = useState<string>();

    const [allAnswers, setAllAnswers] = useState<any[]>([]);


    useEffect(() => {
        if (guessedAnswer !== undefined) {
            checkAnswer();
        }
    }, [guessedAnswer]);

    const checkAnswer = () => {
        console.log(guessedAnswer)
        console.log(correctAnswer)
        if (guessedAnswer != correctAnswer) {
            setScreen("game_over")
            return 
        }
        updateLevel()
        
    }

  const updateLevel = () => {
          setLevel(level + 1)
  }

  const startGame = () => {
      fetchTriviaData()
      setScreen("play")
  }

  const retry = () => {
      setScreen("home") 
      setLevel(-1)
  }


    // Function for fetching trivia from API
    const fetchTriviaData = async () => {
        setIsLoading(true)
        let apiUrl = `/trivia/api/questions?amount=${numQuestions}`;

        if (difficulty != "") {
            apiUrl += `&difficulty=${difficulty}`;
        }
        if (category != "") {
            apiUrl += `&category=${category}`;
        }

        try {
            console.log(apiUrl)
            const response = await fetch(apiUrl);
            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error('Error fetching trivia data:', error);
        } finally {
            setIsLoading(false);
            setLevel(0)
        }
    };

    useEffect (() => {

        if (result.length == 0 || level >= numQuestions || level == -1) {
            console.log(result)
            return 
        }
        console.log(result)
        console.log(level)
        const incorrectAnswers = result[level].incorrectAnswers;
        const correctAnswer: string = result[level].correctAnswer;
        console.log(correctAnswer)
        console.log(incorrectAnswers)

        setCorrectAnswer(correctAnswer);
        incorrectAnswers.push(correctAnswer)
        const shuffledAnswers = shuffle(incorrectAnswers); 
        setAllAnswers(shuffledAnswers)

    }, [level])


    if (level == numQuestions) {
        return (
            <div>
                <h1>CONGRATULAIONS!</h1>
                <p>You answered all question correctly</p>
            </div>
        )
    }


    if (screen == "play") {

        if (isLoading) {
            return (
                <>
                    <p>Loading ...</p>
                </>
            )
        }
        
        const displayAnswers: any = allAnswers.map((item: any, index: number) => (
            <div key={index}>
                <button onClick={() => {setGuessedAnswer(item)}}>{item}</button>
            </div>

            ));

        return (
            <>
            <div>
                <h1>{result[level].question}</h1>
                <div>
                    {displayAnswers}
                </div>
            </div>
            </>
        )
    }

    else if (screen == "game_over"){
        return (
            <>
            <div className="main">
                <h1>Game over</h1>
                <p>You reached level {level}!</p>
                <button onClick={retry}>Try again?</button>
            </div>
            </>
        )
    }

    else if (screen == "options") {
        return (
            <>
                <button onClick={() => setScreen("home")}>Go back</button>
                <h1>Options</h1>

                <div>
                    <label>
                        Amount of Questions:
                        <input 
                            type="number" 
                            value={numQuestions} 
                            onChange={(e) => setNumQuestions(Number(e.target.value))} 
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Difficulty, do not choose if you want a random difficulty:
                        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                            <option value="">Select Difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </label>
                </div>

                <div>
                <label>
                    Category:
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="21">General Knowledge</option>
                        <option value="17">Science</option>
                        <option value="9">Entertainment</option>
                        {/* Add more categories here */}
                    </select>
                </label>
            </div>
            </>
        )
    } 

    // If screen is home
    else {
        return (
            <>
                <h1>Trivia!</h1>
                <p>How far can you get?</p>
                <button onClick={startGame}>Play</button>
                <button onClick={ () => setScreen("options")}>Change options</button>
            </>
        )
    }
}

export default Trivia