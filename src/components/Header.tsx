import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";


// build page 
export default function Header() {

    // State controls whether the mobile menu is open or closed.
    // false means the menu is hidden when the page first loads.
    const [isOpen, setIsOpen] = useState(false);

    // This array stores the main navigation links in one place.
    // Each object has a visible name and the path it should go to.
    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Market", path: "/products" },
        { name: "Account", path: "/account" },
        { name: "Contact", path: "/contact" },
    ];

    // Get the current cart items from the shared CartContext.
    // This lets the header show the cart total from anywhere on the site.
    const { cartItems } = useCart();

    // Get the current logged-in user and logout function from AuthContext.
    // This lets the header show Login, Logout, or a welcome message.
    const { currentUser, logout } = useAuth();

    // Add up all item quantities in the cart.
    // This gives the number shown in the cart badge.
    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // display on page 
    return (

        // Sticky header stays at the top while the user scrolls.
        // z-50 keeps it layered above most page content.
        <header className="sticky top-0 z-50 h-24 w-full">

            {/* 
              Glassmorphism container:
              the white transparency and blur create the frosted-glass effect.
              The layout keeps the logo on the left and navigation on the right.
            */}
            <div
                className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 border-b border-white/30
                  bg-white/40 backdrop-blur-md shadow-sm"
            >

                {/* Brand link sends users back to the Home page */}
                <NavLink
                    to="/"
                    className="flex items-center gap-3"
                >

                    {/* Logo image for the NeighborGoods brand */}
                    <img
                        src={logo}
                        alt="NeighborGoods logo"
                        className="h-26 w-26 object-contain"
                    />

                    {/* 
                      Brand text is hidden on small screens and shown on medium screens.
                      This helps the mobile header stay clean and less crowded.
                    */}
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

                {/* 
                  Desktop navigation.
                  hidden md:flex means it is hidden on mobile and becomes a flex row
                  on medium screens and larger.
                */}
                <nav className="hidden md:flex items-center gap-8 font-body text-base font-medium">

                    {/* 
                      Create one navigation link for each object in the links array.
                      NavLink can detect the active page and apply different styling.
                    */}
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

                    {/* 
                      If a user is logged in, show their name and a Logout button.
                      If no user is logged in, show a Login link instead.
                    */}
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

                    {/* 
                      Cart link with an icon and optional badge.
                      The badge only appears when cartCount is greater than 0.
                    */}
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

                {/* 
                  Mobile menu button.
                  md:hidden means this button only appears on smaller screens.
                  Clicking it switches the menu between open and closed.
                */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className=" text-primary-dark transition-colors duration-200 hover:text-primary-green md:hidden "
                    aria-label="Toggle navigation menu"
                >
                    {/* Show X when menu is open, hamburger when closed */}
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* 
              Mobile menu.
              It only renders when isOpen is true.
              This keeps the mobile navigation hidden until the user taps the menu button.
            */}
            {isOpen && (
                <div
                    className="  md:hidden border-b border-white/30 bg-white/70 backdrop-blur-md px-6 pb-4 "
                >
                    <div className="flex flex-col gap-4">

                        {/* 
                          Mobile navigation links use the same links array as desktop.
                          Clicking a link also closes the menu.
                        */}
                        {links.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `py-2 transition-colors duration-200
                                     ${isActive ? "text-primary-green" : "text-primary-dark"}
                                    hover:text-primary-green` }>
                                {link.name}
                            </NavLink>
                        ))}

                        {/* 
                          Mobile account area.
                          If a user is logged in, show the welcome message and logout option.
                        */}
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

                        {/* 
                          Mobile cart link.
                          This repeats the cart badge pattern used in desktop navigation.
                        */}
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