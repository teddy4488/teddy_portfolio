import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiCpu, FiMail } from "react-icons/fi";
import { useState } from "react";

// Image imports
import Advisor from "../assets/Abeadvisor.jpg";
import DtuLogo from "../assets/dtulogo.jpg";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Mr. Abebe Kindie",
      role: "Computer Science Lecturer and IOT lab head",
      email: "abebedtu@gmail.com", // Added email
      text: "Tewodros has demosntrated remarkable experise in Computer Science, particularly in the areas of IoT (Internet of Things) and software development. One of his most impressive achievements was designing and implementing a drone capable of delivering materials, which included features such as real-time communication with websites and remote-control functionality. This project not only showcased his deep understanding of hardware-software integration but also highlighted his ability to apply theoretical knowledge to solve real-world problems.",
      image: Advisor,
    },
    {
      name: "Mr. Moges Tsegaw",
      role: "computer Science department head",
      email: "moges.tsegaw@dtu.edu.et", // Added email
      text: "Throughout his time as a student in the Computer Science Department, Tewodros Abere has consistently displyaed a deep passion for the field and an unwavering deidcation to his studies. Moreover, Tewodros Abere possesses excellent communication skills, both written and verbal. He is articulate, confident, and capable of conveying complex ideas clearly and concisely. His ability to effectively communicate technical concepts to both technical and non-technical audiences is truly impressive.",
      image: DtuLogo,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  return (
    <section id="testimonials" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center text-4xl font-bold text-white"
        >
          <span className="text-blue-400">Educators</span> Speak
        </motion.h2>

        <div className="relative mx-auto max-w-4xl">
          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center md:flex-row md:items-start">
              {/* Teacher Image */}
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-blue-400/30">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 rounded-full bg-blue-600 p-2">
                    <FiCpu className="text-white" />
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4 flex justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < 5} />
                  ))}
                </div>
                <p className="mb-6 text-lg italic text-gray-300">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-blue-400">
                    {testimonials[currentIndex].role}
                  </p>
                  {/* Added email section */}
                  <div className="mt-2 flex items-center text-gray-400">
                    <FiMail className="mr-2" />
                    <a
                      href={`mailto:${testimonials[currentIndex].email}`}
                      className="hover:text-blue-400 hover:underline"
                    >
                      {testimonials[currentIndex].email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white hover:bg-blue-600 md:-left-12"
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white hover:bg-blue-600 md:-right-12"
          >
            <FiChevronRight className="text-2xl" />
          </button>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-blue-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Star rating component (unchanged)
function StarIcon({ filled }) {
  return (
    <svg
      className={`mx-1 h-5 w-5 ${filled ? "text-yellow-400" : "text-gray-500"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
