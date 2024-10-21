import React from 'react'
import { getCurrentDate } from '../utils/currentDate'
import { MdLocationOn } from "react-icons/md";

interface CurrentProps {
    data : {
        current: {
            condition: {
                icon: string,
                text: string
            },
            temp_f: number,
        }

        location : {
            name: string,
            region: string,
        }
    }
}

const Current = ({data} : CurrentProps) => {

    const currentDate = getCurrentDate()
    const weatherIcon = data.current.condition.icon

  return (
      <>
        <div className='flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2'>
        <div className='flex items-center'>
            <div className=' '>
                <h1 className='text-3xl text-white'>Today</h1>
                <p className='text-white'>{currentDate}</p>
            </div>
            {weatherIcon && (
                <div>
                    <img className='w-[50px] object-cover' src={weatherIcon} alt={data.current.condition.text} />
                </div>
            )}
        </div>

        <div className=''>
            <p className='text-5xl text-white'>
                {data.current.temp_f.toFixed()}
                <span>°</span>
            </p>

            <span className='text-white'>{data.current.condition.text}</span>
        </div>

        <div>
            {data.location ? 
                (
                    <div className='flex items-center text-black bg-white/90 px-2 py-2 rounded-xl'>
                        <MdLocationOn />
                        <span>
                            {data.location.name} , {data.location.region}
                        </span>
                    </div>
                ) : null
            }
        </div>
      </div>
      </>
      
  )
}

export default Current
