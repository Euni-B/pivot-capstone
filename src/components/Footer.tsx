import { NavLink } from "react-router-dom";
import logo from "../assets/ng-logo.png";

export default function Footer() {
    return (
        // tags with specific styling
        <footer className="bg-primary-dark text-light-background">
            <div className="mx-auto max-w-6xl px-6 py-8">
                {/* Main footer grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.8fr_1fr_1fr_1fr]">
                    {/* Brand column */}
                    <div>
                        <div className="mb-4 flex items-center gap-4">
                            {/* Larger Logo */}
                            <img
                                src={logo}
                                alt="NeighborGoods icon"
                                className="h-24 w-24 object-contain"
                            />

                            {/* Text Stack */}
                            <div className="flex flex-col">
                                <h2 className="font-heading text-3xl leading-none text-accent-gold">
                                    NeighborGoods
                                </h2>

                                <p className="mt-1 font-body text-base text-light-background/80">
                                    Local goods. Real neighbors.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Explore links */}
                    <div>
                        <h3 className="mb-4 font-body text-sm font-semibold uppercase tracking-widest text-accent-gold">
                            Explore
                        </h3>

                        <nav className="flex flex-col gap-3 font-body text-base">
                            <NavLink to="/" className="transition-colors duration-200 hover:text-accent-gold">
                                Home
                            </NavLink>

                            <NavLink to="/about" className="transition-colors duration-200 hover:text-accent-gold">
                                About
                            </NavLink>

                            <NavLink to="/products" className="transition-colors duration-200 hover:text-accent-gold">
                                Products
                            </NavLink>

                            <NavLink to="/contact" className="transition-colors duration-200 hover:text-accent-gold">
                                Contact
                            </NavLink>
                        </nav>
                    </div>

                    {/* Account links */}
                    <div>
                        <h3 className="mb-4 font-body text-sm font-semibold uppercase tracking-widest text-accent-gold">
                            Account
                        </h3>

                        <nav className="flex flex-col gap-3 font-body text-base">
                            <NavLink to="/account" className="transition-colors duration-200 hover:text-accent-gold">
                                My Account
                            </NavLink>

                            <NavLink to="/account" className="transition-colors duration-200 hover:text-accent-gold">
                                Sign In
                            </NavLink>
                        </nav>
                    </div>

                    {/* Contact links */}
                    <div>
                        <h3 className="mb-4 font-body text-sm font-semibold uppercase tracking-widest text-accent-gold">
                            Contact
                        </h3>

                        <nav className="flex flex-col gap-3 font-body text-base">
                            <NavLink to="/contact" className="transition-colors duration-200 hover:text-accent-gold">
                                Contact Us
                            </NavLink>

                            <NavLink to="/contact" className="transition-colors duration-200 hover:text-accent-gold">
                                Support
                            </NavLink>
                        </nav>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-6 border-t border-white/10 pt-4 text-center font-body text-sm text-light-background/70">
                    © 2026 NeighborGoods. All rights reserved.
                </div>
            </div>
        </footer>);
}