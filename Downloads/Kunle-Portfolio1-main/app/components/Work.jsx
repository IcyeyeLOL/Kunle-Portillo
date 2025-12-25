'use client'
import { assets, workData } from '../../assets/assets.js'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Work = () => {
  return (
    <section id="work" className='relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20 sm:py-28 lg:py-32 scroll-mt-20 bg-white'>
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
            Portfolio
          </span>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-Ovo mb-4'>
            <span className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent'>
              Featured
            </span>
            <br />
            <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
              Projects
            </span>
          </h2>
          <p className='max-w-2xl mx-auto mt-4 text-base sm:text-lg text-gray-600 font-Ovo'>
            A collection of projects showcasing my expertise in full-stack development, 
            cloud services, and machine learning.
          </p>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6'></div>
        </motion.div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 justify-items-center'>
          {workData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className='group relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer w-full max-w-sm border-2 border-gray-100 hover:border-blue-200'
            >
              {/* Background Image */}
              <div 
                className='absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110'
                style={{backgroundImage: `url(${project.bgImage})`}}
              ></div>
              
              {/* Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              
              {/* Content Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                className='absolute bottom-0 left-0 right-0 p-6 bg-white/98 backdrop-blur-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-gray-200'
              >
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex-1 min-w-0'>
                    <h3 className='font-bold text-gray-900 mb-1.5 text-base lg:text-lg truncate'>{project.title}</h3>
                    <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>{project.description}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.15, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(project.projectUrl, '_blank');
                    }}
                    className='flex-shrink-0 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-purple-600'
                  >
                    <motion.svg
                      className='w-5 h-5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                    </motion.svg>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
