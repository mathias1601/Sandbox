import React, { useState } from 'react'
import addition from "../assets/addition.png"
import subtraction from "../assets/subtraction.png"
import multiplication from "../assets/multiplication.png"
import division from "../assets/division.png"
import "../css/mathGame.css"


function SimpleMathGame() {

    const operations = [addition, subtraction, multiplication, division]

    const [numList, setNumList] = useState();
    const [minDigits, setMinDigits] = useState<number>(2);
    const [maxDigits, setMaxDigits] = useState<number>(2);

    const listOperations = operations.map((item: any) => (
            <div className='mathSymbolsContainer'>
                <img style={{display: "inline"}} className='mathSymbols' src={item} alt=""/>
            </div>
        ))

  return (
    <>  
        <label htmlFor=""></label>
        <p>Set the minimum number of digits a number can have</p>
        <input type="number" id='minDigits' onChange={e => setMinDigits(Number(e.target.value))}/>

        <p>Set the maximum number of digits a number can have</p>
        <input type="number" onChange={e => setMaxDigits(Number(e.target.value))}/>

        <p>Set how many numbers you want</p>
        <input type="number" onChange={e => setMaxDigits(Number(e.target.value))}/>

        {listOperations}

    </>
  )
}

export default SimpleMathGame