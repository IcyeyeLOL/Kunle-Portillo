'use client'
import { assets } from '../../assets/assets.js';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(0)";
    }
  }

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(100%)";
    }
  }

  useEffect(() => { 
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full fixed px-4 sm:px-6 lg:px-8 xl:px-[8%] py-3 sm:py-4 flex items-center justify-between z-50 transition-all duration-300 ${
        isScroll 
          ? "bg-white/90 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <motion.a 
        href='#top'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image 
          src={assets.logo} 
          className='w-16 sm:w-20 cursor-pointer' 
          alt="logo"
          width={80}
          height={80}
        />      
      </motion.a>

      <ul className='hidden md:flex items-center gap-4 lg:gap-6 rounded-full px-6 lg:px-10 py-2.5 bg-white/80 backdrop-blur-sm shadow-md border border-gray-200'>
        {['About me', 'Services', 'My work', 'Contact me'].map((item, index) => {
          const href = item === 'About me' ? '#about' : 
                      item === 'Services' ? '#services' :
                      item === 'My work' ? '#work' : '#contact';
          return (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a 
                href={href} 
                className='font-Ovo text-sm lg:text-base px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200'
              >
                {item}
              </a>
            </motion.li>
          );
        })}
      </ul>

      <div className='flex items-center gap-3 sm:gap-4'>
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          className='p-2 rounded-full hover:bg-gray-100 transition-colors'
        > 
          <Image src={assets.moon_icon} alt="theme toggle" className='w-5 sm:w-6' width={24} height={24}/>
        </motion.button>
        
        <motion.a 
          href="#contact" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='hidden lg:flex items-center gap-2 px-6 py-2.5 border-2 border-gray-700 rounded-full font-Ovo hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300'
        > 
          Contact 
          <Image src={assets.arrow_icon} alt="arrow" className="w-3" width={12} height={12}/>
        </motion.a>

        <motion.button 
          className='block md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors' 
          onClick={openMenu}
          whileTap={{ scale: 0.9 }}
        >
          <Image src={assets.menu_black} alt="menu" className='w-6' width={24} height={24}/>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <motion.ul 
        ref={sideMenuRef}
        initial={{ x: '100%' }}
        className="flex md:hidden flex-col gap-6 py-20 px-8 fixed right-0 top-0 bottom-0 w-72 z-50 h-screen bg-gradient-to-br from-white to-gray-50 shadow-2xl transition-transform duration-500 ease-in-out"
        style={{ transform: 'translateX(100%)' }}
      >
        <motion.div 
          className="absolute right-6 top-6 p-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer" 
          onClick={closeMenu}
          whileHover={{ rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image src={assets.close_black} alt="close" className='w-6' width={24} height={24}/>
        </motion.div>

        {[
          { name: 'About me', href: '#about' },
          { name: 'Services', href: '#services' },
          { name: 'My work', href: '#work' },
          { name: 'Contact me', href: '#contact' }
        ].map((item, index) => (
          <motion.li 
            key={item.name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a 
              href={item.href} 
              className='font-Ovo text-lg block py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200' 
              onClick={closeMenu}
            >
              {item.name}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  )
}

export default Navbar
