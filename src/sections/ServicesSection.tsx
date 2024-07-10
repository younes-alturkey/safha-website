// ServicesSection.tsx
// NextJS TypeScript component for displaying the services offered by Basma Al Lulu Medical Center
import { motion } from "framer-motion"
import { FunctionComponent } from "react"

// Interface for defining the structure of the service data
interface Service {
  name: string
  image: string
}

// Array of service objects, each including a name and a corresponding image URL
const services: Service[] = [
  {
    name: "Fillings and Cosmetic Dental Treatment",
    image: null,
  },
  {
    name: "Emergency and General Medicine",
    image: null,
  },
  {
    name: "Pediatrics",
    image: null,
  },
  {
    name: "Family Medicine",
    image: null,
  },
  {
    name: "Gynecology and Obstetrics",
    image: null,
  },
  {
    name: "Plastic Surgery, Skin and Laser",
    image: null,
  },
  {
    name: "Cupping Department",
    image: null,
  },
]

// Framer Motion animation variants for the service cards
const cardVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
  },
}

// Component for displaying the services section
const ServicesSection: FunctionComponent = () => {
  return (
    <div id="services" className="max-w-[1366px] mx-auto bg-white p-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        className="text-primary text-center text-[32px] font-bold mb-12"
      >
        {/* Dynamic heading for services section */}
        Our Premium Medical & Cosmetic Services
      </motion.div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="shadow-xl bg-secondary text-white"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
            }}
          >
            <div className="p-4 bg-black bg-opacity-60 rounded h-full flex justify-center items-center">
              <h2>{service.name}</h2>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default ServicesSection
