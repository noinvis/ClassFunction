import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../../public/image.png'

const Header = () => {
  return (
    <header className='sticky top-0 z-10 bg-white shadow-md'>
        <nav className='container flex justify-between items-center h-[80px]'>
            <div>
                <img src={img} width={60} />
            </div>
            <ul className='flex items-center gap-[30px] text-[20px]'>
                <li>
                    <NavLink to={"/"}>Country</NavLink>
                </li>
                <li>
                    <NavLink to={"/movie"}>Movie</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header