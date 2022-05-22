import React from 'react'
import doctor from "../../assets/images/doctor.png"
import appoinment from "../../assets/images/appointment.png"
import PrimaryButton from '../Shared/PrimaryButton'

const MakeAppounment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }} className='flex justify-center items-center mt-32'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary'>Appoinment</h3>
                <h3 className='text-3xl text-white'>Make an appointment Today</h3>
                <p className='text-white pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem soluta totam ea cum, cumque quae dignissimos voluptates suscipit minima officiis tenetur error explicabo inventore rerum earum quasi provident assumenda architecto vero accusamus. Perspiciatis, blanditiis expedita? Earum excepturi reiciendis, dolore quibusdam qui deserunt. Est molestiae natus ratione consectetur corporis ea suscipit?</p>
                <PrimaryButton>Get Started</PrimaryButton>

            </div>
        </section>
    )
}

export default MakeAppounment