import React from 'react';
import { FaHammer } from 'react-icons/fa';

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-center h-[586px] bg-slate-700 overflow-hidden md:h-[763px] md:w-full md:mb-16">
            {/* Icon */}
            <div className="p-6 bg-sky-500 rounded-full shadow-lg">
                <FaHammer className="text-white text-6xl" />
            </div>

            {/* Title */}
            <h1 className="text-3xl mt-6 font-bold text-slate-300 text-center md:text-5xl">
                Projects Coming Soon!
            </h1>

            {/* Message */}
            <p className=" text-lg text-gray-500 text-center mx-8 md:mt-4 md:text-3xl">
                Currently working on amazing projects that will be showcased here soon.
                Stay tuned for updates!
            </p>
        </div>
    );
}
