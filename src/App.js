import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import "./api"
import Header from './components/header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'

import { Redirect, Route, Routes, useHistory, useNavigate } from 'react-router-dom'

import './_app.scss'
import { useSelector } from 'react-redux'
import WatchScreen from './screens/watchScreen/WatchScreen'
import SearchScreen from './components/screens/SearchScreen'
import SubscriptionsScreen from './components/screens/subscriptionsScreen/SubscriptionScreen'

const Layout = ({ children }) => {
   const [sidebar, toggleSidebar] = useState(false)

   const handleToggleSidebar = () => toggleSidebar(value => !value)

   return (
      <>
         <Header handleToggleSidebar={handleToggleSidebar} />
         <div className='app__container'>
            <Sidebar
               sidebar={sidebar}
               handleToggleSidebar={handleToggleSidebar}
            />
            <Container fluid className='app__main  '>
               {children}
            </Container>
         </div>
      </>
   )
}

const App = () => {
   const { accessToken, loading } = useSelector(state => state.auth)

   const Navigate = useNavigate()

   useEffect(() => {
      if (!loading && !accessToken) {
         Navigate('/auth')
      }
   }, [accessToken, loading , Navigate])

   return (
      <Routes>
         <Route path='/'  element={<Layout><HomeScreen/></Layout>}/>
         <Route path='/auth' element={<LoginScreen/>}/>           
         <Route path='/search/:query' element={<Layout><SearchScreen/></Layout>}/>
         <Route path='/watch/:id' element={<Layout><WatchScreen/></Layout>}/>
         <Route path='/feed/subscriptions' element={<Layout><SubscriptionsScreen/></Layout>}/>
      </Routes>
   )
}

export default App;