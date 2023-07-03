import AboutMe from 'Pages/AboutMe'
import BasicPage from 'Pages/BasicPage'
import ErrorPage from 'Pages/ErrorPage'
import Favorites from 'Pages/Favorites'
import Home from 'Pages/Home'
import Player from 'Pages/Player'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<BasicPage />}>
                <Route index element={<Home />}/>
                <Route path="favorites" element={<Favorites />} />
                <Route path=":id" element={<Player />} />
                <Route path='aboutme' element={<AboutMe />}/>
                <Route path="*" element={<ErrorPage />} />
              </Route>  
            </Routes>
    </BrowserRouter>
  )
}
