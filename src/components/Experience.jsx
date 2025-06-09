import { motion } from "framer-motion";
import { FiCpu, FiCode, FiWifi, FiServer, FiDatabase } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiArduino, SiMongodb, SiRedux, SiSocketdotio } from "react-icons/si";
import MyQuadcopter from "../assets/Quadcopter.svg?react";

// Technology icons mapping
const techIcons = {
  // Hardware
  "Arduino UNO/NANO": <SiArduino className="mr-1 inline text-lg" />,
  "ESP-32": <FiCpu className="mr-1 inline text-lg" />,
  "NRF24L01+": <FiWifi className="mr-1 inline text-lg" />,
  "NEO-6M GPS": <FiWifi className="mr-1 inline text-lg" />,
  "3d printing": <FiServer className="mr-1 inline text-lg" />,

  // Software
  React: <FaReact className="mr-1 inline text-lg" />,
  "Node.js": <FaNodeJs className="mr-1 inline text-lg" />,
  "mongo DB": <SiMongodb className="mr-1 inline text-lg" />,
  "Express.js": <FiCode className="mr-1 inline text-lg" />,
  "Tailwind CSS": <FiCode className="mr-1 inline text-lg" />,
  Redux: <SiRedux className="mr-1 inline text-lg" />,
  MQTT: <FiWifi className="mr-1 inline text-lg" />,
  "Socket.io": <SiSocketdotio className="mr-1 inline text-lg" />,
  "Arduino IDE": <SiArduino className="mr-1 inline text-lg" />,

  // Protocols
  I2C: <FiServer className="mr-1 inline text-lg" />,
  UART: <FiServer className="mr-1 inline text-lg" />,
  SPI: <FiServer className="mr-1 inline text-lg" />,
  SoftwareSerial: <FiServer className="mr-1 inline text-lg" />,
};

export default function Experience() {
  const projectExperience = [
    {
      role: "Lead Developer - Delivery Quadcopter",
      duration: "Final Year Project (9 months)",
      responsibilities: [
        "Designed Arduino-based Quadcopter with NEO-6M GPS and ESP-CAM modules",
        "Implemented real-time telemetry using MQTT and Socket.io",
        "Created custom controller with ESP-32 for manual override capability",
        "Integrated payload release mechanism with servo control",
        "Developed web dashboard for Admins and Pilots with live camera feed and GPS tracking",
        "Developed a user-friendly website for users to place delivery orders",
      ],
      technologies: {
        Hardware: [
          "Arduino UNO/NANO",
          "ESP-32",
          "NRF24L01+",
          "NEO-6M GPS",
          "3d printing",
        ],
        Software: [
          "React",
          "Node.js",
          "mongo DB",
          "Express.js",
          "Tailwind CSS",
          "Redux",
          "MQTT",
          "Socket.io",
          "Arduino IDE",
        ],
        Protocols: ["I2C", "UART", "SPI", "SoftwareSerial"],
      },
    },
  ];

  const skillsCategories = [
    {
      name: "Embedded Systems",
      icon: <FiCpu className="text-2xl" />,
      skills: [
        { name: "Arduino/ESP32", level: 90 },
        { name: "Sensor Integration", level: 85 },
        { name: "NRF24L01+", level: 80 },
        { name: "PWM Control", level: 75 },
      ],
    },
    {
      name: "Web Development",
      icon: <FiCode className="text-2xl" />,
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Redux", level: 75 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      name: "Real-time Comms",
      icon: <FiWifi className="text-2xl" />,
      skills: [
        { name: "MQTT", level: 80 },
        { name: "Socket.io", level: 75 },
        { name: "REST APIs", level: 85 },
      ],
    },
    {
      name: "Other Technologies",
      icon: <FiServer className="text-2xl" />,
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "3D Printing", level: 70 },
        { name: "Git", level: 80 },
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center text-4xl font-bold text-white"
        >
          <span className="text-blue-400">Experience</span> & Skills
        </motion.h2>

        {/* Project Experience */}
        <div className="mx-auto mb-20 max-w-4xl">
          {projectExperience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 rounded-xl bg-gray-700/50 p-6 backdrop-blur-sm"
            >
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-blue-500/10 p-3">
                  <MyQuadcopter className="text-2xl text-blue-400" />{" "}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="mb-4 text-blue-400">{exp.duration}</p>

                  <ul className="mb-6 space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <span className="mr-2 text-blue-400">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {Object.entries(exp.technologies).map(
                      ([category, items]) => (
                        <div
                          key={category}
                          className="rounded-lg border border-gray-600 p-4"
                        >
                          <h4 className="mb-3 font-semibold text-blue-400">
                            {category === "Hardware" ? (
                              <FiCpu className="mr-2 inline" />
                            ) : category === "Software" ? (
                              <FiCode className="mr-2 inline" />
                            ) : (
                              <FiServer className="mr-2 inline" />
                            )}
                            {category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {items.map((tech) => (
                              <span
                                key={tech}
                                className="flex items-center rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-200"
                              >
                                {techIcons[tech] || (
                                  <FiDatabase className="mr-1 inline text-lg" />
                                )}
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto max-w-4xl"
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-white">
            Technical Skills Breakdown
          </h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skillsCategories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="rounded-xl border border-gray-700 bg-gray-900/50 p-6"
              >
                <div className="mb-4 flex items-center">
                  <div className="mr-3 text-blue-400">{category.icon}</div>
                  <h4 className="text-xl font-semibold text-white">
                    {category.name}
                  </h4>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="mb-1 flex justify-between">
                        <span className="text-sm text-gray-300">
                          {techIcons[skill.name] || (
                            <FiDatabase className="mr-1 inline text-lg" />
                          )}
                          {skill.name}
                        </span>
                        <span className="text-xs text-blue-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-700">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1 }}
                          className="h-full rounded-full bg-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
