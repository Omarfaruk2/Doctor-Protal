import { format } from 'date-fns'
import React from 'react'

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment

    const handlebooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value
        console.log(slot, name, _id)
        setTreatment(null)
    }

    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center my-3 text-lg text-secondary">{name}</h3>

                    <form className='grid grid-cols-1 gap-3 justify-items-center'
                        onSubmit={handlebooking}
                    >
                        <input disabled value={format(date, "PP")} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" placeholder="Email address" className="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Phone Number" name='phone' className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div >
            </div >
        </div >
    )
}

export default BookingModal