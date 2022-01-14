import { useState } from "react"

function Dropdown({selected,setSelected}) {
    const [isActive, setIsActive] = useState(false)
    const [options,setOptions] = useState(['Africa','Americas','Asia','Europe','Oceania'])
    
    const resetSelected = (event) => {
        const selection = event.target.textContent
        if(options.includes(selection) && selection !== 'No filter'){
            setOptions([...options,'No filter'])
            setSelected(selection)
            
        }
        else if(options.includes(selection) && selection==='No filter'){
            setOptions(prevState=>{prevState.pop(); return prevState})
            setSelected('')
        }
    }
    return (
        <div className="dropdown"> 
            <div className="dropdown-btn" onClick={(e)=>setIsActive(!isActive)}>{selected ==='' ? 'Choose one' : selected}</div>
            {isActive &&
            (<div onClick={(e)=>setIsActive(!isActive)} className="dropdown-content">
                {options.map(option=>(<div onClick={(e)=>{setIsActive(false);resetSelected(e)}} className="dropdown-item">{option}</div>))}
            </div>)}
        </div>
    )
}
export default Dropdown
