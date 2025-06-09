import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FiAward, FiBook, FiCode, FiCpu } from "react-icons/fi";
import { FaUniversity, FaSchool } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";

export default function Education() {
  const education = [
    {
      icon: <FaUniversity className="text-2xl" />,
      degree: "BSc in Computer Science",
      institution: "Debre Tabor University",
      year: "2019 - 2023",
      gpa: "3.95 CGPA",
      highlights: [
        "Graduated with First Class Honors",
        "Senior Project: Autonomous Drone Navigation System (ESP32 + NRF24L01+)",
        "Key Courses: Algorithms, AI, Embedded Systems, Web Development",
      ],
    },
    {
      icon: <FaSchool className="text-2xl" />,
      degree: "Natural Science Stream",
      institution: "Saint Joseph School, Addis Ababa",
      year: "2016 - 2019",
      highlights: [
        "Focus on Physics, Chemistry, and Mathematics",
        "Developed foundational analytical skills",
        "Participated in extra curricular activities (athletics)",
      ],
    },
  ];

  const skillsGained = [
    {
      icon: <FiCode />,
      name: "Programming",
      items: ["HTML", "CSS", "Java", "C++", "JavaScript", "Arduino", "python"],
    },
    {
      icon: <FiCpu />,
      name: "Hardware",
      items: [
        "ESP32",
        "NRF24L01+",
        "3D Printing",
        "PCB Design",
        "Arduino UNO/NANO",
        "NEO-6M GPS Module",
        "mpu6050",
      ],
    },
    {
      icon: <FiBook />,
      name: "Theoretical",
      items: [
        "Embedded Systems",
        "Data Structures",
        "Machine Learning",
        "Computer Vision",
      ],
    },
  ];

  // Animation controls for graduation cap
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        y: [0, -15, 0],
        rotate: [0, 15, -15, 0],
        transition: { duration: 1.5, repeat: Infinity, repeatDelay: 3 },
      });
    };
    sequence();
  }, [controls]);

  return (
    <section id="education" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center text-4xl font-bold text-white"
        >
          My <span className="text-blue-400">Education</span>
        </motion.h2>

        <div className="mx-auto max-w-4xl">
          {/* Education Timeline - Removed vertical line */}
          <div className="relative">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="mb-8 flex flex-col items-start md:flex-row"
              >
                {/* Timeline dot with graduation animation for university */}
                <div className="relative z-10 mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 md:mb-0 md:mr-6">
                  {edu.icon}
                  {index === 0 && ( // Only for university entry
                    <motion.div
                      animate={controls}
                      className="absolute -top-8 left-1/2 -translate-x-1/2"
                    >
                      <GiGraduateCap className="text-2xl text-yellow-400" />
                    </motion.div>
                  )}
                </div>

                {/* Education card */}
                <div className="flex-1 rounded-xl border-l-4 border-blue-500 bg-gray-800 p-6 md:border-l-0 md:border-t-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <div className="mb-3 mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="text-blue-400">{edu.institution}</span>
                      {index === 0 ? ( // Animated graduation year for university
                        <motion.span
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          className="relative inline-block rounded-full bg-blue-900/50 px-3 py-1 text-gray-200"
                        >
                          {edu.year}
                          <motion.span
                            animate={{
                              opacity: [0, 1, 0],
                              y: [-5, 0, 5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute -right-2 -top-2 text-xs text-yellow-400"
                          >
                            ★
                          </motion.span>
                        </motion.span>
                      ) : (
                        <span className="text-gray-400">{edu.year}</span>
                      )}
                      {edu.gpa && (
                        <span className="flex items-center text-yellow-400">
                          <FiAward className="mr-1" /> {edu.gpa}
                        </span>
                      )}
                    </div>
                    <ul className="mt-4 space-y-2">
                      {edu.highlights.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <span className="mr-2 text-blue-400">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Gained */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <h3 className="mb-6 text-center text-2xl font-bold text-white">
              Technical Skills Gained
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {skillsGained.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="rounded-lg border border-gray-700 bg-gray-800/50 p-6"
                >
                  <div className="mb-3 flex items-center text-blue-400">
                    {skill.icon}
                    <span className="ml-2 font-medium text-white">
                      {skill.name}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
