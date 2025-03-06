"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react"
import { sendContactForm } from "@/app/actions"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    status: "idle", // idle, loading, success, error
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ status: "loading", message: "" })

    try {
      await sendContactForm(formState)
      setFormStatus({
        status: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      })
      setFormState({ name: "", email: "", message: "" })
    } catch (error) {
      setFormStatus({
        status: "error",
        message: "Something went wrong. Please try again later.",
      })
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-blue-400" />,
      text: "aslam21tech@gmail.com",
      href: "mailto:aslam21tech@gmail.com",
    },
    { icon: <Phone className="h-5 w-5 text-blue-400" />, text: "+91-7904892215", href: "tel:+917904892215" },
    { icon: <MapPin className="h-5 w-5 text-blue-400" />, text: "Tiruchirappalli, Tamilnadu", href: "#" },
    {
      icon: <Linkedin className="h-5 w-5 text-blue-400" />,
      text: "linkedin.com/in/mohamed-aslam07",
      href: "https://linkedin.com/in/mohamed-aslam07/",
    },
    { icon: <Github className="h-5 w-5 text-blue-400" />, text: "GitHub", href: "#" },
  ]

  return (
    <section id="contact" className="py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={container}
        className="max-w-5xl mx-auto"
      >
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Get In <span className="text-blue-500">Touch</span>
        </motion.h2>

        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-700/50 border-gray-600 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-700/50 border-gray-600 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-700/50 border-gray-600 focus:border-blue-500 min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={formStatus.status === "loading"}
                >
                  {formStatus.status === "loading" ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
                {formStatus.status !== "idle" && (
                  <p className={`text-sm ${formStatus.status === "success" ? "text-green-400" : "text-red-400"}`}>
                    {formStatus.message}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}

