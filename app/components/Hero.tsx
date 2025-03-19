"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import type React from "react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

// Types
interface Experience {
  title: string
  company: string
  year: string
  locationType: string
  employmentType: string
  isCurrent?: boolean
}

interface TechStack {
  logo: string
  name: string
}

interface Book {
  title: string
  author: string
  coverImage: string
}

interface Project {
  number: string
  title: string
  description: string
}

interface Music {
  title: string
  artist: string
  coverImage: string
}

// Data
const PERSONAL_INFO = {
  name: "Emmanuel TOFA",
  profession: "Web Developer",
  company: "Najah's Core",
  openToWork: true,
}

const EXPERIENCES: Experience[] = [
  {
    title: "Product Lead",
    company: "Apple",
    year: "2024",
    locationType: "On site",
    employmentType: "Full time",
    isCurrent: true,
  },
  {
    title: "Product Designer",
    company: "Apple",
    year: "2023",
    locationType: "Hybrid",
    employmentType: "Part time",
  },
  {
    title: "UI-UX Designer",
    company: "Apple",
    year: "2022",
    locationType: "Remote",
    employmentType: "Full time",
  },
  {
    title: "Junior Designer",
    company: "Apple",
    year: "2021",
    locationType: "Remote",
    employmentType: "Full time",
  },
  {
    title: "Design Intern",
    company: "Apple",
    year: "2020",
    locationType: "On site",
    employmentType: "Part time",
  },
]

const TECH_STACK: TechStack[] = [
  { logo: "/next.svg", name: "Next.js" },
  { logo: "/tailwind.svg", name: "tailwindCSS" },
  { logo: "/typescript.svg", name: "TypeScript" },
  { logo: "/nodejs.svg", name: "Node.js" },
  { logo: "/express.svg", name: "Express.js" },
  { logo: "/mysql.svg", name: "MySQL" },
  { logo: "/prisma.svg", name: "PrismaORM" },
]

const CURRENT_BOOK: Book = {
  title: "Plus Malin que le Diable",
  author: "Napoléon Hill",
  coverImage: "/book.jpeg",
}

const FAVORITE_MUSIC: Music = {
  title: "Symphonie No5",
  artist: "Beethoven",
  coverImage: "/music.jpeg",
}

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "Odon Dashboard",
    description:
      "I designed and developed Odon's management dashboard, integrating an intuitive interface and advanced features for a seamless user experience.",
  },
  {
    number: "02",
    title: "Yois Landing Page",
    description:
      "I created the landing page for Yois, focusing on a clean design, smooth navigation, and SEO optimization to maximize visibility.",
  },
  {
    number: "03",
    title: "OpenFAQ Landing Page",
    description:
      "I designed and built the landing page for OpenFAQ, a SaaS platform that allows users to generate dynamic and customizable FAQs.",
  },
  {
    number: "04",
    title: "Najah's Core Website",
    description:
      "I developed the website for Najah's Core using Next.js, highlighting the company's services and values through a polished and responsive interface.",
  },
  {
    number: "05",
    title: "Optimization & Support",
    description:
      "I provide ongoing support and optimizations for completed projects, ensuring continuous improvements and efficient maintenance.",
  },
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
}

// Components
const ProfileHeader = () => (
  <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-4">
    <div className="flex items-center flex-wrap">
      <h1 className="text-3xl font-bold">Hi, I'm</h1>
      <div className="relative size-16 overflow-hidden rounded-3xl mx-2 border-gray-300/40 border-4 transition-transform hover:scale-105">
        <Image src="/me.png" alt={PERSONAL_INFO.name} width={70} height={70} className="object-cover" />
      </div>
      <h1 className="text-3xl font-bold">{PERSONAL_INFO.name}!</h1>
    </div>

    <div>
      <h1 className="text-3xl font-bold">
        <span className="text-gray-300/80">I'm a </span>
        {PERSONAL_INFO.profession} <span className="text-gray-300/80">at </span>
      </h1>
    </div>

    <div className="flex flex-row gap-4 flex-wrap">
      <h1 className="text-3xl font-bold text-orange-500">{PERSONAL_INFO.company}</h1>
      {PERSONAL_INFO.openToWork && (
        <motion.div
          className="flex flex-row border-2 items-center justify-center border-gray-300 rounded-full gap-2 px-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
          </span>
          <h3 className="text-[13px]">Open to work</h3>
        </motion.div>
      )}
    </div>

    <div className="my-6 flex items-center gap-4 flex-wrap">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button className="bg-black text-white cursor-pointer rounded-full px-6 hover:bg-black/90">Book a call</Button>
      </motion.div>
      <p className="text-sm text-gray-600 max-w-xs">
        Feel free to explore my portfolio and reach out—I'd love to connect!
      </p>
    </div>
  </motion.div>
)

const ExperienceCard = () => (
  <Card title="My Experience">
    <div
      className="flex-1 overflow-y-auto pr-2 scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {EXPERIENCES.map((exp, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          whileHover={{ x: 5 }}
          className="relative flex gap-6 pb-5 cursor-pointer"
        >
          <div className="w-3 h-3 mt-1.5 relative after:absolute after:left-[5px] after:h-full after:w-[2px] after:bg-gray-400">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="#000"
              stroke="none"
              strokeWidth="2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-medium">
              {exp.title} at {exp.company}
              {exp.isCurrent && (
                <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  Current
                </span>
              )}
            </h4>
            <p className="text-xs text-gray-500">
              {exp.year} - {exp.locationType} - {exp.employmentType}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </Card>
)

const TechStackCard = () => (
  <Card title="My Tech Stack">
    <div
      className="flex-1 overflow-y-auto pr-2 scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {TECH_STACK.map((tech, index) => (
        <motion.div
          key={tech.name}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          whileHover={{ x: 5, backgroundColor: "rgba(0,0,0,0.03)" }}
          className="relative flex items-center gap-6 mb-3 cursor-pointer rounded-lg p-2"
        >
          <div className="relative w-5 h-5 flex items-center justify-center">
            <Image
              src={tech.logo || "/placeholder.svg"}
              alt={tech.name}
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          <span className="text-sm font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  </Card>
)

const BookCard = () => (
  <Card title="What I'm reading">
    <div
      className="flex-1 overflow-y-auto pr-2 scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="mb-4">
        <h6 className="text-sm font-semibold text-gray-900">{CURRENT_BOOK.title}</h6>
        <p className="text-[8px] text-gray-500">{CURRENT_BOOK.author}</p>
      </div>
      <div className="rounded-[28px] bg-white border border-gray-200 shadow-sm p-2 w-full max-w-sm">
        <motion.div
          className="relative w-full aspect-square max-h-[250px] mx-auto rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
        >
          <Image
            src={CURRENT_BOOK.coverImage || "/placeholder.svg"}
            alt={`Cover of ${CURRENT_BOOK.title} by ${CURRENT_BOOK.author}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  </Card>
)

const MusicCard = () => (
  <Card>
    <div
      className="flex-1 flex flex-col justify-between overflow-y-auto p-0 scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="rounded-[28px] bg-white border border-gray-200 shadow-sm p-2 w-full max-w-sm">
        <motion.div
          className="relative w-full aspect-3/2 max-h-[250px] mx-auto rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
        >
          <Image
            src={FAVORITE_MUSIC.coverImage || "/placeholder.svg"}
            alt={`Cover of ${FAVORITE_MUSIC.title} by ${FAVORITE_MUSIC.artist}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
      <h3 className="text-[10px] text-gray-600 w-fit bg-white rounded-full px-2 py-1 mt-2">A fav Music</h3>

      <div className="flex mb-1 justify-between items-center">
        <div>
          <h6 className="text-sm font-semibold text-gray-900">{FAVORITE_MUSIC.title}</h6>
          <p className="text-sm text-gray-500">{FAVORITE_MUSIC.artist}</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center"
        >
          <Image src="/spotify.svg" alt="spotify_icon" width={20} height={20} className="cursor-pointer" />
        </motion.button>
      </div>
    </div>
  </Card>
)

const ProjectsCard = () => {
    const [activeStep, setActiveStep] = useState(0)
  
    return (
      <div className="rounded-4xl relative bg-[#F6F6F6] border-[#FAFAFA] border-4 p-4 pb-14 flex flex-col md:col-span-2 h-full min-h-[250px] sm:min-h-[300px]">
        <h3 className="text-xs sm:text-sm font-bold text-gray-700 bg-white rounded-full px-3 sm:px-4 py-1 sm:py-2 w-fit mb-4 sm:mb-6">
          My projects
        </h3>
  
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mb-4 sm:mb-8 flex-grow"
          >
            <h4 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
              {PROJECTS[activeStep].number} {PROJECTS[activeStep].title}
            </h4>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed font-medium line-clamp-4 sm:line-clamp-none">
              {PROJECTS[activeStep].description}
            </p>
          </motion.div>
        </AnimatePresence>
  
        <div className="absolute left-0 right-0 mx-auto bg-white rounded-full px-2 py-1 sm:py-2 w-fit max-w-[95%] bottom-2 flex flex-wrap justify-center gap-1 sm:gap-2 overflow-x-auto">
          {PROJECTS.map((project, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full text-[12px] sm:text-xs md:text-sm whitespace-nowrap cursor-pointer ${
                index === activeStep ? "bg-black text-white" : "text-gray-700 hover:bg-gray-200 transition-colors"
              }`}
              whileHover={{ scale: index !== activeStep ? 1.05 : 1 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`View project ${project.number}: ${project.title}`}
              aria-current={index === activeStep ? "step" : undefined}
            >
              Project {project.number}
            </motion.button>
          ))}
        </div>
      </div>
    )
  }

// Reusable Card component
interface CardProps {
  children: React.ReactNode
  title?: string
}

const Card: React.FC<CardProps> = ({ children, title }) => (
  <motion.div
    className="rounded-4xl bg-[#F6F6F6] border-[#FAFAFA] border-4 p-4 aspect-square flex flex-col h-full"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
  >
    {title && <h3 className="text-sm text-gray-600 w-fit mb-4 bg-white rounded-full px-4 py-2">{title}</h3>}
    {children}
  </motion.div>
)

// Main Hero component
const Hero = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <ProfileHeader />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ExperienceCard />
        <TechStackCard />
        <BookCard />
        <MusicCard />
        <ProjectsCard />
      </motion.div>
    </section>
  )
}

export default Hero

