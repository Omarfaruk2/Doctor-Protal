import React from 'react'
import Banner from './Banner'
import Care from './Care'
import Contact from './Contact'
import Info from './Info'
import MakeAppounment from './MakeAppounment'
import Services from './Services'
import Testimonial from './Testimonial'


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info  ></Info>
            <Services></Services>
            <Care></Care>
            <MakeAppounment></MakeAppounment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    )
}

export default Home