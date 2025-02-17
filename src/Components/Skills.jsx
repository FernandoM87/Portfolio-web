import React, { useState, useRef, useEffect } from 'react';
import { SiMongodb } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { 
    RiTailwindCssFill, 
    RiJavascriptFill, 
    RiNodejsFill, 
    RiReactjsFill, 
    RiGithubFill, 
    RiGitBranchFill,
    RiNextjsFill,
    RiHtml5Fill,
    RiFirebaseFill,
    RiCss3Fill 
} from "react-icons/ri";


export default function Skills() {
    return (
        <>
            <div >
                <h1 className="text-4xl text-cyan-500 font-bold text-center mb-10 md:text-6xl md:mb-14">Skills</h1>
                <div className="bg-slate-700 shadow-2xl mx-8 p-6 mb-10 md:mb-16">
                    <h2 className="text-4xl text-cyan-500 font-bold text-center mb-5 md:text-5xl">Front-end</h2>
                    <div className="border border-gray-400 mb-10"></div>
                    <div className="">
                        <ul className="text-center grid grid-cols-3 gap-6 mr-4 md:grid md:grid-cols-3 md:justify-items-center md:gap-12">
                            <li className=""><RiHtml5Fill className="text-7xl text-orange-500 md:text-9xl"/>HTML</li>
                            <li><RiReactjsFill className="text-7xl text-cyan-500 md:text-9xl" />React</li>
                            <li><RiNextjsFill className="text-7xl md:text-9xl"/>Nextjs</li>
                            <li><RiJavascriptFill className="text-7xl text-yellow-300 md:text-9xl" />Javascript</li>
                            <li><BiLogoTypescript className="text-7xl text-blue-600 md:text-9xl" />Typescript</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-slate-700 shadow-2xl mx-8 p-6 mb-10 md:mb-16">
                    <h2 className="text-4xl text-cyan-500 font-bold text-center mb-5">Style</h2>
                    <div className="border border-gray-400 mb-10"></div>
                    <div className="">
                        <ul className="text-center grid grid-cols-3 gap-6 mr-4 md:grid md:grid-cols-3 md:justify-items-center md:gap-12">
                            <li><RiCss3Fill className="text-7xl text-blue-700 md:text-9xl"/>CSS</li>
                            <li><RiTailwindCssFill className="text-7xl text-cyan-400 md:text-9xl"/>Tailwind</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-slate-700 shadow-2xl mx-8 p-6 mb-10">
                    <h2 className="text-4xl text-cyan-500 font-bold text-center mb-5">Back-end</h2>
                    <div className="border border-gray-400 mb-10"></div>
                    <div className="">
                        <ul className="text-center grid grid-cols-3 gap-6 mr-4 md:grid md:grid-cols-3 md:justify-items-center md:gap-12">
                            <li><RiNodejsFill className="text-7xl text-green-400 md:text-9xl" />Nodejs</li>
                            <li><SiMongodb className="text-7xl text-green-500 md:text-9xl"/>Mongodb</li>
                            <li><RiFirebaseFill className="text-7xl text-orange-400 md:text-9xl"/>Firebase</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}