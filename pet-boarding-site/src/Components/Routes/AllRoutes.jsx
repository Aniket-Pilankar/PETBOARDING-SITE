import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PetServiceForm from '../CreatePetServices/PetServiceForm'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import PetServiceDetails from '../Pet-Service-Details/PetServiceDetails'
import SignUp from '../SignUp/SignUp'
import Login from '../Login/Login'

const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/listing/create' element={<PetServiceForm/>}/>
            <Route path='/listing/:id' element={<PetServiceDetails/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes