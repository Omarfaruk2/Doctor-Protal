import React from 'react'

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service


    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            < div className="card-body text-center" >
                <h2 className="card-title text-secondary w-100 mx-auto" > {name}</h2 >
                <p>{
                    slots.length > 0 ?
                        <span>{slots[0]}</span> :
                        <span className='text-red-500'>No Slots Avilable</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} avilable</p>
                <div className="card-actions justify-center" >

                    <label for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className=" btn btn-sm border-0 bg-gradient-to-r from-secondary to-primary text-white">   Book Apouinment</label>

                </div >
            </div >
        </div >
    )
}

export default Service