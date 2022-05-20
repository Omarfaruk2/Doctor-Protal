import React from 'react'
import fluoride from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"
import Service from './Service'

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            describe: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            describe: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
        },
        {
            _id: 3,
            name: "whitening",
            describe: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    services.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                }
            </div>
        </div>
    )
}

export default Services