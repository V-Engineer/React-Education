import React from 'react';
import { useCounter } from "../hooks/use-counter";

export const Dish = ({dish}) =>{

    const {counter, increment, decrement} = useCounter();

    return(
        <div>            
            <span>{dish.name}</span>
            

            <div>
                <button onClick={decrement} disabled={counter === 0}>-</button>
                {counter}
                <button onClick={increment} disabled={counter === 5}>+</button>
            </div>
        </div>
        
        
    );
}