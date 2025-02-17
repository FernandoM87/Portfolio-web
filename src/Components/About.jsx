import React, { useState, useRef, useEffect } from 'react';

export default function About() {
    return (
        <div className="container mx-auto px-12">
            <h2 className="text-4xl text-cyan-500 font-bold text-center mb-8 md:text-6xl md:mb-16">About me</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
                
                <div className="w-full">
                    <p className="text-lg leading-relaxed mb-6 md:text-2xl">
                        Hi! I'm Diego, a passionate and driven developer with experience in
                        Javascript, Nodejs, Reactjs, firebase and mongodb. My focus is on building clean, efficient, and user-friendly solutions. I’m constantly learning new technologies and improving my skill set to stay up-to-date with the fast-evolving tech landscape.
                    </p>

                    <p className="text-lg leading-relaxed mb-6 md:text-2xl">
                        I thrive in environments that challenge me and allow me to contribute to meaningful work that makes an impact. Whether working independently or as part of a team, I value communication, integrity, and persistence.
                    </p>

                    <p className="text-lg leading-relaxed md:text-2xl">
                        When I’m not coding or working on the next big thing, I enjoy videogames, reading, training in the gym that keep me inspired and balanced.
                    </p>

                    <div className="mt-8 md:mt-16">
                        <a
                            href="#contact"
                            className="inline-block bg-cyan-700 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}