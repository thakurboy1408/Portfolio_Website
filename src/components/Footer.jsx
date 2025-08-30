import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0c0c0c] text-gray-300 py-8 px-4 border-t border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
        
        {/* Branding */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold text-white">ANKIT THAKUR</h2>
          <p className="text-xs text-gray-400 mt-1">Full-Stack Developer | Problem Solver</p>
          <p className="text-xs text-gray-500 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Navigation */}
        <div className="text-center sm:text-left">
          <h3 className="text-sm font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
            <li><a href="#certificates" className="hover:text-blue-400 transition">Certificates</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-sm font-semibold text-white mb-2">Connect with Me</h3>
          <div className="flex justify-center sm:justify-start gap-5">
            <a
              href="https://github.com/thakurboy1408"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-400 transition"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-thakur-a4a60a201/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:ankit1408thakur@gmail.com"
              aria-label="Email"
              className="hover:text-blue-400 transition"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-xs text-gray-600">
        Designed & Built by <span className="text-white">ANKIT THAKUR</span>
      </div>
    </footer>
  );
};

export default Footer;