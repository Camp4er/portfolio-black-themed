import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform form validation (simple example)
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    // Simulate form submission success
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSuccess(false), 3000); // Reset success message after 3 seconds
  };

  return (
    <section className="text-left mx-auto w-[58.5%] max-w-[1140px] pt-[57px]">
      <motion.h1
        className="text-4xl md:text-5xl font-bold py-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl pt-5 pb-10 mt-4 text-gray-400 w-4/6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Let’s connect! Whether it’s a question, collaboration, or just to say
        hello, feel free to drop me a message.
      </motion.p>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
        <motion.form
          className="bg-gray-800 p-6 rounded-3xl shadow-md border border-gray-700 flex-1"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              rows={5}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition"
          >
            Send Message
          </button>
          {success && (
            <p className="text-green-500 text-sm mt-4">
              Message sent successfully!
            </p>
          )}
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 className="text-xl font-bold text-white">Email</h3>
            <p className="text-gray-400">saxenapoorva2004@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/yourprofile
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">GitHub</h3>
            <a
              href="https://github.com/yourusername"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              github.com/yourusername
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Portfolio</h3>
            <a
              href="https://yourportfolio.com"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              yourportfolio.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
