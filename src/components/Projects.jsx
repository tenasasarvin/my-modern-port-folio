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
import { PROJECTS_DATA } from "../data/projectsData.js";
import {
  GithubIcon,
  ExternalLinkIcon,
  ArrowUpRightIcon,
  PlayCircleIcon,
} from "../icons/all.jsx";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveCategory("all");
    setIsDropdownOpen(false);
  };

  const categories = ["all", "web", "app", "iot"];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesTab = project.type === activeTab;

    let matchesCategory = false;
    const projectCategory = project.category?.toLowerCase() || "";

    if (activeCategory === "all") {
      matchesCategory = true;
    } else if (activeCategory === "web") {
      matchesCategory =
        projectCategory.includes("web") ||
        projectCategory.includes("portfolio");
    } else if (activeCategory === "app") {
      matchesCategory = projectCategory.includes("app");
    } else if (activeCategory === "iot") {
      matchesCategory = projectCategory.includes("iot");
    }

    return matchesTab && matchesCategory;
  });

  return (
    <SectionWrapper
      id="projects"
      className="py-24 md:py-36 w-full border-t border-[#E5E7EB] dark:border-[#333]"
    >
      <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          variants={fadeUp3D}
          className="mb-12 md:mb-16 flex flex-col items-start text-left w-full"
        >
          <h2 className="text-[44px] sm:text-[52px] md:text-[60px] font-mono font-bold tracking-tighter text-[#1F2937] dark:text-white leading-[0.9] mb-4">
            Featured Projects
          </h2>
          <p className="text-[14px] md:text-[16px] font-mono text-[#6B7280] dark:text-[#8B8B8B] tracking-widest uppercase">
            Selected works & architecture
          </p>
        </motion.div>

        {/* --- Navigation Tabs & Custom Category Dropdown --- */}
        <motion.div
          variants={fadeUp3D}
          // Changed to flex-col on mobile, flex-row on sm and up
          // items-start ensures the dropdown doesn't stretch full width on mobile
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 md:gap-4 mb-10 w-full relative z-40"
        >
          {/* Tabs */}
          <div className="flex gap-2 md:gap-3 overflow-x-auto flex-nowrap scrollbar-hide w-full sm:w-auto pb-1 sm:pb-0">
            <button
              onClick={() => handleTabChange("personal")}
              className={`px-5 py-2.5 text-[10px] md:text-[11px] font-mono tracking-widest uppercase transition-all duration-300 border rounded-md whitespace-nowrap ${
                activeTab === "personal"
                  ? "bg-[#1F2937] dark:bg-white text-white dark:text-[#111] border-[#1F2937] dark:border-white shadow-sm"
                  : "bg-transparent text-[#6B7280] dark:text-[#A1A1AA] border-[#E5E7EB] dark:border-[#333] hover:border-[#1F2937] dark:hover:border-white"
              }`}
            >
              Personal Projects
            </button>
            <button
              onClick={() => handleTabChange("client")}
              className={`px-5 py-2.5 text-[10px] md:text-[11px] font-mono tracking-widest uppercase transition-all duration-300 border rounded-md whitespace-nowrap ${
                activeTab === "client"
                  ? "bg-[#1F2937] dark:bg-white text-white dark:text-[#111] border-[#1F2937] dark:border-white shadow-sm"
                  : "bg-transparent text-[#6B7280] dark:text-[#A1A1AA] border-[#E5E7EB] dark:border-[#333] hover:border-[#1F2937] dark:hover:border-white"
              }`}
            >
              Client Projects
            </button>
          </div>

          {/* Custom Responsive Dropdown */}
          <div className="relative shrink-0 min-w-[130px]">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between gap-3 text-[10px] md:text-[11px] font-mono font-bold tracking-widest uppercase px-4 py-2.5 border transition-all duration-300 rounded-md bg-[#1F2937] dark:bg-white text-white dark:text-[#111] border-[#1F2937] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#1F2937] dark:hover:text-white"
            >
              <span>{activeCategory}</span>
              <svg
                className={`fill-current h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  // Adjusted to align left on mobile, right on desktop
                  className="absolute top-full left-0 sm:left-auto sm:right-0 mt-2 w-32 rounded-md border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#1A1A1A] shadow-xl overflow-hidden z-[60]"
                >
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-5 py-3 text-[10px] md:text-[11px] font-mono tracking-widest uppercase transition-colors hover:bg-[#F3F4F6] dark:hover:bg-[#333] ${
                        activeCategory === cat
                          ? "text-green-600 dark:text-green-400 font-bold bg-[#F9FAFB] dark:bg-[#111]"
                          : "text-[#4B5563] dark:text-[#A1A1AA]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* --- Dynamic Content Area --- */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key="projects-grid"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 relative z-10"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  variants={card3D}
                  key={project.id}
                  className="flex flex-col rounded-3xl bg-[#F3F4F6] dark:bg-[#111] border border-[#E5E7EB] dark:border-[#333] overflow-hidden group hover:border-green-500/50 dark:hover:border-green-500/30 transition-all duration-300 shadow-sm"
                >
                  <div className="relative h-56 md:h-64 bg-[#E5E7EB] dark:bg-[#0A0A0A] overflow-hidden border-b border-[#E5E7EB] dark:border-[#333]">
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-80 mix-blend-multiply dark:mix-blend-lighten grayscale-[50%] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 dark:bg-[#1A1A1A]/95 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm border border-[#E5E7EB] dark:border-[#333] text-[#1F2937] dark:text-white">
                      {project.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-green-50/95 dark:bg-green-500/10 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      {project.status}
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <div className="flex flex-col mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[22px] md:text-[24px] font-bold tracking-tight text-[#1F2937] dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <p className="text-[13px] font-mono text-[#6B7280] dark:text-[#8B8B8B]">
                          {project.subtitle}
                        </p>
                        <span className="text-[10px] font-mono font-bold text-[#1F2937] dark:text-white uppercase tracking-widest border border-[#E5E7EB] dark:border-[#333] px-2 py-1 rounded bg-white dark:bg-[#1A1A1A] w-fit">
                          Role: {project.role}
                        </span>
                      </div>
                    </div>

                    <p className="text-[14px] md:text-[15px] text-[#4B5563] dark:text-[#D4D4D8] mb-8 line-clamp-3 leading-relaxed font-medium">
                      {project.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-[#E5E7EB] dark:border-[#333] flex items-center justify-between gap-4">
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] md:text-[10px] font-mono text-[#6B7280] dark:text-[#A1A1AA] tracking-widest uppercase bg-white dark:bg-[#1A1A1A] px-2.5 py-1 rounded-md border border-[#E5E7EB] dark:border-[#333]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2 items-center shrink-0">
                        {!project.githubLink &&
                          !project.demoLink &&
                          project.statusNote && (
                            <span className="text-[10px] font-mono text-[#9CA3AF] italic max-w-[120px] text-right">
                              {project.statusNote}
                            </span>
                          )}
                        {project.githubLink && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View Source Code"
                            className="w-10 h-10 rounded-full bg-white dark:bg-[#1A1A1A] border border-[#E5E7EB] dark:border-[#333] flex items-center justify-center text-[#4B5563] dark:text-[#A1A1AA] hover:text-green-600 dark:hover:text-green-400 hover:border-green-200 dark:hover:border-green-500/30 transition-all shadow-sm"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </motion.a>
                        )}
                        {project.secondaryDemoLink && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.secondaryDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={
                              project.secondaryDemoLabel || "Secondary Link"
                            }
                            className="w-10 h-10 rounded-full bg-white dark:bg-[#1A1A1A] border border-[#E5E7EB] dark:border-[#333] flex items-center justify-center text-[#4B5563] dark:text-[#A1A1AA] hover:text-green-600 dark:hover:text-green-400 hover:border-green-200 dark:hover:border-green-500/30 transition-all shadow-sm"
                          >
                            <ArrowUpRightIcon className="w-4 h-4" />
                          </motion.a>
                        )}
                        {project.demoLink && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={project.demoLinkLabel || "View Live Demo"}
                            className="w-10 h-10 rounded-full bg-[#1F2937] dark:bg-white text-white dark:text-[#111] flex items-center justify-center hover:bg-green-600 dark:hover:bg-green-500 hover:text-white dark:hover:text-white transition-all shadow-sm"
                          >
                            <ExternalLinkIcon className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // --- Empty State ---
            <motion.div
              key="empty-state"
              variants={tabTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full relative z-10"
            >
              <div className="flex flex-col items-center justify-center p-8 md:p-20 text-center min-h-[40vh] border border-dashed border-[#D1D5DB] dark:border-[#4B5563] bg-[#F9FAFB]/50 dark:bg-[#111]/50 rounded-3xl">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-[#1A1A1A] rounded-2xl flex items-center justify-center mb-6 border border-[#E5E7EB] dark:border-[#333] shadow-sm">
                  <PlayCircleIcon className="w-6 h-6 md:w-7 md:h-7 text-[#6B7280] dark:text-[#A1A1AA]" />
                </div>
                <h3 className="text-[18px] md:text-[20px] font-mono font-bold tracking-tight text-[#1F2937] dark:text-white mb-3">
                  Content Updating Soon
                </h3>
                <p className="text-[13px] md:text-[15px] font-medium text-[#4B5563] dark:text-[#A1A1AA] max-w-md mx-auto leading-relaxed mb-8">
                  There are currently no{" "}
                  {activeCategory !== "all"
                    ? activeCategory.toUpperCase()
                    : "available"}{" "}
                  projects mapped to this section. This content will update and
                  be uploaded in the next deployment.
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

export default Projects;
