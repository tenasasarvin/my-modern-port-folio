import React, { useState, useEffect, useContext, createContext } from "react";
import CompactVisitorCounter from "./api/CompactVisitorsCounter";
import { motion, AnimatePresence } from "framer-motion";

// --- CENTRALIZED ICONS ---
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  MailIcon,
  DownloadIcon,
  BriefcaseIcon,
  HomeIcon,
  UserIcon,
  LayersIcon,
  CodeIcon,
  SunIcon,
  MoonIcon,
  MenuIcon,
  XIcon,
  GraduationCapIcon,
  WrenchIcon,
  ExternalLinkIcon,
  PaletteIcon,
  TerminalIcon,
  ServerIcon,
  DatabaseIcon,
  CpuIcon,
  MapPinIcon,
  SendIcon,
  CalendarIcon,
  ArrowRightIcon,
  GalleryIcon,
  PlayCircleIcon,
  ArrowUpRightIcon,
  Html5Icon,
  Css3Icon,
  JsIcon,
  ReactIcon,
  TailwindIcon,
  NextJsIcon,
  NodeJsIcon,
  CppIcon,
  ViteIcon,
  SupabaseIcon,
} from "./icons/all";

// --- THEME CONTEXT ---
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className =
      theme === "dark"
        ? "dark bg-[#111111] text-[#E5E7EB] selection:bg-blue-500/30"
        : "light bg-[#FAFAFA] text-[#1F2937] selection:bg-blue-500/30";

    document.body.style.fontFamily =
      "'Inter', 'San Francisco', 'Roboto', sans-serif";
    document.body.style.lineHeight = "1.6";
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

// ==========================================
// 3D SCROLL ANIMATION VARIANTS
// ==========================================
// Stagger wrapper allows children elements to animate one by one
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Gap between each element's animation
      delayChildren: 0.05,
    },
  },
};

// 3D Fade up for Text & Small Elements
const fadeUp3D = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: -25,
    scale: 0.9,
    transformPerspective: 1000,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

// 3D Flip/Slide for Large Cards (Projects, Services, Forms)
const card3D = {
  hidden: {
    opacity: 0,
    y: 100,
    rotateY: 15,
    rotateX: 10,
    scale: 0.85,
    transformPerspective: 1200,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

// Tab Transition Variant
const tabTransition = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } },
};

// --- UPDATED PROJECTS DATA ---
const PROJECTS_DATA = [
  {
    id: 1,
    type: "personal",
    title: "Arvin Tenasas - Personal Portfolio",
    subtitle: "Interactive React Application",
    category: "Portfolio Site",
    role: "Sole Developer",
    description:
      "Designed and developed a highly interactive, native-app-like personal portfolio. Engineered with React, Tailwind CSS, and custom intersection observers for seamless scroll animations and responsive accordion galleries.",
    tags: ["React", "Tailwind CSS", "Vite", "Supabase", "API"],
    video: "/assets/portfolio-demo.mp4",
    demoLink: "https://arvintenasas-portfolio.vercel.app/",
    githubLink: "https://github.com/tenasasarvin/my-port-folio.git",
    status: "Live",
  },
  {
    id: 2,
    type: "personal",
    title: "BALAY Management",
    subtitle: "Dual-Portal Property Platform",
    category: "Web & Mobile App",
    role: "Sole Developer",
    description:
      "Engineered a comprehensive dual-portal management system. Developed dedicated, secure interfaces for both landlords and tenants to seamlessly handle property data, communication, and real-time operations.",
    tags: ["React Native", "Expo", "Supabase", "UI/UX"],
    video: "/assets/balay-demo.mp4",
    demoLink: null,
    githubLink: "https://github.com/tenasasarvin/balay.git",
    status: "In Development",
    statusNote:
      "Currently in development. Source code is accessible for review.",
  },
  {
    id: 3,
    type: "client",
    title: "LSI Corporate Portal",
    subtitle: "Legacy WordPress Modernization",
    category: "Full-Stack Web",
    role: "Lead Developer",
    description:
      "Modernized a legacy WordPress architecture into a high-performance custom web application. Strategically deployed the modern Next.js replacement on Vercel while preserving the legacy site on the shared domain, ensuring seamless parallel operations. Due to strict company policy, source code access is restricted.",
    tags: ["Next.js", "React.js", "Node.js", "MySQL", "API"],
    video: "/assets/lsi-demo.mp4",
    demoLink: "https://lsi-node-web.vercel.app/",
    demoLinkLabel: "Modern Site (Vercel)",
    secondaryDemoLink: "https://lsi.com.ph/",
    secondaryDemoLabel: "Official Site (Legacy)",
    githubLink: null,
    status: "Confidential (NDA)",
    statusNote:
      "Source code restricted under company policy. View live deployments.",
  },
  {
    id: 4,
    type: "personal",
    title: "SmartPen: IoT Fish Feeder",
    subtitle: "Remote Aquaculture Automation (Capstone)",
    category: "Software/Hardware & IoT",
    role: "Lead Engineer",
    description:
      "Developed a 3-tier remote offshore aquaculture capstone system. Bridged physical sensors and microcontrollers with a remote relay device to sync real-time automated feeding data to Firebase, accessible via a custom FlutterFlow app.",
    tags: ["Microcontrollers", "FlutterFlow", "Firebase", "Sensors"],
    video: "/assets/smartpen-demo.mp4",
    demoLink: null,
    githubLink: null,
    status: "Academic Capstone",
    statusNote:
      "Proprietary hardware system. Showcased via video demonstration.",
  },
];

