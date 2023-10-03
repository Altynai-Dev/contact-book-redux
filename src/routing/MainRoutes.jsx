import React from 'react'
import {Routes, Route} from "react-router-dom"
import ContactCreate from '../components/ContactCreate'
import FavoritesList from '../components/FavoritesList'
import ContactDetails from '../components/ContactDetails'
import ContactEdit from '../components/ContactEdit'
import ContactsList from '../components/ContactsList'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ContactsList />} />
      <Route path='/register' element={<ContactCreate />} />
      <Route path='/details/:id' element={<ContactDetails />} />
      <Route path='/edit/:id' element={<ContactEdit />} />
      <Route path='/favorites' element={<FavoritesList />} />

    </Routes>
  )
}

export default MainRoutes