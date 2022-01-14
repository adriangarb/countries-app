import { useEffect,useState } from "react";
export default function useDarkMode(){
    const [darkMode,setDarkMode] = useState(localStorage.getItem('theme')=== 'dark' ? true : false);
    useEffect(()=>{
        const body = document.body
        if(darkMode){
            body.style.setProperty('--main-backgroundColor', 'hsl(0, 0%, 98%)');
            body.style.setProperty('--main-colorTexts', 'hsl(200, 15%, 8%)');
            body.style.setProperty('--main-cardsBackground', 'hsl(0, 0%, 100%)');
            localStorage.setItem('theme','dark')
        }
        else{
            body.style.setProperty('--main-backgroundColor', 'hsl(207, 26%, 17%)');
            body.style.setProperty('--main-colorTexts', 'hsl(0, 0%, 100%)');
            body.style.setProperty('--main-cardsBackground', 'hsl(209, 23%, 22%)');
            localStorage.setItem('theme','light')
        }
    },[darkMode])
    const toggleDarkMode = () =>{
        setDarkMode(!darkMode)
    }
    return [darkMode,toggleDarkMode]
}