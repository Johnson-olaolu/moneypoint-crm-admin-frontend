import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from './Profile'

const ProfileRoutes = () => {
  return (
   <>
   <Routes>
       <Route index element = {<Profile/>}/>
   </Routes>
   </>
  )
}

export default ProfileRoutes