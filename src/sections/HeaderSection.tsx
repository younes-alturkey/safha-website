import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import React, { useState } from "react"

const HeaderSection: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const scrollToSection = (sectionId: string) => {
    if (menuOpen) {
      setMenuOpen(false)
    }
    document.querySelector(sectionId)?.scrollIntoView()
  }

  const menuItems = [
    { label: "About", id: "#about" },
    { label: "Services", id: "#services" },
    { label: "Gallery", id: "#gallery" },
    { label: "Team", id: "#team" },
    { label: "Contact", id: "#contact" },
  ]

  return (
    <header className="w-full shadow-sm py-2 px-4 z-10 fixed top-0 bg-white/50 backdrop-blur-lg rounded-b-lg">
      <div className="max-w-[1366px] m-auto flex justify-between items-center h-[80px]">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="logo cursor-pointer"
          onClick={() => document.querySelector("#scrollbar")?.scrollTo(0, 0)}
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://basmtlolo.com/wp-content/uploads/2024/01/png.png"
            alt="Basma Al Lulu Medical Center Logo"
            className="w-20 h-20 object-contain"
          />
        </motion.div>
        <nav className="hidden md:flex gap-6 items-center">
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer hover:text-primary"
            >
              {item.label}
            </motion.div>
          ))}
        </nav>
        <div className="md:hidden">
          <Icon
            icon="mdi:menu"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-screen h-screen bg-primary text-black z-[1000] flex flex-col items-center justify-center gap-4"
          >
            {menuItems.map((item) => (
              <motion.div
                key={item.id}
                whileTap={{ scale: 0.95 }}
                className="text-5xl font-bold cursor-pointer"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </motion.div>
            ))}
            <Icon
              icon="mdi:close"
              className="w-8 h-8 absolute top-4 right-4 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default HeaderSection
