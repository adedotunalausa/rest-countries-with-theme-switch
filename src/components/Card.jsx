import React from "react";

function Card(props) {

    return (
        <div className="card">    
            <div className="flag">
                <img src={props.countryFlag} alt="flag"/>
            </div>
            <div className="card-details">
                <h1>{props.countryName}</h1>
                <p><b>Population:</b> {props.countryPopulation}</p>
                <p><b>Region:</b>  {props.countryRegion}</p>
                <p><b>Capital:</b>  {props.countryCapital}</p>
            </div>
        </div>
    );
}

export default Card;