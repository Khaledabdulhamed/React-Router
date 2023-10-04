import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/Main-Navigation/MainNavigation'

const Root = () => {
  return (
    <div>
        <MainNavigation />
        <main>
        <Outlet />
        </main>
        
    </div>
  )
}

export default Root