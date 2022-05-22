import React from 'react'
import auth from '../../firebase.init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useForm } from "react-hook-form"


const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    if (user) {
        console.log(user)
    }

    // react from
    const { register, formState: { errors }, handleSubmit } = useForm()
    const onSubmit = data => {

        console.log(data)
    }


    return (
        <div className='flex h-screen  justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email input */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email",
                                    {
                                        required: {
                                            value: true,
                                            message: "Email is required"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Probide a valid Email'
                                        }
                                    }
                                )}
                                type="email" placeholder="YOur Email"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}                                {/* <span className="label-text-alt"></span> */}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}                                {/* <span className="label-text-alt"></span> */}

                            </label>
                        </div>

                        {/* password */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Passward</span>

                            </label>
                            <input
                                {...register("password",
                                    {
                                        required: {
                                            value: true,
                                            message: "password is required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password shold have more then 6 numbers'
                                        }
                                    }
                                )}
                                type="password" placeholder="Your password"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}                                {/* <span className="label-text-alt"></span> */}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}                                {/* <span className="label-text-alt"></span> */}

                            </label>
                        </div>

                        <input className='btn text-white w-full max-w-xs' type="submit" value="Login" />
                    </form>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
                </div >
            </div >
        </div >
    )
}

export default Login