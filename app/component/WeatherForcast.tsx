import React from 'react'

interface DayForecast {
    date: string,
    day: {
        condition: {
            icon: string,
            text: string
        };
        maxtemp_f: number,
        mintemp_f: number
    }
}

interface WeatherForcastProps {
    data: {
        forecast: {
            forecastday: DayForecast [];
        }
    }
}

const WeatherForcast = ({data} : WeatherForcastProps) => {

    console.log(data);

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full'>
        {data.forecast.forecastday.map((day, index) => {
            return (
                <div key={index} className='bg-white/40 p-2 text-center rounded-lg flex flex-col items-center'>
                    <p>
                        {new Date(day.date).toLocaleDateString
                            ("en-US", {
                                weekday: "short"
                            })
                        }
                    </p>
                    <img src={day.day.condition.icon} alt={day.day.condition.text} />
                    <div>
                        <p>H {day.day.maxtemp_f.toFixed()}°</p>
                        <p>L {day.day.mintemp_f.toFixed()}°</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default WeatherForcast
