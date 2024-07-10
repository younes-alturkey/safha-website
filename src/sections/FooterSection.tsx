// FooterSection.tsx
// Importing necessary libraries from iconify, framer motion, and React
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import { FC } from "react"

// The FooterSection functional component
const FooterSection: FC = () => {
  // Social media link data for rendering icons dynamically
  const socialMediaLinks = [
    {
      name: "facebook",
      url: "https://github.com/younes-alturkey",
      icon: "akar-icons:facebook-fill",
    },
    {
      name: "twitter",
      url: "https://github.com/younes-alturkey",
      icon: "akar-icons:twitter-fill",
    },
    {
      name: "instagram",
      url: "https://github.com/younes-alturkey",
      icon: "akar-icons:instagram-fill",
    },
    // Since WhatsApp does not have a direct profile link, the given website is assumed as the contact link.
    {
      name: "whatsapp",
      url: "https://github.com/younes-alturkey",
      icon: "akar-icons:whatsapp-fill",
    },
  ]

  return (
    // Footer with white background
    <footer id="footer" className="bg-white w-full px-4 py-16">
      <div className="max-w-[1366px] mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Displaying All rights reserved text with motion effect for better UX */}
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-secondary text-base text-center"
        >
          © {new Date().getFullYear()} All rights reserved
        </motion.span>
        {/* Social Media Icons section with hover effects */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {socialMediaLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-black hover:text-primary transition duration-300"
            >
              {/* Icon is rendered dynamically based on the social media data */}
              <Icon icon={link.icon} width="24" height="24" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
