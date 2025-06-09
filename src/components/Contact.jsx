import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { FiMail, FiSend, FiUser, FiMessageSquare } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = "service_eoffqvd";
    const templateId = "template_94ooigh";
    const userId = "ZNPbBzARfs1rJaW2y";

    emailjs
      .sendForm(serviceId, templateId, formRef.current, userId)
      .then(
        (result) => {
          console.log("Email sent!", result.text);
          setIsSent(true);
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => setIsSent(false), 3000); // Reset after 3 sec
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        },
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center text-4xl font-bold text-white"
        >
          Get In <span className="text-blue-400">Touch</span>
        </motion.h2>

        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-xl bg-gray-700/50 p-8 backdrop-blur-sm"
          >
            {/* Success Message */}
            {isSent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 rounded-lg bg-green-500/10 p-4 text-center text-green-400"
              >
                Message sent! I'll reply soon.
              </motion.div>
            )}

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Name Field */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="group relative"
                >
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400">
                    <FiUser />
                  </div>
                  <input
                    type="text"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-gray-600 bg-gray-800 py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                    required
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="group relative"
                >
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400">
                    <FiMail />
                  </div>
                  <input
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full rounded-lg border border-gray-600 bg-gray-800 py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                    required
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="group relative"
                >
                  <div className="absolute left-3 top-4 text-gray-400 group-focus-within:text-blue-400">
                    <FiMessageSquare />
                  </div>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    rows="5"
                    className="w-full rounded-lg border border-gray-600 bg-gray-800 py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                    required
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-70"
                >
                  {isSending ? (
                    "Sending..."
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Additional Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center text-gray-300"
          >
            <p>Or reach me directly at:</p>
            <a
              href="mailto:teddyabere444@gmail.com"
              className="text-blue-400 hover:underline"
            >
              teddyabere444@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
