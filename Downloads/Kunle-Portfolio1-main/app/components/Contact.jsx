'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react'

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b04a152d-1395-44ca-84ed-e2096751eb59");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("✓ Message sent successfully! I'll get back to you soon.");
        event.target.reset();
      } else {
        setResult(data.message || "Error submitting form. Please try again.");
      }
    } catch (error) {
      setResult("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className='relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20 sm:py-28 lg:py-32 scroll-mt-20 bg-gradient-to-b from-gray-50 via-white to-blue-50/30'>
      <div className='max-w-4xl mx-auto'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12 lg:mb-16'
        >
          <span className='inline-block text-sm sm:text-base font-semibold text-blue-600 uppercase tracking-wider mb-4'>
            Get In Touch
          </span>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-Ovo mb-4'>
            <span className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent'>
              Let's Work
            </span>
            <br />
            <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
              Together
            </span>
          </h2>
          <p className='max-w-2xl mx-auto mt-4 text-base sm:text-lg text-gray-600 font-Ovo leading-relaxed'>
            Have a project in mind? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6'></div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={onSubmit}
          className='space-y-5'
        >
          <div className='grid sm:grid-cols-2 gap-5'>
            <motion.div whileFocus={{ scale: 1.01 }} className='relative'>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder='Your Name'
                className='w-full px-5 py-4 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 bg-white hover:border-gray-300 shadow-sm'
                required
                name='name'
              />
            </motion.div>
            <motion.div whileFocus={{ scale: 1.01 }} className='relative'>
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                id="email"
                type="email"
                placeholder='Your Email'
                className='w-full px-5 py-4 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 bg-white hover:border-gray-300 shadow-sm'
                required
                name='email'
              />
            </motion.div>
          </div>
          
          <motion.div whileFocus={{ scale: 1.01 }} className='relative'>
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea
              id="message"
              placeholder='Your Message'
              rows={6}
              className='w-full px-5 py-4 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 resize-none bg-white hover:border-gray-300 shadow-sm'
              required
              name='message'
            ></textarea>
          </motion.div>
          
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            className='w-full px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className='w-5 h-5 border-2 border-white border-t-transparent rounded-full'
                />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <motion.svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                </motion.svg>
              </>
            )}
          </motion.button>
          
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center p-4 rounded-xl font-medium ${
                result.includes('successfully')
                  ? 'bg-green-50 text-green-700 border-2 border-green-200'
                  : result.includes('Error') || result.includes('Sending')
                  ? 'bg-blue-50 text-blue-700 border-2 border-blue-200'
                  : 'bg-red-50 text-red-700 border-2 border-red-200'
              }`}
            >
              {result}
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
