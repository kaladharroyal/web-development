import React,{useState} from "react";
export default function MultiStepForm(){
    const [step, setStep] = useState(1);
    const [data, setData] = useState({name:'', age:''});

    const handleChange = (e) =>{
        setData({...data, [e.target.name]:e.target.value});
    };
    const prev = () => setStep(step + 1);
    const next = () => setStep(step + 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(data));
    };

    return(
        <form onSubmit={handleSubmit}>
            {step === 1 && (
                <>
                <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Name" />
                <button type="button" onClick={next}>Next</button>
                </>
            )}
            {step === 2 && (
                <>
                <input type="number" name="age" value={data.age} onChange={handleChange} placeholder="age" />
                <button type="submit" onClick={next}>Submit</button>
                </>
            )}
            
        </form>
    )
}
