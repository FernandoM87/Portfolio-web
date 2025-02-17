import React, { useState, useRef, useEffect } from 'react';
import Home from './Home'
import About from './About'
import Experience from './Experience';
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education';
import Contact from './Contact'

export default function MainContent() {
    return (
        <>
            <div id="home" className="pt-16 md:ml-60 md:mr-12 md:pt-4 md:pt-4 xl:pt-16">
                <Home />
            </div>

            <div id="about" className="pt-28 md:ml-60 md:mr-12 md:px-16 md:pt-24 xl:pt-16">
                <About />
            </div>

            <div id="experience" className="pt-28 md:ml-60 md:mr-12 md:px-16 md:pt-24 xl:pt-16">
                <Experience />
            </div>

            <div id="projects" className="pt-20 md:ml-52 md:mr-12 md:pt-24 xl:pt-16">
                <Projects />
            </div>

            <div id="skills" className="pt-28 md:ml-60 md:mr-12 md:px-16 md:pt-24 xl:pt-16">
                <Skills />
            </div>

            <div id="education" className="pt-40 md:ml-60 md:mr-12 md:px-16 md:pt-24 xl:pt-16">
                <Education />
            </div>

            <div id="contact" className="pt-32 md:ml-60 md:mr-12 md:pt-12 xl:pt-16">
                <Contact />
            </div>
        </>
    )
}