"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import ProfileImage from "./profile-image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center py-20">
      <ProfileImage size="large" showBadge={true} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          Mohamed Aslam A
        </h1>
        <div className="text-2xl md:text-3xl font-medium mb-8 h-16 text-gray-200">
          <TypeAnimation
            sequence={[
              "React.js Developer",
              1000,
              "Full Stack Developer",
              1000,
              "Frontend Specialist",
              1000,
              "Backend Engineer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
            cursor={true}
          />
        </div>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Building dynamic and user-friendly web applications with modern frameworks and libraries. Passionate about
          creating seamless user experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-900/10" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10"
      >
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce rounded-full text-blue-400"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  )
}

