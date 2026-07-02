import React, { useState, useEffect } from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper.jsx";
import { staggerContainer, fadeUp3D } from "../utils/animations.js";
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  MailIcon,
  ArrowUpRightIcon,
} from "../icons/all.jsx";

const HERO_TITLES = [
  { text: "BS Computer Engineer" },
  { text: "Full-Stack Web Developer" },
  { text: "Field Technician" },
  { text: "IT Administrator" },
  { text: "IT Technical Support" },
];

const Hero = () => {
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const HERO_STATS = [
    {
      value: "3+",
      label: "Years Exp",
      target: "experience-timeline",
      isExternal: false,
    },
    {
      value: "15+",
      label: "Tech Stack",
      target: "tech-arsenal",
      isExternal: false,
    },
    {
      value: "14+",
      label: "Projects Built",
      target: "projects",
      isExternal: false,
    },
    {
      value: "233+",
      label: "Contributions",
      target: "https://github.com/tenasasarvin",
      isExternal: true,
    },
  ];

  useEffect(() => {
    const currentTitle = HERO_TITLES[titleIndex].text;
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const delayBeforeDelete = 2000;

    const handleTyping = () => {
      if (isDeleting) {
        setText((current) => current.substring(0, current.length - 1));
      } else {
        setText((current) => currentTitle.substring(0, current.length + 1));
      }

      if (!isDeleting && text === currentTitle) {
        setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % HERO_TITLES.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(timer);
  }, [text, isDeleting, titleIndex]);

  const handleStatClick = (stat) => {
    if (stat.isExternal) {
      window.open(stat.target, "_blank", "noopener,noreferrer");
    } else {
      const element = document.getElementById(stat.target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.classList.add(
          "ring-2",
          "ring-green-500",
          "dark:ring-green-400",
          "shadow-[0_0_30px_rgba(34,197,94,0.15)]",
        );
        setTimeout(() => {
          element.classList.remove(
            "ring-2",
            "ring-green-500",
            "dark:ring-green-400",
            "shadow-[0_0_30px_rgba(34,197,94,0.15)]",
          );
        }, 2000);
      }
    }
  };

  return (
    <SectionWrapper
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between pt-28 pb-8 md:pt-36 md:pb-12 overflow-x-hidden bg-transparent"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16 my-auto">
        <motion.div
          variants={fadeUp3D}
          className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-none aspect-square md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] shrink-0 rounded-2xl overflow-hidden bg-[#F3F4F6] dark:bg-[#111] border border-[#E5E7EB] dark:border-[#333] relative shadow-sm isolate transform-gpu backface-hidden group"
        >
          <img
            src="/profile2.jpg"
            alt="Arvin Profile"
            className="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply dark:mix-blend-lighten opacity-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-700 ease-in-out transform-gpu"
          />
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:4px_4px] opacity-[0.12] mix-blend-overlay pointer-events-none"></div>

          {/* --- New Compact Terminal / CLI Overlay --- */}
          <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/95 dark:bg-[#151515]/95 backdrop-blur-md border border-[#E5E7EB] dark:border-[#333] shadow-xl transition-all duration-300">
              {/* Terminal Greater-Than Prompt */}
              <span className="text-[13px] font-mono font-bold text-green-500 mt-[1px]">
                &gt;
              </span>

              {/* Text Output & Block Cursor */}
              <div className="flex items-center">
                <span className="text-[12px] sm:text-[13px] font-mono font-medium text-[#4B5563] dark:text-[#D4D4D8] tracking-tight">
                  {text}
                </span>
                <span className="inline-block w-1.5 h-3.5 ml-[3px] bg-green-500 dark:bg-green-400 animate-[pulse_1s_step-end_infinite]"></span>
              </div>
            </div>
          </div>
          {/* ------------------------------------------ */}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="flex-1 flex flex-col items-start text-left w-full"
        >
          <motion.div
            variants={fadeUp3D}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 mb-5 rounded-md bg-white dark:bg-[#111] border border-green-500/30 shadow-[0_0_12px_rgba(34,197,94,0.05)] transition-all duration-300 hover:border-green-500"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] md:text-[11px] font-mono font-bold text-green-600 dark:text-green-400 tracking-widest uppercase">
              Available for Work & Freelance
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp3D}
            className="text-[38px] sm:text-[48px] md:text-[56px] lg:text-[68px] font-mono font-bold tracking-tighter text-[#1F2937] dark:text-white leading-[0.95] mb-5 transform-gpu"
          >
            Hi, I'm Arvin
          </motion.h1>

          <motion.div
            variants={staggerContainer}
            className="space-y-4 max-w-xl text-left"
          >
            <motion.p
              variants={fadeUp3D}
              className="text-[15px] sm:text-[17px] lg:text-[19px] text-[#4B5563] dark:text-[#D4D4D8] leading-relaxed font-medium"
            >
              I bridge the gap between digital code and physical infrastructure.
            </motion.p>
            <motion.p
              variants={fadeUp3D}
              className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#6B7280] dark:text-[#A1A1AA] leading-relaxed"
            >
              Computer Engineer specializing in full-stack web development, IoT
              solutions, and robust IT infrastructure. Architecting scalable
              software and optimizing hardware performance.
            </motion.p>
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
              {
                name: "email",
                icon: MailIcon,
                link: "mailto:arvintenasas29@gmail.com",
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
                <social.icon className="w-4 h-4 shrink-0" />
                <span>{social.name}</span>
                <ArrowUpRightIcon className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10 mt-auto pt-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-[#E5E7EB] dark:border-[#333]">
          {HERO_STATS.map((stat, i) => (
            <motion.div
              variants={fadeUp3D}
              key={i}
              onClick={() => handleStatClick(stat)}
              className={`group flex flex-col items-start justify-center py-5 px-4 sm:px-6 border-[#E5E7EB] dark:border-[#333] cursor-pointer hover:bg-gray-50 dark:hover:bg-[#151515] transition-colors duration-300
                ${i % 2 === 0 ? "border-r" : "border-r-0 md:border-r"} 
                ${i < 2 ? "border-b md:border-b-0" : "border-b-0"}
                md:last:border-r-0 transform-gpu
              `}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[18px] sm:text-[22px] font-mono font-bold text-[#1F2937] dark:text-white leading-none group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  {stat.value}
                </span>
                <ArrowUpRightIcon className="w-3 h-3 text-[#6B7280] dark:text-[#8B8B8B] opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-green-600 dark:group-hover:text-green-400 transition-all duration-300" />
              </div>
              <span className="text-[10px] font-mono font-bold text-[#6B7280] dark:text-[#8B8B8B] tracking-widest uppercase group-hover:text-[#1F2937] dark:group-hover:text-[#D1D5DB] transition-colors duration-300">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Hero;
