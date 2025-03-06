"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "SARANATHAN COLLEGE OF ENGINEERING",
      location: "Tiruchirappalli, Tamilnadu",
      period: "Aug 2022 – May 2025",
      gpa: "CGPA: 7.47",
    },
  ]

  const experience = [
    {
      title: "FULL STACK DEVELOPMENT INTERN",
      company: "Prodigy Infotech",
      period: "Aug 2024 - Aug 2024",
      description: "Developed web apps using React and Node.js.",
      skills: ["React", "Node.js", "Web Development"],
    },
    {
      title: "CYBER SECURITY ENGINEER",
      company: "Ozone Cyber Security",
      period: "Jan 2022 - Jun 2022",
      description: "Conducted security audits and developed intrusion detection systems.",
      skills: ["Security Audits", "Intrusion Detection", "Cyber Security"],
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
    <section id="experience" className="py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={container}
        className="max-w-4xl mx-auto"
      >
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Experience & <span className="text-blue-500">Education</span>
        </motion.h2>

        <motion.div variants={item} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Briefcase className="mr-2 text-blue-500" />
            Work Experience
          </h3>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold text-blue-400">{job.title}</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-blue-900/20 text-blue-300 border-blue-500/30 flex items-center"
                    >
                      <Calendar className="mr-1 h-3 w-3" />
                      {job.period}
                    </Badge>
                  </div>
                  <p className="text-gray-300 font-medium">{job.company}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
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
          </div>
        </motion.div>

        <motion.div variants={item}>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <GraduationCap className="mr-2 text-blue-500" />
            Education
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold text-blue-400">{edu.degree}</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-blue-900/20 text-blue-300 border-blue-500/30 flex items-center"
                    >
                      <Calendar className="mr-1 h-3 w-3" />
                      {edu.period}
                    </Badge>
                  </div>
                  <p className="text-gray-300 font-medium">{edu.institution}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{edu.location}</p>
                  <p className="text-blue-400 font-medium mt-2">{edu.gpa}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

