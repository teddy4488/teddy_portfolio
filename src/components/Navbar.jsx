import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Logo = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    className={`h-8 w-8 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background circle */}
    <circle cx="50" cy="50" r="45" fill="#1E40AF" opacity="0.2" />

    {/* T letter (top part) */}
    <rect x="30" y="25" width="40" height="10" rx="2" fill="#60A5FA" />
    <rect x="55" y="35" width="10" height="30" rx="2" fill="#60A5FA" />

    {/* A letter (bottom part) */}
    <polygon points="30,70 70,70 60,40 40,40" fill="#60A5FA" opacity="0.8" />
    <rect x="45" y="55" width="10" height="15" rx="1" fill="#1F2937" />

    {/* Glow effect */}
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="none"
      stroke="#60A5FA"
      strokeWidth="1"
      strokeOpacity="0.3"
    />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when clicking a link
  const handleNavLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const linkedinUrl = "https://www.linkedin.com/in/tewodros-abere-";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed z-50 w-full ${
        scrolled ? "bg-gray-900/90 backdrop-blur-md" : "bg-gray-900/50"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo (Left) */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Logo className="text-blue-400" />
            <span className="text-xl font-bold text-white">Tewodros.dev</span>
          </motion.a>

          {/* Desktop Links (Center) */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{
                  scale: 1.05,
                  color: "#60A5FA",
                }}
                className="relative rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-blue-400"
              >
                {link.name}
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: link.href === "#home" ? 1 : 0 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button (Right) - Links to LinkedIn */}
          <motion.a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 10px rgba(96, 165, 250, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 md:block"
          >
            Hire Me
          </motion.a>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-gray-800 md:hidden"
        >
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={handleNavLinkClick}
                whileHover={{ x: 5 }}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="mt-2 block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-base font-medium text-white"
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
