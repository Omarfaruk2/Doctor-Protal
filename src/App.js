
import './App.css'
import Navbar from './Pages/Shared/Navbar'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Login from './Pages/Login/Login'
import Footer from './Pages/Shared/Footer'
import Appoinment from './Pages/Appoinment/Appoinment'

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appoinment" element={<Appoinment />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
