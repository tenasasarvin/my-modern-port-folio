import React, { useState } from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper.jsx";
import { staggerContainer, fadeUp3D, card3D } from "../utils/animations.js";
import {
  MailIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  ArrowUpRightIcon,
  SendIcon,
} from "../icons/all.jsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailTo = "arvintenasas29@gmail.com";
    const subject = encodeURIComponent(
      `New Portfolio Contact from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <SectionWrapper
      id="contact"
      className="py-24 md:py-36 w-full border-t border-[#E5E7EB] dark:border-[#333]"
    >
      <div className="w-full max-w-5xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row justify-between gap-16 lg:gap-20">
        {/* --- LEFT COLUMN: Header & Info --- */}
        <motion.div
          variants={staggerContainer}
          className="flex-1 flex flex-col items-start text-left w-full"
        >
          <motion.div
            variants={fadeUp3D}
            className="group inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-5 lg:mb-6 rounded-full bg-white dark:bg-[#1A1A1A] border border-green-500/30 dark:border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)] dark:shadow-[0_0_15px_rgba(34,197,94,0.05)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:border-green-500/50"
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75"></span>
              <span className="relative w-2 h-2 rounded-full bg-green-500"></span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-green-700 dark:text-green-400 tracking-wide uppercase">
              Response Time: &lt; 24 Hours
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp3D}
            className="text-[44px] sm:text-[52px] md:text-[60px] font-mono font-bold tracking-tighter text-[#1F2937] dark:text-white leading-[0.9] mb-4 md:mb-6"
          >
            Let's Connect
          </motion.h2>

          <motion.div
            variants={fadeUp3D}
            className="space-y-4 lg:space-y-5 max-w-md mb-10"
          >
            <p className="text-[16px] md:text-[18px] text-[#4B5563] dark:text-[#D4D4D8] leading-relaxed font-medium">
              Need a full-stack dev, IT infrastructure modernized, or hardware
              troubleshoot? Reach out below.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp3D}
            className="grid grid-cols-1 sm:grid-cols-2 w-full border-t border-[#E5E7EB] dark:border-[#333]"
          >
            <div className="flex flex-col items-start justify-center py-6 pr-6 border-b sm:border-b-0 sm:border-r border-[#E5E7EB] dark:border-[#333]">
              <span className="text-[14px] md:text-[16px] font-mono font-semibold text-[#1F2937] dark:text-white leading-none tracking-tight mb-2 flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-green-500" />
                Email
              </span>
              <a
                href="mailto:arvintenasas29@gmail.com"
                className="text-[12px] md:text-[13px] font-mono text-[#6B7280] dark:text-[#8B8B8B] hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                arvintenasas29@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-start justify-center py-6 sm:pl-6 border-[#E5E7EB] dark:border-[#333]">
              <span className="text-[14px] md:text-[16px] font-mono font-semibold text-[#1F2937] dark:text-white leading-none tracking-tight mb-2 flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-green-500" />
                Location
              </span>
              <span className="text-[12px] md:text-[13px] font-mono text-[#6B7280] dark:text-[#8B8B8B]">
                Manila, Philippines
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp3D}
            className="flex flex-wrap justify-start items-center gap-5 md:gap-8 mt-8 lg:mt-10 pt-8 border-t border-[#E5E7EB] dark:border-[#333] w-full"
          >
            {[
              {
                name: "github",
                icon: GithubIcon,
                link: "https://github.com/tenasasarvin",
              },
              {
                name: "linkedin",
                icon: LinkedinIcon,
                link: "https://www.linkedin.com/in/arvin-d-tenasas-1ba6082b8/",
              },
              {
                name: "facebook",
                icon: FacebookIcon,
                link: "https://www.facebook.com/share/19GxD5xYNq/",
              },
            ].map((social, i) => (
              <motion.a
                whileHover={{ scale: 1.1, rotate: -3 }}
                whileTap={{ scale: 0.95 }}
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-[12px] md:text-[13px] font-mono font-medium text-[#6B7280] hover:text-green-600 dark:text-[#A1A1AA] dark:hover:text-green-400 transition-colors"
              >
                <social.icon className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                <span>{social.name}</span>
                <ArrowUpRightIcon className="w-3 h-3 md:w-3.5 md:h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* --- RIGHT COLUMN: Form --- */}
        <motion.div
          variants={card3D}
          className="flex-[0.8] w-full mt-4 lg:mt-0"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[10px] md:text-[11px] font-mono text-[#6B7280] dark:text-[#8B8B8B] tracking-widest uppercase ml-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Arvin Tenasas"
                className="w-full px-5 py-4 rounded-2xl bg-[#F3F4F6] dark:bg-[#111] border border-[#E5E7EB] dark:border-[#333] text-[14px] font-mono text-[#1F2937] dark:text-white outline-none focus:border-green-500/50 dark:focus:border-green-500/50 transition-colors placeholder:text-[#9CA3AF] dark:placeholder:text-[#555]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[10px] md:text-[11px] font-mono text-[#6B7280] dark:text-[#8B8B8B] tracking-widest uppercase ml-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="arvin@example.com"
                className="w-full px-5 py-4 rounded-2xl bg-[#F3F4F6] dark:bg-[#111] border border-[#E5E7EB] dark:border-[#333] text-[14px] font-mono text-[#1F2937] dark:text-white outline-none focus:border-green-500/50 dark:focus:border-green-500/50 transition-colors placeholder:text-[#9CA3AF] dark:placeholder:text-[#555]"
              />
            </div>
            <div className="flex flex-col gap-2 flex-grow">
              <label
                htmlFor="message"
                className="text-[10px] md:text-[11px] font-mono text-[#6B7280] dark:text-[#8B8B8B] tracking-widest uppercase ml-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows="5"
                className="w-full px-5 py-4 rounded-2xl bg-[#F3F4F6] dark:bg-[#111] border border-[#E5E7EB] dark:border-[#333] text-[14px] font-mono text-[#1F2937] dark:text-white outline-none focus:border-green-500/50 dark:focus:border-green-500/50 transition-colors resize-none placeholder:text-[#9CA3AF] dark:placeholder:text-[#555]"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-2 flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#1F2937] dark:bg-white text-white dark:text-[#111] border border-[#1F2937] dark:border-white text-[12px] font-mono tracking-widest uppercase font-bold hover:bg-transparent dark:hover:bg-transparent hover:text-[#1F2937] dark:hover:text-white transition-all duration-300 shadow-md"
            >
              <span>Send Message</span>
              <span>Send Message</span>
              <SendIcon className="w-4 h-4 shrink-0" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
