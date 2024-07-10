// NextJS TypeScript component for displaying endorsements received by Basma Al Lulu Medical Center.
import { motion } from "framer-motion"
import { FC } from "react"

// Define the type for a single endorsement to enhance code readability and maintainability.
interface Endorsement {
  name: string
  description: string
}

// FC (Functional Component) for the Endorsements Section
const EndorsementsSection: FC = () => {
  // Array of endorsements received by Basma Al Lulu Medical Center
  const endorsements: Endorsement[] = [
    {
      name: "Anonymous",
      description:
        "I visited Dr. Natalie, she is wonderful, her hand is light, very gentle and affectionate, her work is beyond excellent, God willing, God bless you.",
    },
    {
      name: "Anonymous",
      description:
        "I had cleaning done by Dr. Ramzi, and the results were beautiful, his hand was light, and the price was very reasonable.",
    },
    {
      name: "Anonymous",
      description:
        "I had braces installed and there were white marks on my front teeth after I removed the braces, but I saw Dr. Natalie and she had treatment for her, and the result was very satisfactory and I had never expected it, and her treatment was very sophisticated.",
    },
  ]

  return (
    <motion.div
      id="endorsements"
      className="w-full py-24 flex justify-center items-center relative"
      style={{
        backgroundSize: "cover",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-black bg-opacity-80 w-full h-full absolute top-0 z-0" />
      <div className="max-w-[1366px] z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {endorsements.map((endorsement, index) => (
          <motion.div
            key={index}
            className="bg-white/50 backdrop-blur-lg border border-primary rounded-lg shadow-lg p-4 flex flex-col items-start"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-lg font-semibold mb-2">{endorsement.name}</h4>
            <p className="text-gray-600">{endorsement.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default EndorsementsSection
