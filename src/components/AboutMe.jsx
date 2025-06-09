import { motion } from "framer-motion";
import { FiGlobe, FiMail, FiPhone, FiMapPin, FiAward } from "react-icons/fi";
import { FaRocket, FaSpaceShuttle } from "react-icons/fa";
import { GiCircuitry, GiGraduateCap } from "react-icons/gi";
import teddyImage from "../assets/teddy.jpg";

export default function About() {
  const passions = [
    {
      icon: <FiGlobe className="text-3xl" />,
      title: "Web Development",
      description: "Crafting digital experiences with React & Tailwind",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Aviation Enthusiast",
      description: "Fascinated by aerodynamics and flight systems",
      color: "text-red-400",
      bg: "bg-red-400/10",
    },
    {
      icon: <GiCircuitry className="text-3xl" />,
      title: "Electronics Tinkerer",
      description: "Exploring circuits from sensors to microcontrollers",
      color: "text-green-400",
      bg: "bg-green-400/10",
    },
    {
      icon: <FaSpaceShuttle className="text-3xl" />,
      title: "Space Technology",
      description: "Following advancements in orbital mechanics and propulsion",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
    },
  ];

  const personalDetails = [
    {
      icon: <GiGraduateCap className="text-xl" />,
      text: "BSc in Computer Science, Debre Tabor University",
      subtext: "Graduated with 3.95 CGPA",
      color: "text-yellow-400",
    },
    {
      icon: <FiAward className="text-xl" />,
      text: "22 years old",
      color: "text-pink-400",
    },
    {
      icon: <FiMapPin className="text-xl" />,
      text: "Based in Bahir Dar, Ethiopia",
      color: "text-emerald-400",
    },
    {
      icon: <FiMail className="text-xl" />,
      text: "teddyabere444@gmail.com",
      color: "text-blue-400",
      link: "mailto:teddyabere444@gmail.com",
    },
    {
      icon: <FiPhone className="text-xl" />,
      text: "+251 988 97 99 09",
      color: "text-green-400",
      link: "tel:+251988979909",
    },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center gap-12 lg:flex-row"
        >
          {/* Profile Image with Decorative Elements */}
          <div className="relative w-full lg:w-2/5">
            <div className="relative z-10 mx-auto h-80 w-64 overflow-hidden rounded-2xl border-4 border-blue-400/30 lg:mx-0">
              <img
                src={teddyImage}
                alt="Teddy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating hobby icons around photo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -left-8 -top-8 flex h-16 w-16 items-center justify-center rounded-full bg-blue-400/10"
            >
              <FaRocket className="text-xl text-blue-400" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 flex h-20 w-20 items-center justify-center rounded-full bg-purple-400/10"
            >
              <GiCircuitry className="text-2xl text-purple-400" />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-3/5">
            <motion.h2
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              className="mb-6 text-4xl font-bold text-white"
            >
              About <span className="text-blue-400">Me</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-lg text-gray-300"
            >
              Computer Science graduate with a passion for{" "}
              <span className="font-medium text-blue-400">
                where code meets hardware
              </span>
              . I bridge the digital and physical worlds through embedded
              systems and web interfaces.
            </motion.p>

            {/* Personal Details List */}
            <div className="mb-8 space-y-3">
              {personalDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <span className={`mr-3 mt-1 ${detail.color}`}>
                    {detail.icon}
                  </span>
                  <div>
                    <p className="text-gray-300">
                      {detail.text}
                      {detail.subtext && (
                        <span className="block text-sm text-gray-400">
                          {detail.subtext}
                        </span>
                      )}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8 text-lg text-gray-300"
            >
              When I'm not debugging React components, you'll find me{" "}
              <span className="font-medium text-red-400">
                analyzing aircraft designs
              </span>
              ,{" "}
              <span className="font-medium text-green-400">
                soldering circuit boards
              </span>
              , or{" "}
              <span className="font-medium text-purple-400">
                reading about rocket propulsion
              </span>
              .
            </motion.p>

            {/* Passion Grid */}
            <div className="grid grid-cols-2 gap-4">
              {passions.map((passion, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  transition={{
                    delay: i * 0.1 + 0.7,
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                    scale: { duration: 0.2 },
                  }}
                  className={`rounded-xl p-4 ${passion.bg} border border-gray-700 hover:scale-125`}
                >
                  <div className={`${passion.color} mb-2`}>{passion.icon}</div>
                  <h3 className="mb-1 font-medium text-white">
                    {passion.title}
                  </h3>
                  <p className="text-sm text-gray-300">{passion.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
