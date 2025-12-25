'use client'
import { assets, infoList, toolsData } from '../../assets/assets.js';
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = () => {
  return (
    <section id="about" className='relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20 sm:py-28 lg:py-32 scroll-mt-20 bg-white'>
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
            About Me
          </span>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-Ovo mb-4'>
            <span className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent'>
              Building Digital
            </span>
            <br />
            <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
              Experiences
            </span>
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full'></div>
        </motion.div>

        {/* Main Content */}
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-items-center'>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='relative order-2 lg:order-1 w-full max-w-lg'
          >
            <div className='relative rounded-3xl overflow-hidden shadow-2xl'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-3xl -z-10'></div>
              <Image 
                src={assets.user_image} 
                alt="Kunle Ajani" 
                className="w-full h-auto rounded-3xl"
                width={600}
                height={800}
              />
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='space-y-8 order-1 lg:order-2 w-full max-w-lg'
          >
            <p className='text-lg sm:text-xl text-gray-700 leading-relaxed font-Ovo'>
              Hello! I'm <span className='font-semibold text-gray-900'>Kunle Ajani</span>, a passionate Full Stack Developer based in Maryland. 
              I specialize in creating dynamic, responsive web applications that combine beautiful design with robust functionality.
            </p>
            
            <p className='text-base sm:text-lg text-gray-600 leading-relaxed font-Ovo'>
              With years of freelance experience, I've developed a diverse skill set that allows me to tackle complex challenges 
              and deliver high-quality solutions. Whether it's building intuitive user interfaces or optimizing server-side performance, 
              I strive to enhance user experiences through innovative design and efficient coding practices.
            </p>
            
            {/* Info Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 justify-items-center'>
              {infoList.map(({icon, iconDark, title, description}, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className='group relative p-6 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer w-full flex flex-col h-full'
                >
                  <div className='flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 transition-colors shadow-sm'>
                    <Image src={icon} alt={title} className='w-7 h-7' width={28} height={28}/>
                  </div>
                  <h4 className='text-lg font-bold font-Ovo mb-2.5 text-gray-900'>{title}</h4>
                  <p className='text-sm text-gray-600 leading-relaxed'>{description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Tools Section */}
            <div className='pt-6 border-t border-gray-200 mt-8'>
              <h4 className='text-lg font-bold font-Ovo mb-4 text-gray-900'>Technologies & Tools</h4>
              <div className='flex flex-wrap items-center justify-center lg:justify-start gap-3'>
                {toolsData.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -4, scale: 1.1, rotate: 5 }}
                    className='flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all duration-300 cursor-pointer shadow-sm'
                  >
                    <Image src={tool} alt='Tool' className='w-8 h-8 sm:w-10 sm:h-10 object-contain' width={40} height={40}/>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
