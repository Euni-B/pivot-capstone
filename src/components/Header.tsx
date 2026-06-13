import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/ng-logo.png";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Account", path: "/account" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="w-full h-24 sticky top-0 z-50">
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
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-xl text-[#1F2937]"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/70 backdrop-blur-md border-b border-white/30 px-6 pb-4">
                    <div className="flex flex-col gap-4">
                        {links.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
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