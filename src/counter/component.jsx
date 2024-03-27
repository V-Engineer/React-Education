import { useState } from "react";

export const Counter = () =>{
    const [counter, setCounter] = useState(0);
    return(
        <div>
            <button onClick= {() => setCounter(counter-1)} disabled = {counter === 0}> - </button>
            {counter}
            <button onClick= {() => setCounter(counter+1)} disabled = {counter === 5}> + </button>
        </div>
    );
};