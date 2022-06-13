import './assets/Landingpage.css'
import { useState,useEffect } from "react";


function Form() {
    const initialValues = {email: ""};
    const [emailValues, setEmailValues]= useState(initialValues);
    const [emailErrors, setEmailErrors]= useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) =>{
        const{ name, value }= e.target;
        setEmailValues({...emailValues, [name]: value})
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setEmailErrors(validate(emailValues));
        setIsSubmit(true);
         
    };
    useEffect(() =>{
        console.log(emailErrors)
        if (Object.keys(emailErrors).length === 0 && isSubmit){
            console.log(emailValues)
        }
    },[emailErrors])

    const validate = (values) => {
        const errors = {}
        const regex= /^[^\s@]=@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email){
            errors.email= "Email is required!"
        } else if(!regex.test(values.email)){
            errors.email = "This is not an Email"
        }
        return errors 
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='email' 
                className='email-input' 
                placeholder='Entrez votre email' 
                // value={emailValues.email} 
                onChange={handleChange}/>
                <button className="firstButton" type='submit'>Commencer l'inscription</button>
            </form>
            <p className='errorMessage'>{ emailErrors.email }</p>
        </div>
    );
}

export default Form;