
import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-[var(--background)] via-[var(--primary)]/10 to-[var(--background)]">
      <div className="w-full max-w-4xl rounded-3xl shadow-2xl p-0 md:p-1 bg-white/70 dark:bg-[var(--background)]/80 backdrop-blur-md border border-[var(--border)]">
        <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12">
          {/* Contact Information - Left Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-extrabold text-[var(--primary)] leading-tight drop-shadow-sm text-center md:text-left">
              Contact Me
            </h2>
            <p className="text-base md:text-lg text-[var(--secondary)] leading-relaxed text-center md:text-left">
              I'm always open to discussing new opportunities, interesting projects,
              or just having a chat about technology and development.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-[var(--primary)]">Email</p>
                <p className="text-base text-[var(--foreground)]">
                  yogitabisht.4april@gmail.com
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--primary)]">Phone</p>
                <p className="text-base text-[var(--foreground)]">7088227272</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--primary)]">Location</p>
                <p className="text-base text-[var(--foreground)]">Uttarakhand</p>
              </div>
            </div>
            {/* Social Media Icons (Example) */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <form className="w-full md:w-1/2 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-[var(--primary)]"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-md border border-[var(--border)] bg-white/80 dark:bg-[var(--background)]/80 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[var(--primary)]"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-md border border-[var(--border)] bg-white/80 dark:bg-[var(--background)]/80 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-[var(--primary)]"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 rounded-md border border-[var(--border)] bg-white/80 dark:bg-[var(--background)]/80 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-md bg-[var(--primary)] text-white font-semibold hover:bg-[var(--accent)] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;