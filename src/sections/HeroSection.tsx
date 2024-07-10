// HeroSection.tsx
// Importing necessary dependencies from Framer Motion and React
import { motion } from "framer-motion"
import React from "react"

// HeroSection functional component
const HeroSection: React.FC = () => {
  // Function to scroll to the About Us section of the page
  const scrollToAboutUs = () => {
    // Utilizes a general function for scrolling to specific sections
    scrollToSection("#about") // Argument is the ID of the About Us section
  }

  // General function to scroll to a specified section by its ID
  const scrollToSection = (id: string) => {
    // Find the section element by its ID
    const section = document.querySelector(id)
    if (section) {
      // If the section exists, scroll the page to this section
      section.scrollIntoView()
    }
  }

  // Component returns a div that acts as the hero section
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center"
      // Background image URL is dynamically set to Basma Al Lulu Medical Center's cover image
      style={{
        backgroundImage: `url("https://basmtlolo.com/wp-content/uploads/2023/04/dr-copy-1-1024x313.webp")`,
      }}
    >
      <div className="p-4 bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
        {/* Motion.h1 is used for the title animation */}
        <motion.h1
          className="text-white text-center text-4xl md:text-6xl"
          initial={{ opacity: 0, scale: 0.5 }} // Animation start state
          animate={{ opacity: 1, scale: 1 }} // Animation end state
          transition={{ duration: 0.5 }} // Animation transition duration
          // Title dynamically set to "Basma Al Lulu Medical Center"
        >
          Basma Al Lulu Medical Center
        </motion.h1>

        {/* Button to scroll to the About Us section with a click event handler */}
        <motion.button
          className="bg-primary text-white font-bold py-2 px-4 rounded mt-4"
          initial={{ opacity: 0 }} // Button animation start state
          animate={{ opacity: 1 }} // Button animation end state
          transition={{ delay: 0.5, duration: 0.5 }} // Button animation transition
          onClick={scrollToAboutUs} // Button click triggers scrollToAboutUs function
        >
          Learn More
        </motion.button>
      </div>
    </div>
  )
}

// Exporting the HeroSection component for import in other parts of the application
export default HeroSection
