import React, { useState, useMemo } from 'react';

function UseMemo(){
    const[count, setCount] = useState(0);
    const[other, setOther] = useState(0);

    const expensiveValue = useMemo (()=>{
        console.log('calculating');
        return count*2;
    }, [count]);


    return(
        <div>
            <h2>UseMemo Example</h2>
            <h2>Count: {count}</h2>
            <h2>Other: {other}</h2>
            <h2>Expensive: {expensiveValue}</h2>
            <button onClick={()=>setCount(count + 1)}>Increment</button>
            <button onClick={()=>setOther(other + 1)}>Change Other State</button>
        </div>
    )
}
export default UseMemo;