import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
// Image imports
import DroneImage from "../assets/drone.png";
import FullstackImage from "../assets/real_fullstack.png";
import HardwareImage from "../assets/teddy_and_teddy.png";

import TeddyResume from "../assets/TewodrosAbereResume.pdf";
const Hero = () => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    appendDots: (dots) => (
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-8">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="h-2 w-2 rounded-full bg-gray-500 transition-all hover:bg-blue-400" />
    ),
  };

  const slides = [
    {
      title: "An enthusiat of Drone Production",
      subtitle: "Quadcopters | ESP32 | NRF24L01+ | Arduino",
      description:
        "I am highly motivated to design and program drones that navigate real-world environments with sensor fusion.",
      image: DroneImage,
      cta: "See Project",
      link: "#projects",
    },
    {
      title: "Full-Stack Developer",
      subtitle: "React | Mongo DB | Node.js",
      description:
        "I build responsive web apps with clean UI and efficient backend systems.",
      image: FullstackImage,
      cta: "View Github Page",
      link: "https://github.com/teddy4488",
    },
    {
      title: "Hardware Tinkerer",
      subtitle: "3D Printing | Arduino | Robotics",
      description:
        "From PCB designs to 3D-printed enclosures, I bring ideas to physical life.",
      image: HardwareImage,
      cta: "Learn More",
      link: "#skills",
    },
  ];

  return (
    <section
      id="home"
      className="relative h-screen min-h-[500px] sm:min-h-[600px]"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='pattern' width='40' height='40' patternUnits='userSpaceOnUse' patternTransform='rotate(45)'%3E%3Crect width='20' height='20' fill='rgba(255,255,255,0.05)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23pattern)'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Slider */}
      <div className="container mx-auto h-full px-4 sm:px-6">
        <Slider {...sliderSettings} className="h-max">
          {slides.map((slide, index) => (
            <div key={index} className="flex h-max items-center pt-16 sm:pt-0">
              <div className="flex h-screen w-full flex-col items-center justify-center md:grid md:grid-cols-2">
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex flex-col items-center space-y-4 px-4 py-8 text-center md:items-start md:py-0 md:text-left"
                >
                  <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-blue-400 sm:text-xl">
                    {slide.subtitle}
                  </p>
                  <p className="max-w-md text-gray-300">{slide.description}</p>
                  <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                    <motion.a
                      href={slide.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
                    >
                      {slide.cta}
                    </motion.a>
                    <motion.a
                      href={TeddyResume}
                      download="Tewodros_Abere_Resume.pdf"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-lg border border-blue-400 px-6 py-3 font-medium text-blue-400 hover:bg-blue-400/10"
                    >
                      Download CV
                    </motion.a>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex h-full items-center justify-center p-4 md:p-8"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-auto max-h-[300px] w-full max-w-md object-contain transition-transform duration-300 hover:scale-105 sm:max-h-[400px]"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
        {/* <div
          className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 transform flex-col space-y-4 md:flex"
          style={{ marginLeft: "2rem" }}
        >
          <motion.a
            href="https://github.com/teddy4488"
            whileHover={{ y: -3 }}
            className="text-gray-400 hover:text-white"
          >
            <FiGithub className="text-xl" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/tewodros-abere-"
            whileHover={{ y: -3 }}
            className="text-gray-400 hover:text-white"
          >
            <FiLinkedin className="text-xl" />
          </motion.a>
          <motion.a
            href={TeddyResume}
            download="Tewodros_Abere_Resume.pdf"
            whileHover={{ y: -3 }}
            className="text-gray-400 hover:text-white"
          >
            <FiDownload className="text-xl" />
          </motion.a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
