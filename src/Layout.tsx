import React from 'react'
import './styles/LayoutStyles/LayoutStyles.css'
import NavBar from './components/NavBar'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {

    return (
        <div className='layout-container'>
            <NavBar />
            <main className='layout-main'>
                {children}
            </main>
        </div>
    )
}

export default Layout