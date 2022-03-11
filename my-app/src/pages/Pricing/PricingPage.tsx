import classNames from "classnames";
import React, { useState } from "react"
import { MapQuest } from "../../shared/MapQuest";

export const PricingPage = () => {
    const [city, setCity] = useState<string>("Naples, Italy");
    const isValidCity = city.length > 3;

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.currentTarget.value);
        console.log(event.currentTarget.value);
    }
    const onSubmitHandler  = () => {
        window.alert(city);
    }
    return (
        <div>
            <h3>Esempio di form {city}</h3>
            <form onSubmit={onSubmitHandler}>
               <input className={classNames("form-control", {
                   "is-valid": isValidCity,
                   "is-invalid": !isValidCity
               })}
                      onChange={onChangeHandler} 
                      type="text" 
                      name="city" 
                      placeholder="Digita una città" 
                      value={city}/>
               <button disabled={!isValidCity} type="submit" className="btn btn-success">OK</button>
            </form>
            <MapQuest city={city}/>
        </div>
    )
}