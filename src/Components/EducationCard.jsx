import React, { useState, useRef, useEffect } from 'react';

export default function EducationCard({ school, degree, year, description }) {
    return (
        <>
        <div>
            <div className="w-64 h-60 bg-slate-700 shadow-lg rounded-lg p-4 m-2 bg-scroll md:w-96 md:h-96">
                <h3 className="text-xl font-semibold text-white mb-2 md:text-3xl">{school}</h3>
                <p className="text-md text-blue-400 font-medium md:text-3xl">{degree}</p>
                <p className="text-gray-500 text-sm mb-4 md:text-2xl">{year}</p>
                <p className="text-gray-500 text-sm md:text-2xl">{description}</p>
            </div>
        </div>
        </>
    )
}