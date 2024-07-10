import { motion } from "framer-motion"

interface Props {
  scaleX: number
}

export default function Progress(props: Props) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: props.scaleX }}
      transition={{ duration: 0.1, ease: "easeIn" }}
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-[0%] z-[100]"
    />
  )
}
