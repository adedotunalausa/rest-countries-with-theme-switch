import React, { useState, useEffect } from "react";
import SearchIcon from '@material-ui/icons/Search';
import Axios from "axios";
import Card from "./Card"
import { Link } from "react-router-dom";

function CountrySearch() {

    const [countryData, setCountryData] = useState([])
    const [country, setCountry] = useState("")

    useEffect(() => {
        Axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
            .then(res => {
                console.log(res);
                setCountryData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [country])

    function handleSearch(e) {
        e.preventDefault()
        const event = e.target.value;
        setCountry(event)
    }

    return (
        <div>
            <div className="search-container">
                <SearchIcon className="search-icon" />
                <input className="search" onChange={handleSearch} value={country} placeholder="Search for a country..." />
            </div>
            <div className="filtered-cards-container">
                {countryData.map((data) => (
                    <Link className="link" to={`/details/${data.name}`}>{
                        <Card
                            key={Math.random()}
                            countryFlag={data.flag}
                            countryName={data.name}
                            countryPopulation={data.population}
                            countryRegion={data.region}
                            countryCapital={data.capital}
                        />
                    }</Link>
                ))}
            </div>
        </div>
    )
}

export default CountrySearch;