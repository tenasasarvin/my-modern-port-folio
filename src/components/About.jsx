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
  UserIcon,
  CodeIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  CalendarIcon,
  GalleryIcon,
  ReactIcon,
  NextJsIcon,
  TailwindIcon,
  ViteIcon,
  Html5Icon,
  Css3Icon,
  JsIcon,
  NodeJsIcon,
  SupabaseIcon,
  DatabaseIcon,
  CppIcon,
  CpuIcon,
  ServerIcon,
  WrenchIcon,
  LayersIcon,
  TerminalIcon,
} from "../icons/all.jsx";

const About = () => {
  const [activeTab, setActiveTab] = useState("summary");

  const techCategories = [
    {
      title: "Frontend & Design",
      skills: [
        { name: "React", Icon: ReactIcon },
        { name: "Next.js", Icon: NextJsIcon },
        { name: "Tailwind CSS", Icon: TailwindIcon },
        { name: "Vite", Icon: ViteIcon },
        { name: "HTML5", Icon: Html5Icon },
        { name: "CSS3", Icon: Css3Icon },
        { name: "JavaScript", Icon: JsIcon },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", Icon: NodeJsIcon },
        { name: "Next.js API", Icon: NextJsIcon },
        { name: "Supabase", Icon: SupabaseIcon },
        { name: "MySQL", Icon: DatabaseIcon },
      ],
    },
    {
      title: "Hardware & Infra",
      skills: [
        { name: "C++", Icon: CppIcon },
        { name: "ESP32 / Arduino", Icon: CpuIcon },
        { name: "IoT Systems", Icon: ServerIcon },
      ],
    },
    {
      title: "IT Support & Services",
      skills: [
        { name: "Windows / MS Office", Icon: WrenchIcon },
        { name: "Hardware Repair", Icon: LayersIcon },
        { name: "Network Config", Icon: TerminalIcon },
      ],
    },
  ];

  const TimelineItem = ({ isCurrent, date, title, company, desc, bullets }) => (
    <motion.div
      variants={fadeUp3D}
      className="relative pl-6 md:pl-8 border-l border-[#E5E7EB] dark:border-[#333] pb-8 last:pb-0 group"
    >
      <div
        className={`absolute w-2 h-2 -left-[4.5px] top-1.5 ring-4 ring-[#F3F4F6] dark:ring-[#111] transition-colors duration-300 ${
          isCurrent
            ? "bg-green-500 animate-pulse rounded-full"
            : "bg-[#D1D5DB] dark:bg-[#4B5563] group-hover:bg-[#1F2937] dark:group-hover:bg-white rounded-none"
        }`}
      ></div>

      <div className="flex flex-col gap-1.5 mb-3">
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <span className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-mono font-bold tracking-widest uppercase text-[#6B7280] dark:text-[#A1A1AA] bg-white dark:bg-[#1A1A1A] px-2 py-1 rounded-sm border border-[#E5E7EB] dark:border-[#333]">
            <CalendarIcon className="w-3 h-3 shrink-0" />
            {date}
          </span>
          <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-widest text-green-600 dark:text-green-500">
            {company}
          </span>
        </div>
        <h5 className="text-[16px] md:text-[18px] font-bold text-[#1F2937] dark:text-white leading-tight">
          {title}
        </h5>
      </div>

      <p className="text-[13px] md:text-[14px] font-medium text-[#4B5563] dark:text-[#A1A1AA] mb-4 leading-relaxed">
        {desc}
      </p>

      {bullets && bullets.length > 0 && (
        <ul className="flex flex-col gap-2">
          {bullets.map((bullet, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-[12px] md:text-[13px] font-medium text-[#6B7280] dark:text-[#D4D4D8]"
            >
              <span className="text-green-500 mt-1 shrink-0 text-[8px]">■</span>
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );

  return (
    <SectionWrapper
      id="about"
      className="py-24 md:py-36 w-full dark:border-[#333]"
    >
      <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          variants={fadeUp3D}
          className="mb-10 md:mb-14 flex flex-col items-start text-left w-full"
        >
          <h2 className="text-[44px] sm:text-[52px] md:text-[60px] font-mono font-bold tracking-tighter text-[#1F2937] dark:text-white leading-[0.9] mb-4">
            Background
          </h2>
          <p className="text-[14px] md:text-[16px] font-mono text-[#6B7280] dark:text-[#8B8B8B] tracking-widest uppercase">
            History & Arsenal
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp3D}
          className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide"
        >
          <button
            onClick={() => setActiveTab("summary")}
            className={`px-6 py-2.5 text-[10px] md:text-[11px] font-mono tracking-widest uppercase transition-all duration-300 border rounded-md whitespace-nowrap ${
              activeTab === "summary"
                ? "bg-[#1F2937] dark:bg-white text-white dark:text-[#111] border-[#1F2937] dark:border-white shadow-sm"
                : "bg-transparent text-[#6B7280] dark:text-[#A1A1AA] border-[#E5E7EB] dark:border-[#333] hover:border-[#1F2937] dark:hover:border-white"
            }`}
          >
            Professional Summary
          </button>
          <button
            onClick={() => setActiveTab("media")}
            className={`px-6 py-2.5 text-[10px] md:text-[11px] font-mono tracking-widest uppercase transition-all duration-300 border rounded-md whitespace-nowrap ${
              activeTab === "media"
                ? "bg-[#1F2937] dark:bg-white text-white dark:text-[#111] border-[#1F2937] dark:border-white shadow-sm"
                : "bg-transparent text-[#6B7280] dark:text-[#A1A1AA] border-[#E5E7EB] dark:border-[#333] hover:border-[#1F2937] dark:hover:border-white"
            }`}
          >
            Gallery & Certs
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "summary" && (
            <motion.div
              key="summary"
              variants={tabTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
            >
              {/* LEFT COLUMN */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-8 lg:gap-10"
              >
                <motion.div
                  variants={card3D}
                  className="flex flex-col rounded-3xl bg-[#F3F4F6] dark:bg-[#111] border border-[#E5E7EB] dark:border-[#333] p-6 md:p-8 shadow-sm hover:border-[#D1D5DB] dark:hover:border-[#4B5563] transition-colors"
                >
                  <h4 className="text-[11px] md:text-[12px] font-mono font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-[#1F2937] dark:text-[#F9FAFB] border-b border-[#E5E7EB] dark:border-[#333] pb-4">
                    <UserIcon className="w-4 h-4 text-green-500" /> Identity
                  </h4>
                  <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-[90px_1fr] items-baseline">
                      <div className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest text-[#6B7280] dark:text-[#A1A1AA]">
                        Name
                      </div>
                      <div className="text-[14px] md:text-[15px] font-bold text-[#1F2937] dark:text-white">
                        Arvin D. Tenasas
                      </div>
                    </div>
                    <div className="grid grid-cols-[90px_1fr] items-baseline">
                      <div className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest text-[#6B7280] dark:text-[#A1A1AA]">
                        Roles
                      </div>
                      <div className="text-[12px] md:text-[13px] font-mono font-medium text-[#4B5563] dark:text-[#D1D5DB] flex flex-wrap gap-x-2 gap-y-1">
                        <span>BS Computer Engineer</span>
                        <span className="text-green-500/40">/</span>
                        <span>Full-Stack Web Developer</span>
                        <span className="text-green-500/40">/</span>
                        <span>IT Administrator</span>
                        <span className="text-green-500/40">/</span>
                        <span>IT Technical Support</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-[90px_1fr] items-baseline">
                      <div className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest text-[#6B7280] dark:text-[#A1A1AA]">
                        Base
                      </div>
                      <div className="text-[13px] md:text-[14px] font-medium text-[#4B5563] dark:text-[#D1D5DB]">
                        Philippines
                      </div>
                    </div>
                    <div className="grid grid-cols-[90px_1fr] items-start pt-2">
                      <div className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest text-[#6B7280] dark:text-[#A1A1AA] mt-1">
                        Bio
                      </div>
                      <div className="text-[13px] md:text-[14px] font-medium text-[#4B5563] dark:text-[#A1A1AA] leading-relaxed">
                        Evolving with technology, building solutions, and
                        enjoying life’s simple flavors.
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  id="tech-arsenal"
                  variants={card3D}
                  className="flex flex-col rounded-3xl bg-[#F3F4F6] dark:bg-[#111] border border-[#E5E7EB] dark:border-[#333] p-6 md:p-8 shadow-sm hover:border-[#D1D5DB] dark:hover:border-[#4B5563] transition-all duration-700"
                >
                  <h4 className="text-[11px] md:text-[12px] font-mono font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-[#1F2937] dark:text-[#F9FAFB] border-b border-[#E5E7EB] dark:border-[#333] pb-4">
                    <CodeIcon className="w-4 h-4 text-green-500" /> Technical
                    Arsenal
                  </h4>
                  <div className="flex flex-col gap-6 md:gap-8">
                    {techCategories.map((category) => (
                      <div key={category.title}>
                        <h6 className="mb-3 font-mono font-bold text-[9px] md:text-[10px] uppercase tracking-widest text-[#6B7280] dark:text-[#8B8B8B]">
                          {category.title}
                        </h6>
                        <div className="flex flex-wrap gap-2 md:gap-2.5">
                          {category.skills.map((tech) => (
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              key={tech.name}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#1A1A1A] border border-[#E5E7EB] dark:border-[#333] rounded-md text-[10px] md:text-[11px] font-mono tracking-widest uppercase text-[#374151] dark:text-[#D1D5DB] transition-all hover:border-green-500/50 hover:text-green-600 dark:hover:text-green-400 group shadow-sm"
                            >
                              <tech.Icon className="w-3 h-3 shrink-0 text-[#6B7280] dark:text-[#A1A1AA] group-hover:text-green-500 transition-colors" />
                              {tech.name}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT COLUMN */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-8 lg:gap-10"
              >
                <motion.div
                  id="experience-timeline"
                  variants={card3D}
                  className="flex flex-col rounded-3xl bg-[#F3F4F6] dark:bg-[#111] border border-[#E5E7EB] dark:border-[#333] p-6 md:p-8 shadow-sm hover:border-[#D1D5DB] dark:hover:border-[#4B5563] transition-all duration-700"
                >
                  <h4 className="text-[11px] md:text-[12px] font-mono font-bold mb-8 flex items-center gap-2 uppercase tracking-widest text-[#1F2937] dark:text-[#F9FAFB] border-b border-[#E5E7EB] dark:border-[#333] pb-4">
                    <BriefcaseIcon className="w-4 h-4 text-green-500" />{" "}
                    Experience
                  </h4>
                  <div className="flex flex-col">
                    <TimelineItem
                      isCurrent={true}
                      date="Mar 2025 - Present"
                      title="Full-Stack Web Dev / Field Tech"
                      company="LSI Leading Technologies Inc."
                      desc="Developing modern web applications and executing infrastructure configuration."
                      bullets={[
                        "Developed web applications featuring API integration and database management.",
                        "Executed UPS installation, configuration, and repair for field operations.",
                        "Collaborated with cross-functional teams to deliver scalable software and hardware solutions.",
                      ]}
                    />
                    <TimelineItem
                      isCurrent={false}
                      date="Aug 2024 - Jan 2025"
                      title="IT Administrator"
                      company="Great Odysseus Security Agency"
                      desc="Managed network infrastructure, hardware maintenance, and technical liaison operations."
                      bullets={[
                        "Managed network infrastructure and configured firewall policies.",
                        "Troubleshot and maintained office hardware, including desktop PCs and laptops.",
                        "Served as the technical liaison with external developers.",
                      ]}
                    />
                    <TimelineItem
                      isCurrent={false}
                      date="Feb 2024 - May 2024"
                      title="Technical Support Intern"
                      company="Bits N' Bytes Computer Shop"
                      desc="Gained foundational hands-on experience in consumer electronics repair."
                      bullets={[
                        "Diagnosed complex hardware and software issues for retail clients.",
                        "Assembled and optimized custom PC builds tailored to user budgets.",
                      ]}
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={card3D}
                  className="flex flex-col rounded-3xl bg-[#F3F4F6] dark:bg-[#111] border border-[#E5E7EB] dark:border-[#333] p-6 md:p-8 shadow-sm hover:border-[#D1D5DB] dark:hover:border-[#4B5563] transition-colors"
                >
                  <h4 className="text-[11px] md:text-[12px] font-mono font-bold mb-8 flex items-center gap-2 uppercase tracking-widest text-[#1F2937] dark:text-[#F9FAFB] border-b border-[#E5E7EB] dark:border-[#333] pb-4">
                    <GraduationCapIcon className="w-4 h-4 text-green-500" />{" "}
                    Education
                  </h4>
                  <div className="flex flex-col">
                    <TimelineItem
                      isCurrent={false}
                      date="Jun 2020 - Jun 2024"
                      title="BS in Computer Engineering"
                      company="Samar State University"
                      desc="Developed a strong engineering mindset, merging low-level electronics with high-level software development."
                      bullets={[
                        "Co-lead Developer for the 'SmartPen' IoT handwriting digitization thesis.",
                        "Mastered core fundamentals in C++, embedded systems, and circuitry.",
                      ]}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "media" && (
            <motion.div
              key="media"
              variants={tabTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full"
            >
              <div className="flex flex-col items-center justify-center p-8 md:p-20 text-center min-h-[40vh] border border-dashed border-[#D1D5DB] dark:border-[#4B5563] bg-[#F9FAFB]/50 dark:bg-[#111]/50 rounded-3xl">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-[#1A1A1A] rounded-2xl flex items-center justify-center mb-6 border border-[#E5E7EB] dark:border-[#333] shadow-sm">
                  <GalleryIcon className="w-6 h-6 md:w-7 md:h-7 text-[#6B7280] dark:text-[#A1A1AA]" />
                </div>
                <h3 className="text-[18px] md:text-[20px] font-mono font-bold tracking-tight text-[#1F2937] dark:text-white mb-3">
                  Curating the Gallery
                </h3>
                <p className="text-[13px] md:text-[15px] font-medium text-[#4B5563] dark:text-[#A1A1AA] max-w-md mx-auto leading-relaxed mb-8">
                  Currently compiling professional certifications, hardware
                  workspace photos, and video reels. The media module will be
                  deployed in the next update.
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

export default About;
