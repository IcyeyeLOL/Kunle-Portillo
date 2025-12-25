'use client'
import Image from 'next/image'
import React from 'react'
import { assets } from '../../assets/assets.js';
import { motion } from 'motion/react'

const Footer = () => {
  const socialLinks = [
    { icon: assets.github, label: 'GitHub', href: 'https://github.com/IcyeyeLOL' },
    { icon: assets.linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/olakunleajani/' },
    { icon: assets.leetcode, label: 'LeetCode', href: 'https://leetcode.com/u/Olakunle-Ajani/' }
  ];

  return (
    <footer className='w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 mt-20 bg-gradient-to-b from-white to-gray-50 py-12 lg:py-16'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-8'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src={assets.logo} alt='Logo' className='w-32 sm:w-36 mx-auto mb-4' width={144} height={144}/>
          </motion.div>
          <motion.a
            href="mailto:lime17451@gmail.com"
            whileHover={{ scale: 1.05 }}
            className='inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-Ovo'
          >
            <Image src={assets.mail_icon} alt='Email' className='w-5 h-5' width={20} height={20}/>
            <span className='text-base sm:text-lg'>lime17451@gmail.com</span>
          </motion.a>
        </motion.div>

        <div className='border-t border-gray-300 pt-8'>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className='text-gray-600 text-sm sm:text-base'
            >
              © 2025 Kunle Ajani. All rights reserved.
            </motion.p>
            <ul className='flex items-center gap-4 sm:gap-6'>
              {socialLinks.map((social, index) => (
                <motion.li
                  key={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 group'
                  >
                    <div className='p-2 rounded-lg bg-white border-2 border-gray-200 group-hover:border-blue-400 group-hover:bg-blue-50 transition-all duration-300'>
                      <Image 
                        src={social.icon} 
                        alt={social.label} 
                        className='w-5 h-5' 
                        width={20} 
                        height={20}
                      />
                    </div>
                    <span className='font-semibold text-sm sm:text-base'>{social.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
