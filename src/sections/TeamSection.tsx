// File: TeamSection.tsx
// This component showcases the medical team for Basma Al Lulu Medical Center
// Note: As per the instruction, the usage of NextJS Image component is avoided.

import { motion } from "framer-motion"
import React from "react"

// Define the structure for team member's information
interface TeamMember {
  name: string
  speciality: string
  imageUrl: string | null
}

// Populate the team members data
const teamMembers: TeamMember[] = [
  {
    name: "Dr. Muhammad Adel Al-Bayanouni",
    speciality: "Pediatric consultant",
    imageUrl:
      "https://basmtlolo.com/wp-content/uploads/2023/04/Untitled-1.webp",
  },
  {
    name: "Dr. Amr",
    speciality: "Cupping Specialist",
    imageUrl:
      "https://basmtlolo.com/wp-content/uploads/2023/04/%D8%B9%D9%85%D8%B1%D9%88-%D8%A7%D8%AE%D8%B5%D8%A7%D8%A6%D9%8A-%D8%AD%D8%AC%D8%A7%D9%85%D8%A9_.webp",
  },
  {
    name: "Dr. Jamal Al-Din Hassanein",
    speciality: "Consultant Surgeon",
    imageUrl:
      "https://basmtlolo.com/wp-content/uploads/2023/04/%D8%AF_%D8%AC%D9%85%D8%A7%D9%84_%D8%A7%D9%84%D8%AF%D9%8A%D9%86_%D8%AD%D8%B3%D9%86%D9%8A%D9%86_%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D9%8A_%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9_%D8%AA%D8%AC%D9%85%D9%8A%D9%84_.webp",
  },
  {
    name: "Dr. Ramzi",
    speciality: "Dentist",
    imageUrl:
      "https://basmtlolo.com/wp-content/uploads/2023/04/%D8%AF-%D8%B1%D9%85%D8%B2%D9%8A-%D8%B7%D8%A8%D9%8A%D8%A8-%D8%A7%D8%B3%D9%86%D8%A7%D9%86_.webp",
  },
  {
    name: "Dr. Natalie",
    speciality: "Dentist Doctor",
    imageUrl:
      "https://basmtlolo.com/wp-content/uploads/2023/04/%D8%AF-%D9%86%D8%A7%D8%AA%D8%A7%D9%84%D9%8A-%D8%B7%D8%A8%D9%8A%D8%A8-%D8%A3%D8%B3%D9%86%D8%A7%D9%86-1.webp",
  },
  {
    name: "Dr. Rania Al-Wakeel",
    speciality: "Gynecology Specialist",
    imageUrl:
      "https://basmtlolo.com/wp-content/uploads/2023/04/%D8%AF_%D8%B1%D8%A7%D9%86%D9%8A%D8%A7_%D8%A7%D9%84%D9%88%D9%83%D9%8A%D9%84_%D8%A3%D8%AE%D8%B5%D8%A7%D8%A6%D9%8A_%D9%86%D8%B3%D8%A7%D8%A1_%D9%88%D8%AA%D9%88%D9%84%D9%8A%D8%AF_.webp",
  },
]

// TeamSection React Functional Component
const TeamSection: React.FC = () => {
  return (
    <div className="max-w-[1366px] mx-auto p-8 bg-white" id="team">
      {/* Heading animation */}
      <motion.h2
        className="text-primary text-center text-2xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Specialist Team
      </motion.h2>

      {/* Grid layout for the team members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bordered shadow-lg rounded-md border p-4 hover:scale-105 transition duration-500 ease-in-out"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {member.imageUrl ? (
              <figure>
                {/* Image tag used directly as per the instructional constraint */}
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-80 object-cover object-top rounded-lg"
                />
              </figure>
            ) : (
              <div className="h-80 bg-gray-200 flex items-center justify-center rounded-lg">
                <span className="text-lg font-semibold text-gray-500">
                  No Image Available
                </span>
              </div>
            )}
            <div className="p-5">
              <h3>{member.name}</h3>
              <p className="opacity-80">{member.speciality}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TeamSection
