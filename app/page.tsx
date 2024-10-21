"use client";
import Input from './component/Input';
import Current from './component/Current';
import WeatherDetails from './component/WeatherDetails';
import WeatherForcast from './component/WeatherForcast';

import React, { ReactNode, useState } from 'react'

const Home = () => {

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=23e2c844e4734968bf4191827241510&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url) 
        if(!response.ok) {
          throw new Error()
        }
        const data = await response.json()
        setData(data)
        setLocation("")
        setError("")
      } catch(error) {
        setError("City not found")
        setData({})
      }
      e.target.value = "";
    }
  }

  let content: ReactNode;
  if(Object.keys(data).length === 0 && error === "") {
    content = (
      <div className='text-white text-center h-screen mt-[5rem] '>
        <h2 className='text-3xl font-bold mb-4'>Welcome to the weather app !</h2>
        <p className='text-xl'>Enter a city name to get the weather forecast</p>
      </div>
    )
  } else if(error !== "") {
    content = (
      <div className='text-white text-center h-screen mt-[5rem]'>
        <p className='text-3xl font-bold mb-4'>City not found</p>
        <p className='text-xl'>Enter a valid city name</p>
      </div>
    )
  } else {
    content = (
      <>
        <div className='flex md:flex-row flex-col p-12 items-center justify-between md:gap-24 gap-12'>
          <Current data={data}/>
          <WeatherForcast data={data} />
        </div>

        <div>
          <WeatherDetails data={data}/>
        </div>
      </>
    )
  }

  return (
    <div className='bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit'>
      <div className='bg-white/25 w-full flex flex-col h-fit'>
        {/* input and logo */}
        <div className='flex flex-col justify-between items-center p-12 md:flex-row'>
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className='mb-8 md:mb-0 order-1 md:order-2 text-white py-2 px-4 rounded-xl italic font-bold'>Weather app</h1>
        </div>
        {
          content
        }
      </div>
    </div>
  )
}

export default Home
