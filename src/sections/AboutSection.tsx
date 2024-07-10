// AboutSection.tsx
import { motion } from "framer-motion"
import React from "react"

const AboutSection: React.FC = () => {
  // Function to scroll to the services section
  const scrollToServicesSection = () => {
    scrollToSection("#services")
  }

  // Function to scroll to a specified section by ID
  const scrollToSection = (id: string) => {
    const section = document.querySelector(id)
    if (section) {
      section.scrollIntoView()
    }
  }

  return (
    <section id="about" className="max-w-[1366px] mx-auto px-4 md:px-16 py-20">
      <div className="flex flex-wrap md:flex-nowrap">
        {/* Left column for Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
          {/* Animated heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-primary mb-4"
          >
            Leading Health and Aesthetics
          </motion.h2>

          {/* Animated paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            At Basma Al Lulu Medical Center, we are dedicated to offering both
            therapeutic and cosmetic services with cutting-edge technologies.
            Serving a wide array of needs from teeth to plastic surgery, under
            the expertise of top-tier consultants.
          </motion.p>

          {/* Button for scrolling action */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white rounded-full px-6 py-2 transition-all"
            onClick={scrollToServicesSection}
          >
            Explore Our Services
          </motion.button>
        </div>

        {/* Right column for Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-[400px] w-full h-auto bg-white rounded-md"
          >
            {/* Image representing the logo */}
            <img
              src="https://basmtlolo.com/wp-content/uploads/2023/04/png-about-us.webp"
              alt="Advanced Medical and Aesthetic Care"
              className="rounded-md object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
