import React, { Component, ReactNode } from 'react'
import { BsSunrise, BsSunset } from 'react-icons/bs'
import { GiWindSlap, GiCompass } from 'react-icons/gi'
import { WiHumidity } from 'react-icons/wi'
import { MdAir } from 'react-icons/md'
import { CiTempHigh } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'

interface WeatherDetailsProps {
    data: {
        current: {
            wind_mph: number;
            humidity: number;
            wind_dir: string;
            pressure_mb: number;
            feelslike_f: number;
            vis_km: number;
        };
        forecast: {
            forecastday: {
                astro: {
                    sunrise: string;
                    sunset: string;
                };
            }[];
        };
    };
}

interface WeatherDetailsUnitProps {
    name: string,
    unitData: string | number,
    icon : ReactNode,
    dataCalUnit: string
}

const WeatherDetails = ({data} : WeatherDetailsProps) => {
  return (
    <>
        <div className='p-12'>
            <h1 className='mb-4 text-2xl text-white'>Weather Details</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <WeatherDetailsUnit name={"Wind Speed"} unitData={data.current.wind_mph} icon={<GiWindSlap fontSize={40} />} dataCalUnit={"mph"} />
                <WeatherDetailsUnit name={"Humidity"} unitData={data.current.humidity} icon={<WiHumidity fontSize={50} />} dataCalUnit={"%"} />
                <WeatherDetailsUnit name={"Wind Direction"} unitData={data.current.wind_dir} icon={<GiCompass fontSize={50} />} dataCalUnit={""} />
                <WeatherDetailsUnit name={"Sunrise"} unitData={data.forecast.forecastday[0].astro.sunrise} icon={<BsSunrise fontSize={50} />} dataCalUnit={""} />
                <WeatherDetailsUnit name={"Sunset"} unitData={data.forecast.forecastday[0].astro.sunset} icon={<BsSunset fontSize={50} />} dataCalUnit={""} />
                <WeatherDetailsUnit name={"Air pressure"} unitData={data.current.pressure_mb} icon={<MdAir fontSize={50} />} dataCalUnit={"hPa"} />
                <WeatherDetailsUnit name={"Feel like"} unitData={data.current.feelslike_f} icon={<CiTempHigh fontSize={50} />} dataCalUnit={"%"} />
                <WeatherDetailsUnit name={"Visibility"} unitData={data.current.vis_km} icon={<FaEye fontSize={50} />} dataCalUnit={"%"} />
            </div>
        </div> 
    </>
  )
}

const WeatherDetailsUnit = ({name, unitData, icon, dataCalUnit} : WeatherDetailsUnitProps) => {
    return (
        <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
            <div className='text-2xl'>
                <h3>{name}</h3>
                <h3>{unitData} {dataCalUnit}</h3>
            </div>

            <div className=''>
                {icon}
             </div>
        </div>
    )
}

export default WeatherDetails
