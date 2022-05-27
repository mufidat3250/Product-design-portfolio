import React from 'react'

const Input = ({placeholder}:{placeholder:string}) => {
  return (
    <div className='border-[1px] border-[#1F1F1F] flex'>
        <input type="text"  placeholder={placeholder} className='pl-[20px] py-[17.5px] border-none outline-none flex-grow'/>
    </div>
  )
}

export default Input