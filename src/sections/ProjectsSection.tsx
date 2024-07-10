// File: ProjectsSection.tsx
// This TypeScript component displays projects of Basma Al Lulu Medical Center using Framer Motion animations.
// It follows the provided structure and content information.

import { motion } from "framer-motion" // Importing Framer Motion for animations
import React from "react" // Importing React

// Define the structure of each project using a TypeScript interface
interface Project {
  id: number
  title: string
  description: string
  imagePath?: string // Optional because it might not always be provided
}

// List of projects using given information
const projects: Project[] = [
  {
    id: 1,
    title: "Nahdi In",
    description: "Interns management platform for Nahdi interns",
    imagePath:
      "https://www.nahdi.sa/wp-content/uploads/2023/10/Makkah-Clinic-1024x683.jpg",
  },
  {
    id: 2,
    title: "Nahdi Mobile",
    description: "New mobile app for Nahdi customers",
    imagePath:
      "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2022/03/01/3096166-1877441837.jpg?itok=vZQ_jj2M",
  },
  {
    id: 3,
    title: "NuqtahNFTs",
    description: "First NFTs marketplace in the MENA region",
    imagePath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH1OaErXGfKp10yoc-p1e7xPbrsHFckf49fg&s",
  },
  {
    id: 4,
    title: "MonshaatDEC",
    description: "Young entrepreneurs engagement platform",
    imagePath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZvXD32jwvn_nTuHamuXaq9KDPI8gS12vbuQ&s",
  },
  {
    id: 5,
    title: "BaboonTracking",
    description: "Track and report baboon tribes",
    imagePath:
      "https://africageographic.com/wp-content/uploads/2020/09/Andrew-Jenkins_ChacmaBaboon.jpg",
  },
  {
    id: 6,
    title: "CMS",
    description: "Headless CMS open-source project",
    imagePath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPltSQ1r6j6eVhelzuueT08T9uRQlFqbhAw&s",
  },
]

// React functional component to render the projects with an animation
const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-12 bg-white">
      <div className="max-w-[1366px] mx-auto px-4">
        {/* Title for the projects section */}
        <h2 className="text-3xl font-bold text-center mb-6">Our Projects</h2>

        {/* Animated grid to display project cards with responsive configuration */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={project.id}
              className="bg-gray-50 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-40 rounded-lg overflow-hidden">
                {project.imagePath ? (
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    className="w-full object-cover object-top hover:scale-125 transition duration-500 ease-in-out"
                  />
                ) : (
                  <div className="bg-gray-200 flex items-center justify-center h-full">
                    <span className="text-lg font-semibold text-gray-500">
                      No Image Available
                    </span>
                  </div>
                )}
              </div>
              <h3 className="mt-2 text-lg font-bold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Exporting the component as the default export from this module
export default ProjectsSection
