import React, { useState, useEffect, useRef, useContext, createContext } from "react";

// --- ICONS (Inline definitions to remove external dependencies) ---

const Home = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const User = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const Layers = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
);
const Briefcase = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);
const Code = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);
const Mail = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const Sun = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);
const Moon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);
const Menu = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
const X = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const ChevronRight = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);
const Download = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
);
const Github = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
const Linkedin = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const Facebook = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Wrench = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
);
const ExternalLink = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
);

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
  profileImageUrl: "https://placehold.co/512x512/0A0A0A/F97316?text=AT&font=orbitron", // Updated placeholder color
};

// Updated HERO_TITLES with specific syntax highlighting colors
const HERO_TITLES = [
  { text: "Full-Stack Developer", color: "text-blue-400" },
  { text: "UI/UX Designer", color: "text-rose-400" },
  { text: "IoT Enthusiast", color: "text-emerald-400" },
  { text: "Problem Solver", color: "text-violet-400" },
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "SmartPen IoT System",
    category: "IoT & Embedded",
    description: "A real-time handwriting digitization system using ESP32 and React.",
    tags: ["C++", "React", "Firebase", "ESP32"],
    image: "https://placehold.co/600x400/171717/F97316?text=SmartPen+IoT",
    link: "#"
  },
  {
    id: 2,
    title: "LSI Corporate Portal",
    category: "Web Development",
    description: "Modern corporate website with inventory tracking and client portals.",
    tags: ["Next.js", "Tailwind", "MySQL"],
    image: "https://placehold.co/600x400/171717/3B82F6?text=LSI+Website",
    link: "#"
  },
  {
    id: 3,
    title: "AI Portfolio Generator",
    category: "AI Integration",
    description: "Generates portfolio websites based on user prompts using Gemini API.",
    tags: ["React", "Node.js", "AI"],
    image: "https://placehold.co/600x400/171717/A855F7?text=AI+Portfolio",
    link: "#"
  }
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
      { threshold: 0.1 }
    );

    target.classList.add(
      "opacity-0",
      "translate-y-8",
      "transition-all",
      "duration-700",
      "ease-out"
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
      className={`py-24 px-6 min-h-screen flex items-center justify-center ${className}`}
    >
      <div className="w-full max-w-6xl mx-auto">{children}</div>
    </section>
  );
};

// --- COMPONENTS ---

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16 reveal">
    <h2 className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-3">
      {subtitle}
    </h2>
    <h3 className="text-3xl md:text-4xl font-bold">{title}</h3>
    <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
  </div>
);

