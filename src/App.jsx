import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
} from "react";
import CompactVisitorCounter from "./api/CompactVisitorsCounter";

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
  const [theme, setTheme] = useState("light"); // Defaulted to light for the pristine white aesthetic

  useEffect(() => {
    // Ultra-clean light mode vs Deep minimalist dark mode
    document.body.className =
      theme === "dark"
        ? "dark bg-[#111111] text-[#E5E7EB] selection:bg-blue-500/30"
        : "light bg-[#FAFAFA] text-[#1F2937] selection:bg-blue-500/30";

    // Globally enforcing the font and line-height requirements
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

// --- ASSETS & DATA ---
const HERO_TITLES = [
  "Full-Stack Web Developer",
  "UI/UX Designer",
  "IoT Enthusiast",
  "Tech Repair & Care",
];

const PROJECTS_DATA = [
  {
    id: 1,
    type: "personal",
    title: "arvin.dev Portfolio",
    subtitle: "Interactive React Application",
    category: "Portfolio Site",
    description:
      "Designed a highly interactive, native-app-like personal portfolio using React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "Vite", "API"],
    video: "/assets/portfolio-demo.mp4",
    demoLink: "https://arvintenasas-portfolio.vercel.app/",
    githubLink: "https://github.com/tenasasarvin/my-port-folio.git",
  },
  {
    id: 2,
    type: "personal",
    title: "BALAY Management",
    subtitle: "Dual-Portal Property Platform",
    category: "Web & App",
    description:
      "Engineered a secure dual-portal management system for landlords and tenants to seamlessly handle property data.",
    tags: ["React Native", "Expo", "Supabase", "UI/UX"],
    video: "/assets/balay-demo.mp4",
    githubLink: "https://github.com/tenasasarvin/balay.git",
    statusNote: "In development. Source accessible.",
  },
  {
    id: 3,
    type: "client",
    title: "LSI Corporate Portal",
    subtitle: "Legacy WordPress Modernization",
    category: "Full-Stack Web",
    description:
      "Modernized a legacy architecture into a high-performance custom web application deployed on Vercel.",
    tags: ["Next.js", "Node.js", "MySQL"],
    video: "/assets/lsi-demo.mp4",
    demoLink: "https://lsi-node-web.vercel.app/",
    demoLinkLabel: "Modern Site",
    secondaryDemoLink: "https://lsi.com.ph/",
    secondaryDemoLabel: "Legacy Site",
    statusNote: "Code restricted (NDA).",
  },
  {
    id: 4,
    type: "personal",
    title: "SmartPen: IoT Feeder",
    subtitle: "Remote Aquaculture Automation",
    category: "Hardware & IoT",
    description:
      "Developed a 3-tier remote aquaculture system syncing real-time data to Firebase.",
    tags: ["Microcontrollers", "FlutterFlow", "Firebase"],
    video: "/assets/smartpen-demo.mp4",
    statusNote: "Academic Capstone (Proprietary)",
  },
];

// --- APP-LIKE REUSABLE COMPONENTS ---

// Card Wrapper for the Card-based UI requirement
const Card = ({ children, className = "" }) => (
  <div
    className={`bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#E5E7EB] dark:border-[#262626] rounded-[12px] shadow-sm p-5 md:p-6 transition-all ${className}`}
  >
    {children}
  </div>
);

// Secondary Text style component
const SubText = ({ children, className = "" }) => (
  <p className={`text-[12px] text-[#6B7280] dark:text-[#A1A1AA] ${className}`}>
    {children}
  </p>
);

// Base Wrapper for Sections
const SectionWrapper = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`py-12 md:py-20 px-4 md:px-6 max-w-6xl mx-auto w-full flex flex-col gap-6 ${className}`}
  >
    {children}
  </section>
);

// Minimalist Header
const SectionHeader = ({ title }) => (
  <div className="mb-4 md:mb-6">
    <h3 className="text-[18px] md:text-[20px] font-bold text-[#1F2937] dark:text-[#F9FAFB] tracking-tight">
      {title}
    </h3>
  </div>
);

