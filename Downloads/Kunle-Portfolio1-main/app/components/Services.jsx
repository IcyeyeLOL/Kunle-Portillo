'use client'
import { assets, serviceData } from '../../assets/assets.js'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = () => {
  return (
    <section id="services" className='relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20 sm:py-28 lg:py-32 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16 lg:mb-20'
        >
          <span className='inline-block text-sm sm:text-base font-semibold text-blue-600 uppercase tracking-wider mb-4'>
            What I Do
          </span>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-Ovo mb-4'>
            <span className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent'>
              My Services
            </span>
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full'></div>
        </motion.div>
        
        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center'>
          {serviceData.map(({icon, title, description, link}, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className='group relative p-7 lg:p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-blue-400 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden w-full max-w-sm flex flex-col h-full'
            >
              {/* Gradient overlay on hover */}
              <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
              
              <div className='relative z-10'>
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className='inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors shadow-sm'
                >
                  <Image 
                    src={icon} 
                    alt={title} 
                    className='w-8 h-8'
                    width={32}
                    height={32}
                  />
                </motion.div>
                
                <h3 className='text-xl font-bold mb-4 text-gray-900 font-Ovo'>{title}</h3>
                <p className='text-sm text-gray-600 leading-relaxed mb-5'>{description}</p>
                
                <motion.a 
                  href={link} 
                  className='inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700'
                  whileHover={{ x: 5 }}
                >
                  Learn more
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
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
