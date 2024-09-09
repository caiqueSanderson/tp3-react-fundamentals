import { useState } from "react";
import DisplayCounter from "./DisplayCount";

export default function Counter(){
    const [number, setNumber] = useState(0);

    function increment(){
        setNumber(number + 1);
    }

    function reset(){
        setNumber(0);
    }
 
    return(
        <div>
            <DisplayCounter count={number}/>
            <button onClick={increment}>Incrementar</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}