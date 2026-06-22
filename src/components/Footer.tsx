import { NavLink } from "react-router-dom";
import logo from "../assets/ng-logo.png";


export default function Footer() {
    return (
        // The footer is the bottom section of the website.
        // It contains branding, navigation links, account links,
        // contact links, and copyright information.
        <footer className="bg-primary-dark text-light-background">

            {/* 
              Centers the footer content and prevents it from becoming
              too wide on large screens.
            */}
            <div className="mx-auto max-w-6xl px-6 py-8">

                {/* 
                  Responsive grid layout.

                  On mobile:
                  - 1 column

                  On medium screens and larger:
                  - 4 columns
                  - Brand section is wider than the others
                */}
                <div className="grid grid-cols-1 gap-1 md:grid-cols-[1.8fr_1fr_1fr_1fr]">

                    {/* Brand section containing the logo and business identity */}
                    <div>
                        <div className="mb-4 flex items-center gap-1 md: gap-4">

                            {/* Company logo */}
                            <img
                                src={logo}
                                alt="NeighborGoods icon"
                                className="h-18 w-18 object-contain"
                            />

                            {/* Business name and tagline */}
                            <div className="flex flex-col">
                                <h2 className="font-heading leading-none text-accent-gold text-2xl md:text-4xl ">
                                    NeighborGoods
                                </h2>

                                <p className="mt-1 font-body  text-light-background/80 text-base">
                                    Local goods. Real neighbors.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main site navigation links */}
                    <div>
                        <h3 className="mb-4 font-body text-base font-semibold uppercase tracking-widest text-accent-gold">
                            Explore
                        </h3>

                        {/* 
                          Navigation links allow users to move
                          between the major pages of the site.

                          All links below follow the same pattern:
                          clicking them changes the route without
                          reloading the application.
                        */}
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

                    {/* Links related to user accounts */}
                    <div>
                        <h3 className="mb-4 font-body text-base font-semibold uppercase tracking-widest text-accent-gold">
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

                    {/* Contact and support links */}
                    <div>
                        <h3 className="mb-4 font-body text-base font-semibold uppercase tracking-widest text-accent-gold">
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

                {/* 
                  Footer bottom bar.

                  A thin border separates it from the main footer content.
                  This section typically contains copyright information
                  and legal notices.
                */}
                <div className="mt-6 border-t border-white/10 pt-4 text-center font-body text-base text-light-background/70">
                    © 2026 NeighborGoods. All rights reserved.
                </div>
            </div>
        </footer>
    );
}