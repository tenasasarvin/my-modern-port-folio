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
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className =
      theme === "dark"
        ? "dark bg-neutral-950 text-gray-100 selection:bg-orange-500/30"
        : "light bg-gray-50 text-gray-900 selection:bg-orange-500/30";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

// --- ASSETS & DATA ---

const ASSETS = {
  profileImageUrl: "/profile2.jpg", // Updated placeholder color
};

// Updated HERO_TITLES with specific syntax highlighting colors
const HERO_TITLES = [
  { text: "Full-Stack Web Developer", color: "text-blue-400" },
  { text: "UI/UX Designer", color: "text-rose-400" },
  { text: "IoT Enthusiast", color: "text-emerald-400" },
  { text: "Problem Solver", color: "text-violet-400" },
  { text: "Tech Repair & Care", color: "text-yellow-400" },
  { text: "OS & Software Installer", color: "text-cyan-400" },
];

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
    demoLink: null, // Removed the live link since it's not deployed yet
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
    // --- NEW: Multiple Demo Links ---
    demoLink: "https://lsi-node-web.vercel.app/", // Put your Vercel Link here
    demoLinkLabel: "Modern Site (Vercel)",
    secondaryDemoLink: "https://lsi.com.ph/", // Put the Official old site link here
    secondaryDemoLabel: "Official Site (Legacy)",
    // --------------------------------
    githubLink: null, // Disabled due to company policy
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
    demoLink: null, // Academic hardware project
    githubLink: null, // Academic hardware project
    status: "Academic Capstone",
    statusNote:
      "Proprietary hardware system. Showcased via video demonstration.",
  },
];

// --- ANIMATION HOOK ---

const useScrollReveal = (ref) => {
  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    target.classList.add(
      "opacity-0",
      "translate-y-8",
      "transition-all",
      "duration-700",
      "ease-out",
    );
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [ref]);
};

