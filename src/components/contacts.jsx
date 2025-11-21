import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiPhone,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
};

const Contacts = () => {
  const formRef = useRef(); 
  const [buttonText, setButtonText] = useState("Send Message");
  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText("Message Sent!");
          e.target.reset();
          setTimeout(() => setButtonText("Send Message"), 5000);
        },
        (error) => {
          console.log(error.text);
          setButtonText("Failed. Try Again.");
        }
      );
  };

  const contactDetails = [
    {
      icon: <FiMail />,
      title: "Email Me",
      detail: "kaushikitripathi07@gmail.com",
      link: "mailto:kaushikitripathi07@gmail.com",
    },
    {
      icon: <FiPhone />,
      title: "Call Me",
      detail: "+91-8081992550",
      link: "tel:+918081992550",
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      detail: "Kanpur, India",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerStagger}
      className="w-4xl max-w-6xl bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-130 mt-24 md:mt-0 mx-4 md:mx-auto transition-all duration-300"
    >
      {/* LEFT PANEL: STATIC INFO */}
      <div className="w-full md:w-4/12 p-6 bg-gray-800/70 flex flex-col justify-center space-y-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          <span className="border-b-2 border-green-500/50 pb-1">
            Contact Details
          </span>
        </h2>

        {contactDetails.map((item, index) => (
          <motion.a
            key={index}
            href={item.link || "#"}
            target={item.link ? "_blank" : "_self"}
            variants={itemFadeIn}
            className="flex items-start space-x-3 text-gray-300 hover:text-green-400 transition-colors cursor-pointer"
          >
            <div className="text-green-500 p-2 bg-green-500/10 rounded-full shrink-0 mt-1">
              {item.icon}
            </div>
            <div>
              <p className="font-semibold text-white">{item.title}</p>
              <p className="text-sm truncate break-all">{item.detail}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* RIGHT PANEL: INTERACTIVE FORM */}
      <div className="w-full md:w-8/12 p-8 md:p-12 grow text-center">
        <h1 className="text-3xl font-bold text-white mb-9">
          <span className="border-b-2 border-green-500/50 pb-1">
            {" "}
            Reach Out to Me
          </span>
        </h1>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail} 
          className="space-y-5"
          variants={containerStagger}
        >
          <motion.div className="relative" variants={itemFadeIn}>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FiUser />
            </span>
            <input
              type="text"
              name="user_name" 
              placeholder="Your Name"
              className="w-full pl-10 pr-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white transition-all"
              required
            />
          </motion.div>

          <motion.div className="relative" variants={itemFadeIn}>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FiMail />
            </span>
            <input
              type="email"
              name="user_email" 
              placeholder="Your Email"
              className="w-full pl-10 pr-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white transition-all"
              required
            />
          </motion.div>

          <motion.div className="relative" variants={itemFadeIn}>
            <span className="absolute top-3 left-3 text-gray-400">
              <FiMessageSquare />
            </span>
            <textarea
              rows={4}
              name="message"
              placeholder="Your Message"
              className="w-full pl-10 pr-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white transition-all resize-none"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center bg-green-500 text-gray-900 font-bold py-3 px-4 rounded-lg hover:bg-green-800 transition-colors shadow-lg shadow-green-500/20 cursor-pointer"
          >
            <FiSend className="mr-2" />
            {buttonText}
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contacts;
