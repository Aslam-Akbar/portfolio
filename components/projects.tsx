"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: "todo",
      title: "To-Do App",
      description:
        "A user-friendly to-do list application with functionality for task creation, updating, and deletion. Implemented features for categorizing tasks and setting deadlines, improving task management efficiency.",
      image: "/todo-app.jpg", // We'll create this image URL
      imageUrl:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["React.js", "CSS", "LocalStorage"],
      demoLink: "https://todo-list-aslam.netlify.app/",
      codeLink: "https://github.com/Aslam-Akbar/todo.git",
      category: "personal",
    },
    {
      id: "weather",
      title: "Weather App",
      description:
        "Real-time weather application that provides current conditions, forecasts, and weather alerts. Features include location-based weather data, interactive maps, and customizable notifications.",
      image: "/weather-app.jpg",
      imageUrl:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["JavaScript", "Weather API", "CSS"],
      demoLink: "https://weatherbyaslam.netlify.app/",
      codeLink: "https://github.com/Aslam-Akbar/weather",
      category: "personal",
    },
    {
      id: "memory",
      title: "Memory Card Game",
      description:
        "Interactive memory card game with multiple difficulty levels. Players match pairs of cards while competing against time. Features include score tracking, animations, and themed card sets.",
      image: "/memory-game.jpg",
      imageUrl:
        "https://images.unsplash.com/photo-1606167668584-78701c57f13d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["JavaScript", "HTML", "CSS", "Game Logic"],
      demoLink: "https://memorygamebyaslam.netlify.app/",
      codeLink: "https://github.com/Aslam-Akbar/memory-game",
      category: "personal",
    },
  ]

  const [activeTab, setActiveTab] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

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
    <section id="projects" className="py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={container}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-blue-500">Projects</span>
        </motion.h2>

        <motion.div variants={item} className="mb-10">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-800/70">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="academic">Academic</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: index * 0.1,
                        },
                      },
                    }}
                  >
                    <Card className="h-full flex flex-col bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden group">
                      <div className="relative overflow-hidden h-48">
                        {/* Project image with gradient overlay for better blending */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                        <Image
                          src={project.imageUrl || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl font-bold text-blue-400">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-gray-300 line-clamp-3 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tags.slice(0, 3).map((tag, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="bg-blue-900/20 text-blue-300 border-blue-500/30"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {project.tags.length > 3 && (
                            <Badge variant="outline" className="bg-blue-900/20 text-blue-300 border-blue-500/30">
                              +{project.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between pt-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
                              onClick={() => setSelectedProject(project)}
                            >
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[600px] bg-gray-900 border-gray-700">
                            {selectedProject && (
                              <>
                                <DialogHeader>
                                  <DialogTitle className="text-2xl font-bold text-blue-400">
                                    {selectedProject.title}
                                  </DialogTitle>
                                  <DialogDescription className="text-gray-300">
                                    {selectedProject.description}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="mt-4 relative rounded-lg overflow-hidden">
                                  {/* Add a subtle gradient overlay in the modal too */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent z-10"></div>
                                  <Image
                                    src={selectedProject.imageUrl || "/placeholder.svg"}
                                    alt={selectedProject.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-64 object-cover rounded-md"
                                  />
                                </div>
                                <div className="flex flex-wrap gap-2 mt-4">
                                  {selectedProject.tags.map((tag, idx) => (
                                    <Badge
                                      key={idx}
                                      variant="outline"
                                      className="bg-blue-900/20 text-blue-300 border-blue-500/30"
                                    >
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="flex justify-end gap-2 mt-4">
                                  <Button variant="outline" size="sm" className="border-blue-500 text-blue-400" asChild>
                                    <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer">
                                      <Github className="mr-2 h-4 w-4" />
                                      Code
                                    </a>
                                  </Button>
                                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                                    <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="mr-2 h-4 w-4" />
                                      Live Demo
                                    </a>
                                  </Button>
                                </div>
                              </>
                            )}
                          </DialogContent>
                        </Dialog>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-gray-400 hover:text-blue-400 hover:bg-blue-900/20"
                            asChild
                          >
                            <a
                              href={project.codeLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="View source code"
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-gray-400 hover:text-blue-400 hover:bg-blue-900/20"
                            asChild
                          >
                            <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="View live demo"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </section>
  )
}

