// Import social media icons from react-icons
import { FaLinkedin, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function Contact() {
    return (
        // Main contact page wrapper
        <main className="bg-light-background text-primary-dark">
            {/* Page content container */}
            <section className="mx-auto max-w-6xl px-6 py-16">

                {/* Two-column contact layout */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

                    {/* Left side: Email form */}
                    <section>
                        <h1 className="font-heading text-4xl text-primary-dark">
                            Email Us
                        </h1>

                        <form className="mt-6 flex flex-col gap-4">
                            {/* Name input */}
                            <input
                                type="text"
                                placeholder="Name"
                                className="rounded-xl border border-primary-dark bg-light-background px-4 py-3 font-body"
                            />

                            {/* Email input */}
                            <input
                                type="email"
                                placeholder="Email"
                                className="rounded-xl border border-primary-dark bg-light-background px-4 py-3 font-body"
                            />

                            {/* Message input */}
                            <textarea
                                placeholder="Message"
                                rows={5}
                                className="rounded-xl border border-primary-dark bg-light-background 
                                px-4 py-3 font-body"
                            />

                            {/* Send button */}
                            <button
                                type="submit"
                                className="w-fit rounded-xl bg-primary-green px-6 py-3 font-body font-semibold
                                 text-light-background transition-all duration-300 ease-out hover:scale-[1.03] 
                                 active:scale-[0.98]"
                            >
                                Send
                            </button>
                        </form>
                    </section>

                    {/* Right side: Call and hours */}
                    <section className="md:pl-12">
                        <h2 className="font-heading text-4xl text-primary-dark">
                            Call Us
                        </h2>

                        <p className="mt-6 rounded-xl  px-4 py-3 font-body">
                            Phone: +1 (555) 123-4567
                        </p>

                        <h2 className="mt-10 font-heading text-4xl text-primary-dark">
                            Business Hours
                        </h2>

                        <div className="mt-6 rounded-xl  p-6 font-body">
                            <p>Monday - Friday: 9 AM - 5 PM</p>
                            <p>Saturday: 10 AM - 2 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </section>
                </div>

                {/* Social media row */}
                <section className="mt-16 flex flex-wrap justify-center gap-8 text-4xl text-primary-green">

                    {/* LinkedIn */}
                    <a
                    className="transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]
                     hover:text-primary-dark"
                        href="https://www.linkedin.com/in/eunice-bontreger-030953124/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    {/* Facebook */}
                    <a
                    className="transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]
                     hover:text-primary-dark"
                        href="https://www.linkedin.com/in/eunice-bontreger-030953124/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <FaFacebook />
                    </a>

                    {/* Instagram */}
                    <a
                    className="transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]
                     hover:text-primary-dark"
                        href="https://www.linkedin.com/in/eunice-bontreger-030953124/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>

                    {/* TikTok */}
                    <a
                    className="transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]
                     hover:text-primary-dark"
                        href="https://www.linkedin.com/in/eunice-bontreger-030953124/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                    >
                        <FaTiktok />
                    </a>

                </section>
            </section>
        </main>
    );
}

export default Contact;