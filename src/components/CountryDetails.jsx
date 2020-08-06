import React, { useState, useEffect } from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Axios from "axios"
import { Link } from "react-router-dom";

function CountryDetails({ match }) {
    const [countryDetails, setCountryDetails] = useState([])

    useEffect(() => {
        Axios.get(`https://restcountries.eu/rest/v2/name/${match.params.name}`)
            .then(res => {
                console.log(res);
                setCountryDetails(res.data)
            })
            .catch(err => {
                console.log(err);
            })
        console.log(match);
    }, [match])

    return (
        <div className="details-container">
            <div className="back-btn">
                <Link className="link" to="/">
                    <ArrowBackIcon className="back-arrow" fontSize="small" />
                    <p>Back</p>
                </Link>
            </div>
            <div>
                {countryDetails.map((data) => {
                    return (
                        <div className="details-container-inner">
                            <div className="details-flag">
                                <img src={data.flag} alt="flag-img" />
                            </div>
                            <div className="details-info">
                                <h1>{data.name}</h1>
                                <div className="details-info-inner">
                                    <div className="details-info-1">
                                        <p><b>Native Name:</b> {data.nativeName}</p>
                                        <p><b>Population:</b> {data.population}</p>
                                        <p><b>Region:</b> {data.region}</p>
                                        <p><b> Sub Region:</b> {data.subregion}</p>
                                        <p><b>Capital:</b> {data.capital}</p>
                                    </div>
                                    <div className="details-info-2">
                                        <p><b>Top Level Domain:</b> {data.topLevelDomain}</p>
                                        <p><b>Currencies:</b> {data.currencies.map(data => <span>{data.name}</span>)}</p>
                                        <p><b>Languages:</b> {data.languages.map(data => <span>{data.name}, </span>)}</p>
                                    </div>
                                </div>
                                <div className="border-countries">
                                    <h4><b>Border Countries:</b></h4>
                                    <div>
                                        {data.borders.map(data => <p>{data} </p>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default CountryDetails;