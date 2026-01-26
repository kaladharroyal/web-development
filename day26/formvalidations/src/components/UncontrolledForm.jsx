import {useRef} from 'react';

export default function UncontrolledForm(){
    const inputRef = useRef();
    const handleSubmit = (e) =>{
    e.preventDefault();
    alert(`Value: ${inputRef.current.value}`);
};
return(
    <form onSubmit={handleSubmit}>
    <input type="text" ref={inputRef} placeholder='Enter value' />
    <button type="submit">Submit</button>
    </form>
);
}