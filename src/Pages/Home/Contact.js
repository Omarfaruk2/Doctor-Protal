
import React from "react"
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from "../Shared/PrimaryButton"


const Contact = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} className='bg-primary px-10 py-14 '>
            <div className='text-center pb-14 text-white'>
                <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
                    Contact Us
                </p>
                <h1 className='text-4xl'>Stay connected with us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>

    )
}

export default Contact


// const Contact = () => {
//   return (
//     <div style={{
//         background:`url(${appointment})`
//     }} className='bg-primary px-10 py-14 '>
//       <div className='text-center pb-14 text-white'>
//         <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
//           Contact Us
//         </p>
//         <h1 className='text-4xl'>Stay connected with us</h1>
//       </div>
//       <div className='grid grid-cols-1 justify-items-center gap-5'>
//         <input
//           type='text'
//           placeholder='Email Address'
//           className='input w-full max-w-md'
//         />
//         <input
//           type='text'
//           placeholder='Subject'
//           className='input w-full max-w-md'
//         />
//         <textarea
//           className='textarea w-full max-w-md'
//           placeholder='Your message'
//           rows={6}
//         ></textarea>
//         <PrimaryButton>Submit</PrimaryButton>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// import React from 'react'




//         <div className="hero min-h-screen bg-base-200">
//             <div className="hero-content flex-col lg:flex-row-reverse">
//                 <div className="text-center lg:text-left">
//                     <h1 className="text-5xl font-bold">Login now!</h1>
//                     <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                 </div>
//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                     <div className="card-body">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="text" placeholder="email" className="input input-bordered" />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type="text" placeholder="password" className="input input-bordered" />
//                             <label className="label">
//                                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                             </label>
//                         </div>
//                         <div className="form-control mt-6">
//                             <button className="btn btn-primary">Login</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
