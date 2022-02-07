import React, {useState} from "react";
import "./style.css"

const Registrace = () => {

    const [userName, setUserName] = useState("");
    const [errorVisible, setErrorVisible] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(userName === ""){
            setErrorVisible(true);
        }
        else{
            setErrorVisible(false);
        }
        console.log(userName);
		
	};

    const handleChange = (event) => {
        setUserName(event.target.value)
        setSubmitDisabled(false);
    }



    return(
        <form onSubmit={handleSubmit}>
			<label>
				Uživatelské jméno:
				<input type="text" onChange={handleChange} value={userName}/>
			</label>
			<button type="submit" disabled={submitDisabled}>Registrovat</button>
            <div className={errorVisible ? "error-visible" : "error-hidden"} >Uživatelské jméno je povinný údaj</div>
		</form>
    )
}

export default Registrace;