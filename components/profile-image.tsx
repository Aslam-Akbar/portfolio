"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function ProfileImage({ size = "large", showBadge = true }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Size variants
  const dimensions = {
    large: "w-64 h-64 md:w-72 md:h-72",
    medium: "w-32 h-32 md:w-40 md:h-40",
    small: "w-12 h-12",
  }

  // Border thickness based on size
  const borderThickness = {
    large: "-inset-1",
    medium: "-inset-1",
    small: "-inset-[2px]", // Reduced thickness for header
  }

  // Image sizes and positioning based on container size
  const imageSizes = {
    large: { width: 200, height: 200 },
    medium: { width: 110, height: 110 },
    small: { width: 32, height: 32 },
  }

  // 3D tilt effect on hover for large and medium sizes
  const handleMouseMove = (e) => {
    if (size === "small") return

    const { currentTarget, clientX, clientY } = e
    const { left, top, width, height } = currentTarget.getBoundingClientRect()

    const x = (clientX - left) / width
    const y = (clientY - top) / height

    setMousePosition({ x, y })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative mx-auto ${size !== "small" ? "mb-8" : "mb-0"}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <div className={`relative ${dimensions[size]} group`}>
        {/* Outer glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>

        {/* Animated gradient ring - thinner for header */}
        <motion.div
          className={`absolute ${borderThickness[size]} bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full`}
          animate={{
            background: [
              "linear-gradient(90deg, #2563eb, #7c3aed, #2563eb)",
              "linear-gradient(180deg, #2563eb, #7c3aed, #2563eb)",
              "linear-gradient(270deg, #2563eb, #7c3aed, #2563eb)",
              "linear-gradient(0deg, #2563eb, #7c3aed, #2563eb)",
              "linear-gradient(90deg, #2563eb, #7c3aed, #2563eb)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Main container with 3D tilt effect */}
        <motion.div
          className="relative rounded-full overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 p-1 h-full flex items-center justify-center"
          style={
            size !== "small"
              ? {
                  transform: isHovering
                    ? `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 10}deg) rotateY(${(mousePosition.x - 0.5) * -10}deg)`
                    : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                  transition: "transform 0.2s ease-out",
                }
              : {}
          }
        >
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-purple-600/5 z-10 group-hover:opacity-50 transition-opacity duration-300"></div>

          {/* The image - centered properly */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile-removebg-preview-bD1bRC3Y1lOkQkz3lR7t1JlbNHoSt5.png"
            alt="Mohamed Aslam A"
            width={imageSizes[size].width}
            height={imageSizes[size].height}
            className={`transition-transform duration-300 ${size !== "small" ? "group-hover:scale-105" : ""}`}
            priority={size === "large"}
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </motion.div>
      </div>

      {/* Badge for large size only */}
      {size === "large" && showBadge && (
        <motion.div
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-sm font-medium">Full Stack Dev</span>
        </motion.div>
      )}
    </motion.div>
  )
}

