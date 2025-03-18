"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


export const me = {
    name: "Emmanuel TOFA",
    profession: "Web developper",
};

interface Experience {
    title: string
    company: string
    year: string
    locationType: string
    employmentType: string
    isCurrent?: boolean
}


const experiences = [
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

const techStack = [
    {
        logo: "/next.svg",
        name: "Next.js",
    },
    {
        logo: "/tailwind.svg",
        name: "tailwindCSS"
    },
    {
        logo: "/typescript.svg",
        name: "Typescript"
    },
    {
        logo: "/nodejs.svg",
        name: "NodeJs"
    },
    {
        logo: "/express.svg",
        name: "Express.js"
    },
    {
        logo: "/mysql.svg",
        name: "MySQL"
    },
    {
        logo: "/prisma.svg",
        name: "PrismaORM"
    }
]


const book = {
    title: "Plus Malin que le Diable",
    author: "Napoléon Hill",
    coverImage: "/book.jpeg",
}


const projects = [
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
];




const Hero = () => {

    const [activeStep, setActiveStep] = useState(0)
    return (
        <section className="max-w-3xl text-3xl font-bold mx-auto px-4 gap-2 flex flex-col">
            <div className="flex items-center">
                <h1 className="">Hi, I'm</h1>
                <div className="relative size-16 overflow-hidden rounded-3xl mx-2 border-gray-300/40 border-4">
                    <Image
                        src="/me.png"
                        alt="Emmanuel Evamé"
                        width={70}
                        height={70}
                        className="object-cover"
                    />
                </div>
                <h1 className="">{me.name}!</h1>
            </div>

            <div>
                <h1>
                    <span className="text-gray-300/80">I'm a </span>Web Developper{" "}
                    <span className="text-gray-300/80">at </span>
                </h1>
            </div>

            <div className="flex flex-row gap-4">
                <h1 className="text-orange-500">Najah's Core.</h1>
                <div className=" flex flex-row border-2 items-center justify-center border-gray-300 rounded-full gap-2 px-6">
                    <span className="bg-green-600 transition-all animate-ping w-2 h-2 rounded-full"></span>
                    <h3 className="text-[13px]">Open to work</h3>
                </div>
            </div>

            <div className="my-6 flex items-center gap-4">
                <Button className="bg-black text-white rounded-full px-6 hover:bg-black/90">Book a call</Button>
                <p className="text-sm text-gray-600 max-w-xs">
                    Feel free to explore my portfolio and reach out—I'd love to connect!
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12 w-fit">
                <div className="rounded-4xl bg-[#F6F6F6] border-[#FAFAFA] border-4 p-4 aspect-square flex flex-col">
                    <h3 className="text-sm text-gray-600 w-fit mb-4 bg-white rounded-full px-4 py-2">
                        My Experience
                    </h3>
                    <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="relative flex gap-6 pb-5 cursor-pointer"
                            >
                                <div className="w-3 h-3 mt-1.5 after:absolute after:left-[5px] after:h-full after:w-[2px] after:bg-gray-400">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#000" stroke="none" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium">{exp.title} at {exp.company}</h4>
                                    <p className="text-xs text-gray-500">{exp.year} - {exp.locationType} - {exp.employmentType}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="rounded-4xl bg-[#F6F6F6] border-[#FAFAFA] border-4 p-4 aspect-square flex flex-col">
                    <h3 className="text-sm text-gray-600 w-fit mb-4 bg-white rounded-full px-4 py-2">
                        My Tech Stack
                    </h3>
                    <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                        {
                            techStack.map((element, key) => (
                                <motion.div
                                    key={element.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: key * 0.1 }}
                                    className="relative flex items-center gap-6 mb-3 cursor-pointer"

                                >
                                    <Image
                                        src={element.logo}
                                        alt={element.name}
                                        width={20}
                                        height={20}
                                        className=""
                                    />
                                    <span className="text-sm font-medium">{element.name}</span>

                                </motion.div>
                            ))
                        }

                    </div>
                </div>

                <div className="rounded-4xl bg-[#F6F6F6] border-[#FAFAFA] border-4 p-4 pb-0 aspect-square flex flex-col" >
                    <h3 className="text-sm text-gray-600 w-fit mb-4 bg-white rounded-full px-4 py-2">What I'm reading</h3>
                    <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                        <div className="mb-4">
                            <h6 className="text-sm font-semibold text-gray-900">{book.title}</h6>
                            <p className="text-[8px] text-gray-500">{book.author}</p>
                        </div>
                        <div className="rounded-[28px] bg-white border border-gray-200 shadow-sm p-2 w-full max-w-sm">

                            <motion.div
                                className="relative w-full aspect-square max-w-[180px] mx-auto rounded-xl overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <Image
                                    src={book.coverImage || "/placeholder.svg"}
                                    alt={`Cover of ${book.title} by ${book.author}`}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>

                    </div >
                </div>

                <div className="rounded-4xl bg-[#F6F6F6] border-[#FAFAFA] border-4 p-4 pb-0 aspect-square flex flex-col" >
                    <h3 className="text-sm text-gray-600 w-fit mb-4 bg-white rounded-full px-4 py-2">What I'm reading</h3>
                    <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                        <div className="mb-4">
                            <h6 className="text-sm font-semibold text-gray-900">{book.title}</h6>
                            <p className="text-[8px] text-gray-500">{book.author}</p>
                        </div>
                        <div className="rounded-[28px] bg-white border border-gray-200 shadow-sm p-2 w-full max-w-sm">

                            <motion.div
                                className="relative w-full aspect-square max-w-[180px] mx-auto rounded-xl overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <Image
                                    src={book.coverImage || "/placeholder.svg"}
                                    alt={`Cover of ${book.title} by ${book.author}`}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>

                    </div >
                </div>
                <div className="rounded-4xl relative bg-[#F6F6F6] border-[#FAFAFA] border-4 p-4 pb-0 flex flex-col md:col-span-2" >
                    <h3 className="text-sm font-bold text-gray-700  bg-white rounded-full px-4 py-2 w-fit mb-6">My projects</h3>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="mb-8"
                        >
                            <h4 className="text-sm font-bold mb-2">
                                {projects[activeStep].number} {projects[activeStep].title}
                            </h4>
                            <p className="text-gray-500 text-sm leading-relaxed font-medium">{projects[activeStep].description}</p>
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute bottom-2 flex flex-wrap gap-1">
                        {projects.map((project, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setActiveStep(index)}
                                className={`px-4 py-1.5 rounded-full text-[10px] cursor-pointer ${index === activeStep ? "bg-black text-white" : "text-gray-700 hover:bg-gray-200 transition-colors"
                                    }`}
                                whileHover={{ scale: index !== activeStep ? 1.05 : 1 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label={`View step ${project.number}: ${project.title}`}
                                aria-current={index === activeStep ? "step" : undefined}
                            >
                                Project {project.number}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Hero;
