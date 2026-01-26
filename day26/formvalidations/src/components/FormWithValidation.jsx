import React, {useState} from "react";

export default function FormWithValidation(){
    const [email, setEmail] = useState('');
    const [error, seterror] = useState('');

    const validate = () =>{
        if(!email.includes('@')){
            seterror('Invalid email address');
            return false
        }
        seterror('');
        return true
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validate()){
            alert(` successfully submitted, your email is ${email}`)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="email"
             onChange={(e) => setEmail(e.target.value)} 
             placeholder="Enter email"/>
             <button type="submit">submit</button>
        </form>
    );
}