// ==========================================
// 1. Navigation & App Bars
// ==========================================
const AppNavigation = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Replace with your actual theme context hook
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Triggers the glassmorphic state when scrolling down past 20px
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "About Me", icon: UserIcon },
    { id: "services", label: "My Services", icon: LayersIcon },
    { id: "projects", label: "My Projects", icon: CodeIcon },
    { id: "contact", label: "Contact Me", icon: MailIcon },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-3 md:top-4 left-0 w-full z-50 flex justify-center px-4 md:px-6 transition-all duration-300 transform ${
        isVisible ? "translate-y-0" : "-translate-y-[150%]"
      }`}
    >
      <div
        className={`relative flex items-center justify-between w-full max-w-6xl gap-3 px-4 md:px-6 py-2 md:py-3 rounded-2xl transition-all duration-300 border ${
          isScrolled
            ? "bg-white/80 dark:bg-[#111111]/80 shadow-lg border-[#E5E7EB]/50 dark:border-[#262626]/50 backdrop-blur-md"
            : "bg-transparent border-transparent shadow-none"
        }`}
      >
        {/* LEFT SIDE: Name (Home Button) + Navigation Links Grouped Together */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => scrollToSection("home")}
            className={`text-[13px] font-medium tracking-tight cursor-pointer shrink-0 transition-colors duration-200 ${
              activeSection === "home"
                ? "text-[#1F2937] dark:text-white"
                : "text-[#1F2937] dark:text-gray-200 hover:text-gray-500 dark:hover:text-white"
            }`}
          >
            Arvin Tenasas
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`py-1 text-[13px] font-medium transition-colors duration-200 ${
                  activeSection === link.id
                    ? "text-[#1F2937] dark:text-white font-bold"
                    : "text-[#6B7280] hover:text-[#1F2937] dark:hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Desktop Actions, Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          {/* Desktop Only "Download CV" Button - FIXED */}
          <div className="hidden md:flex items-center">
            <a
              href="/updated-resume-arvin.pdf"
              download="Arvin_Tenasas_Resume.pdf"
              className="text-[13px] font-medium px-4 py-2 rounded-3xl bg-[#1F2937] dark:bg-white text-white dark:text-black hover:opacity-90 transition inline-block text-center"
            >
              Download CV
            </a>
          </div>

          {/* Desktop Theme Toggle Button (Hidden on Mobile) */}
          <button
            onClick={toggleTheme}
            className="hidden md:flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1.5 md:py-2 rounded-3xl border border-[#E5E7EB] dark:border-[#262626] text-[#6B7280] bg-[#FAFAFA] dark:bg-[#111111] hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <>
                <SunIcon className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
                <span className="text-[11px] md:text-[13px] font-medium whitespace-nowrap">
                  Light Theme
                </span>
              </>
            ) : (
              <>
                <MoonIcon className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
                <span className="text-[11px] md:text-[13px] font-medium whitespace-nowrap">
                  Dark Theme
                </span>
              </>
            )}
          </button>

          {/* Mobile Menu Hamburger (Visible only on Mobile) */}
          <div className="md:hidden flex items-center shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-[#6B7280] dark:text-gray-400 hover:text-[#1F2937] dark:hover:text-white transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <XIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Floating Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[calc(100%+0.75rem)] left-0 right-0 md:hidden animate-fadeInUp z-50">
            <div className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl shadow-2xl border border-[#E5E7EB] dark:border-[#262626] rounded-2xl p-3 flex flex-col gap-1.5 w-full">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`relative flex items-center gap-3 p-2.5 rounded-xl transition-colors text-left group text-sm ${
                      activeSection === link.id
                        ? "bg-gray-100 dark:bg-neutral-800 text-[#1F2937] dark:text-white font-bold"
                        : "hover:bg-gray-50 dark:hover:bg-neutral-800/50 text-[#6B7280] dark:text-gray-300"
                    }`}
                  >
                    {IconComponent && (
                      <IconComponent
                        className={`w-4 h-4 shrink-0 ${
                          activeSection === link.id
                            ? "text-[#1F2937] dark:text-white"
                            : ""
                        }`}
                      />
                    )}
                    <span className="whitespace-nowrap">{link.label}</span>
                  </button>
                );
              })}

              <div className="h-px w-full bg-[#E5E7EB] dark:bg-[#262626] my-1"></div>

              {/* Mobile Only Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative flex items-center gap-3 p-2.5 rounded-xl transition-colors text-left group text-sm hover:bg-gray-50 dark:hover:bg-neutral-800/50 text-[#6B7280] dark:text-gray-300"
              >
                {theme === "dark" ? (
                  <SunIcon className="w-4 h-4 shrink-0 text-orange-400" />
                ) : (
                  <MoonIcon className="w-4 h-4 shrink-0" />
                )}
                <span className="whitespace-nowrap">
                  {theme === "dark" ? "Light Theme" : "Dark Theme"}
                </span>
              </button>

              {/* Mobile Download CV Action - FIXED */}
              <a
                href="/updated-resume-arvin.pdf"
                download="Arvin_Tenasas_Resume.pdf"
                className="w-full flex justify-center items-center gap-2 py-2.5 mt-1 rounded-xl bg-[#1F2937] dark:bg-white text-white dark:text-black text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <DownloadIcon className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
// ==========================================
// 2. Sections
// ==========================================

const Hero = () => (
  <SectionWrapper
    id="home"
    className="pt-32 pb-12 md:pt-40 md:pb-24 items-start"
  >
    <div className="max-w-3xl">
      <div className="inline-block px-3 py-1 mb-4 rounded-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#1A1A1A] shadow-sm">
        <span className="flex items-center gap-2 text-[12px] font-medium">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Available for Work
        </span>
      </div>
      <h1 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold tracking-tight text-[#1F2937] dark:text-white leading-[1.2] mb-4">
        Hi, I'm Arvin. I bridge the gap between digital code and physical
        infrastructure.
      </h1>
      <p className="text-[14px] md:text-[16px] text-[#6B7280] dark:text-[#A1A1AA] leading-[1.6] max-w-2xl mb-8">
        Computer Engineer specializing in full-stack web development, IoT
        solutions, and robust IT infrastructure. Architecting scalable software
        and optimizing hardware performance.
      </p>

      {/* Social Links Mini */}
      <div className="flex gap-4 items-center">
        {[
          { icon: GithubIcon, link: "#" },
          { icon: LinkedinIcon, link: "#" },
          { icon: MailIcon, link: "#" },
        ].map((social, i) => (
          <a
            key={i}
            href={social.link}
            className="text-[#6B7280] hover:text-[#1F2937] dark:hover:text-white transition-colors"
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

const About = () => (
  <SectionWrapper id="about">
    <SectionHeader title="Experience & Arsenal" />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Experience Timeline Card */}
      <Card>
        <h4 className="text-[14px] font-bold mb-6 flex items-center gap-2 uppercase tracking-wide text-[#1F2937] dark:text-[#F9FAFB]">
          <BriefcaseIcon className="w-4 h-4 text-[#6B7280]" /> Career Timeline
        </h4>
        <div className="flex flex-col gap-6">
          <div className="relative pl-6 border-l border-[#E5E7EB] dark:border-[#333]">
            <div className="absolute w-2 h-2 bg-[#2563EB] rounded-full -left-[4.5px] top-1.5 ring-4 ring-white dark:ring-[#1A1A1A]"></div>
            <h5 className="text-[14px] font-semibold text-[#1F2937] dark:text-white">
              Full-Stack Dev / Field Tech
            </h5>
            <SubText>
              LSI Leading Technologies Inc. • Mar 2025 - Present
            </SubText>
          </div>
          <div className="relative pl-6 border-l border-[#E5E7EB] dark:border-[#333]">
            <div className="absolute w-2 h-2 bg-[#D1D5DB] dark:bg-[#4B5563] rounded-full -left-[4.5px] top-1.5 ring-4 ring-white dark:ring-[#1A1A1A]"></div>
            <h5 className="text-[14px] font-semibold text-[#1F2937] dark:text-white">
              IT Administrator
            </h5>
            <SubText>
              Great Odysseus Security Agency • Aug 2024 - Jan 2025
            </SubText>
          </div>
          <div className="relative pl-6 border-l border-[#E5E7EB] dark:border-[#333]">
            <div className="absolute w-2 h-2 bg-[#D1D5DB] dark:bg-[#4B5563] rounded-full -left-[4.5px] top-1.5 ring-4 ring-white dark:ring-[#1A1A1A]"></div>
            <h5 className="text-[14px] font-semibold text-[#1F2937] dark:text-white">
              BS Computer Engineering
            </h5>
            <SubText>Samar State University • Graduated 2024</SubText>
          </div>
        </div>
      </Card>

      {/* Tech Arsenal Card */}
      <Card>
        <h4 className="text-[14px] font-bold mb-6 flex items-center gap-2 uppercase tracking-wide text-[#1F2937] dark:text-[#F9FAFB]">
          <CodeIcon className="w-4 h-4 text-[#6B7280]" /> Tech Stack
        </h4>
        <div className="flex flex-col gap-5">
          <div>
            <SubText className="mb-2 font-medium">Frontend & Web</SubText>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Tailwind CSS", "JavaScript", "Vite"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#F3F4F6] dark:bg-[#262626] text-[#374151] dark:text-[#D1D5DB] rounded-lg text-[13px] border border-[#E5E7EB] dark:border-[#333]"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
          <div>
            <SubText className="mb-2 font-medium">Backend & Hardware</SubText>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "MySQL", "Supabase", "C++", "Arduino / ESP32"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#F3F4F6] dark:bg-[#262626] text-[#374151] dark:text-[#D1D5DB] rounded-lg text-[13px] border border-[#E5E7EB] dark:border-[#333]"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  </SectionWrapper>
);

const Projects = () => (
  <SectionWrapper id="projects">
    <SectionHeader title="Featured Projects" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {PROJECTS_DATA.map((project) => (
        <Card
          key={project.id}
          className="flex flex-col p-0 overflow-hidden group"
        >
          {/* Aesthetic mock video/image container */}
          <div className="relative h-48 bg-[#F3F4F6] dark:bg-[#262626] overflow-hidden border-b border-[#E5E7EB] dark:border-[#333]">
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur text-[11px] font-semibold px-2 py-1 rounded-md shadow-sm border border-[#E5E7EB] dark:border-[#333]">
              {project.category}
            </div>
          </div>
          <div className="p-5 flex flex-col flex-1">
            <h4 className="text-[16px] font-bold text-[#1F2937] dark:text-white mb-1">
              {project.title}
            </h4>
            <SubText className="mb-3">{project.subtitle}</SubText>
            <p className="text-[13px] text-[#4B5563] dark:text-[#A1A1AA] mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="mt-auto flex items-center justify-between gap-3">
              <div className="flex gap-1 flex-wrap">
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-[#6B7280] dark:text-[#A1A1AA] bg-[#F9FAFB] dark:bg-[#111] px-2 py-0.5 rounded border border-[#E5E7EB] dark:border-[#333]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="p-2 rounded-lg bg-[#F3F4F6] dark:bg-[#262626] hover:bg-[#E5E7EB] dark:hover:bg-[#333] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-[#1F2937] dark:text-white" />
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    className="p-2 rounded-lg bg-[#1F2937] dark:bg-white text-white dark:text-black hover:opacity-90 transition-colors"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </SectionWrapper>
);

const Services = () => (
  <SectionWrapper id="services">
    <SectionHeader title="Services" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        {
          title: "Web Development",
          desc: "Scalable, native-like web apps optimized for performance.",
          icon: CodeIcon,
        },
        {
          title: "IT & PC Repair",
          desc: "Hardware diagnostics, custom builds, and OS configurations.",
          icon: WrenchIcon,
        },
        {
          title: "IoT Solutions",
          desc: "Bridging hardware sensors to web databases via ESP32/Arduino.",
          icon: CpuIcon,
        },
      ].map((svc, i) => (
        <Card
          key={i}
          className="hover:border-[#D1D5DB] dark:hover:border-[#4B5563]"
        >
          <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] dark:bg-[#262626] flex items-center justify-center mb-4 border border-[#E5E7EB] dark:border-[#333]">
            <svc.icon className="w-5 h-5 text-[#1F2937] dark:text-white" />
          </div>
          <h4 className="text-[14px] font-bold mb-2 text-[#1F2937] dark:text-white">
            {svc.title}
          </h4>
          <p className="text-[13px] text-[#6B7280] dark:text-[#A1A1AA]">
            {svc.desc}
          </p>
        </Card>
      ))}
    </div>
  </SectionWrapper>
);

const Contact = () => (
  <SectionWrapper id="contact" className="mb-24 md:mb-12">
    <Card className="md:p-8 bg-white dark:bg-[#1A1A1A]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-[20px] font-bold text-[#1F2937] dark:text-white mb-2">
            Let's Connect
          </h3>
          <p className="text-[14px] text-[#6B7280] dark:text-[#A1A1AA] mb-6 max-w-sm">
            Need a full-stack dev, IT infrastructure modernized, or hardware
            troubleshoot? Reach out below.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-[13px] text-[#4B5563] dark:text-[#D1D5DB]">
              <MailIcon className="w-4 h-4 text-[#9CA3AF]" />{" "}
              arvintenasas29@gmail.com
            </div>
            <div className="flex items-center gap-3 text-[13px] text-[#4B5563] dark:text-[#D1D5DB]">
              <MapPinIcon className="w-4 h-4 text-[#9CA3AF]" /> Manila,
              Philippines
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-[12px] bg-[#F9FAFB] dark:bg-[#111] border border-[#E5E7EB] dark:border-[#333] text-[13px] text-[#1F2937] dark:text-white outline-none focus:border-[#9CA3AF] dark:focus:border-[#666] transition-colors"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-[12px] bg-[#F9FAFB] dark:bg-[#111] border border-[#E5E7EB] dark:border-[#333] text-[13px] text-[#1F2937] dark:text-white outline-none focus:border-[#9CA3AF] dark:focus:border-[#666] transition-colors"
          />
          <textarea
            placeholder="Your message..."
            rows="4"
            className="w-full p-3 rounded-[12px] bg-[#F9FAFB] dark:bg-[#111] border border-[#E5E7EB] dark:border-[#333] text-[13px] text-[#1F2937] dark:text-white outline-none focus:border-[#9CA3AF] dark:focus:border-[#666] transition-colors resize-none"
          ></textarea>
          <button className="w-full py-3 rounded-[12px] bg-[#1F2937] dark:bg-white text-white dark:text-black text-[14px] font-semibold hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </div>
    </Card>
  </SectionWrapper>
);

const Footer = () => (
  <footer className="border-t border-[#E5E7EB] dark:border-[#262626] bg-[#FFFFFF] dark:bg-[#111111] py-8 pb-32 md:pb-8">
    <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-[13px] font-medium text-[#6B7280]">
        &copy; {new Date().getFullYear()} Arvin Tenasas.
      </div>
      <div className="flex gap-4">
        <a
          href="#"
          className="text-[12px] text-[#6B7280] hover:text-[#1F2937] dark:hover:text-white"
        >
          Github
        </a>
        <a
          href="#"
          className="text-[12px] text-[#6B7280] hover:text-[#1F2937] dark:hover:text-white"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

// --- APP ROOT ---
const App = () => {
  return (
    <ThemeProvider>
      {/* The main container uses the requested #FAFAFA pure/off-white background.
        The font is forced to sans-serif with strict text sizing rules globally applied via Context.
      */}
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
