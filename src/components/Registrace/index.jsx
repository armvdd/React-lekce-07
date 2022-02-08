import React, { useState } from "react";
import "./style.css";

const Registrace = () => {
  const [userName, setUserName] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [registraceOk, setRegistraceOk] = useState(false);
  const [checked, setChecked] = useState(false);
  const [country, setCountry] = useState("Česká republika");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName === "" && checked === false) {
      setErrorVisible(true);
      setRegistraceOk(false);
      setSubmitDisabled(true);
    }
    else {
      setErrorVisible(false);
      setRegistraceOk(true);
    }
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
    setSubmitDisabled(false);
    if (event.target.value === "" && !checked) {
      setSubmitDisabled(true);
      setErrorVisible(true);
      setRegistraceOk(false);
    }
    else if(event.target.value === "" || !checked){
      setSubmitDisabled(true);
      setErrorVisible(true);
      setRegistraceOk(false);
    }
    else if (event.target.value === string){
        setSubmitDisabled(false);
    }
  };

  const handleSelect = (event) => {
    setCountry(event.target.value);
  };

  const handleCheckbox = () => {
    if(!checked){
        setChecked(true);
        setSubmitDisabled(false);
    }
    else if(checked){
        setChecked(false);
        setSubmitDisabled(true);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {" "}
        <label>
          Uživatelské jméno:
          <input type="text" onChange={handleChange} value={userName} />
        </label>
        <button type="submit" disabled={submitDisabled}>
          Registrovat
        </button>
      </div>
      <div className={errorVisible ? "error-visible" : "error-hidden"}>
        Uživatelské jméno je povinný údaj
      </div>
      <div>
        <label>
          Země původu:
          <select onChange={handleSelect} value={country}>
            <option value="Chorvatsko">Chorvatsko</option>
            <option value="Česká republika">Česká republika</option>
            <option value="Polsko">Polsko</option>
            <option value="Slovenská republika">Slovenská republika</option>
          </select>
        </label>
      </div>

      <div className={registraceOk ? "registrace-ok" : "registrace-hidden"}>
        Registrován nový uživatel {userName} ze země {country}
      </div>
      <div>
        <input type="checkbox" onChange={handleCheckbox} value={checked} />{" "}
        <label>Souhlasím s obchodními podmínkami</label>
      </div>
    </form>
  );
};

export default Registrace;
