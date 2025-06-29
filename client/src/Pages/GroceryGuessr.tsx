import { useEffect, useState } from 'react'
import '../css/grocery.css'

function GroceryGuessr() {

    const [name1, setName1] = useState();
    const [cal1, setCal1] = useState(0);
    const [img1, setImg1] = useState();

    const [name2, setName2] = useState();
    const [cal2, setCal2] = useState(0);
    const [img2, setImg2] = useState();

    const [level, setLevel] = useState(0);
    const [screen , setScreen] = useState(0);

    const [knownProduct, setKnownProduct] = useState(1);

    
    const isHigher = () => {
        if (knownProduct == 2 && cal1 >= cal2) {
            updateLevel()
        }
        else if (knownProduct == 1 && cal1 <= cal2) {
            updateLevel()
        }
        else {
            setScreen(0)
        }
    }

    const isLower = () => {
        if (knownProduct == 2 && cal1 <= cal2) {
            updateLevel()
        }
        else if (knownProduct == 1 && cal1 >= cal2) {
            updateLevel()
        }
        else {
            setScreen(0)
        }
        
    }

    const updateLevel = () => {

        if (knownProduct == 1) {
            setKnownProduct(2)
        }
        else {
            setKnownProduct(1)
        }

        setLevel(level + 1)

    }

    const startGame = () => {
        setScreen(1)
    }

    const retry = () => {
        setScreen(0) 
        setLevel(0)
    }

    // Initial random products
    const fetchRandomProduct = async () => {
    
        try {
          const response = await fetch(
            "https://world.openfoodfacts.org/cgi/search.pl?action=process&json=true&page_size=100"
          );
    
          if (!response.ok) {
            throw new Error("Failed to fetch data.");
          }
    
          const data = await response.json();
          const products = data.products;
    
          if (products.length > 0) {
            const randomProduct1 = products[Math.floor(Math.random() * products.length)];
            let randomProduct2 = products[Math.floor(Math.random() * products.length)];
            
            while (randomProduct1 == randomProduct2) {
                randomProduct2 = products[Math.floor(Math.random() * products.length)];
            }

            setName1(randomProduct1.product_name);
            setImg1(randomProduct1.image_url)
            setCal1(randomProduct1.nutriments?.["energy-kcal"])

            setName2(randomProduct2.product_name);
            setImg2(randomProduct2.image_url)
            setCal2(randomProduct2.nutriments?.["energy-kcal"])
          } 
        } catch (err) {
          console.log(err)
        } 
      };

      //Updates random products
      const updateRandomProduct = async () => {
    
        try {
          const response = await fetch(
            "https://world.openfoodfacts.org/cgi/search.pl?action=process&json=true&page_size=500"
          );
    
          if (!response.ok) {
            throw new Error("Failed to fetch data.");
          }

          const data = await response.json();
          const products = data.products;
          
          const randomProduct = products[Math.floor(Math.random() * products.length)]
    
          if (knownProduct == 2) {
            setName1(randomProduct.product_name);
            setImg1(randomProduct.image_url)
            setCal1(randomProduct.nutriments?.["energy-kcal"])
          }
          else {
            setName2(randomProduct.product_name);
            setImg2(randomProduct.image_url)
            setCal2(randomProduct.nutriments?.["energy-kcal"])
          }
          
        } catch (err) {
          console.log(err)
        } 
      };
        
      useEffect(() => {
        fetchRandomProduct();
      }, []);

      useEffect(() => {
        updateRandomProduct();
      }, [level]);
    
    if (screen == 1) {
        if (knownProduct == 1) {
            return (
            <>
                <h1>Higher or Lower?</h1>
                <p>Level {level}</p>
                <div className='foodSection'>
                    <div>
                        <p>{name1}</p>
                        <img src={img1} alt="" />
                        <p>{cal1}</p>
                    </div>
                    <div>
                        <p>{name2}</p>
                        <img src={img2} alt="" />
                    </div>
                </div>
                <button onClick={isHigher}>Higher!</button>
                <button onClick={isLower}>Lower!</button>
            </>
            )
        }
        else {
            return (
            <>
                <h1>Higher or Lower?</h1>
                <p>Level {level}</p>
                <div className='foodSection'>
                    <div>
                        <p>{name1}</p>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <p>{name2}</p>
                        <img src={img2} alt="" />
                        <p>{cal2}</p>
                    </div>
                </div>
                <button onClick={isHigher}>Higher!</button>
                <button onClick={isLower}>Lower!</button>
            </>
            )
        }
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
                <h1>Grocery Guessr!</h1>
                <p>Guess if the price higher or lower.</p>
                <p>How many can you guess correctly?</p>
                <button onClick={startGame} >Play</button>
            </>
        )
    }
}

export default GroceryGuessr