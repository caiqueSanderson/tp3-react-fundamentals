import { useState } from "react";
import DisplayCounter from "./DisplayCount";

export default function Counter(){
    const [number, setNumber] = useState(0);

    function increment(){
        setNumber(number + 1)
    }
 
    return(
        <div>
            <DisplayCounter count={number}/>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}