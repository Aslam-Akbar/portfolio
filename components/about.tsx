"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProfileImage from "./profile-image"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "HTML", "CSS", "Python", "Java", "C", "SQL"],
    },
    {
      category: "Frontend",
      items: ["React.js", "Tailwind CSS", "Bootstrap", "Redux"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    },
    { category: "Tools", items: ["Git", "Linux", "Windows", "MS Office"] },
    {
      category: "Security",
      items: ["Ethical Hacking", "Kali Linux", "Security Audits"],
    },
  ]

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

  return (
    <section id="about" className="py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={container}
        className="max-w-4xl mx-auto px-4"
      >
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        <motion.div variants={item} className="flex justify-center">
          <ProfileImage size="medium" showBadge={false} />
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/30 transition-all duration-300">
            <CardContent className="p-6">
              <p className="text-gray-300 leading-relaxed">
                Proven ability to analyze complex data structures, debug application logic, and optimize backend queries
                to enhance system performance. Proficient in building dynamic and user-friendly web applications using
                modern frameworks and libraries like React.js and Node.js, ensuring seamless user experiences. Strong
                command over front-end technologies (HTML, CSS, JavaScript) and backend tools (SQL, RESTful APIs),
                enabling efficient development and deployment of applications. Skilled in gathering user requirements,
                performing technical analysis, and translating them into scalable, full-stack solutions.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.h3 variants={item} className="text-2xl font-semibold mb-6 text-center">
          Technical <span className="text-blue-500">Skills</span>
        </motion.h3>

        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <CardContent className="p-6">
                <h4 className="text-xl font-medium mb-4 text-blue-400">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className="bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

