import React, { useState } from "react";
//eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper.jsx";
import {
  staggerContainer,
  fadeUp3D,
  card3D,
  tabTransition,
} from "../utils/animations.js";
import {
  CodeIcon,
  WrenchIcon,
  CpuIcon,
  PaletteIcon,
  ArrowRightIcon,
  PlayCircleIcon,
} from "../icons/all.jsx";

const Services = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const servicesData = [
    {
      id: "01",
      title: "Web Development & Design",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
      icon: CodeIcon,
      gridSpan: "lg:col-span-7 md:col-span-12",
      desc: "Transforming ideas into high-performance digital experiences. I build scalable, SEO-optimized web applications and visually engaging landing pages designed to convert, prioritizing speed and flawless UI/UX across all devices.",
      tags: ["Web Dev", "Redesign", "Funnels", "UI/UX"],
      ctaText: "Start Web Project",
    },
    {
      id: "02",
      title: "IT Support & PC Repair",
      image:
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1200",
      icon: WrenchIcon,
      gridSpan: "lg:col-span-5 md:col-span-12",
      desc: "Comprehensive hardware maintenance and software configuration. From custom PC builds to complex troubleshooting, I ensure your systems run at peak performance.",
      tags: ["FREE Diagnostics", "PC Assembly", "OS Install"],
      ctaText: "Get IT Diagnostics",
    },
    {
      id: "03",
      title: "IoT Solutions & Prototyping",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
      icon: CpuIcon,
      gridSpan: "lg:col-span-5 md:col-span-12",
      desc: "Bridging the physical and digital worlds. I specialize in custom IoT prototypes, advanced sensor integration, and MCU board programming for smart automation.",
      tags: ["Prototyping", "Sensors", "ESP32/Arduino"],
      ctaText: "Discuss IoT Idea",
    },
    {
      id: "04",
      title: "Multimedia & Design",
      image:
        "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1200",
      icon: PaletteIcon,
      gridSpan: "lg:col-span-7 md:col-span-12",
      desc: "Elevating brand identity through compelling visual and audio storytelling. I create high-impact marketing videos, logos, flyers, and custom jingles tailored for businesses and events.",
      tags: ["Commercials", "Logo Design", "Business Jingles"],
      ctaText: "Start Creative Project",
    },
  ];

  return (
    <SectionWrapper
      id="services"
      className="py-24 md:py-36 w-full border-t border-[#E5E7EB] dark:border-[#333]"
    >
      <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          variants={fadeUp3D}
          className="mb-10 md:mb-14 flex flex-col items-start text-left w-full"
        >
          <h2 className="text-[44px] sm:text-[52px] md:text-[60px] font-mono font-bold tracking-tighter text-[#1F2937] dark:text-white leading-[0.9] mb-4">
            Capabilities
          </h2>
          <p className="text-[14px] md:text-[16px] font-mono text-[#6B7280] dark:text-[#8B8B8B] tracking-widest uppercase">
            Services & Expertise
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp3D}
          className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide"
        >
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-6 py-2.5 text-[10px] md:text-[11px] font-mono tracking-widest uppercase transition-all duration-300 border rounded-md whitespace-nowrap ${
              activeTab === "overview"
                ? "bg-[#1F2937] dark:bg-white text-white dark:text-[#111] border-[#1F2937] dark:border-white shadow-sm"
                : "bg-transparent text-[#6B7280] dark:text-[#A1A1AA] border-[#E5E7EB] dark:border-[#333] hover:border-[#1F2937] dark:hover:border-white"
            }`}
          >
            Services Overview
          </button>
          <button
            onClick={() => setActiveTab("demos")}
            className={`px-6 py-2.5 text-[10px] md:text-[11px] font-mono tracking-widest uppercase transition-all duration-300 border rounded-md whitespace-nowrap ${
              activeTab === "demos"
                ? "bg-[#1F2937] dark:bg-white text-white dark:text-[#111] border-[#1F2937] dark:border-white shadow-sm"
                : "bg-transparent text-[#6B7280] dark:text-[#A1A1AA] border-[#E5E7EB] dark:border-[#333] hover:border-[#1F2937] dark:hover:border-white"
            }`}
          >
            Demos & Details
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10"
            >
              {servicesData.map((svc) => (
                <motion.div
                  variants={card3D}
                  key={svc.id}
                  className={`flex flex-col rounded-3xl bg-[#F3F4F6] dark:bg-[#111] border border-[#E5E7EB] dark:border-[#333] overflow-hidden group hover:border-green-500/50 dark:hover:border-green-500/30 transition-all duration-300 shadow-sm ${svc.gridSpan}`}
                >
                  <div className="relative h-48 md:h-56 bg-[#E5E7EB] dark:bg-[#0A0A0A] overflow-hidden border-b border-[#E5E7EB] dark:border-[#333]">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover opacity-80 mix-blend-multiply dark:mix-blend-lighten grayscale-[50%] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 dark:bg-[#1A1A1A]/95 backdrop-blur-md p-2.5 rounded-full shadow-sm border border-[#E5E7EB] dark:border-[#333] text-[#1F2937] dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      <svc.icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/95 dark:bg-[#1A1A1A]/95 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm border border-[#E5E7EB] dark:border-[#333] text-[#1F2937] dark:text-white">
                      {svc.id}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-[20px] md:text-[22px] font-bold tracking-tight text-[#1F2937] dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-[#4B5563] dark:text-[#D4D4D8] mb-8 leading-relaxed font-medium line-clamp-3">
                      {svc.desc}
                    </p>
                    <div className="mt-auto pt-6 border-t border-[#E5E7EB] dark:border-[#333] flex items-center justify-between gap-4 flex-wrap">
                      <div className="flex gap-2 flex-wrap">
                        {svc.tags.map((tag, idx) => {
                          const isFree = tag.includes("FREE");
                          return (
                            <span
                              key={idx}
                              className={`text-[9px] md:text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-md border ${
                                isFree
                                  ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20 shadow-sm"
                                  : "bg-white dark:bg-[#1A1A1A] text-[#6B7280] dark:text-[#A1A1AA] border-[#E5E7EB] dark:border-[#333]"
                              }`}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                      <a
                        href="#contact"
                        className="group/btn shrink-0 flex items-center gap-1.5 text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-widest text-[#1F2937] dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      >
                        {svc.ctaText}
                        <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "demos" && (
            <motion.div
              key="demos"
              variants={tabTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full"
            >
              <div className="flex flex-col items-center justify-center p-8 md:p-20 text-center min-h-[40vh] border border-dashed border-[#D1D5DB] dark:border-[#4B5563] bg-[#F9FAFB]/50 dark:bg-[#111]/50 rounded-3xl">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-[#1A1A1A] rounded-2xl flex items-center justify-center mb-6 border border-[#E5E7EB] dark:border-[#333] shadow-sm">
                  <PlayCircleIcon className="w-6 h-6 md:w-7 md:h-7 text-[#6B7280] dark:text-[#A1A1AA]" />
                </div>
                <h3 className="text-[18px] md:text-[20px] font-mono font-bold tracking-tight text-[#1F2937] dark:text-white mb-3">
                  Preparing Service Demos
                </h3>
                <p className="text-[13px] md:text-[15px] font-medium text-[#4B5563] dark:text-[#A1A1AA] max-w-md mx-auto leading-relaxed mb-8">
                  Currently compiling detailed case studies, pricing structures,
                  and live video demonstrations. This module will be deployed in
                  the next update.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white dark:bg-[#1A1A1A] border border-[#E5E7EB] dark:border-[#333] text-[10px] font-mono tracking-widest uppercase text-[#6B7280] dark:text-[#A1A1AA]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shrink-0"></span>
                  Under Construction
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

export default Services;
