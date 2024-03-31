import { useCallback, useState } from "react"

export const useCounter = ({currentValue = 0, step = 1} ={}) => {
    const [counter, setCounter] = useState(currentValue);

    const increment = useCallback(()=>setCounter((currentValue) => currentValue + step), [step]);
    const decrement = useCallback(()=>setCounter((currentValue) => currentValue - step), [step]);

    return {counter, increment, decrement};
}