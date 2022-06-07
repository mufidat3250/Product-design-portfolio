import { useState } from 'react'
import './NavTab.css'

let navTab = [{title:'Projects', link:'projects'}, {
  title:'Experience',
  link:'experience'
}, {
  title:'Say Hi 👋',
  link:'sayhi'
}]

const NavTab = () => {
    const [showNav, setShowNav] = useState(false)    
  return (
    <div className='flex relative items-center justify-between mt-5 lg:flex '>
        <h3 className='text-[#1F1F1F] font-[900]'>Tochukwu’s <span className='font-[350]'>Portfolio</span></h3>
        <img src={`/vectors/${'align-right.svg'}`} alt=""  className='handbugger' onClick={()=>{
          setShowNav(true) 
          console.log('yes')
        }}/>
        <div className={` ${showNav ?'navtabs-container':'navtabs-container hide-navTab'}`}>

          <img src="/vectors/x.svg" alt=""  className={`cancel`} onClick={()=>{
            setShowNav(false)
          }}/>
        {
            navTab.map(({title, link}, index)=> {                
                return <a href={`#${link}`} className={`nav-tabs${index==navTab.length-1 ? 'cursor-pointer py-[0.90625rem] bg-neural text-white px-[1.9375rem] border-transparent border-b-4 font-bold hover:border-b-4 hover:border-orange ':' cursor-pointer text-base border-b-transparent border-b-2 hover:border-orange hover:text-orange '}`} key ={index} onClick={()=>setShowNav(false)}>{title}</a>
            })
        }
        </div>
    </div>
  )
}

export default NavTab