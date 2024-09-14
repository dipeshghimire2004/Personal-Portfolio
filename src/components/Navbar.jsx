import { useState } from "react"; // Import useState hook from React
import DGlogo from "../assets/DGlogo.png"; // Import logo image
import { NAVIGATION_LINKS } from "../constants"; // Import navigation links constant
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the mobile menu toggle button

const Navbar = () => {


    const [isMobileMenuOpen, setIsMobileMenuOpen]=useState(false);

    const toggleMobileMenu=()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLinkClick=(e,href)=>{
        e.preventDefault();

        const targetElement=document.querySelector(href);

        if(targetElement){
            const offset=-85;
            const elementPosition=targetElement.getBoundingClientRect().top;
            const offsetPosition=elementPosition+window.scrollY +offset;

            window.scrollTo({
                top:offsetPosition,
                behavior:"smooth"
            });
            setIsMobileMenuOpen(false);
        }
    }
    return (
        <div>
            {/* Navbar container */}
            <nav className="fixed left-0 right-0 top-4 z-50">
                {/* Desktop menu */}
                <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
                    <div className="flex items-center justify-between gap-6">
                        {/* Logo */}
                        <div>
                            <a href="#">
                                <img src={DGlogo} width={150}  height={10} alt="DGlogo"  />
                            </a>
                        </div>
                        {/* Navigation links */}
                        <div>
                            <ul className="flex items-center gap-4">
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            className="text-sm hover:text-yellow-400"
                                            href={item.href}
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className="rounded-lg backdrop-blur-md lg:hidden">
                    {/* Logo for Mobile Menu */}
                    <div className="flex items-center justify-between">
                        <a href="#">
                            <img src={DGlogo} alt="DGlogo" width={90}  height={30} className="m-2 bg-blue-200" />
                        </a>
                    </div>
                    {/* Mobile Menu Toggle Button */}
                    <div className="flex items-center">
                        <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? (
                                <FaTimes className="m-2 h-6 w-5" />
                            ) : (
                                <FaBars className="m-2 h-6 w-5" /> 
                            )}
                        </button>
                    </div>
                    {/* Mobile Navigation Links */}
                    {isMobileMenuOpen && (
                        <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="block w-full text-lg" 
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar; // Export Navbar component
