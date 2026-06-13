import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/ng-logo.png";


// build page 
export default function Header() {
    // state for mobile menu open/close 
    const [isOpen, setIsOpen] = useState(false);

    // variable for nav links 
    const links = [
        // objects in array for nav links, each with name and path properties
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Account", path: "/account" },
        { name: "Contact", path: "/contact" },
    ];

    // display on page 
    return (
        // html tag with tailwind classes for styling and layout 
        <header className="w-full h-24 sticky top-0 z-50">
            {/* html tag to separate a section with specific styling for this part  */}
            <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between
        bg-white/40 backdrop-blur-md border-b border-white/30 shadow-sm">
                {/* Logo / Brand */}
                <NavLink
                    to="/"
                    className="flex items-center gap-2"
                >
                    {/* Icon */}
                    <img
                        src={logo}
                        alt="NeighborGoods icon"
                        className="h-16 w-16 object-contain"
                    />

                    {/* Brand text */}
                    <div className="flex flex-col justify-center leading-none">
                        <h1 className="font-['DM_Serif_Display'] text-2xl text-[#2E6F57]">
                            NeighborGoods
                        </h1>

                        <p className="mt-1 hidden text-[10px] tracking-[0.22em] text-[#1F2937] md:block">
                            LOCAL GOODS. REAL NEIGHBORS.
                        </p>
                    </div>
                </NavLink>
                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    {/* renders list of nav links, with styling based on active state and hover state  */}
                    {links.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `transition-colors duration-200 ${isActive
                                    ? "text-[#2E6F57]"
                                    : "text-[#1F2937]"
                                } hover:text-[#2E6F57]`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    // uses state to toggle mobile menu open/close on click, with styling for mobile view
                    onClick={() => setIsOpen(!isOpen)}
                    // hides extra text on mobile and styles the icon 
                    className="md:hidden text-xl text-[#1F2937]"
                >
                    {/* conditional rendering of menu icon based on mobile menu state (open/close)  */}
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {/* if mobile menu is open, renders a div with nav links styled for mobile view, with backdrop and border
             for separation from content   */}
            {isOpen && (
                <div className="md:hidden bg-white/70 backdrop-blur-md border-b border-white/30 px-6 pb-4">
                    <div className="flex flex-col gap-4">
                        {/* renders links variable with styling based on active state and hover state,
                         and closes mobile menu on click */}
                        {links.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                //     p=padding y=top and bottom, transition-colors for smooth color change, 
                                // with conditional styling based on active state and hover state 
                                    `py-2 transition-colors ${isActive
                                        ? "text-[#2E6F57]"
                                        : "text-[#1F2937]"
                                    } hover:text-[#2E6F57]`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}