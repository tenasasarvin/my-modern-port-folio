import React, { useState, useEffect } from "react";
//eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext.jsx";
import {
  UserIcon,
  LayersIcon,
  CodeIcon,
  MailIcon,
  DownloadIcon,
  SunIcon,
  MoonIcon,
  MonitorIcon,
  SmartphoneIcon,
  MenuIcon,
  XIcon,
  StarIcon,
  BookOpenIcon,
  ZapIcon,
  ClipboardIcon,
  PackageIcon,
  GraduationCapIcon,
  UsersIcon,
  MoreVerticalIcon,
} from "../icons/all.jsx";

const AppNavigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  // const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  // New state for our custom alert modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { theme, setTheme, toggleTheme } = useTheme();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
        // setIsMoreMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;

      const sectionIds = ["home", "about", "services", "projects", "contact"];
      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "Background", icon: UserIcon },
    { id: "services", label: "Services", icon: LayersIcon },
    { id: "projects", label: "Projects", icon: CodeIcon },
    { id: "contact", label: "Contact", icon: MailIcon },
  ];

  // const extraLinks = [
  //   { id: "testimonials", label: "Client Testimonials", icon: StarIcon },
  //   { id: "blog", label: "Tech Blog", icon: BookOpenIcon },
  //   {
  //     id: "instant-services",
  //     label: "Instant Digital Services",
  //     icon: ZapIcon,
  //   },
  //   { id: "onboarding", label: "Project Onboarding", icon: ClipboardIcon },
  //   { id: "tools", label: "Tools & Libraries", icon: PackageIcon },
  //   { id: "learning", label: "Learning Hub", icon: GraduationCapIcon },
  //   { id: "collab", label: "Collaborate With Me", icon: UsersIcon },
  // ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  // // Updated to trigger the custom modal instead of the browser alert
  // const handleUnderDevelopment = (e) => {
  //   e.preventDefault();
  //   setIsModalOpen(true);
  // };

  // Update your handler functions to accept the event
  const handleSetLight = (e) => {
    if (setTheme) setTheme("light", e);
    else if (theme === "dark") toggleTheme(e);
  };

  const handleSetDark = (e) => {
    if (setTheme) setTheme("dark", e);
    else if (theme === "light") toggleTheme(e);
  };

  return (
    <>
      <nav
        className={`fixed top-3 md:top-5 left-0 w-full z-50 flex justify-center px-4 md:px-8 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-[150%]"
        }`}
      >
        <div
          className={`relative flex items-center justify-between w-full max-w-6xl gap-3 px-5 md:px-6 py-2.5 transition-all duration-300 border rounded-2xl ${
            isScrolled
              ? "bg-white/95 dark:bg-[#111]/95 shadow-sm border-[#E5E7EB] dark:border-[#333] backdrop-blur-md"
              : "bg-transparent border-transparent"
          }`}
        >
          <div className="flex items-center gap-8 md:gap-10">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-[14px] font-bold transition-colors duration-200 shrink-0 ${
                activeSection === "home"
                  ? "text-green-500"
                  : "text-[#1F2937] dark:text-white"
              }`}
            >
              Arvin Tenasas.
            </button>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-[13px] font-medium transition-colors duration-200 relative group py-1 ${
                    activeSection === link.id
                      ? "text-green-500"
                      : "text-[#6B7280] dark:text-[#A1A1AA] hover:text-[#1F2937] dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeTabIndicator"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-green-500 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* --- Desktop Action Group --- */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="/updated-resume-arvin.pdf"
                download="Arvin_Tenasas_Resume.pdf"
                className="flex items-center gap-1.5 text-[13px] font-medium px-4 py-1.5 transition-all duration-300 rounded-full bg-[#1F2937] dark:bg-white text-white dark:text-[#111] border border-[#1F2937] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#1F2937] dark:hover:text-white shadow-sm"
              >
                <DownloadIcon className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>

              <div className="flex items-center gap-0.5 p-1 border border-[#E5E7EB] dark:border-[#333] rounded-full bg-white dark:bg-[#111] shadow-sm">
                <div className="p-1.5 text-[#9CA3AF] dark:text-[#6B7280]">
                  <MonitorIcon className="w-3.5 h-3.5" />
                </div>
                <button
                  onClick={handleSetLight}
                  className={`p-1.5 rounded-full transition-all duration-200 ${
                    theme === "light"
                      ? "bg-[#F3F4F6] dark:bg-[#222] text-[#1F2937] dark:text-white shadow-sm"
                      : "text-[#9CA3AF] dark:text-[#6B7280] hover:text-[#1F2937] dark:hover:text-white"
                  }`}
                  aria-label="Light Theme"
                >
                  <SunIcon className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleSetDark}
                  className={`p-1.5 rounded-full transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-[#F3F4F6] dark:bg-[#222] text-[#1F2937] dark:text-white shadow-sm"
                      : "text-[#9CA3AF] dark:text-[#6B7280] hover:text-[#1F2937] dark:hover:text-white"
                  }`}
                  aria-label="Dark Theme"
                >
                  <MoonIcon className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* MORE VERTICAL MENU COMMENTED OUT FOR DESKTOP */}
              {/*
              <div
                className="relative"
                onMouseEnter={() => setIsMoreMenuOpen(true)}
                onMouseLeave={() => setIsMoreMenuOpen(false)}
              >
                <button className="flex items-center justify-center p-1.5 text-[#9CA3AF] dark:text-[#6B7280] hover:text-[#1F2937] dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-[#222]">
                  <MoreVerticalIcon className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {isMoreMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full pt-2 w-52 z-[60]"
                    >
                      <div className="flex flex-col bg-white dark:bg-[#1A1A1A] border border-[#E5E7EB] dark:border-[#333] rounded-2xl shadow-xl overflow-hidden py-1.5">
                        <span className="px-3.5 py-1.5 text-[11px] font-semibold text-[#9CA3AF] dark:text-[#6B7280]">
                          Explore more
                        </span>
                        {extraLinks.map((link) => {
                          const IconComponent = link.icon;
                          return (
                            <a
                              key={link.id}
                              href="#"
                              onClick={handleUnderDevelopment}
                              className="px-3.5 py-2 text-[12px] font-medium text-[#4B5563] dark:text-[#A1A1AA] hover:text-[#1F2937] dark:hover:text-white hover:bg-[#F3F4F6] dark:hover:bg-[#333] transition-colors flex items-center justify-between group"
                            >
                              <div className="flex items-center gap-2.5">
                                <IconComponent className="w-3.5 h-3.5 text-[#9CA3AF] dark:text-[#6B7280] group-hover:text-green-500 transition-colors" />
                                {link.label}
                              </div>
                              <span className="opacity-0 group-hover:opacity-100 text-[9px] text-orange-500 bg-orange-100 dark:bg-orange-500/10 px-1.5 py-0.5 rounded transition-opacity">
                                Soon
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              */}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center p-2 bg-[#F3F4F6] dark:bg-[#222] text-[#1F2937] dark:text-white transition-colors rounded-full"
            >
              {isMobileMenuOpen ? (
                <XIcon className="w-4 h-4" />
              ) : (
                <MenuIcon className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* --- Mobile Dropdown Menu --- */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-[calc(100%+0.5rem)] left-0 w-full border border-[#E5E7EB] dark:border-[#333] rounded-2xl bg-white dark:bg-[#111] shadow-xl md:hidden z-50 origin-top overflow-y-auto max-h-[80vh]"
              >
                <div className="flex flex-col p-2.5 gap-0.5">
                  {navLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className={`flex items-center gap-3.5 p-3 transition-colors text-left rounded-xl group ${
                          activeSection === link.id
                            ? "bg-[#F3F4F6] dark:bg-[#222] text-green-500"
                            : "hover:bg-[#F9FAFB] dark:hover:bg-[#1A1A1A] text-[#4B5563] dark:text-[#A1A1AA]"
                        }`}
                      >
                        {IconComponent && (
                          <IconComponent
                            className={`w-4 h-4 shrink-0 ${
                              activeSection === link.id
                                ? "text-green-500"
                                : "text-[#9CA3AF] dark:text-[#6B7280] group-hover:text-[#1F2937] dark:group-hover:text-white"
                            }`}
                          />
                        )}
                        <span className="text-[14px] font-medium">
                          {link.label}
                        </span>
                      </button>
                    );
                  })}

                  <div className="w-full h-px bg-[#E5E7EB] dark:bg-[#333] my-1.5"></div>

                  {/* EXPLORE MORE COMMENTED OUT FOR MOBILE */}
                  {/*
                  <span className="px-3 py-1.5 text-[11px] font-semibold text-[#9CA3AF] dark:text-[#6B7280]">
                    Explore more
                  </span>
                  {extraLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.id}
                        href="#"
                        onClick={(e) => {
                          handleUnderDevelopment(e);
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center justify-between p-3 rounded-xl text-left hover:bg-[#F9FAFB] dark:hover:bg-[#1A1A1A] text-[#4B5563] dark:text-[#A1A1AA] transition-colors group"
                      >
                        <div className="flex items-center gap-3.5">
                          <IconComponent className="w-4 h-4 text-[#9CA3AF] dark:text-[#6B7280] group-hover:text-green-500 transition-colors" />
                          <span className="text-[13px] font-medium">
                            {link.label}
                          </span>
                        </div>
                        <span className="text-[10px] text-orange-500 bg-orange-100 dark:bg-orange-500/10 px-2 py-0.5 rounded-full">
                          Soon
                        </span>
                      </a>
                    );
                  })}

                  <div className="w-full h-px bg-[#E5E7EB] dark:bg-[#333] my-1.5"></div>
                  */}

                  <div className="flex items-center justify-between p-3">
                    <span className="text-[13px] font-medium text-[#4B5563] dark:text-[#A1A1AA]">
                      Appearance
                    </span>
                    <div className="flex items-center gap-0.5 p-1 border border-[#E5E7EB] dark:border-[#333] rounded-full bg-[#F9FAFB] dark:bg-[#1A1A1A]">
                      <div className="p-1.5 text-[#9CA3AF] dark:text-[#6B7280]">
                        <SmartphoneIcon className="w-3.5 h-3.5" />
                      </div>
                      <button
                        onClick={handleSetLight}
                        className={`p-1.5 rounded-full transition-all duration-200 ${
                          theme === "light"
                            ? "bg-white dark:bg-[#333] text-[#1F2937] dark:text-white shadow-sm"
                            : "text-[#9CA3AF] dark:text-[#6B7280]"
                        }`}
                        aria-label="Light Theme"
                      >
                        <SunIcon className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={handleSetDark}
                        className={`p-1.5 rounded-full transition-all duration-200 ${
                          theme === "dark"
                            ? "bg-white dark:bg-[#333] text-[#1F2937] dark:text-white shadow-sm"
                            : "text-[#9CA3AF] dark:text-[#6B7280]"
                        }`}
                        aria-label="Dark Theme"
                      >
                        <MoonIcon className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-2">
                    <a
                      href="/updated-resume-arvin.pdf"
                      download="Arvin_Tenasas_Resume.pdf"
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#1F2937] dark:bg-white text-white dark:text-[#111] border border-[#1F2937] dark:border-white rounded-xl hover:bg-transparent dark:hover:bg-transparent hover:text-[#1F2937] dark:hover:text-white transition-colors shadow-sm"
                    >
                      <DownloadIcon className="w-4 h-4" />
                      <span className="text-[13px] font-medium">
                        Download CV
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* --- Global Alert Modal (Rendered outside nav to prevent scroll conflicts) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-sm p-6 bg-white dark:bg-[#111] border border-[#E5E7EB] dark:border-[#333] rounded-3xl shadow-2xl flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-50 dark:bg-green-500/10 mb-4 text-green-500">
                {/* Custom Sparkle Icon representing excitement */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                  />
                </svg>
              </div>

              <h3 className="text-base font-bold text-[#1F2937] dark:text-white mb-2">
                Cooking Up Something Special
              </h3>

              <p className="text-[13px] text-[#4B5563] dark:text-[#A1A1AA] mb-6 leading-relaxed">
                This section is currently under development. I'm putting the
                final polish on it, and it will be ready in the next deployment.
                Stay tuned!
              </p>

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-2.5 bg-[#1F2937] dark:bg-white text-white dark:text-[#111] text-[13px] font-medium rounded-xl hover:bg-transparent dark:hover:bg-transparent hover:text-[#1F2937] dark:hover:text-white border border-[#1F2937] dark:border-white transition-all duration-300"
              >
                Got it, thanks!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppNavigation;
