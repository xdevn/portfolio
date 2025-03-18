"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";


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

const Hero = () => {
    return (
        <section className="max-w-3xl text-3xl font-bold mx-auto px-4 gap-3 flex flex-col">
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
                <div className="rounded-4xl border-gray-300/40 border-4 p-4  ">
                    <h3 className="text-sm text-gray-600 mb-4">My Experience</h3>
                    <div className="relative aspect-square border-gray-300 overflow-y-auto pr-2 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="relative flex gap-6 pb-5 cursor-pointer"
                                // whileHover={{
                                //     scale: 1,
                                //     transition: { duration: 0.2 },
                                // }}
                            >
                                <div className="w-3 h-3 mt-1.5 before:absolute before:left-[5.5px] before:h-full before:w-[2px] before:bg-gray-400">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill= "#99a1af"
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
                                <div className="">
                                    <h4 className="text-sm font-medium">
                                        {exp.title} at {exp.company}
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                        {exp.year} - {exp.locationType} - {exp.employmentType}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>


                <div className="rounded-4xl border-gray-300/40 border-4 p-4  ">
                    <h3 className="text-sm text-gray-600 mb-4">My Music Playlist</h3>
                    <div className="relative aspect-square border-gray-300 overflow-y-auto pr-2 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="relative flex gap-6 pb-5 cursor-pointer"
                                // whileHover={{
                                //     scale: 1,
                                //     transition: { duration: 0.2 },
                                // }}
                            >
                                <div className="w-3 h-3 mt-1.5 before:absolute before:left-[5.5px] before:h-full before:w-[2px] before:bg-gray-400">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill= "#99a1af"
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
                                <div className="">
                                    <h4 className="text-sm font-medium">
                                        {exp.title} at {exp.company}
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                        {exp.year} - {exp.locationType} - {exp.employmentType}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="rounded-4xl border-gray-300/40 border-4 p-4  ">
                    <h3 className="text-sm text-gray-600 mb-4">What I'm reading</h3>
                    <div className="relative aspect-square border-gray-300 overflow-y-auto pr-2 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="relative flex gap-6 pb-5 cursor-pointer"
                                // whileHover={{
                                //     scale: 1,
                                //     transition: { duration: 0.2 },
                                // }}
                            >
                                <div className="w-3 h-3 mt-1.5 before:absolute before:left-[5.5px] before:h-full before:w-[2px] before:bg-gray-400">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill= "#99a1af"
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
                                <div className="">
                                    <h4 className="text-sm font-medium">
                                        {exp.title} at {exp.company}
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                        {exp.year} - {exp.locationType} - {exp.employmentType}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>


        </section>
    );
};


export default Hero;
