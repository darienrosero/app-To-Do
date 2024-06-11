import React from 'react'

import logo from '../assets/Logo.svg'

const Header = () => {
    return (
        <header className="flex gap-3 p-6">
            <img src={logo} alt="logo" />
            <h1 className='text-[35px] '>
                My task-organizer
            </h1>
        </header>
    )
}

export default Header
