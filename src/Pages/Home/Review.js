import React from 'react'

const Review = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">

                <p>If a dog chews shoes whose shoes does he choose?hews shoes whose shoes does he choose?hews shoes whose shoes does he choose?</p>
                <div className="flex justify-center items-center ">
                    <div className="avatar mx-5">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review?.img} />
                        </div>
                    </div>
                    <div className='mx-5'>
                        <h2>{review?.name}</h2>
                        <h2>{review?.location}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review