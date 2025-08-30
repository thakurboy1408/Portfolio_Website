import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import ProfilePic from "../images/img.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = ["home", "about", "skills", "projects", "contact"];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => closeMobileMenu(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const options = { threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-semibold text-gray-300 tracking-wide hover:text-cyan-400 transition-colors"
        >
          ANKIT THAKUR
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`${
                  activeSection === item
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : "text-gray-300"
                } hover:text-cyan-400 transition-colors duration-200`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle Menu"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          {...swipeHandlers}
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-lg transition-all duration-300 md:hidden"
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-3xl text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            onClick={closeMobileMenu}
            aria-label="Close Menu"
          >
            <FaTimes />
          </button>

          {/* Profile Pic */}
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-cyan-400 mb-4"
          />

          {/* Links */}
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={closeMobileMenu}
              className={`${
                activeSection === item
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-gray-300"
              } hover:text-cyan-400 transition-colors duration-200`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          {/* Social Icons */}
          <div className="flex space-x-6 pt-4 text-2xl">
            <a
              href="https://github.com/thakurboy1408"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;