import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image imports
import DroneImage from "../assets/drone_2.png";
import CodeImage from "../assets/dds5.png";
import Controller from "../assets/controller.png";
import QuadcopterTrial from "../assets/quadcopter_trial.mp4";

const projects = [
  {
    title: "GPS Sensor and ESP-32 CAM Equiped Quadcopter",
    shortDesc: "Arduino-based drone with NRF24L01+ telemetry and PID control",
    fullDesc:
      "I designed and built a custom quadcopter focused on modularity, real-time communication, and GPS tracking. The main flight system is powered by an Arduino Uno that receives control signals wirelessly and interfaces with a separate Arduino Nano for GPS data processing. A dedicated flight controller handles stability and motion through PID calculations, sending PWM signals to the ESCs for precise motor control. The system supports multiple communication protocols including NRF24L01 radio, I2C, and Software Serial for efficient data flow between modules.",
    tags: [
      "Arduino UNO",
      "Arduino Nano",
      "ESP-32 CAM",
      "NRF24L01+",
      "PID Control",
      "NEO-6M GPS Module",
    ],
    image: DroneImage,
    links: [],
  },
  {
    title: "Drone Delivery Service Website with IoT Dashboard",
    shortDesc: "Real-time location monitoring with React and MQTT",
    fullDesc:
      "A full-stack web application for managing drone deliveries with live tracking. The dashboard displays real-time telemetry data from multiple drones simultaneously using MQTT protocol. Features include delivery scheduling, flight path visualization, and battery monitoring. The backend uses Node.js with Express and MongoDB for data storage, while the frontend leverages React with Redux for state management.",
    tags: [
      "React",
      "MQTT",
      "Socket.io",
      "Tailwind",
      "MongoDB",
      "Node.js",
      "Redux",
    ],
    image: CodeImage,
    links: [
      {
        icon: <FiGithub />,
        url: "https://github.com/Tewodros-Yirga/DDS-Real-user-frontend",
      },
    ],
  },
  {
    title: "ESP-32 based Quadcopter controller",
    shortDesc:
      "Equiped with internet connectivity and real-time Quadcopter controlling",
    fullDesc:
      "The handheld controller is based on an ESP32 and features joystick inputs and servo controls. It wirelessly transmits real-time commands to the quadcopter using the NRF24L01+ module, ensuring responsive and accurate maneuvering. At the same time it also receives gps location data from the quadcopter and transmit it to the backend server using mqtt. Designed for both flexibility and expandability, the controller integrates seamlessly with the flight system and lays the groundwork for future features like telemetry feedback and mobile app control.",
    tags: ["ESP-32", "NRF24L01", "joystick", "potentiometer", "MQTT"],
    image: Controller,
    links: [],
  },
  {
    title: "Quadcopter Flight System",
    shortDesc:
      "Complete implementation with controlled navigation and live video feed",
    fullDesc:
      "This comprehensive quadcopter system features GPS navigation and real-time telemetry monitoring. The quadcopter uses an Arduino UNO flight controller with PID stabilization mostly taken from Joop brokking's work, integrating multiple sensors including GPS and IMU for precise navigation. The ground station displays live telemetry data and video feed. The system includes fail-safe mechanisms for low battery and signal loss",
    technicalDetails: [
      "Arduino UNO-based flight controller with custom firmware",
      "NRF24L01+ for telemetry (1km range)",
      "NEO-6M GPS module for navigation",
      "MPU6050 for attitude stabilization",
      "ESP32-CAM for live video transmission",
      "PID controllers for flight stability",
      "MQTT-based ground station communication for GPS location readings",
    ],
    media: {
      type: "video",
      src: QuadcopterTrial,
      thumbnail: "/images/quadcopter-thumbnail.jpg",
      alt: "Quadcopter trial flight demonstration",
    },
    tags: ["Arduino UNO", "PID Control", "MQTT", "React Dashboard"],
    links: [],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`h-2 w-2 rounded-full transition-all ${i < Math.ceil(projects.length / 3) ? "bg-gray-500 hover:bg-blue-400" : "hidden"}`}
      />
    ),
  };

  return (
    <section id="projects" className="bg-gray-900/50 py-20 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center text-4xl font-bold text-white"
        >
          My <span className="text-blue-400">Portfolio</span>
        </motion.h2>

        <div className="relative px-8">
          <Slider ref={sliderRef} {...sliderSettings}>
            {projects.map((project, index) => (
              <div key={index} className="px-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex h-full flex-col overflow-hidden rounded-xl bg-gray-800 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="relative aspect-video h-48 overflow-hidden bg-gray-700">
                    {project.media?.type === "video" ? (
                      <>
                        <video
                          className="h-full w-full object-contain"
                          poster={project.media.thumbnail}
                          muted
                          loop
                          playsInline
                          autoPlay
                        >
                          <source src={project.media.src} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full bg-black/50 p-3 text-white">
                            <svg
                              className="h-8 w-8"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.3 2.8L17 10 6.3 17.2V2.8z" />
                            </svg>
                          </div>
                        </div>
                      </>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                    )}
                  </div>

                  <div className="flex flex-grow flex-col p-6">
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-gray-300">{project.shortDesc}</p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-700 px-2 py-1 text-xs text-blue-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex space-x-4">
                        {project.links.map((link, i) => (
                          <motion.a
                            key={i}
                            href={link.url}
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-400 hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.icon}
                          </motion.a>
                        ))}
                      </div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-sm font-medium text-blue-400 hover:text-blue-300"
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>

          {/* Custom Arrows */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white hover:bg-blue-600"
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white hover:bg-blue-600"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 z-10 text-gray-400 hover:text-white"
                >
                  <FiX className="text-2xl" />
                </button>
                <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                  {selectedProject.media?.type === "video" ? (
                    <video
                      autoPlay
                      muted
                      loop
                      className="h-full w-full object-contain"
                      poster={selectedProject.media.thumbnail}
                    >
                      <source
                        src={selectedProject.media.src}
                        type="video/mp4"
                      />
                    </video>
                  ) : (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="h-full w-full object-contain"
                    />
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>

                <div className="mb-6 space-y-4">
                  <h4 className="text-lg font-semibold text-blue-400">
                    Project Overview
                  </h4>
                  <p className="text-gray-300">{selectedProject.fullDesc}</p>

                  {selectedProject.technicalDetails && (
                    <>
                      <h4 className="text-lg font-semibold text-blue-400">
                        Technical Implementation
                      </h4>
                      <ul className="ml-6 list-disc text-gray-300">
                        {selectedProject.technicalDetails.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-700 px-3 py-1.5 text-sm text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {selectedProject.links.length > 0 && (
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.links.map((link, i) => (
                      <motion.a
                        key={i}
                        href={link.url}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                        <span>View Code</span>
                      </motion.a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
