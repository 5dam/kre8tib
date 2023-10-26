import React from 'react'
import logo from '../assets/kre8tib_logo.png'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <>
        <div className='text-white bg-primary pt-6'>
           <div className='mx-auto container hidden sm:flex items-center justify-between'>
            <img src={logo} alt="logo"/>
                <ul className='flex gap-6'>
                    <li>
                        <Link to="services" smooth={true} duration={500}>
                            <a href="/">Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            <a href="/">About</a>
                        </Link>
                    </li>
                </ul>
                <button className='bg-secondary py-2 px-12 rounded-lg'>Contact</button>
           </div>
        </div>
    </>
  )
}

export default Header