import React, { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import React Icons
import { FaUser, FaHome } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { SiKnowledgebase } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";
import { BiMessageAltEdit } from "react-icons/bi";
import { MdOutlineContactPage } from "react-icons/md";


export default function SidebarMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpandable, setIsExpandable] = useState(window.innerWidth >= 768);
    const menuRef = useRef(null); // Ref for the menu container

    // Function to toggle menu visibility
    const toggleMenu = () => {
        if (isExpandable) return;
        setIsOpen(!isOpen);
    };

    // Function to handle clicks outside of the menu
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && !isExpandable) {
            setIsOpen(false);
        }
    };

    // Add event listener to detect clicks outside the menu
    useEffect(() => {
        if (isOpen && !isExpandable) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, isExpandable]);

    // Listen for window resize to adjust expandability of the menu
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsExpandable(true);
                setIsOpen(true); // Ensure the menu stays open on larger screens
            } else {
                setIsExpandable(false);
                setIsOpen(false); // Collapse the menu on small screens
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Function to handle menu option clicks
    const handleOptionClick = (sectionId) => {
        setIsOpen(false); // Close the menu
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to section
        }
    };

    return (
        <>
            <div>
                <div className="fixed bg-gray-300 w-full h-20 flex flex-row gap-16 items-center md:hidden">
                    {/* Menu Button - Icon */}
                    {!isExpandable && (
                        <button
                            onClick={toggleMenu}
                            className="ml-2 text-3xl"
                        >
                            <FiMenu className="text-black" />
                        </button>
                    )}
                    <div className="text-center">
                        <a href="#home"><p className="text-3xl text-cyan-500">Diego Rivas</p></a>
                        <span className="text-sm text-gray-400">Full Stack Developer</span>
                    </div>
                </div>

                {/* Overlay - Appears when the menu is open */}
                {isOpen && !isExpandable && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
                )}

                {/* Sidebar Menu */}
                <div
                    ref={menuRef}
                    className={`fixed top-0 left-0 h-full w-48 bg-[#D9D9D9] text-white p-4 transition-transform transform z-50 ${isOpen || isExpandable ? 'translate-x-0' : '-translate-x-full'
                        } md:w-52`}
                >
                    {/* Close Button - X Icon */}
                    {!isExpandable && (
                        <button
                            onClick={toggleMenu}
                            className="text-3xl absolute top-4 right-1 text-black"
                        >
                            <FiX />
                        </button>
                    )}

                    <div className="bg-[#C1C0C0] -m-4 p-10 hidden md:block">
                        <h1 className="text-2xl text-cyan-600"><a href="#home">Diego Rivas</a> </h1>
                        <span className="text-xs text-black">Full Stack Developer</span>
                    </div>

                    {/* Menu Content */}
                    <nav className="mt-14">
                        <ul className="space-y-4 flex flex-col gap-7 text-black">
                            <a
                                href="#home"
                                className="flex gap-4"
                                onClick={() => handleOptionClick('home')}
                            >
                                <FaHome className="text-cyan-600" />
                                <li>Home</li>
                            </a>
                            <a
                                href="#about"
                                className="flex gap-4"
                                onClick={() => handleOptionClick('about')}
                            >
                                <FaUser className="text-green-700" />
                                <li>About</li>
                            </a>
                            <a
                                href="#experience"
                                className="flex gap-4"
                                onClick={() => handleOptionClick('experience')}
                            >
                                <FaArrowTrendUp className="text-green-600" />
                                <li>Experience</li>
                            </a>
                            <a
                                href="#projects"
                                className="flex gap-4"
                                onClick={() => handleOptionClick('projects')}
                            >
                                <GrProjects className="text-blue-800" />
                                <li>Projects</li>
                            </a>
                            <a
                                href="#skills"
                                className="flex gap-4"
                                onClick={() => handleOptionClick('skills')}
                            >
                                <SiKnowledgebase className="text-purple-700" />
                                <li>Skills</li>
                            </a>
                            <a
                                href="#education"
                                className="flex gap-4"
                                onClick={() => handleOptionClick('education')}
                            >
                                <FaGraduationCap className="text-orange-600" />
                                <li>Education</li>
                            </a>
                            <a
                                href="#contact"
                                className="flex gap-4"
                                onClick={() => handleOptionClick('contact')}
                            >
                                <BiMessageAltEdit className="text-red-900" />
                                <li>Contact</li>
                            </a>
                            <a
                                href="https://docs.google.com/document/d/1_M46uvNcMy8HaPPReOSHtEja68saMZhu/edit"
                                target="_blank"
                                className="flex gap-4"
                                onClick={() => handleOptionClick('resume')}
                            >
                                <MdOutlineContactPage />
                                <li>CV</li>
                            </a>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}