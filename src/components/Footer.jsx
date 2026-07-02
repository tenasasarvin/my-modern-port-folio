import React from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { staggerContainer, fadeUp3D } from "../utils/animations.js";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ArrowUpRightIcon,
} from "../icons/all.jsx";
// Example if your file is singular
import CompactVisitorCounter from "../api/CompactVisitorCounter.jsx";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "services", label: "My Services" },
    { id: "projects", label: "My Projects" },
    { id: "contact", label: "Contact Me" },
  ];

  const services = [
    "Full-Stack Web Dev",
    "Hardware & IoT",
    "API Integration",
    "Database Management",
    "Maintenance & Support",
    "Multimedia & Design",
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socials = [
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
    { name: "email", icon: MailIcon, link: "mailto:arvintenasas29@gmail.com" },
  ];

  return (
    <footer className="w-full pt-16 pb-8 md:pt-24 md:pb-12 border-t border-[#E5E7EB] dark:border-[#333]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-5%" }}
        className="w-full max-w-5xl mx-auto px-6 md:px-10"
      >
        {/* --- TOP SECTION: Brand, Nav, & Capabilities --- */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-20 mb-16 md:mb-24">
          <motion.div
            variants={staggerContainer}
            className="flex-1 flex flex-col items-start text-left w-full"
          >
            <motion.h2
              variants={fadeUp3D}
              className="text-[32px] md:text-[40px] font-mono font-bold tracking-tighter text-[#1F2937] dark:text-white leading-[0.9] mb-4 md:mb-6"
            >
              Arvin Tenasas.
            </motion.h2>
            <motion.p
              variants={fadeUp3D}
              className="text-[14px] md:text-[16px] text-[#4B5563] dark:text-[#D4D4D8] leading-relaxed font-medium max-w-sm mb-10"
            >
              Engineering highly interactive, native-app-like web experiences
              and robust full-stack solutions.
            </motion.p>

            <motion.div
              variants={fadeUp3D}
              className="flex flex-wrap justify-start items-center gap-5 md:gap-8"
            >
              {socials.map((social, i) => (
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

          <motion.div
            variants={staggerContainer}
            className="flex-[0.8] w-full flex flex-col sm:flex-row gap-12 sm:gap-16"
          >
            <div className="flex-1 flex flex-col">
              <motion.h3
                variants={fadeUp3D}
                className="text-[10px] md:text-[11px] font-mono text-[#6B7280] dark:text-[#8B8B8B] tracking-widest uppercase mb-6"
              >
                Navigation
              </motion.h3>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <motion.a
                    variants={fadeUp3D}
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="group flex items-center gap-1.5 text-[13px] md:text-[14px] font-mono text-[#6B7280] dark:text-[#A1A1AA] hover:text-green-600 dark:hover:text-green-400 transition-colors w-fit"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRightIcon className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="flex-1 flex flex-col">
              <motion.h3
                variants={fadeUp3D}
                className="text-[10px] md:text-[11px] font-mono text-[#6B7280] dark:text-[#8B8B8B] tracking-widest uppercase mb-6"
              >
                Capabilities
              </motion.h3>
              <ul className="flex flex-col gap-4">
                {services.map((service, index) => (
                  <motion.li
                    variants={fadeUp3D}
                    key={index}
                    className="text-[13px] md:text-[14px] font-mono text-[#6B7280] dark:text-[#A1A1AA] flex items-center gap-2 group cursor-default"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#E5E7EB] dark:bg-[#333] group-hover:bg-green-500 transition-colors shrink-0"></span>
                    <span className="group-hover:text-[#1F2937] dark:group-hover:text-white transition-colors">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* --- BOTTOM SECTION: Copyright & Status --- */}
        <motion.div
          variants={fadeUp3D}
          className="border-t border-[#E5E7EB] dark:border-[#333] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-[10px] md:text-[11px] font-mono text-[#6B7280] dark:text-[#8B8B8B] tracking-widest uppercase text-center sm:text-left">
            &copy; {currentYear} Arvin Tenasas. All rights reserved.
          </p>
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <CompactVisitorCounter />
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