// --- APP-LIKE REUSABLE COMPONENTS ---

// Motion Wrapper to enforce in/out animations on scroll
const SectionWrapper = ({ id, children, className = "" }) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, margin: "-10%" }} // Allows repeating in/out animations
    variants={staggerContainer}
    className={`py-12 md:py-20 px-4 md:px-6 max-w-6xl mx-auto w-full flex flex-col gap-6 ${className}`}
  >
    {children}
  </motion.section>
);

// ==========================================
// 1. Navigation & App Bars
// ==========================================
const AppNavigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`fixed top-3 md:top-5 left-0 w-full z-50 flex justify-center px-4 md:px-8 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-[150%]"
      }`}
    >
      <div
        className={`relative flex items-center justify-between w-full max-w-6xl gap-3 px-5 md:px-6 py-3 transition-all duration-300 border rounded-xl ${
          isScrolled
            ? "bg-white/95 dark:bg-[#111]/95 shadow-sm border-[#E5E7EB] dark:border-[#333] backdrop-blur-md"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center gap-8 md:gap-12">
          <button
            onClick={() => scrollToSection("home")}
            className={`text-[12px] md:text-[13px] font-mono font-bold tracking-widest uppercase transition-colors duration-200 shrink-0 ${
              activeSection === "home"
                ? "text-green-500"
                : "text-[#6B7280] dark:text-[#A1A1AA] hover:text-[#1F2937] dark:hover:text-white"
            }`}
          >
            Arvin Tenasas
          </button>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-[12px] md:text-[13px] font-mono font-bold uppercase tracking-widest transition-colors duration-200 relative group ${
                  activeSection === link.id
                    ? "text-green-500"
                    : "text-[#6B7280] dark:text-[#A1A1AA] hover:text-[#1F2937] dark:hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-green-500 rounded-none"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/updated-resume-arvin.pdf"
            download="Arvin_Tenasas_Resume.pdf"
            className="hidden md:flex items-center justify-center text-[11px] md:text-[12px] font-mono font-bold tracking-widest uppercase px-5 py-2 border transition-all duration-300 rounded-3xl bg-[#1F2937] dark:bg-white text-white dark:text-[#111] border-[#1F2937] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#1F2937] dark:hover:text-white"
          >
            Download CV
          </a>

          <button
            onClick={toggleTheme}
            className="hidden md:flex items-center justify-center p-2.5 border border-[#E5E7EB] dark:border-[#333] text-[#6B7280] dark:text-[#A1A1AA] hover:text-[#1F2937] dark:hover:text-white hover:border-[#1F2937] dark:hover:border-white transition-colors rounded-3xl"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <SunIcon className="w-4 h-4 shrink-0" />
            ) : (
              <MoonIcon className="w-4 h-4 shrink-0" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2.5 border border-[#E5E7EB] dark:border-[#333] text-[#6B7280] dark:text-[#A1A1AA] hover:text-[#1F2937] dark:hover:text-white hover:border-[#1F2937] dark:hover:border-white transition-colors rounded-3xl"
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-4 h-4" />
            ) : (
              <MenuIcon className="w-4 h-4" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[calc(100%+0.5rem)] left-0 w-full border border-[#E5E7EB] dark:border-[#333] rounded-xl bg-white dark:bg-[#111] shadow-xl md:hidden z-50 origin-top"
            >
              <div className="flex flex-col p-4 gap-1">
                {navLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`flex items-center gap-4 p-3 border border-transparent transition-colors text-left rounded-lg group ${
                        activeSection === link.id
                          ? "bg-[#F3F4F6] dark:bg-[#1A1A1A] border-[#E5E7EB] dark:border-[#333] text-green-500"
                          : "hover:bg-[#F3F4F6] dark:hover:bg-[#1A1A1A] text-[#6B7280] dark:text-[#A1A1AA]"
                      }`}
                    >
                      {IconComponent && (
                        <IconComponent
                          className={`w-4 h-4 shrink-0 ${
                            activeSection === link.id
                              ? "text-green-500"
                              : "group-hover:text-[#1F2937] dark:group-hover:text-white"
                          }`}
                        />
                      )}
                      <span className="text-[12px] font-mono font-bold tracking-widest uppercase">
                        {link.label}
                      </span>
                    </button>
                  );
                })}

                <div className="w-full h-px bg-[#E5E7EB] dark:bg-[#333] my-3"></div>

                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-4 p-3 border border-transparent rounded-lg text-left hover:bg-[#F3F4F6] dark:hover:bg-[#1A1A1A] text-[#6B7280] dark:text-[#A1A1AA] transition-colors"
                >
                  {theme === "dark" ? (
                    <SunIcon className="w-4 h-4 shrink-0" />
                  ) : (
                    <MoonIcon className="w-4 h-4 shrink-0" />
                  )}
                  <span className="text-[12px] font-mono font-bold tracking-widest uppercase">
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </span>
                </button>

                <a
                  href="/updated-resume-arvin.pdf"
                  download="Arvin_Tenasas_Resume.pdf"
                  className="mt-3 flex items-center justify-center gap-2 w-full py-3 bg-[#1F2937] dark:bg-white text-white dark:text-[#111] border border-[#1F2937] dark:border-white rounded-3xl hover:bg-transparent dark:hover:bg-transparent hover:text-[#1F2937] dark:hover:text-white transition-colors"
                >
                  <DownloadIcon className="w-4 h-4" />
                  <span className="text-[12px] font-mono font-bold tracking-widest uppercase">
                    Download CV
                  </span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// ==========================================
// 2. Sections
// ==========================================
const HERO_STATS = [
  { value: "Full-Stack", label: "WEB DEVELOPER" },
  { value: "UI/UX", label: "DESIGNER" },
  { value: "IoT", label: "ENTHUSIAST" },
  { value: "Tech", label: "Maintainer" },
];

const Hero = () => (
  <SectionWrapper
    id="home"
    className="pt-24 pb-12 md:pt-36 md:pb-12 flex flex-col justify-center min-h-[85vh] lg:min-h-0 lg:h-screen lg:max-h-[900px] w-full overflow-hidden"
  >
    <div className="w-full max-w-5xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16 mb-10 md:mb-9 lg:mb-11">
      {/* Profile Image with 3D animation */}
      <motion.div
        variants={fadeUp3D}
        className="w-full max-w-[420px] mx-auto aspect-square md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] md:max-w-none shrink-0 rounded-3xl overflow-hidden bg-[#F3F4F6] dark:bg-[#111] border border-[#E5E7EB] dark:border-[#333] relative shadow-sm"
      >
        <img
          src="/profile2.jpg"
          alt="Arvin Profile"
          className="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply dark:mix-blend-lighten opacity-90 hover:grayscale-0 hover:contrast-100 hover:opacity-100 transition-all duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:4px_4px] opacity-[0.15] mix-blend-overlay pointer-events-none"></div>
      </motion.div>

      {/* Typography with individual staggered elements */}
      <motion.div
        variants={staggerContainer}
        className="flex-1 flex flex-col items-start text-left w-full mt-4 md:mt-0"
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
            Available for Work & Freelance
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp3D}
          className="text-[44px] sm:text-[52px] md:text-[60px] lg:text-[72px] font-mono font-bold tracking-tighter text-[#1F2937] dark:text-white leading-[0.9] mb-4 md:mb-6"
        >
          Hi, I'm Arvin
        </motion.h1>

        <motion.div
          variants={staggerContainer}
          className="space-y-4 lg:space-y-5 max-w-2xl"
        >
          <motion.p
            variants={fadeUp3D}
            className="text-[16px] md:text-[18px] lg:text-[20px] text-[#4B5563] dark:text-[#D4D4D8] leading-relaxed font-medium"
          >
            I bridge the gap between digital code and physical infrastructure.
          </motion.p>
          <motion.p
            variants={fadeUp3D}
            className="text-[14px] md:text-[15px] lg:text-[16px] text-[#6B7280] dark:text-[#A1A1AA] leading-relaxed md:leading-loose"
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
              className="group flex items-center gap-1.5 text-[13px] md:text-[14px] font-mono font-medium text-[#6B7280] hover:text-green-600 dark:text-[#A1A1AA] dark:hover:text-green-400 transition-colors"
            >
              <social.icon className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
              <span>{social.name}</span>
              <ArrowUpRightIcon className="w-3 h-3 md:w-3.5 md:h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>

    {/* Bottom Hero Grid */}
    <motion.div
      variants={staggerContainer}
      className="w-full max-w-5xl mx-auto px-6 md:px-10"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-[#E5E7EB] dark:border-[#333]">
        {HERO_STATS.map((stat, i) => (
          <motion.div
            variants={fadeUp3D}
            key={i}
            className={`flex flex-col items-start justify-center py-6 px-4 md:px-6 lg:px-8 border-[#E5E7EB] dark:border-[#333]
              ${i % 2 === 0 ? "border-r" : ""} 
              ${i < 2 ? "border-b md:border-b-0" : ""}
              md:border-r md:last:border-r-0
            `}
          >
            <span className="text-[20px] md:text-[22px] lg:text-[24px] font-mono font-semibold text-[#1F2937] dark:text-white leading-none tracking-tight mb-2">
              {stat.value}
            </span>
            <span className="text-[10px] md:text-[11px] lg:text-[12px] font-mono text-[#6B7280] dark:text-[#8B8B8B] tracking-widest uppercase">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </SectionWrapper>
);

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
                        <span>Computer Engineer</span>
                        <span className="text-green-500/40">/</span>
                        <span>Software Dev</span>
                        <span className="text-green-500/40">/</span>
                        <span>IT Admin</span>
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
                  variants={card3D}
                  className="flex flex-col rounded-3xl bg-[#F3F4F6] dark:bg-[#111] border border-[#E5E7EB] dark:border-[#333] p-6 md:p-8 shadow-sm hover:border-[#D1D5DB] dark:hover:border-[#4B5563] transition-colors"
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
                  variants={card3D}
                  className="flex flex-col rounded-3xl bg-[#F3F4F6] dark:bg-[#111] border border-[#E5E7EB] dark:border-[#333] p-6 md:p-8 shadow-sm hover:border-[#D1D5DB] dark:hover:border-[#4B5563] transition-colors"
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

// --- PROJECTS SECTION COMPONENT ---
const Projects = () => (
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

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
      >
        {PROJECTS_DATA.map((project) => (
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
                      title={project.secondaryDemoLabel || "Secondary Link"}
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
    </div>
  </SectionWrapper>
);

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
                  and live video demonstrations. This module is pending
                  deployment in v2.0.
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
            variants={staggerContainer}
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
                variants={fadeUp3D}
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-[13px] md:text-[14px] font-mono font-medium text-[#6B7280] hover:text-green-600 dark:text-[#A1A1AA] dark:hover:text-green-400 transition-colors"
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
              className="w-full mt-2 flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#1F2937] dark:bg-white text-white dark:text-[#111] text-[12px] font-mono tracking-widest uppercase font-bold hover:bg-green-600 dark:hover:bg-green-500 hover:text-white dark:hover:text-white transition-all shadow-md"
            >
              <span>Send Message</span>
              <SendIcon className="w-4 h-4 shrink-0" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

// --- FOOTER COMPONENT ---
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
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-[13px] md:text-[14px] font-mono font-medium text-[#6B7280] hover:text-green-600 dark:text-[#A1A1AA] dark:hover:text-green-400 transition-colors"
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                  <span>{social.name}</span>
                  <ArrowUpRightIcon className="w-3 h-3 md:w-3.5 md:h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
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

// --- APP ROOT ---
const App = () => {
  return (
    <ThemeProvider>
      <div className="font-sans min-h-screen transition-colors duration-300 antialiased selection:bg-[#E5E7EB]">
        <AppNavigation />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
