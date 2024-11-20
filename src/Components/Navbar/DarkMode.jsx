import React, { useEffect, useState } from 'react'
import LightButton from "../../assets/website/light-mode-button.png"
import DarkButton from "../../assets/website/dark-mode-button.png"


const DarkMode = () => {
  
    const [theme,setTheme] =useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme"):"light"
    )

    const ls = localStorage.getItem("theme") ? localStorage.getItem("theme"):"light"
    console.log(ls)
    const element = document.documentElement;
    // console.log(element)
    useEffect(()=>{
        if(theme === "dark"){
          // console.log("dark")
          // console.log(localStorage.getItem("theme"))
            element.classList.add("dark");
            localStorage.setItem("theme","dark")
        }else{
            // console.log("light")
            // console.log(localStorage.getItem("theme"))
            element.classList.remove("dark");
            localStorage.setItem("theme","light")
        }
    },[theme])
    
  return (
    <div className='relative'>
      <img src={LightButton} alt="" 
      onClick={()=>setTheme(theme === "light" ? "dark" :"light" )} 
      className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1) absolute right-0 ${theme === "dark" ? "opacity-0":"opacity-100"} `}
      />
      <img src={DarkButton} alt=""  
      className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)'
      />
    </div>
  )
}

export default DarkMode
