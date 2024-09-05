import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './components/Menu'
import Mission from './pages/Mission'
import NotFound from './pages/NotFound'
import Vision from './pages/Vision'
import Services from './pages/Services'
import ServiceInfo from './pages/ServiceInfo'
import Profile from './pages/Profile'

const App = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/profile' element={<Profile />} />
                <Route path='/services/:service_id/info' element={<ServiceInfo />} />
                <Route path='/services' element={<Services />} />
                <Route path='/about' element={<About />}>
                    <Route index element={<Mission />} />
                    <Route path='mission' element={<Mission />} />
                    <Route path='vision' element={<Vision />} />
                </Route>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App