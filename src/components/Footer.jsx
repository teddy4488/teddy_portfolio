import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Tewodros.dev</h3>
            <p className="text-gray-400">
              Bridging hardware and software through innovative engineering and
              clean code.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/teddy4488"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-white"
              >
                <FiGithub className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/tewodros-abere-"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-white"
              >
                <FiLinkedin className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://t.me/teddy444" // Replace with your actual Telegram URL
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-white"
              >
                <FaTelegram className="text-2xl" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="#home"
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-blue-400"
                >
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#projects"
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-blue-400"
                >
                  Projects
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#skills"
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-blue-400"
                >
                  Skills
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#contact"
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-blue-400"
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMail className="mr-3 mt-1 text-blue-400" />
                <a
                  href="mailto:teddyabere444@gmail.com"
                  className="text-gray-400 hover:text-blue-400"
                >
                  teddyabere444@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FiPhone className="mr-3 mt-1 text-blue-400" />
                <a
                  href="tel:+251988979909"
                  className="text-gray-400 hover:text-blue-400"
                >
                  +251 988 97 99 09
                </a>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mr-3 mt-1 text-blue-400" />
                <span className="text-gray-400">Bahir Dar, Ethiopia</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500"
        >
          <p>&copy; {currentYear} Tewodros Abere. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
