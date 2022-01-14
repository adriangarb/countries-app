import React, {useState, useEffect} from 'react'
import DropDown from './Dropdown'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Main(props) {
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState('')
    const [data,setData] = useState([])
    const [newData, setNewData] = useState([])
    const handleChange = (e) =>{
        setSearch(e.target.value)
        filterByName(e.target.value)
      }
    
      const filterByName = (term) =>{
        let newData = data.filter((element)=>{
          if(element.name.toLowerCase().includes(term.toLowerCase())){
            return element
          }
        });
        setNewData(newData)
      }
    
      const getData = async() => {
        await axios.get('https://restcountries.com/v2/all').then(data=>{
          setData(data.data)
          setNewData(data.data)
        }).catch(error=>console.error(error))
      }
      useEffect(()=>{
        getData()
      },[])
    return (
        <div className="App">
        <div className="app__bottom">
          <div className="app__bottom__filters">
            <input placeholder="Search for a country..." value={search} onChange={handleChange} type="text"/>
            <DropDown selected={selected} setSelected={setSelected}/>
          </div>
        
          <div className="cards">
            {selected=== ''
            ? newData.map(country=>(
              <Link to={'/country/' + country.name}>
                <div key={country.name} className="cards__card">
                  <div className="cards__card__flag" style={{backgroundImage: `url(${country.flags.png})`}}/>
                  <div className="cards__card__texts">
                      <h2>{country.name}</h2>
                      <p><span>Population: </span>{country.population}</p>
                      <p><span>Region: </span>{country.region}</p>
                      <p><span>Capital: </span>{country.capital}</p>
                  </div>
                </div>
              </Link>
            ))
            : newData.filter(region=>region.region===selected).map(country=>(
              <Link to={'/country/' + country.name}>
                <div key={country.name} className="cards__card">
                  <div className="cards__card__flag" style={{backgroundImage: `url(${country.flags.png})`}}/>
                  <div className="cards__card__texts">
                      <h2>{country.name}</h2>
                      <p><span>Population: </span>{country.population}</p>
                      <p><span>Region: </span>{country.region}</p>
                      <p><span>Capital: </span>{country.capital}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        </div>
    )
}
export default Main
