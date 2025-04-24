import React, { useRef, useEffect, useState } from "react";
import '../App.css'
import axios from 'axios'


function MemorizeWordGame() {
    // State to track the current screen of the game
    let numWords = 1
    
    const [APIdown, setAPIdown] = useState(false);

    const [level, setLevel] = useState<number>(0);
    const [screen, setScreen] = useState<number>(0);
    const [words, setWords] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");
    const [apiLink, setApiLink] = useState<string>('/randomwords/word?number=' + numWords);

    const [wordsVisibility, setWordsVisibility] = useState(true); // Keeps track of the visibility of the words 

    const checkAnswer = () => {
        let inputSet = new Set(input.split(" "))
        console.log(inputSet)
        let wordSet = new Set(words)
        console.log(wordSet)

        for (let item of wordSet) {
            if (!inputSet.has(item)) {
                setScreen(-1);
                console.log("Wrong answer")
                return
            }
        }
        updateLevel()
        
    }

    const updateLevel = () => {
        if (level == 0) {
            setLevel(1)
        }
        else {
            setLevel(level + 1) 

            if (level % 3 == 0) {
                console.log("check")
                numWords += 1
                setApiLink('/randomwords/word?number=' + numWords)
            }
        }

    }

    const startGame = () => {
        setScreen(1)
    }

    const retry = () => {
        setScreen(0) 
        setLevel(0)
        numWords = 1
        setApiLink('/randomwords/word?number=' + numWords)
    }

    // useEffect for fetching random words from API
    useEffect(() => {
        axios.get(apiLink)
            .then((res) => {
                console.log(res.data)
                setWords(res.data); 
                setAPIdown(false)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setAPIdown(true)
            });
    }, [level]);

    // useEffect for making words dissappear after set time
    useEffect(() => {
        setWordsVisibility(true)
        
        setTimeout(() => {
            setWordsVisibility(false);
        }, 3000);
    }, [level])

    if (APIdown) {
        return (
            <>
                The API server is sadly down :/
            </>
        )
    }


    if (screen == 1) {
        return (
        <>
            <h1>Type in the words</h1>
            {wordsVisibility ? <p  style={{ userSelect: "none" }}>{words.join(" ")}</p> : <p></p>}
            <p>Level {level}</p>
            {wordsVisibility ? <p></p> : <input type="text" onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => {if (e.key == "Enter") checkAnswer()}}/>}  
            {wordsVisibility ? <p></p> : <button onClick={checkAnswer}>Submit</button> }
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
                <h1>Memorize the words!</h1>
                <p>Memorize the words. The amount of words to remember increases based on the level</p>
                <p>You many levels can you complete?</p>
                <button onClick={ () =>  {startGame(); updateLevel();}} >Play</button>
            </>
        )
    }

}


export default MemorizeWordGame;