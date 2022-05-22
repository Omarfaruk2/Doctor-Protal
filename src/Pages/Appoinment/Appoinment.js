import React, { useState } from 'react'
import AppoinmentBanner from './AppoinmentBanner'
import AvilableAppoinment from './AvilableAppoinment'

const Appoinment = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate} ></AppoinmentBanner>
            <AvilableAppoinment date={date} setDate={setDate}></AvilableAppoinment>
        </div>
    )
}

export default Appoinment