'use client'
import { assets } from '../../assets/assets.js';
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Header = () => {
  return (
    <section className='relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-16 overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 -z-10'></div>
      
      <div className='max-w-6xl mx-auto w-full text-center space-y-8'>
        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='relative inline-block'
        >
          <div className='absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse -z-10'></div>
          <div className='relative p-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full'>
            <Image 
              src={assets.profile_img} 
              alt="Kunle Ajani" 
              className='relative rounded-full w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 object-cover border-4 border-white shadow-2xl'
              width={256}
              height={256}
            />
          </div>
        </motion.div>
        
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex items-center justify-center gap-3'
        >
          <span className='text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 font-Ovo'>
            Hi, I'm
          </span>
          <motion.span
            animate={{ rotate: [0, 14, -8, 14, -8, 0] }}
            transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            className='inline-block'
          >
            <Image src={assets.hand_icon} alt="wave" className='w-7 h-7 sm:w-8 sm:h-8' width={32} height={32}/>
          </motion.span>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight'
        >
          <span className='block font-Ovo bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent'>
            Kunle Ajani
          </span>
          <span className='block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-600 font-Ovo'>
            Full Stack Developer
          </span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed font-Ovo'
        >
          Crafting exceptional digital experiences with modern technologies. 
          Based in Maryland, ready to bring innovative solutions to your team.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'
        >
          <motion.a 
            href='#contact'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className='group relative px-8 py-3.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden'
          >
            <span className='relative z-10 flex items-center gap-2'>
              Get in Touch
              <motion.svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
              </motion.svg>
            </span>
            <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </motion.a>

          <motion.a 
            href='/main-resume.pdf' 
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2" 
          >
            <Image src={assets.download_icon} alt="download" className='w-4 h-4' width={16} height={16}/>
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Header
