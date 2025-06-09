import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./components/AboutMe";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import TeddyResume from "./assets/TewodrosAbereResume.pdf";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gray-900">
      {/* Compact Sidebar Icons */}
      <div className="fixed left-3 top-1/2 z-30 hidden -translate-y-1/2 transform md:block">
        <div className="flex flex-col space-y-4">
          <motion.a
            href="https://github.com/teddy4488"
            whileHover={{ y: -3, scale: 1.15 }}
            className="text-gray-300 hover:text-white"
            aria-label="GitHub"
          >
            <FiGithub className="text-xl" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/tewodros-abere-"
            whileHover={{ y: -3, scale: 1.1 }}
            className="text-gray-300 hover:text-white"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="text-xl" />
          </motion.a>
          <motion.a
            href={TeddyResume}
            download="Tewodros_Abere_Resume.pdf"
            whileHover={{ y: -3, scale: 1.1 }}
            className="text-gray-300 hover:text-white"
            aria-label="Download Resume"
          >
            <FiDownload className="text-xl" />
          </motion.a>
        </div>
      </div>

      <div className="w-full px-4 sm:px-5 md:px-6 md:pl-12 lg:pl-14">
        {" "}
        <div
          className="fixed inset-0 -z-10 opacity-20"
          style={{
            backgroundImage: "url('data:image/svg+xml,...')",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Content Container */}
        <div className="relative z-10 mx-auto w-full max-w-[2000px] 2xl:max-w-[2200px]">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Education />
          <Experience />
          <Skills />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
