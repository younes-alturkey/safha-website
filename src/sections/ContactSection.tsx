// Import required dependencies including icons, axios for API calls,
// Formik for form handling, Yup for validation, and Framer Motion for animations
import { Icon } from "@iconify/react"
import { useFormik } from "formik"
import { motion } from "framer-motion"
import { useState } from "react"
import * as yup from "yup"

// ContactSection.tsx
// Define the ContactSection component
const ContactSection = () => {
  const [messageSent, setMessageSent] = useState<boolean>(false) // State to control the visibility of the "Message received" text
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false) // State to manage the submit button's state

  // Validation schema for the form fields using Yup library
  const validationSchema = yup.object({
    name: yup.string().required("Field is required"), // Name field validation
    email: yup
      .string()
      .email("Invalid email format")
      .required("Field is required"), // Email field validation
    message: yup.string().required("Field is required"), // Message field validation
  })

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  // Handling form state and submission using Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true) // Indicate submission process has started
      await sleep(1000)
      setIsSubmitting(false) // Reset submission state
      formik.resetForm()
      setMessageSent(true) // Show the "Message received" text
      await sleep(5000)
      setMessageSent(false)
    },
  })

  // JSX rendering the form and its fields with styling and animations
  return (
    <div
      id="contact"
      className="flex justify-center items-center bg-primary p-5"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white max-w-md w-full rounded-lg shadow-md p-8 m-4"
      >
        <form onSubmit={formik.handleSubmit}>
          {/* Name input field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-primary">
              Name
            </label>
            <input
              disabled={isSubmitting}
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={`w-full p-4 rounded-md border-primary bg-black text-white ${
                isSubmitting ? "bg-opacity-70" : ""
              }`}
              placeholder="Your Name"
            />
            {formik.errors.name && formik.touched.name && (
              <div className="text-red-500">{formik.errors.name}</div>
            )}
          </div>

          {/* Email input field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-primary">
              Email
            </label>
            <input
              disabled={isSubmitting}
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full p-4 rounded-md border-primary bg-black text-white ${
                isSubmitting ? "bg-opacity-70" : ""
              }`}
              placeholder="Your Email"
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>

          {/* Message input field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-primary">
              Message
            </label>
            <textarea
              disabled={isSubmitting}
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className={`w-full p-4 rounded-md border-primary bg-black text-white ${
                isSubmitting ? "bg-opacity-70" : ""
              }`}
              placeholder="Your Message"
            />
            {formik.errors.message && formik.touched.message && (
              <div className="text-red-500">{formik.errors.message}</div>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className={`py-2 px-4 w-24 rounded-md flex justify-center items-center ${
              isSubmitting
                ? "bg-black bg-opacity-50 text-white"
                : "bg-black text-white"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Icon icon="eos-icons:loading" width="24" height="24" />
            ) : (
              "Send"
            )}
          </button>

          {/* Message received text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-3 text-primary ${
              messageSent ? "visible" : "invisible"
            }`}
          >
            Message received
          </motion.div>
        </form>
      </motion.div>
    </div>
  )
}

// Export the ContactSection component
export default ContactSection
