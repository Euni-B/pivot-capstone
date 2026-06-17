import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
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
        { name: "Market", path: "/products" },
        { name: "Account", path: "/account" },
        { name: "Contact", path: "/contact" },
    ];

    const { cartItems } = useCart();
    const { currentUser, logout } = useAuth();

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // display on page 
    return (
        // html tag with tailwind classes for styling and layout 
        <header className="sticky top-0 z-50 h-24 w-full">
            {/* Glassmorphism container */}
            <div
                className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 border-b border-white/30
                  bg-white/40 backdrop-blur-md shadow-sm"
            >
                {/* Logo / Brand */}
                <NavLink
                    to="/"
                    className="flex items-center gap-3"
                >
                    {/* Logo Icon */}
                    <img
                        src={logo}
                        alt="NeighborGoods logo"
                        className="h-26 w-26 object-contain"
                    />

                    {/* Brand Name & Tagline */}
                    <div className="flex flex-col leading-none   hidden md:block">
                        <h1 className="font-heading text-4xl text-primary-green">
                            NeighborGoods
                        </h1>

                        <p
                            className="font-body text-base tracking-[0.22em] text-primary-dark">

                            LOCAL GOODS. REAL NEIGHBORS.
                        </p>
                    </div>
                </NavLink>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 font-body text-base font-medium">
                    {links.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                ` transition-colors duration-200 ${isActive ? "text-primary-green border-b-2 border-primary-green"
                                    : "text-primary-dark"}  hover:text-primary-green`} >
                            {link.name}
                        </NavLink>
                    ))}


                    {currentUser ? (
                        <>
                            <span className="font-body font-semibold text-primary-dark">
                                Welcome, {currentUser.name}
                            </span>

                            <button
                                type="button"
                                onClick={logout}
                                className="rounded-xl border border-primary-dark px-4 py-2 font-body font-semibold
                                 text-primary-dark transition hover:bg-primary-green hover:text-light-background"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/account"
                            className="rounded-xl border border-primary-dark px-4 py-2 font-body font-semibold 
                            text-primary-dark transition hover:bg-primary-green hover:text-light-background"
                        >
                            Login
                        </Link>
                    )}


                    <Link to="/cart"
                        className="relative font-body font-semibold 
                     text-primary-dark transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] 
                     hover:text-primary-green" >


                        <FaShoppingCart className="text-xl" />

                        {cartCount > 0 && (
                            <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center
                             rounded-full bg-accent-gold text-xs font-bold text-primary-dark">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    // Toggle mobile menu open/closed
                    onClick={() => setIsOpen(!isOpen)}
                    className=" text-primary-dark transition-colors duration-200 hover:text-primary-green md:hidden "
                    aria-label="Toggle navigation menu"
                >
                    {/* Show X when menu is open, hamburger when closed */}
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {/* if mobile menu is open, renders a div with nav links styled for mobile view, with backdrop 
            and border for separation from content */}
            {isOpen && (
                <div
                    className="  md:hidden border-b border-white/30 bg-white/70 backdrop-blur-md px-6 pb-4 "
                >
                    <div className="flex flex-col gap-4">
                        {/* renders links variable with styling based on active state and hover state,
                          and closes mobile menu on click */}
                        {links.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    // p=padding y=top and bottom, transition-colors for smooth color change,
                                    // with conditional styling based on active state and hover state
                                    `py-2 transition-colors duration-200
                                     ${isActive ? "text-primary-green" : "text-primary-dark"}
                                    hover:text-primary-green` }>
                                {link.name}
                            </NavLink>
                        ))}

                        {currentUser && (
                            <div className="rounded-xl bg-primary-green/10 p-4">
                                <p className="font-body font-semibold text-primary-dark">
                                    Welcome, {currentUser.name}
                                </p>
                                {currentUser ? (
                                    <div className="rounded-xl bg-primary-green/10 p-4">
                                        <p className="font-body font-semibold text-primary-green">
                                            Welcome, {currentUser.name}
                                        </p>

                                        <button
                                            type="button"
                                            onClick={logout}
                                            className="mt-3 rounded-xl border border-primary-green px-4 py-2 font-semibold text-primary-green"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <Link
                                        to="/account"
                                        onClick={() => setIsOpen(false)}
                                        className="rounded-xl border border-primary-green px-4 py-3 text-center font-semibold text-primary-green"
                                    >
                                        Login
                                    </Link>
                                )}
                            </div>
                        )}
                        <Link
                            to="/cart"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 rounded-xl px-4 py-3 font-body font-semibold
                             text-primary-dark transition hover:bg-primary-green/10 hover:text-primary-green" >
                            <div className="relative">
                                <FaShoppingCart className="text-xl" />

                                {cartCount > 0 && (
                                    <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center 
                                    justify-center rounded-full bg-accent-gold text-xs font-bold text-primary-dark">
                                        {cartCount}
                                    </span>
                                )}
                            </div>

                            <span>Cart</span>
                        </Link>
                    </div>
                </div>

            )}
        </header>
    );
}