const SectionWrapper = ({ id, children, className = "" }) => {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section
      id={id}
      ref={sectionRef}
      // Scaled down vertical padding for mobile (py-16), standard for desktop (py-24)
      className={`py-16 md:py-24 px-4 md:px-6 min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      <div className="w-full max-w-6xl mx-auto">{children}</div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  // Scaled down bottom margins and font sizes for smaller screens
  <div className="text-center mb-10 md:mb-16 reveal px-4">
    <h2 className="text-orange-500 font-bold tracking-[0.2em] text-[10px] md:text-xs lg:text-sm uppercase mb-2 md:mb-3">
      {subtitle}
    </h2>
    <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
      {title}
    </h3>
    <div className="w-16 md:w-20 h-1 md:h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-4 md:mt-6 rounded-full"></div>
  </div>
);

// ==========================================
// 2. Navigation Component
// ==========================================
const Navigation = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Replace this with however you actually manage theme state in your app
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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    // { id: "home", label: "Home", icon: HomeIcon },
    { id: "about", label: "About Me", icon: UserIcon },
    { id: "services", label: "My Services", icon: LayersIcon },
    { id: "projects", label: "My Projects", icon: CodeIcon },
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
        className={`relative flex items-center justify-between w-full max-w-6xl gap-4 px-4 md:px-6 py-2 md:py-3 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 dark:bg-neutral-900/70 shadow-lg border-gray-200/50 dark:border-neutral-700/50"
            : "bg-white/50 dark:bg-neutral-900/50 border-transparent shadow-sm"
        } backdrop-blur-md border`}
      >
        {/* LEFT SIDE: Logo & Navigation Links */}
        <div className="flex items-center gap-6 md:gap-10">
          {/* Logo */}
          <div
            className="cursor-pointer flex items-center justify-center shrink-0"
            onClick={() => scrollToSection("home")}
          >
            <div className="w-20 md:w-24 h-auto bg-transparent flex items-center justify-center">
              <img
                src="/logo-texts.png"
                alt="arvin.dev"
                className="object-contain"
              />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 group
                ${
                  activeSection === link.id
                    ? "text-orange-600 dark:text-orange-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full bg-orange-500 rounded-full transition-transform duration-300 origin-left ${
                    activeSection === link.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Expanded Theme Toggle, Contact Button & Mobile Menu */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Orange Contact Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2 text-sm font-medium text-white bg-orange-500 border border-transparent rounded-full shadow-sm hover:bg-orange-600 transition-all duration-200"
            >
              Contact Me
            </button>
            {/* Expanded Dark/Light Theme Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100/80 border border-transparent rounded-full hover:bg-gray-200 dark:text-gray-300 dark:bg-neutral-800/80 dark:hover:bg-neutral-700 transition-all duration-200"
            >
              {theme === "dark" ? (
                <>
                  <SunIcon className="w-4 h-4 text-orange-400" />
                  <span>Light Theme</span>
                </>
              ) : (
                <>
                  <MoonIcon className="w-4 h-4" />
                  <span>Dark Theme</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Menu & Small Theme Toggle */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
            <div className="w-px h-5 bg-gray-300 dark:bg-neutral-700 mx-1"></div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <XIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Floating Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[calc(100%+0.75rem)] left-4 right-4 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl shadow-2xl border border-gray-100 dark:border-neutral-800 rounded-2xl p-3 flex flex-col gap-1.5 md:hidden animate-fadeInUp">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative flex items-center gap-3 p-2.5 rounded-xl transition-colors text-left overflow-hidden group text-sm
                  ${
                    activeSection === link.id
                      ? "bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold"
                      : "hover:bg-gray-50 dark:hover:bg-neutral-800/50 text-gray-700 dark:text-gray-300"
                  }`}
              >
                <IconComponent
                  className={`w-4 h-4 ${
                    activeSection === link.id ? "text-orange-500" : ""
                  }`}
                />
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 rounded-r-full"></span>
                )}
              </button>
            );
          })}

          <div className="h-px w-full bg-gray-100 dark:bg-neutral-800 my-1"></div>

          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-3 p-2.5 rounded-xl transition-colors text-left text-sm bg-orange-500/10 text-orange-600 dark:text-orange-400 font-medium hover:bg-orange-500/20"
          >
            <MailIcon className="w-4 h-4" />
            <span>Contact Me</span>
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  // --- Animation Hooks ---
  useEffect(() => {
    const currentTitle = HERO_TITLES[titleIndex].text;
    const typingSpeed = 100;
    const deletingSpeed = 50;
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const particles = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle =
        theme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)";

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.strokeStyle =
        theme === "dark" ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)";
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [theme]);

  const socialLinks = [
    {
      Icon: GithubIcon,
      href: "https://github.com/tenasasarvin",
      label: "GitHub",
    },
    {
      Icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/arvin-d-tenasas-1ba6082b8/",
      label: "LinkedIn",
    },
    {
      Icon: FacebookIcon,
      href: "https://www.facebook.com/share/19GxD5xYNq/",
      label: "Facebook",
    },
    { Icon: MailIcon, href: "mailto:arvintenasas29@gmail.com", label: "Email" },
  ];

  // --- UI Layout Pieces ---

  // Main Text Header
  const headerContent = (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-extrabold tracking-tight leading-[1.15] md:leading-[1.1] transition-all text-center lg:text-left w-full px-2 lg:px-0">
      <span className="block xl:block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white animate-gradient-text">
        Crafting Digital
      </span>{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 animate-gradient-text block xl:block">
        Experiences
      </span>
    </h1>
  );

  // Paragraph Summary
  const paragraphContent = (
    <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-neutral-300 max-w-2xl xl:max-w-3xl mx-auto lg:mx-0 leading-relaxed text-center lg:text-justify transition-colors duration-300 px-2 lg:px-0">
      Computer Engineer skilled in full-stack web development, IoT solutions,
      and IT infrastructure. Proven ability to architect scalable software and
      execute end-to-end hardware, network, and UPS troubleshooting. Strong
      problem-solver and system analyst, effective both independently and within
      collaborative team environments.
    </p>
  );

  // Action Buttons
  const buttonsContent = (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
      <button
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="group relative px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 animate-gradient-bg text-white text-xs sm:text-sm xl:text-base font-semibold transition-all duration-300 hover:-translate-y-1 shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] active:scale-95 overflow-hidden flex items-center justify-center gap-2"
      >
        <BriefcaseIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 relative z-10" />
        <span className="relative z-10 whitespace-nowrap">View My Work</span>
      </button>

      <a
        href="/updated-resume-arvin.pdf"
        download
        className="group px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-700 text-gray-900 dark:text-white text-xs sm:text-sm xl:text-base font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
      >
        <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-orange-500" />
        Download CV
      </a>
    </div>
  );

  // --- FIX APPLIED HERE: Corrected variables and added 'group' class ---
  // Social Links (Continuous Floating + Premium Circular Backgrounds)
  const socialsContent = (
    <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 transition-all w-full animate-float">
      {socialLinks.map(({ Icon: icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-gray-500 dark:text-gray-400 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-[0_4px_15px_rgba(249,115,22,0.4)] hover:-translate-y-1 active:scale-95"
          aria-label={label}
        >
          {React.createElement(icon, {
            className:
              "w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:scale-110",
          })}
        </a>
      ))}
    </div>
  );

  // Unified Mobile Container
  const mobileCodeContainer = (
    <div className="relative w-full max-w-[95%] mx-auto lg:hidden flex flex-col items-center gap-2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md border border-gray-200/60 dark:border-neutral-700/50 rounded-2xl p-4 pt-8 shadow-sm">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white dark:bg-black border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md dark:shadow-lg whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-[10px] font-bold text-gray-800 dark:text-white tracking-wider">
          OPEN FOR WORK/FREELANCE
        </span>
      </div>

      <div className="font-mono text-xs sm:text-sm flex flex-wrap items-center justify-center gap-1.5">
        <span className="text-purple-600 dark:text-purple-400 font-semibold">
          const
        </span>
        <span className="text-blue-600 dark:text-blue-400 font-semibold">
          developer
        </span>
        <span className="text-gray-500 dark:text-neutral-400 font-semibold">
          =
        </span>
        <span className="text-orange-600 dark:text-orange-500 font-semibold text-center">
          "Hello World! I am Arvin"
        </span>
        <span className="text-gray-500 dark:text-neutral-400 font-semibold">
          ;
        </span>
      </div>
      <div className="min-h-[24px] h-auto font-mono text-[13px] sm:text-base flex items-center justify-center gap-2 w-full text-center flex-wrap">
        <span className="text-orange-500 font-bold">&gt;</span>
        <span className={`${HERO_TITLES[titleIndex].color}`}>{text}</span>
        <span className="animate-pulse text-orange-500 font-bold">|</span>
      </div>
    </div>
  );

  // Desktop Profile Overlaid Display
  const profileDesktopContent = (
    <div className="relative group w-full max-w-[400px] xl:max-w-[440px] aspect-square rounded-3xl z-10 mx-auto lg:mx-0 cursor-pointer">
      <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-purple-500 to-amber-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-700 group-hover:duration-200"></div>

      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/20 bg-gray-100 dark:bg-neutral-900 transition-transform duration-500 group-hover:scale-[1.02]">
        <img
          src="/profile2.jpg"
          alt="Arvin Profile"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute top-4 left-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-1 translate-y-2 animate-float">
          <div className="bg-white/95 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></span>
            <span className="text-[10px] xl:text-xs font-bold text-gray-800 dark:text-white tracking-wide">
              OPEN FOR WORK/FREELANCE
            </span>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 p-4 xl:p-5 rounded-2xl bg-white/80 dark:bg-black/60 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-xl flex flex-col gap-2 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/95 dark:group-hover:bg-black/80">
          <div className="font-mono text-[11px] xl:text-xs flex flex-wrap items-center gap-1.5 drop-shadow-sm dark:drop-shadow-md">
            <span className="text-purple-600 dark:text-purple-400 font-bold">
              const
            </span>
            <span className="text-blue-600 dark:text-blue-400 font-bold">
              developer
            </span>
            <span className="text-gray-500 dark:text-gray-300 font-bold">
              =
            </span>
            <span className="text-orange-600 dark:text-orange-400 font-bold">
              "Hello World! I am Arvin"
            </span>
            <span className="text-gray-500 dark:text-gray-300 font-bold">
              ;
            </span>
          </div>

          <div className="font-mono text-sm xl:text-base flex items-center gap-2 drop-shadow-sm dark:drop-shadow-md flex-wrap">
            <span className="text-orange-500 font-bold">&gt;</span>
            <span
              className={`${HERO_TITLES[titleIndex].color} font-semibold tracking-wide`}
            >
              {text}
            </span>
            <span className="animate-pulse text-orange-500 font-bold">|</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="home"
      className="min-h-[100svh] pt-28 pb-16 lg:py-0 relative flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-neutral-900"
    >
      <style>{`
        @keyframes gradient-pan {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradient-pan 4s linear infinite;
        }
        .animate-gradient-bg {
          background-size: 200% 200%;
          animation: gradient-pan 3s ease infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="absolute inset-0 z-[1] lg:hidden pointer-events-none">
        <img
          src="/profile2.jpg"
          alt="Profile Background"
          className="w-full h-full object-cover opacity-85 dark:opacity-50 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-neutral-900/70 dark:to-neutral-900" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-5 sm:gap-6 lg:hidden w-full mt-8 md:mt-12">
          {mobileCodeContainer}
          {headerContent}
          {paragraphContent}
          {buttonsContent}
          <div className="mt-4">{socialsContent}</div>
        </div>

        <div className="hidden lg:grid grid-cols-12 gap-10 xl:gap-16 items-center w-full min-h-[70vh]">
          <div className="col-span-5 flex justify-center lg:justify-start xl:justify-center w-full">
            {profileDesktopContent}
          </div>

          <div className="col-span-7 flex flex-col items-start gap-6 xl:gap-8 w-full">
            {headerContent}
            {paragraphContent}
            {buttonsContent}
            {socialsContent}
          </div>
        </div>
      </div>

      <div
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-6 md:bottom-8 lg:bottom-6 xl:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group z-20"
      >
        <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold text-gray-400 dark:text-neutral-500 group-hover:text-orange-500 transition-colors duration-300">
          Scroll
        </span>
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-400 dark:border-neutral-500 group-hover:border-orange-500 rounded-full flex justify-center p-1 transition-colors duration-300">
          <div className="w-1 h-2 md:w-1 md:h-2.5 bg-gray-400 dark:bg-neutral-500 group-hover:bg-orange-500 rounded-full animate-bounce transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  // --- State for Tab Navigation ---
  const [activeTab, setActiveTab] = useState("summary");

  // Categorized technologies for a cleaner, more organized UI
  const techCategories = [
    {
      title: "Frontend & Design",
      skills: [
        {
          name: "React",
          color: "text-cyan-400 dark:text-cyan-400",
          Icon: ReactIcon,
        },
        {
          name: "Next.js",
          color: "text-black dark:text-white",
          Icon: NextJsIcon,
        },
        {
          name: "Tailwind CSS",
          color: "text-sky-500 dark:text-sky-400",
          Icon: TailwindIcon,
        },
        {
          name: "Vite",
          color: "text-purple-500 dark:text-purple-400",
          Icon: ViteIcon,
        },
        {
          name: "HTML5",
          color: "text-orange-600 dark:text-orange-500",
          Icon: Html5Icon,
        },
        { name: "CSS3", color: "text-blue-500", Icon: Css3Icon },
        { name: "JavaScript", color: "text-yellow-500", Icon: JsIcon },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        {
          name: "Node.js",
          color: "text-green-600 dark:text-green-500",
          Icon: NodeJsIcon,
        },
        {
          name: "Next.js API",
          color: "text-black dark:text-white",
          Icon: NextJsIcon,
        },
        {
          name: "Supabase",
          color: "text-emerald-500 dark:text-emerald-400",
          Icon: SupabaseIcon,
        },
        {
          name: "MySQL",
          color: "text-blue-500 dark:text-blue-400",
          Icon: DatabaseIcon,
        },
      ],
    },
    {
      title: "Hardware & Infra",
      skills: [
        {
          name: "C++",
          color: "text-blue-700 dark:text-blue-500",
          Icon: CppIcon,
        },
        {
          name: "ESP32 / Arduino",
          color: "text-emerald-600 dark:text-emerald-500",
          Icon: CpuIcon,
        },
        {
          name: "IoT Systems",
          color: "text-gray-800 dark:text-gray-300",
          Icon: ServerIcon,
        },
      ],
    },
    {
      title: "IT Support & Services",
      skills: [
        {
          name: "Windows / MS Office",
          color: "text-blue-500",
          Icon: WrenchIcon,
        },
        { name: "Hardware Repair", color: "text-orange-500", Icon: LayersIcon },
        { name: "Network Config", color: "text-green-500", Icon: TerminalIcon },
      ],
    },
  ];

  // Reusable premium timeline component
  const TimelineItem = ({ date, title, company, desc, bullets, isCurrent }) => (
    <div className="relative pl-8 md:pl-10 pb-12 border-l-2 border-gray-200 dark:border-neutral-800 last:border-0 last:pb-0 group">
      {/* Timeline Dot with Pulse Effect for Current Role */}
      <div
        className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-neutral-950 z-10 transition-colors duration-300 ${
          isCurrent
            ? "bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)] animate-pulse"
            : "bg-gray-300 dark:bg-neutral-600 group-hover:bg-orange-400 group-hover:scale-110"
        }`}
      ></div>

      {/* Content */}
      <div className="flex flex-col gap-1.5 mb-3">
        <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-tight">
          {title}
        </h4>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <span className="text-orange-600 dark:text-orange-500 font-semibold text-sm md:text-base">
            {company}
          </span>
          <span className="hidden sm:block text-gray-300 dark:text-neutral-600">
            •
          </span>
          {/* Integrated Calendar Icon Here */}
          <span className="flex items-center gap-1.5 text-xs md:text-sm font-mono font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-neutral-900/80 px-3 py-1 rounded-md w-fit border border-gray-200 dark:border-neutral-800">
            <CalendarIcon className="w-3.5 h-3.5 shrink-0" />
            {date}
          </span>
        </div>
      </div>

      <p className="text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {desc}
      </p>

      {bullets && bullets.length > 0 && (
        <ul className="flex flex-col gap-2">
          {bullets.map((bullet, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-sm md:text-base text-gray-600 dark:text-gray-400"
            >
              <span className="text-orange-500/60 mt-1 shrink-0 text-xs">
                ✦
              </span>
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <SectionWrapper
      id="about"
      className="relative bg-gray-50 dark:bg-neutral-950 overflow-hidden"
    >
      {/* Section-Wide Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="My Background" subtitle="About & Experience" />

        {/* ========================================= */}
        {/* TAB NAVIGATION BUTTONS                    */}
        {/* ========================================= */}
        <div className="flex justify-center mt-8 md:mt-12 mb-8 md:mb-16">
          <div className="inline-flex p-1.5 bg-gray-100 dark:bg-neutral-900/50 backdrop-blur-sm border border-gray-200 dark:border-neutral-800 rounded-2xl">
            <button
              onClick={() => setActiveTab("summary")}
              className={`px-6 sm:px-8 py-2.5 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === "summary"
                  ? "bg-white dark:bg-neutral-800 text-orange-500 shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Professional Summary
            </button>
            <button
              onClick={() => setActiveTab("media")}
              className={`px-6 sm:px-8 py-2.5 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === "media"
                  ? "bg-white dark:bg-neutral-900 text-orange-500 shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Gallery & Certifications
            </button>
          </div>
        </div>

        {/* ========================================= */}
        {/* TAB CONTENT: PROFESSIONAL SUMMARY         */}
        {/* ========================================= */}
        {activeTab === "summary" && (
          <div className="mt-8 md:mt-12 flex flex-col lg:flex-row gap-16 lg:gap-24 animate-fade-in">
            {/* LEFT COLUMN: Profile, Tech & Education */}
            <div className="flex-1 lg:w-1/2 flex flex-col gap-16">
              {/* 1. Summary Section */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Who I <span className="text-orange-500">Am</span>
                  </h3>
                  <div className="h-[2px] flex-1 max-w-[12rem] bg-gradient-to-r from-orange-500/50 to-transparent dark:from-orange-500/30 rounded-full mt-1 sm:mt-2"></div>
                </div>

                {/* Connected Identity & Role Block */}
                <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 items-baseline pl-1 md:pl-2">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-neutral-500">
                    Name
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    Arvin D. Tenasas
                  </div>

                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-neutral-500 mt-1">
                    Role
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                    {[
                      "Computer Engineer",
                      "Software Developer",
                      "IT Administrator",
                      "Field Technician",
                      "IT Support",
                    ].map((role, i, arr) => (
                      <React.Fragment key={i}>
                        <span className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 cursor-default">
                          {role}
                        </span>
                        {i < arr.length - 1 && (
                          <span className="text-orange-500/40 dark:text-orange-500/30 font-light select-none">
                            |
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-neutral-500 mt-1">
                    Base
                  </div>
                  <div className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                    Philippines
                  </div>

                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-neutral-500 mt-2">
                    Bio
                  </div>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mt-1.5">
                    Evolving with technology, building solutions, and enjoying
                    life’s simple flavors.
                  </p>
                </div>
              </div>

              {/* 2. Categorized Tech Arsenal */}
              <div>
                <h5 className="font-bold mb-8 text-sm md:text-base text-gray-900 dark:text-white uppercase tracking-widest flex items-center gap-3 border-b border-gray-200 dark:border-neutral-800 pb-4">
                  <CodeIcon className="w-5 h-5 text-orange-500" /> Technical
                  Arsenal
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 items-start">
                  {techCategories.map((category) => (
                    <div key={category.title} className="flex flex-col gap-4">
                      <h6 className="text-xs font-bold text-orange-500 dark:text-orange-400 uppercase tracking-widest">
                        {category.title}
                      </h6>
                      <div className="flex flex-wrap gap-2.5">
                        {category.skills.map((tech) => (
                          <div
                            key={tech.name}
                            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50/80 dark:bg-neutral-800/40 border border-gray-200/80 dark:border-neutral-700/50 backdrop-blur-sm shadow-sm hover:border-orange-500/50 hover:bg-orange-50/50 dark:hover:bg-orange-500/10 transition-all duration-300 group cursor-default"
                          >
                            <tech.Icon className="w-4 h-4 shrink-0 text-gray-500 dark:text-neutral-400 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300" />
                            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Education Section */}
              <div>
                <div className="flex items-center gap-4 mb-10 mt-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0 shadow-inner">
                    <GraduationCapIcon className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Education
                  </h4>
                </div>

                <div>
                  <TimelineItem
                    isCurrent={false}
                    date="June 2020 - June 2024"
                    title="BS in Computer Engineering"
                    company="Samar State University"
                    desc="Developed a strong engineering mindset, merging low-level electronics with high-level software development."
                    bullets={[
                      "Co-lead Developer for the 'SmartPen' IoT handwriting digitization thesis.",
                      "Mastered core fundamentals in C++, embedded systems, and circuitry.",
                      "Graduated with practical skills bridging IoT devices to web databases.",
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Work Experience Timeline */}
            <div className="flex-1 lg:w-1/2 lg:pl-16 lg:border-l border-gray-200 dark:border-neutral-800 pt-8 lg:pt-0">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0 shadow-inner">
                  <BriefcaseIcon className="w-6 h-6" />
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Work Experience
                </h4>
              </div>

              <div className="mb-16">
                <TimelineItem
                  isCurrent={true}
                  date="March 2025 - June 2026"
                  title="Full-Stack Web Developer / Field Tech"
                  company="LSI Leading Technologies Inc."
                  desc="Developed modern web applications and executed UPS/Network infrastructure configuration."
                  bullets={[
                    "Developed modern web applications featuring API integration and database management.",
                    "Performed system analysis, debugging, and software performance optimization.",
                    "Executed UPS installation, configuration, and repair for in-house and field operations.",
                    "Collaborated with cross-functional teams to deliver scalable software and hardware solutions.",
                  ]}
                />

                <TimelineItem
                  isCurrent={false}
                  date="August 2024 - January 2025"
                  title="IT Administrator"
                  company="Great Odysseus Security Agency, Inc."
                  desc="Managed network infrastructure, hardware maintenance, and technical liaison operations."
                  bullets={[
                    "Managed network infrastructure and configured firewall policies to secure system access.",
                    "Troubleshot and maintained office hardware, including desktop PCs, laptops, and printers.",
                    "Served as the technical liaison with external developers to coordinate system requirements.",
                    "Assisted with essential administrative operations, including processing checks and bank transfers.",
                  ]}
                />

                <TimelineItem
                  isCurrent={false}
                  date="Feb 2024 - May 2024"
                  title="Technical Support Intern"
                  company="Bits N' Bytes Computer Shop"
                  desc="Gained foundational hands-on experience in consumer electronics repair and system building."
                  bullets={[
                    "Diagnosed complex hardware and software issues for retail clients.",
                    "Assembled and optimized custom PC builds tailored to user budgets.",
                  ]}
                />
              </div>
            </div>
          </div>
        )}

        {/* ========================================= */}
        {/* TAB CONTENT: CERTIFICATIONS & MEDIA       */}
        {/* ========================================= */}
        {activeTab === "media" && (
          <div className="mt-8 md:mt-12 animate-fade-in w-full flex items-center justify-center min-h-[50vh]">
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Aesthetic Background Glow for the Coming Soon Box */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-20 dark:opacity-30"></div>

              <div className="relative flex flex-col items-center justify-center p-12 md:p-20 text-center bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-2 border-dashed border-gray-200 dark:border-neutral-700 rounded-3xl">
                {/* Custom SVG Icon Array Setup */}
                <div className="relative flex items-center justify-center mb-8">
                  <div className="absolute inset-0 bg-orange-500 blur-xl opacity-30 rounded-full animate-pulse"></div>
                  <div className="w-20 h-20 bg-orange-100 dark:bg-orange-500/10 rounded-2xl flex items-center justify-center rotate-3 transition-transform hover:rotate-0 duration-300 shadow-xl border border-orange-200 dark:border-orange-500/20 z-10">
                    <GalleryIcon className="w-10 h-10 text-orange-500" />
                  </div>
                </div>

                {/* Aesthetic Typography */}
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-4">
                  Curating the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                    Gallery
                  </span>
                </h3>

                <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
                  I'm currently compiling my professional certifications,
                  hardware workspace photos, and video reels. The media gallery
                  is being built and will be deployed in the next update. Stay
                  tuned!
                </p>

                <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-sm font-medium text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></div>
                  Under Construction
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

const Services = () => {
  // --- State for Tab Navigation ---
  const [activeTab, setActiveTab] = useState("overview");

  const servicesData = [
    {
      id: "01",
      title: "Web Development & Design",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
      icon: CodeIcon,
      gridSpan: "md:col-span-12 lg:col-span-7",
      desc: "Transforming ideas into high-performance digital experiences. I build scalable, SEO-optimized web applications and visually engaging landing pages designed to convert, prioritizing speed and flawless UI/UX across all devices.",
      tags: [
        "Web Dev",
        "Redesign",
        "Sales Funnels",
        "UI/UX",
        "SEO",
        "Responsive",
        "Portfolio Sites",
      ],
      ctaText: "Start Web Project",
    },
    {
      id: "02",
      title: "IT Support & PC Repair",
      image:
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1200",
      icon: WrenchIcon,
      gridSpan: "md:col-span-12 lg:col-span-5",
      desc: "Comprehensive hardware maintenance and software configuration. From custom PC builds to complex troubleshooting, I ensure your systems run at peak performance.",
      tags: ["FREE Diagnostics", "PC Assembly", "OS Install", "MS Office"],
      ctaText: "Get IT Diagnostics",
    },
    {
      id: "03",
      title: "IoT Solutions & Prototyping",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
      icon: CpuIcon,
      gridSpan: "md:col-span-12 lg:col-span-5",
      desc: "Bridging the physical and digital worlds. I specialize in custom IoT prototypes, advanced sensor integration, and MCU board programming for smart automation.",
      tags: ["Prototyping", "School Projects", "Sensors", "ESP32/Arduino"],
      ctaText: "Discuss IoT Idea",
    },
    {
      id: "04",
      title: "Multimedia & Design",
      image:
        "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1200",
      icon: PaletteIcon,
      gridSpan: "md:col-span-12 lg:col-span-7",
      desc: "Elevating brand identity through compelling visual and audio storytelling. I create high-impact marketing videos, logos, flyers, and custom jingles tailored for businesses and events.",
      tags: [
        "Commercials",
        "Logo Design",
        "Flyers",
        "Business Jingles",
        "Brand Identity",
      ],
      ctaText: "Start Creative Project",
    },
  ];

  return (
    <SectionWrapper
      id="services"
      className="bg-white dark:bg-[#050505] overflow-hidden"
    >
      <SectionHeader title="My Expertise" subtitle="Services" />

      {/* ========================================= */}
      {/* PREMIUM TAB NAVIGATION                      */}
      {/* ========================================= */}
      <div className="flex justify-center mt-8 md:mt-12 mb-8 md:mb-16">
        <div className="inline-flex p-1.5 bg-gray-100 dark:bg-neutral-900/50 backdrop-blur-sm border border-gray-200 dark:border-neutral-800 rounded-2xl">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
              activeTab === "overview"
                ? "bg-white dark:bg-neutral-800 text-orange-500 shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Services Overview
          </button>

          <button
            onClick={() => setActiveTab("demos")}
            className={`flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
              activeTab === "demos"
                ? "bg-white dark:bg-neutral-800 text-orange-500 shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Demos & Details
          </button>
        </div>
      </div>

      {/* ========================================= */}
      {/* TAB 1: SERVICES OVERVIEW (BENTO GRID)       */}
      {/* ========================================= */}
      {activeTab === "overview" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          {/* Bento Box Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-[420px] sm:auto-rows-[460px] lg:auto-rows-[460px] gap-4 md:gap-6">
            {servicesData.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  className={`relative group rounded-3xl overflow-hidden bg-gray-900 border border-gray-200 dark:border-neutral-800 shadow-lg hover:shadow-2xl transition-all duration-500 ${service.gridSpan}`}
                >
                  {/* Base Background Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-80"
                  />

                  {/* Intelligent Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 transition-colors duration-500 group-hover:from-black/95 group-hover:via-black/85 group-hover:to-black/70"></div>

                  {/* Content Container */}
                  <div className="absolute inset-0 z-20 flex flex-col p-6 md:p-8">
                    {/* Top Bar: Number & Icon */}
                    <div className="flex justify-between items-start">
                      <span className="text-5xl md:text-6xl font-black text-white/40 drop-shadow-lg group-hover:text-orange-500 transition-colors duration-500 tracking-tighter">
                        {service.id}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300 shadow-xl">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Bottom Bar: Title & Hover Expansion */}
                    <div className="mt-auto">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-md transition-transform duration-300">
                        {service.title}
                      </h3>

                      {/* Smooth Expandable Section using CSS Grid Animation */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
                        <div className="overflow-hidden">
                          {/* Hidden Content Box */}
                          <div className="flex flex-col gap-3 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            <p className="text-sm text-gray-300 leading-relaxed">
                              {service.desc}
                            </p>

                            {/* Tech / Feature Tags */}
                            <div className="flex flex-wrap gap-2">
                              {service.tags.map((tag, idx) => {
                                const isHighlight = tag.includes("FREE");
                                return (
                                  <span
                                    key={idx}
                                    className={`px-2.5 py-1 text-[11px] font-bold rounded-md border backdrop-blur-sm ${
                                      isHighlight
                                        ? "bg-orange-500/90 text-white border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                                        : "bg-white/10 text-gray-200 border-white/20"
                                    }`}
                                  >
                                    {tag}
                                  </span>
                                );
                              })}
                            </div>

                            {/* Action Button */}
                            <div className="pt-1">
                              <a
                                href="#contact"
                                className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-orange-500 text-black hover:text-white font-bold text-sm transition-all duration-300 active:scale-95 w-fit"
                              >
                                {service.ctaText}
                                <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Expandable Section */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================= */}
      {/* TAB 2: DEMOS & DETAILS (UNDER CONSTRUCTION) */}
      {/* ========================================= */}
      {activeTab === "demos" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-8 animate-fade-in w-full flex items-center justify-center min-h-[45vh]">
          <div className="relative w-full max-w-2xl mx-auto">
            {/* Aesthetic Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-20 dark:opacity-30"></div>

            <div className="relative flex flex-col items-center justify-center p-12 md:p-20 text-center bg-gray-50/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-2 border-dashed border-gray-200 dark:border-neutral-800 rounded-3xl">
              {/* Play/Video Icon Setup */}
              <div className="relative flex items-center justify-center mb-8">
                <div className="absolute inset-0 bg-orange-500 blur-xl opacity-30 rounded-full animate-pulse"></div>
                <div className="w-20 h-20 bg-orange-100 dark:bg-orange-500/10 rounded-2xl flex items-center justify-center rotate-3 transition-transform hover:rotate-0 duration-300 shadow-xl border border-orange-200 dark:border-orange-500/20 z-10">
                  <PlayCircleIcon className="w-10 h-10 text-orange-500" />
                </div>
              </div>

              {/* Aesthetic Typography */}
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-4">
                Preparing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  Service Demos
                </span>
              </h3>

              <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
                I'm currently compiling detailed case studies, pricing
                structures, and live video demonstrations for each of my
                services. This section is being built and will be deployed in an
                upcoming update!
              </p>

              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 text-sm font-medium text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></div>
                Development in Progress
              </div>
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [activeIndex, setActiveIndex] = useState(0);

  // Filter projects based on the active tab
  const filteredProjects = PROJECTS_DATA.filter(
    (project) => project.type === activeTab,
  );

  // Handle Tab Switch (Resets the accordion index so it doesn't break)
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setActiveIndex(0);
  };

  // Keyboard accessibility handler for the accordion
  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveIndex(index);
    }
  };

  return (
    <SectionWrapper
      id="projects"
      className="bg-white dark:bg-[#050505] overflow-hidden"
    >
      <SectionHeader title="Featured Works" subtitle="Projects" />

      {/* --- PREMIUM TAB NAVIGATION --- */}
      <div className="flex justify-center mt-8 md:mt-12 mb-8 md:mb-16">
        <div className="inline-flex p-1.5 bg-gray-100 dark:bg-neutral-900/50 backdrop-blur-sm border border-gray-200 dark:border-neutral-800 rounded-2xl">
          <button
            onClick={() => handleTabSwitch("personal")}
            className={`flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
              activeTab === "personal"
                ? "bg-white dark:bg-neutral-800 text-orange-500 shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <UserIcon className="w-4 h-4 md:w-5 md:h-5" />
            Personal Projects
          </button>

          <button
            onClick={() => handleTabSwitch("client")}
            className={`flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
              activeTab === "client"
                ? "bg-white dark:bg-neutral-900 text-orange-500 shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <BriefcaseIcon className="w-4 h-4 md:w-5 md:h-5" />
            Client Projects
          </button>
        </div>
      </div>

      {/* --- APP-STYLE ACCORDION CAROUSEL --- */}
      <div className="flex flex-col md:flex-row gap-3 sm:gap-4 h-[500px] sm:h-[550px] lg:h-[600px] w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {filteredProjects.map((project, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={project.id}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group border border-gray-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-[#050505]
                ${
                  isActive
                    ? "flex-1 md:flex-[3] lg:flex-[3.5] shadow-2xl shadow-orange-500/10"
                    : "h-[65px] sm:h-[75px] md:h-auto md:flex-[0.5] lg:flex-[0.6] shrink-0 opacity-90 hover:opacity-100"
                }
              `}
            >
              {/* Background Video Layer */}
              <div className="absolute inset-0 z-0 bg-transparent">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`w-full h-full object-cover transition-transform duration-[1200ms] ease-out ${
                    isActive
                      ? "scale-100"
                      : "scale-110 group-hover:scale-105 opacity-50"
                  }`}
                />
              </div>

              {/* Intelligent Gradient Overlay */}
              <div
                className={`absolute inset-0 z-10 transition-colors duration-700 ${
                  isActive
                    ? "bg-gradient-to-t from-black via-black/60 to-transparent"
                    : "bg-black/60 group-hover:bg-black/40"
                }`}
              ></div>

              {/* --- INACTIVE STATE UI (Rotated Labels) --- */}
              <div
                className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-500 ${
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                {/* Desktop Vertical Text */}
                <span className="hidden md:block -rotate-90 text-gray-300 font-bold tracking-[0.2em] uppercase whitespace-nowrap group-hover:text-orange-400 transition-colors duration-300 drop-shadow-md">
                  {project.title}
                </span>
                {/* Mobile Horizontal Text */}
                <span className="block md:hidden text-gray-200 font-bold tracking-widest uppercase text-sm group-hover:text-orange-400 transition-colors duration-300 px-4 truncate drop-shadow-md">
                  {project.title}
                </span>
              </div>

              {/* --- ACTIVE STATE UI (Premium Glassmorphic Content) --- */}
              <div
                className={`absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-6 lg:p-8 transition-all duration-700 delay-100 ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                {/* Glassmorphic Panel */}
                <div className="relative max-w-3xl w-full bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl overflow-hidden transform translate-z-0">
                  {/* Floating Category Pill */}
                  <div className="mb-3 hidden sm:block">
                    <span className="px-3 py-1.5 bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-1.5 leading-tight tracking-tight drop-shadow-lg line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base font-semibold text-orange-400 mb-3 drop-shadow-md line-clamp-1">
                    {project.subtitle}
                  </p>

                  <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-gray-300 mb-5 leading-relaxed line-clamp-2 md:line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] md:text-xs font-semibold rounded-md bg-white/10 border border-white/20 text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* --- UPDATED: Dynamic Action Buttons & Status Notes --- */}
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Render Primary Live Demo Button (Vercel) */}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-3.5 bg-orange-500 hover:bg-orange-600 text-white text-[11px] md:text-sm font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(249,115,22,0.4)] hover:-translate-y-0.5 active:scale-95"
                      >
                        {project.demoLinkLabel || "Live Demo"}
                        <ExternalLinkIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </a>
                    )}

                    {/* NEW: Render Secondary Live Demo Button (Legacy / Official Site) */}
                    {project.secondaryDemoLink && (
                      <a
                        href={project.secondaryDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-[11px] md:text-sm font-bold rounded-xl transition-all hover:-translate-y-0.5 active:scale-95"
                      >
                        {project.secondaryDemoLabel}
                        <ExternalLinkIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </a>
                    )}

                    {/* Render Github Code Button */}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-[11px] md:text-sm font-bold rounded-xl transition-all hover:-translate-y-0.5 active:scale-95"
                      >
                        <GithubIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        Code
                      </a>
                    )}

                    {/* Render Status Note Badge if Code or Demo is restricted */}
                    {(!project.demoLink || !project.githubLink) &&
                      project.statusNote && (
                        <div className="flex-1 min-w-[220px] flex items-center gap-2.5 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 text-[11px] md:text-xs font-medium backdrop-blur-md">
                          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shrink-0"></span>
                          <span className="leading-snug">
                            {project.statusNote}
                          </span>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
    // This securely constructs an email template and opens the user's default mail client
    const emailTo = "arvintenasas29@gmail.com"; // Replace with your actual email
    const subject = encodeURIComponent(
      `New Portfolio Contact from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <SectionWrapper id="contact" className="bg-gray-50 dark:bg-neutral-950/50">
      <SectionHeader title="Let's Connect" subtitle="Contact" />

      <div className="max-w-5xl mx-auto px-2 sm:px-0">
        <div className="bg-white dark:bg-neutral-900 rounded-3xl sm:rounded-[2.5rem] border border-gray-200 dark:border-neutral-800 shadow-xl overflow-hidden flex flex-col lg:flex-row relative">
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

          {/* Left Column: Pitch & Info */}
          <div className="flex-1 p-6 sm:p-10 md:p-12 z-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
                Ready to build something{" "}
                <span className="text-orange-500">extraordinary?</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 leading-relaxed">
                Whether you're looking for a dedicated full-stack developer to
                join your team, need a freelance expert to modernize your
                infrastructure, or just want to chat about IoT hardware—I'm
                ready to help.
              </p>

              {/* App-style Info Cards */}
              <div className="flex flex-col gap-3 sm:gap-4 mb-8">
                <a
                  href="mailto:arvintenasas29@gmail.com"
                  className="flex items-center gap-4 p-3 sm:p-4 rounded-2xl bg-gray-50 dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-800 hover:border-orange-500/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">
                      Email Me
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                      arvintenasas29@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 sm:p-4 rounded-2xl bg-gray-50 dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-800">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                      Manila, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 sm:gap-4">
              {[
                {
                  id: "linkedin",
                  href: "https://www.linkedin.com/in/arvin-d-tenasas-1ba6082b8/",
                  svg: <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />,
                },
                {
                  id: "github",
                  href: "https://github.com/tenasasarvin",
                  svg: <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />,
                },
                {
                  id: "facebook",
                  href: "https://www.facebook.com/share/19GxD5xYNq/",
                  svg: <FacebookIcon className="w-4 h-4 sm:w-5 sm:h-5" />,
                },
              ].map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex-[1.2] bg-gray-50 dark:bg-neutral-800/50 p-6 sm:p-10 md:p-12 z-10 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-neutral-800">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 sm:gap-5 h-full justify-center"
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1"
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
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1"
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
                  placeholder="arvin.tenasas@example.com"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-1.5 flex-grow">
                <label
                  htmlFor="message"
                  className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  rows="4"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all resize-none placeholder:text-gray-400 flex-grow"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] active:scale-[0.98]"
              >
                Send Message
                <SendIcon className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

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
    "Full-Stack Web Development & Architecture",
    "Hardware & IoT Solutions",
    "API Development & Integration",
    "Database Design & Management",
    "Maintenance & Support",
    "Multi Media & Interactive Experiences",
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full mt-24">
      {/* The main footer container must be relative and have overflow-hidden 
        so the glowing background blobs don't stretch the page.
      */}
      <footer className="relative rounded-t-3xl sm:rounded-t-[2.5rem] border border-b-0 border-gray-200 dark:border-neutral-800 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] overflow-hidden transition-colors duration-300">
        {/* ========================================= */}
        {/* ANIMATED GRADIENT BACKGROUND GLOWS        */}
        {/* ========================================= */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
          {/* Top Left Orange Glow */}
          <div
            className="absolute -top-[20%] left-[10%] w-[500px] h-[500px] bg-orange-500/30 dark:bg-orange-600/20 rounded-full blur-[120px] animate-pulse"
            style={{ animationDuration: "4s" }}
          ></div>

          {/* Bottom Right Amber/Yellow Glow (Delayed for contrast) */}
          <div
            className="absolute -bottom-[20%] right-[10%] w-[600px] h-[600px] bg-amber-400/20 dark:bg-amber-600/10 rounded-full blur-[120px] animate-pulse"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          ></div>
        </div>

        {/* ========================================= */}
        {/* FROSTED GLASS OVERLAY                     */}
        {/* ========================================= */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-gray-50/90 dark:from-neutral-950/70 dark:to-[#050505]/95 backdrop-blur-2xl z-0"></div>

        {/* ========================================= */}
        {/* FOOTER CONTENT (Elevated above background)*/}
        {/* ========================================= */}
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
            {/* Left Column: Brand & Bio */}
            <div className="md:col-span-5 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-32 sm:w-40 h-auto flex-shrink-0">
                  <img
                    src="/logo-texts.png"
                    alt="arvin.dev logo"
                    className="w-full h-full object-contain drop-shadow-sm"
                  />
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
                Engineering highly interactive, native-app-like web experiences
                and robust full-stack solutions. Building the digital future,
                one line of code at a time.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/tenasasarvin"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-full bg-white/50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-800 text-gray-600 dark:text-gray-400 hover:text-orange-500 hover:border-orange-500/50 hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/arvin-d-tenasas-1ba6082b8/"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-full bg-white/50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-800 text-gray-600 dark:text-gray-400 hover:text-orange-500 hover:border-orange-500/50 hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="mailto:arvintenasas29@gmail.com"
                  aria-label="Email Me"
                  className="p-2.5 rounded-full bg-white/50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-800 text-gray-600 dark:text-gray-400 hover:text-orange-500 hover:border-orange-500/50 hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]"
                >
                  <MailIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Middle Column: Navigation */}
            <div className="md:col-span-3 flex flex-col">
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-6">
                Navigation
              </h3>
              <nav
                className="flex flex-col gap-3.5"
                aria-label="Footer Navigation"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 text-sm font-medium transition-colors w-fit flex items-center group"
                  >
                    {link.label}
                    <ArrowUpRightIcon className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Right Column: Capabilities */}
            <div className="md:col-span-4 flex flex-col">
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-6">
                Capabilities
              </h3>
              <ul className="flex flex-col gap-3.5">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="text-gray-500 dark:text-gray-400 text-sm font-medium flex items-center gap-2.5 group cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 group-hover:bg-orange-500 group-hover:scale-150 transition-all duration-300"></span>
                    <span className="group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Tier: Copyright & Counter */}
          <div className="border-t border-gray-200/60 dark:border-neutral-800/60 bg-white/20 dark:bg-black/20 backdrop-blur-md">
            <div className="max-w-6xl mx-auto p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium text-center sm:text-left">
                &copy; {currentYear} Arvin Tenasas. All rights reserved.
              </p>

              <CompactVisitorCounter />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- APP ROOT ---
const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "experience",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="font-sans antialiased transition-colors duration-300">
        <Navigation activeSection={activeSection} />
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
