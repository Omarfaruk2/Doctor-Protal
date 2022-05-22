import React from 'react'
import Chair from "../../assets/images/chair.png"
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import background from "../../assets/images/bg.png"


const AppoinmentBanner = ({ date, setDate }) => {

    return (
        <div style={{
            background: `url(${background})`,
            size: 'cover'
        }} className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Chair} className="lg:max-w-lg mx-5 rounded-lg shadow-2xl" alt='Chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}

                    />

                </div>
            </div>
        </div >
    )
}

export default AppoinmentBanner