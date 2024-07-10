import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

const isBrowser = () => typeof window !== "undefined"

function scrollToTop() {
  if (!isBrowser()) return
  const scrollBarContainer = document.getElementById("scrollbar")
  if (scrollBarContainer) scrollBarContainer.scrollTo({ top: 0 })
}

interface Props {
  show: boolean
}

export default function ScrollToTopButton(props: Props) {
  if (!props.show) return null

  return (
    <motion.button
      className="fixed bottom-4 left-4 p-2 bg-primary text-black rounded-full hover:opacity-80 transition-opacity duration-300 ease-in-out z-50"
      onClick={scrollToTop}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <Icon icon="fluent:arrow-up-12-filled" />
    </motion.button>
  )
}
