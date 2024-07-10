// GallerySection.tsx
// Importing necessary libraries from Framer Motion for animations and React for component functionality.
import { motion } from "framer-motion"
import React from "react"

// Defining our static gallery images URLs based on the newly provided links from the Basma Al Lulu Medical Center.
const galleryImages = [
  "https://basmtlolo.com/wp-content/uploads/2023/04/4-1.jpg",
  "https://basmtlolo.com/wp-content/uploads/2023/04/3-1.jpg",
  "https://basmtlolo.com/wp-content/uploads/2023/04/2-1.jpg",
  "https://basmtlolo.com/wp-content/uploads/2023/04/8-1.jpg",
  "https://basmtlolo.com/wp-content/uploads/2023/04/9-1.jpg",
  "https://basmtlolo.com/wp-content/uploads/2023/04/21-1.jpg",
  "https://basmtlolo.com/wp-content/uploads/2023/04/1-1.jpg",
  "https://basmtlolo.com/wp-content/uploads/2023/04/24-1.jpg",
  "https://basmtlolo.com/wp-content/uploads/2023/04/23-1.jpg",
  "https://basmtlolo.com/wp-content/uploads/2023/04/22-1.jpg",
]

// The functional component for the Gallery Section.
const GallerySection: React.FC = () => {
  return (
    <div
      id="gallery"
      className="max-w-[1366px] mx-auto bg-white p-[32px] flex flex-col items-center"
    >
      {/* Title Section with scaling animation for entry */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-primary text-center mb-10"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl">Our Gallery</h1>
      </motion.div>

      {/* Images Gallery with responsive grid layout and hover animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {galleryImages.map((image, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="card hover:shadow-xl transition duration-300 ease-in-out"
          >
            <figure className="overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto hover:scale-125 transition duration-500 ease-in-out"
              />
            </figure>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

// Exporting the component for use in other parts of the application.
export default GallerySection
