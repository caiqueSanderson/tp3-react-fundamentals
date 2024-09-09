import { useState } from "react";

export default function Counter(){
    const [number, setNumber] = useState(0);

    function increment(){
        setNumber(number + 1)
    }
 
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}