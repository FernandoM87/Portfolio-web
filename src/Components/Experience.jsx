import React, { useState, useRef, useEffect } from 'react';

export default function Experience() {
    return (
        <>
            <div className="mb-16 md:mb-16 xl:my-32">
                <h1 className="text-4xl text-cyan-500 font-bold text-center mb-10 md:text-6xl md:mb-16">Experience</h1>
                <div className="bg-slate-700 shadow-2xl mx-8 p-6 rounded-xl md:p-8">
                    <h2 className="text-4xl text-cyan-500 font-bold text-center mb-5 md:text-5xl">Sogram Invest AB</h2>
                    <div className="border border-gray-400 mb-4"></div>
                    <p className="text-center text-3xl mb-5 md:text-4xl">Front-end and back-end</p>
                    <p className="text-xl text-slate-400 mb-5 md:text-2xl">casino affiliate application focused on finding casinos across various countries around the world.</p>
                    <li className="text-lg md:text-2xl">
                        Full Stack developer using Next.js, Tailwind CSS, and Firebase. Developed and maintained web components for a afilliate casino web application, using Next.js to maximize SEO, implementing Tailwind CSS for responsive and dynamic design, and Firebase for storing, authenticating, and updating web application data in real-time.
                    </li><br />
                    <span className="text-gray-400 font-extralight md:text-xl">Januari 2024 - maj 2024</span>
                </div>
            </div>
        </>
    )
}