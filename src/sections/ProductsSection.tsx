// File: ProductsSection.tsx

// Importing necessary libraries and packages
import { motion } from "framer-motion" // for animation effects
import React from "react" // main React library

// Define the product type interface
interface Product {
  id: number
  title: string
  description: string
  imagePath?: string
}

// Array of products containing details according to the provided info
const products: Product[] = [
  {
    id: 1,
    title: "Toys Cool LED",
    description:
      "Kids love all things that light up. The flashing led gloves will be perfect toy",
    imagePath: "https://m.media-amazon.com/images/I/71+PJFjXiqL._AC_SX679_.jpg",
  },
  {
    id: 2,
    title: "Binoculars",
    description:
      "Super Safety: Soft rubber surrounded eyepieces are included for eye protection so children don't hurt their eyes or face.",
    imagePath:
      "https://m.media-amazon.com/images/I/61sGjw+TtYL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    title: "Arabest Bow",
    description:
      "Bow and Arrow Set Includes 6 Arrows, One Quiver, a Target and of Course a Premium Light-up Bow",
    imagePath:
      "https://m.media-amazon.com/images/I/717GY5GOt7L._AC_SL1500_.jpg",
  },
]

// React functional component - ProductsSection
const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-12 bg-white">
      <div className="max-w-[1366px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Explore Our Products
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300"
            >
              {product.imagePath ? (
                <div className="h-56 lg:h-64 overflow-hidden">
                  <motion.img
                    src={product.imagePath}
                    alt={product.title}
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              ) : (
                <div className="h-56 lg:h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">
                    No Image Available
                  </span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-md text-gray-600 line-clamp-3">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Export the module
export default ProductsSection