const Navigation = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "services", label: "Services", icon: Layers },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "contact", label: "Contact", icon: Mail },
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-lg py-3 border-b border-gray-200 dark:border-neutral-800"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Text/Image */}
        <div
          className="cursor-pointer flex items-center gap-2 group"
          onClick={() => scrollToSection("home")}
        >
          <div className="w-28 h-auto bg-transparent flex items-center justify-center ">
            <img src="/logo-texts.png" alt="arvin.dev" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 
                ${
                  activeSection === link.id
                    ? "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-orange-500 hover:bg-orange-500/5 dark:hover:bg-neutral-800"
                }`}
            >
              {link.label}
            </button>
          ))}
          <div className="w-px h-6 bg-gray-200 dark:bg-neutral-800 mx-2"></div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-gray-600 dark:text-gray-400"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-neutral-900 shadow-xl border-b dark:border-neutral-800 p-4 flex flex-col gap-2 md:hidden animate-fadeInUp">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors text-left
                ${
                  activeSection === link.id
                    ? "bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold"
                    : "hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300"
                }`}
            >
              <link.icon className="w-5 h-5" />
              <span>{link.label}</span>
            </button>
          ))}
          <div className="h-px bg-gray-200 dark:bg-neutral-800 my-1"></div>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-left text-gray-700 dark:text-gray-300"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
            <span>{theme === "dark" ? "Switch to Light" : "Switch to Dark"}</span>
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

  // Typewriter Effect
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
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, titleIndex]);

  // Particle Animation
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
    { Icon: Github, href: "https://github.com", label: "GitHub" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="h-screen relative flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-900"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 inline-block">
          <div className="relative group cursor-default mt-11">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <span className="relative px-4 py-2 rounded-lg border border-gray-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-800/80 backdrop-blur text-sm font-mono flex flex-wrap items-center justify-center gap-2 shadow-xl">
              <span className="text-purple-600 dark:text-purple-400">const</span>
              <span className="text-blue-600 dark:text-blue-400">developer</span>
              <span className="text-gray-500 dark:text-neutral-400">=</span>
              <span className="text-orange-600 dark:text-orange-500 font-semibold">
                "Hello World! I am Arvin Tenasas"
              </span>
              <span className="text-gray-500 dark:text-neutral-400">;</span>
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Crafting Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
            Experiences
          </span>
        </h1>

        <div className="h-8 mb-8 font-mono text-xl flex items-center justify-center gap-2">
          <span className="text-orange-500 font-bold">&gt;</span>
          <span className={HERO_TITLES[titleIndex].color}>{text}</span>
          <span className="animate-pulse text-orange-500">|</span>
        </div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          A Computer Engineer and Full-Stack Developer based in Manila, passionate
          about building intuitive web applications and embedded IoT systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-lg bg-orange-500 hover:bg-orange-400 text-white font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.4)] w-full sm:w-auto"
          >
            View My Work
          </button>

          <a
            href="/Updated Resume.pdf"
            download
            className="px-8 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-8">
          {socialLinks.map(({ Icon: icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-400 hover:text-orange-500 transition-colors transform hover:-translate-y-1"
            >
              {React.createElement(icon, { size: 24 })}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-1 animate-bounce">
        <ChevronRight className="w-6 h-6 rotate-90 opacity-50" />
      </div>
    </section>
  );
};

const About = () => {
  const techStack = [
    { name: "HTML5", color: "bg-orange-500" },
    { name: "CSS3", color: "bg-blue-500" },
    { name: "JavaScript", color: "bg-yellow-400" },
    { name: "React", color: "bg-cyan-400" },
    { name: "Tailwind", color: "bg-sky-400" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Next.js", color: "bg-white" },
    { name: "MySQL", color: "bg-blue-600" },
    { name: "Git", color: "bg-orange-600" },
    { name: "C++", color: "bg-blue-700" },
    { name: "Microcontroller", color: "bg-emerald-500" },
  ];

  return (
    <SectionWrapper id="about" className="bg-gray-50 dark:bg-neutral-900/50">
      <SectionHeader title="Who I Am" subtitle="Introduction" />
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 reveal">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <img
              src={ASSETS.profileImageUrl}
              alt="Arvin Profile"
              className="relative w-full rounded-xl shadow-2xl object-cover grayscale group-hover:grayscale-0 transition duration-500 border border-gray-200 dark:border-neutral-800"
            />
          </div>
        </div>

        <div className="md:w-2/3 reveal">
          <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Bridging <span className="text-orange-500">Hardware</span> &{" "}
            <span className="text-blue-500">Software</span>
          </h4>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
            I'm a Computer Engineering graduate with a relentless curiosity for how
            things work. From designing responsive front-end interfaces to
            programming low-level microcontrollers, I'm driven by the challenge of
            solving complex problems.
          </p>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-gray-200 dark:border-neutral-700 shadow-sm">
            <h5 className="font-semibold mb-4 text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Tech Arsenal
            </h5>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-neutral-700/50 border border-gray-200 dark:border-neutral-700 text-sm font-medium"
                >
                  <span className={`w-2 h-2 rounded-full ${tech.color}`}></span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const Services = () => {
  const ServiceCard = ({ icon, title, desc }) => {
    const Icon = icon;
    return (
      <div className="p-8 rounded-2xl bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-all duration-300 border border-gray-100 dark:border-neutral-700 hover:-translate-y-2 shadow-sm hover:shadow-xl group">
        <div className="w-14 h-14 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
          <Icon className="w-8 h-8 text-orange-600 dark:text-orange-500 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
      </div>
    );
  };

  return (
    <SectionWrapper id="services" className="bg-white dark:bg-neutral-900">
      <SectionHeader title="My Expertise" subtitle="What I Do" />
      <div className="grid md:grid-cols-2 gap-8">
        <ServiceCard
          icon={Code}
          title="Web Development"
          desc="Building responsive, high-performance websites and single-page applications using React, Node.js, and Modern CSS."
        />
        <ServiceCard
          icon={Layers}
          title="UI/UX Design"
          desc="Designing intuitive interfaces with a focus on user experience, ensuring accessibility and visual consistency."
        />
        <ServiceCard
          icon={Briefcase}
          title="IoT Solutions"
          desc="Developing smart connected devices and control systems using ESP32/Arduino bridged with cloud databases."
        />
        <ServiceCard
          icon={Wrench}
          title="Technical Support"
          desc="Diagnosing and fixing hardware/software issues, system upgrades, and maintenance for optimal performance."
        />
      </div>
    </SectionWrapper>
  );
};

const Experience = () => {
  const ExperienceItem = ({ date, title, company, desc, type }) => (
    <div className="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-neutral-800 last:border-0 reveal">
      <div
        className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white dark:border-neutral-900 ${
          type === "work" ? "bg-orange-500" : "bg-purple-500"
        }`}
      ></div>
      <span className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-2 block">
        {date}
      </span>
      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h4>
      <span className="text-orange-600 dark:text-orange-400 font-medium text-sm mb-3 block">
        {company}
      </span>
      <p className="text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
  );

  return (
    <SectionWrapper
      id="experience"
      className="bg-gray-50 dark:bg-neutral-900/30"
    >
      <SectionHeader title="Career Journey" subtitle="Resume" />
      <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700">
        <ExperienceItem
          type="work"
          date="June 2024 - Present"
          title="Fullstack Developer & Field Technician"
          company="LSI Leading Technologies INC."
          desc="Leading the development of the new corporate website while managing field installations of UPS systems."
        />
        <ExperienceItem
          type="work"
          date="Feb 2024 - May 2024"
          title="Technical Support Intern"
          company="Bits N' Bytes Computer Shop"
          desc="Diagnosed hardware issues, assembled custom PC builds, and provided direct client support for software configurations."
        />
        <ExperienceItem
          type="edu"
          date="2020 - 2024"
          title="BS in Computer Engineering"
          company="Samar State University"
          desc="Specialized in embedded systems and software development. Lead developer for the 'SmartPen' IoT thesis project."
        />
      </div>
    </SectionWrapper>
  );
};

const Projects = () => {
  const ProjectCard = ({ project }) => (
    <div className="group rounded-2xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/10">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-mono rounded bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-300"
            >
              #{tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
        >
          View Project <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );

  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-neutral-900">
      <SectionHeader title="Featured Works" subtitle="Portfolio" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="bg-gray-50 dark:bg-neutral-900/50">
      <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-16 border border-gray-200 dark:border-neutral-700 shadow-xl overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-3">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a
            question, a project idea, or just want to say hi, I'll try my best to
            get back to you!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:arvintenasas@example.com"
              className="px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg shadow-lg hover:shadow-orange-500/30 transition-all hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white dark:bg-neutral-700 text-gray-900 dark:text-white border border-gray-200 dark:border-neutral-600 font-bold text-lg hover:bg-gray-50 dark:hover:bg-neutral-600 transition-all hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Linkedin className="w-5 h-5" />
              Connect
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-24 text-center text-gray-500 dark:text-gray-500 text-sm font-mono">
        <div className="flex justify-center gap-6 mb-8">
          {[Github, Linkedin, Facebook, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="hover:text-orange-500 transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <p>
          &copy; {new Date().getFullYear()} Arvin Tenasas. Built with React &
          Tailwind.
        </p>
      </footer>
    </SectionWrapper>
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
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;