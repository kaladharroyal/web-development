import React, {useState, useCallback} from 'react'

function Button({onClick, label}){
    console.log('rendering button:' , label);
    return <button onClick={onClick}>{label}</button>;
}
const UseCallbackex = () => {
    const [count, setCount] = useState(0);
    const increment = useCallback(()=>{
        setCount(c=>c+1);
    }, []);
  return (
    <div>
        <h2>useCallBack example </h2>
        <p>Count:{count}</p>
        <button onClick={increment}label = "incrementCount" />
    </div>

  )
}

export default UseCallbackex