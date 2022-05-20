import React from 'react'
import treat from "../../assets/images/treatment.png"
import PrimaryButton from '../Shared/PrimaryButton'

const Care = () => {


    return (
        <div className="card grid lg:grid-cols-2 py-10 bg-base-100 shadow-xl">
            <figure>
                <img className='w-2/5' src={treat} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Exceptional Dental Care, on Your Terms!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem commodi alias sapiente iusto culpa fugiat ea temporibus? Ratione autem quisquam sit d.</p>

                <span> <PrimaryButton>Get Ready</PrimaryButton></span>

            </div>
        </div>
    )
}

export default Care