import React, { useState, useRef, useEffect } from 'react';
import { 
    RiTailwindCssFill, 
    RiJavascriptFill, 
    RiNodejsFill, 
    RiReactjsFill, 
    RiGithubFill, 
    RiGitBranchFill 
} from "react-icons/ri";


export default function Home() {

    return (
        <>
            <div className="mt-20 mx-12 md:text-center xl:my-24">
                <h1 className="text-5xl text-cyan-500 font-bold md:text-7xl">Welcome to my portfolio!</h1>
                <p className="text-3xl mt-10 md:text-5xl md:mt-24">My name is Diego and I am a fullstack Javascript developer</p>
                <div>
                    <nav>
                        <ul className="text-6xl grid grid-cols-3 gap-4 mt-12 md:text-8xl md:gap-12 md:mt-24 md:grid md:justify-items-center">
                            <li className="text-yellow-500"><RiJavascriptFill /></li>
                            <li className="text-cyan-600"><RiReactjsFill /></li>
                            <li className="text-green-400"><RiNodejsFill /></li>
                            <li className="text-cyan-400"><RiTailwindCssFill /></li>
                            <li className="text-gray-400"><RiGithubFill /></li>
                            <li className="text-red-800"><RiGitBranchFill /></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}