import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { BrowserRouter, Link } from 'react-router-dom'

function CardDetails() {   
    const {countryName} = useParams() 
    const [countryData, setCountryData] = useState([{}])
    const [countryFullData, setCountryFullData] = useState([])
    const getData = async() =>{
        await axios.get('https://restcountries.com/v2/name/'+countryName+'?fullText=true').then(data=>{
           setCountryData(data.data[0])
        }).catch(error=>console.error(error))
        await axios.get('https://restcountries.com/v2/all').then(data=>{
            setCountryFullData(data.data)
        }).catch(error=>console.error(error))
    }
    useEffect(() => {
        getData()
    }, [countryName])
    return (
        <div className='CardDetails'>
            <Link to="/">Back</Link>
            <div className='CardDetails__info'>
                    <img src={countryData.flag} alt="" />
                    <div className='CardDetails__info__data'>
                        <h2>{countryData.name}</h2>
                        <div className='CardDetails__info__data__text'>
                            <div className='CardDetails__info__data__text__top'>
                                <p><b>Native Name: </b>{countryData.name}</p>
                                <p><b>Population: </b>{countryData.population}</p>
                                <p><b>Region: </b>{countryData.region}</p>
                                <p><b>Sub Region: </b>{countryData.subregion}</p>
                                <p><b>Capital: </b>{countryData.capital}</p>
                            </div>
                            <div className='CardDetails__info__data__text__bottom'>
                                <p><b>Top Level Domain: </b>{countryData.topLevelDomain}</p>
                                <p><b>Currencies: </b>{countryData.currencies ? countryData.currencies.map(language=>language.name) : ''}</p>
                                <p><b>Languages: </b>{countryData.languages ? countryData.languages.map(language=>language.name).join(', ') : ''}</p>
                            </div>
                        </div>
                        {countryData.borders
                        ? <div className='BorderCountries'><p>Border Countries: </p>  {countryFullData.map(country=>{
                            if(countryData.borders.includes(country.alpha3Code)){
                                return (<Link to={'/country/' + country.name}>{country.name}</Link>)
                            }
                            else{
                                return false
                            }
                        })}</div> 
                        : <p>There are no border countries</p>}
                    </div>
            </div>
        </div>  
    )
}

export default CardDetails