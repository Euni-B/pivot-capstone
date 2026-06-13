import { NavLink } from "react-router-dom";
import logo from "../assets/ng-logo.png";

export default function Footer() {
    return (


        // tags with specific styling 
        <footer className="bg-[#1F2937] text-[#F7F8FA]">
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
                                className="h-20 w-20 object-contain"
                            />

                            {/* Text Stack */}
                            <div className="flex flex-col">
                                <h2 className="font-['DM_Serif_Display'] text-3xl text-[#D6A86A] leading-none">
                                    NeighborGoods
                                </h2>

                                <p className="mt-1 text-sm text-[#F7F8FA]/80">
                                    Local goods. Real neighbors.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Explore links */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#D6A86A]">
                            Explore
                        </h3>

                        <nav className="flex flex-col gap-3 text-sm">
                            <NavLink to="/" className="hover:text-[#D6A86A]">
                                Home
                            </NavLink>
                            <NavLink to="/about" className="hover:text-[#D6A86A]">
                                About
                            </NavLink>
                            <NavLink to="/products" className="hover:text-[#D6A86A]">
                                Products
                            </NavLink>
                            <NavLink to="/contact" className="hover:text-[#D6A86A]">
                                Contact
                            </NavLink>
                        </nav>
                    </div>

                    {/* Account links */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#D6A86A]">
                            Account
                        </h3>

                        <nav className="flex flex-col gap-3 text-sm">
                            <NavLink to="/account" className="hover:text-[#D6A86A]">
                                My Account
                            </NavLink>
                            <NavLink to="/account" className="hover:text-[#D6A86A]">
                                Sign In
                            </NavLink>
                        </nav>
                    </div>

                    {/* Contact links */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#D6A86A]">
                            Contact
                        </h3>

                        <nav className="flex flex-col gap-3 text-sm">
                            <NavLink to="/contact" className="hover:text-[#D6A86A]">
                                Contact Us
                            </NavLink>
                            <NavLink to="/contact" className="hover:text-[#D6A86A]">
                                Support
                            </NavLink>
                        </nav>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-6 border-t border-white/10 pt-4 text-center text-xs text-[#F7F8FA]/70">
                    © 2026 NeighborGoods. All rights reserved.
                </div>
            </div>
        </footer>
    );
}