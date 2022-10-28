import Link from 'next/link'
import { useState } from 'react'
import { navLinks } from './constants'
import { logo, close, menu } from '../assets'
import Image from 'next/image'

function Navbar() {


  const [toggleMenu, setToggleMenu] = useState(false)


  return (
    <nav className="w-full flex py-6 justify-between items-center navbar text-white">
      <Image className="w-[124px] h-[32px]" src={logo} alt="" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={index}
            className={`text-[16px] cursor-pointer font-normal ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} `}
          >
            <Link href={`${nav.id}`}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="sm:hidden flex flex-1 justify-end items-center"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <Image
          className="w-7 h-7 object-contain"
          src={toggleMenu ? close : menu} alt=""
          onClick={() => setToggleMenu(!toggleMenu)}
        />
        <div className={`${toggleMenu ? 'w-[300px] bg-black fixed top-0 right-0 h-screen py-32' : 'hidden'}`}>
          <ul className="list-none flex-col sm:hidden items-center flex-1 text-center">
            {navLinks.map((nav, index) => (
              <li key={index}
                className={`text-[16px] cursor-pointer font-normal ${index === navLinks.length - 1 ? 'mr-0' : 'mb-10'} `}
              >
                <Link href={`${nav.id}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar