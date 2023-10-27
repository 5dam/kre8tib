import React from 'react'
import logo from '../assets/kre8tib_logo.png'
import { Link } from 'react-scroll'
import { useState, useEffect } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
      };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerClasses = `text-white fixed top-0 w-full transition-opacity ${
        isScrolled ? 'opacity-75' : ''
      }`;

  return (
    <>
        {/* <div className={headerClasses}>
            <div className='text-white bg-primary py-4'>
                <div className='mx-auto container hidden md:flex items-center justify-between'>
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

                <div className='md:hidden flex justify-end px-6'>
                    <button onClick={toggleNavbar}>
                        <BiMenuAltRight className='text-4xl'/>
                    </button>
                </div>
                {isOpen && (
                    <div className='md:hidden text-white mt-2'>
                        <button onClick={closeNavbar}>
                            <AiOutlineClose className='text-2xl'/>
                        </button>
                    </div>
                )}

            </div>
        </div> */}
       <div className={headerClasses}>
            <nav className="fixed top-0 w-full bg-primary">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center h-16">
                        <img src={logo} alt="logo" />

                        <div className="hidden md:block">
                            <ul className="flex space-x-4">

                                <Link to="services" smooth={true} duration={500}>
                                    <li><a href="/" className="text-white">Services</a></li>
                                </Link>
                                <Link to="about" smooth={true} duration={500}>
                                    <li><a href="/" className="text-white">About</a></li>
                                </Link>
                            </ul>
                        </div>

                        <button className='bg-secondary py-2 px-12 rounded-lg hidden md:block'>Contact</button>

                        <div className="md:hidden">
                            <button
                            className="text-white"
                            onClick={toggleMenu}
                            >
                            {menuOpen ? <AiOutlineClose className='text-3xl' /> : <BiMenuAltRight className='text-4xl' />}
                            </button>
                        </div>
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden px-2 pt-2 pb-3 space-y-1 flex items-center justify-center h-screen bg-primary">
                        <ul className='text-xl font-semibold'>
                            <Link to="services" smooth={true} duration={500}>
                                <li onClick={closeMenu}>
                                    <a href="/" className="text-white">Services</a>
                                </li>
                            </Link>
                            <Link to="about" smooth={true} duration={500}>
                                <li onClick={closeMenu}>
                                    <a href="/" className="text-white">About</a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                )}
            </nav>
       </div>
    </>
  )
}

export default Header