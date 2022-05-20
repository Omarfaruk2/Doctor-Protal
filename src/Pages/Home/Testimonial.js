import React from 'react'
import qute from "../../assets/icons/quote.svg"
import pic1 from "../../assets/images/people1.png"
import pic2 from "../../assets/images/people2.png"
import pic3 from "../../assets/images/people3.png"
import Review from './Review'

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Jon",
            review: "Helo boy what can i do for it so i cant nosdf",
            img: pic1,
            location: "India"
        },
        {
            _id: 2,
            name: "Sina",
            review: "Helo boy what can i do for it so i cant nosdf",
            img: pic2,
            location: "Bangledesh"
        },
        {
            _id: 3,
            name: "Micropack",
            review: "Helo boy what can i do for it so i cant nosdf",
            img: pic3,
            location: "Vutan"
        },
    ]

    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className='text-3xl'>What Our Pasent Say</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={qute} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review =>
                        <Review
                            key={review._id}
                            review={review}
                        ></Review>
                    )
                }
            </div>
        </section>
    )
}

export default Testimonial