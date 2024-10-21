"use client";   
import { CiSearch } from "react-icons/ci";

import React from 'react'

interface inputProps {
    handleSearch: (event: React.KeyboardEvent <HTMLInputElement>) => void,
    setLocation:  React.Dispatch <React.SetStateAction<string>>
}

const Input = ({handleSearch, setLocation} : inputProps) => {
  return (
    <form className="flex items-center md:w-2/4 w-full order-2 md:order-1">
        <input 
            type="text" 
            placeholder="Search for the city"
            className="w-full bg-transparent border-b-2 placeholder-white outline-none text-white"
            onKeyDown={handleSearch}
            onChange={(e) => {
                setLocation(e.target.value)
            }}
        />
        <div className='ml-[-25px] text-white cursor-pointer'>
            <CiSearch />
        </div>
    </form>
  )
}

export default Input
