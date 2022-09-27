import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "../Pages/Home"
import Consult from '../Pages/consult'
import Profil from '../Pages/Profile'
import SignIn from '../Pages/signIn'
import SignUp from '../Pages/signUp'
const routes = () => {

  return (
    <div>
      
      <Routes>
            <Route index exact element={<Home/>} />
            <Route path="/singUp" element={<SignUp />} />
            <Route path="/singIn" element={<SignIn />} />
            <Route path="/consult" element={<Consult />} /> 
            <Route path="/profil" element={<Profil />}/>
        </Routes>
      
    </div>
  )
}

export default routes