import React, { useState, useRef, useEffect } from 'react';
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";



export default function Contact() {
    return (
        <>
            <div>
                <h1 className="text-4xl text-cyan-500 font-bold text-center mb-16 md:text-6xl xl:my-12">Contact</h1>
                <div className="text-center text-lg grid grid-rows-3 justify-center gap-4 mb-12">
                    <div className="grid grid-rows-2 gap-2">
                        <span className="grid justify-center">
                            <SlEnvolopeLetter className="text-6xl text-sky-700 md:text-8xl" />
                        </span>
                        <ul className="text-center">
                            <li>
                                <a
                                    className="hover:text-sky-600 visited:text-sky-700 md:text-2xl"
                                    href="mailto:diego.marroquin_87@hotmail.com"
                                >
                                    diego.marroquin_87@hotmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-rows-2 gap-2">
                        <span className="grid justify-center">
                            <RiGithubFill className="text-6xl md:text-8xl" />
                        </span>
                        <ul className="text-center">
                            <li>
                                <a
                                    className="hover:text-sky-600 md:text-2xl"
                                    href="https://github.com/FernandoM87"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Diego Fernando Marroquin
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-rows-2 gap-2">
                        <span className="grid justify-center">
                            <RiLinkedinBoxFill className="text-blue-700 text-6xl md:text-8xl" />
                        </span>
                        <ul className="text-center">
                            <li>
                                <a
                                    className="hover:text-sky-600 md:text-2xl"
                                    href="https://www.linkedin.com/in/diego-fernando-rivas-marroquin-329623293/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn profile
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}