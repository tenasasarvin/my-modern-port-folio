import React, {useState,useEffect,useRef,useContext,createContext,} from "react";

/** * MODERN PORTFOLIO - ARVIN TENASAS
 * Features:
 * - Top Navigation (Sticky + Glassmorphism)

 * - Mobile Responsive Menu

 * - Dark/Light Mode

 * - Canvas Particle Background

 * - Scroll Reveal Animations

 */

// --- ICONS ---

// Reusing your SVGs but ensuring consistent sizing/classes

const IconWrapper = ({ children, className }) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    {children}
  </div>
);

const HomeIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const UserIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CodeIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const BriefcaseIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const LayersIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const MailIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const SunIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MoonIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const MenuIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const ChevronLeftIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const DownloadIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

const AwardIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

// --- THEME CONTEXT ---

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className =
      theme === "dark"
        ? "dark bg-neutral-950 text-gray-100"
        : "light bg-gray-50 text-gray-900";
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

// --- ASSETS ---

const ASSETS = {
  profileImageUrl:
    "https://placehold.co/512x512/0A0A0A/08F7FE?text=AT&font=orbitron",

  projectImageUrl1:
    "https://placehold.co/600x400/0A0A0A/08F7FE?text=SmartPen+IoT",

  projectImageUrl2:
    "https://placehold.co/600x400/0A0A0A/3B82F6?text=LSI+Website",

  projectImageUrl3:
    "https://placehold.co/600x400/0A0A0A/9CA3AF?text=AI+Portfolio",
};

// Stable hero titles to avoid recreating array each render (fixes useEffect dependency warning)

const HERO_TITLES = [
  "Full-Stack Developer",
  "Creative Problem-Solver",
  "UI/UX Enthusiast",
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

    const revealElements = target.querySelectorAll(".reveal");

    revealElements.forEach((el) => {
      el.classList.add(
        "opacity-0",
        "translate-y-8",
        "transition-all",
        "duration-700",
        "ease-out"
      );

      observer.observe(el);
    });

    return () => revealElements.forEach((el) => observer.unobserve(el));
  }, [ref]);
};

// --- UI COMPONENTS ---

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home", icon: HomeIcon },
    { id: "about", label: "About", icon: UserIcon },
    { id: "services", label: "Services", icon: LayersIcon },
    { id: "experience", label: "Experience", icon: BriefcaseIcon },
    { id: "projects", label: "Projects", icon: CodeIcon },
    { id: "contact", label: "Contact", icon: MailIcon },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      setActiveSection(id);

      setIsMobileMenuOpen(false);
    }
  };

  return (
         <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-lg py-3"
                    : "bg-transparent py-5"
            }`}
        >
            {/* FIXED: Changed mx-0 to mx-auto to center content */}
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                
                {/* Logo */}
                <div 
                    className="cursor-pointer flex items-center" 
                    onClick={() => scrollToSection('home')}
                >
                    <img 
                        src={theme === 'dark' ? "/logo-dark.svg" : "/logo-light.svg"} 
                        alt="Arvin Tenasas" 
                        // UPDATED: Increased height to h-20/md:h-24 and added negative margin -my-4
                        // This allows the logo to overflow visually without pushing the header height
                        className="w-auto h-20 md:h-24 object-contain -my-4"
                        onError={(e) => {
                            // Fallback if image fails to load in preview
                            e.target.onerror = null; 
                            e.target.src = "https://placehold.co/150x50/0A0A0A/08F7FE?text=LOGO";
                        }}
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-2">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                                ${activeSection === link.id 
                                    ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400' 
                                    : 'text-gray-600 dark:text-gray-300 hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-neutral-800'
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                    <div className="w-px h-6 bg-gray-200 dark:bg-neutral-700 mx-2"></div>
                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors">
                        {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    {/* Theme Toggle removed from here and placed inside dropdown */}
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white dark:bg-neutral-900 shadow-xl border-t dark:border-neutral-800 p-4 flex flex-col gap-2 md:hidden animate-fadeInUp">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`flex items-center gap-3 p-3 rounded-lg transition-colors text-left
                                ${activeSection === link.id 
                                    ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold' 
                                    : 'hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            <link.icon className="w-5 h-5" />
                            <span>{link.label}</span>
                        </button>
                    ))}
                    
                    {/* Theme Toggle moved inside Dropdown */}
                    <div className="h-px bg-gray-200 dark:bg-neutral-800 my-1"></div>
                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-left text-gray-700 dark:text-gray-300"
                    >
                        {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                        <span>{theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}</span>
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
    const currentTitle = HERO_TITLES[titleIndex];
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
        theme === "dark" ? "rgba(8, 247, 254, 0.4)" : "rgba(0, 122, 127, 0.3)";

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections

      ctx.strokeStyle =
        theme === "dark" ? "rgba(8, 247, 254, 0.05)" : "rgba(0, 0, 0, 0.05)";

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

  return (
    <section
      id="home"
      className="h-screen relative flex items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6 inline-block">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-30 animate-pulse"></div>

            <span className="relative px-4 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-black/50 backdrop-blur text-sm font-mono text-gray-600 dark:text-gray-300">
              Hello, World! I am Arvin Tenasas
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Crafting Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Experiences
          </span>
        </h1>

        <div className="h-8 mb-8 font-mono text-xl text-gray-500 dark:text-gray-400">
          &gt; {text}
          <span className="animate-pulse">|</span>
        </div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          A Computer Engineer and Full-Stack Developer based in Manila,
          passionate about building intuitive web applications and embedded IoT
          systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)] w-full sm:w-auto"
          >
            View My Work
          </button>

          <a
            href="/Updated_Resume_Arvin_Tenasas.pdf"
            download
            className="px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <DownloadIcon size={18} />
            Download CV
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          {["github", "linkedin", "envelope"].map((icon) => (
            <a
              key={icon}
              href="#"
              className="text-gray-400 hover:text-cyan-500 transition-colors transform hover:-translate-y-1"
            >
              <div
                className="w-6 h-6 bg-current opacity-80"
                style={{
                  maskImage: `url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/svgs/brands/${
                    icon === "envelope" ? "google" : icon
                  }.svg)`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  backgroundColor: "currentColor",
                }}
              >
                {/* Fallback icon or FontAwesome usage if available, simulating standard icons here */}

                <span className="sr-only">{icon}</span>
              </div>

              {/* Using simple circles as placeholders if FA not loaded */}

              {/* <div className="w-2 h-2 rounded-full bg-cyan-500"></div> */}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <ChevronRightIcon className="w-6 h-6 rotate-90 opacity-50" />
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16 reveal">
    <h2 className="text-cyan-500 font-bold tracking-widest text-sm uppercase mb-3">
      {subtitle}
    </h2>

    <h3 className="text-3xl md:text-4xl font-bold">{title}</h3>

    <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
  </div>
);

const About = () => {
  const techStack = [
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3-alt" },

    { name: "JavaScript", icon: "js" },
    { name: "React", icon: "react" },

    { name: "Tailwind", icon: "wind" },
    { name: "Node.js", icon: "node-js" },

    { name: "Next.js", icon: "next-dot-js" },
    { name: "MySQL", icon: "database" },

    { name: "Git", icon: "git-alt" },
    { name: "GitHub", icon: "github" },

    { name: "C++", icon: "cuttlefish" },
    { name: "Microcontroller", icon: "microchip" },

    { name: "Canva", icon: "square-full" },
    { name: "Vite", icon: "vite" },

    { name: "AI Tools", icon: "robot" },
    { name: "Vercel", icon: "vercel" },

    { name: "Neon", icon: "neon" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-neutral-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Who I Am" subtitle="Introduction" />

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 reveal">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>

              <img
                src={ASSETS.profileImageUrl}
                alt="Arvin Profile"
                className="relative w-full rounded-xl shadow-2xl object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />
            </div>
          </div>

          <div className="md:w-2/3 reveal">
            <h4 className="text-2xl font-bold mb-6">
              Bridging Hardware & Software
            </h4>

            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
              I'm a Computer Engineering graduate with a relentless curiosity
              for how things work. From designing responsive front-end
              interfaces to programming low-level microcontrollers, I'm driven
              by the challenge of solving complex problems.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              My goal is to not just write code, but to architect elegant,
              scalable solutions. I thrive in collaborative, agile environments
              where I can learn from my peers and contribute to building the
              future.
            </p>

            <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl border border-gray-200 dark:border-neutral-700">
              <h5 className="font-semibold mb-4 text-sm text-gray-500 uppercase tracking-wide">
                Tech Arsenal
              </h5>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>

                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, desc }) => {
  const IconComponent = icon;

  return (
    <div className="p-8 rounded-2xl bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-all duration-300 border border-gray-100 dark:border-neutral-700 hover:-translate-y-2 shadow-sm hover:shadow-xl reveal group">
      <div className="w-14 h-14 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors duration-300">
        {IconComponent ? (
          <IconComponent className="w-8 h-8 text-cyan-600 group-hover:text-white transition-colors duration-300" />
        ) : null}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
};

const Services = () => (
  <section id="services" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="My Expertise" subtitle="What I Do" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={CodeIcon}
          title="Web Development"
          desc="Building responsive, high-performance websites and single-page applications using React, Node.js, and Modern CSS."
        />

        <ServiceCard
          icon={LayersIcon}
          title="UI/UX Design"
          desc="Designing intuitive interfaces with a focus on user experience, ensuring accessibility and visual consistency across devices."
        />

        <ServiceCard
          icon={BriefcaseIcon}
          title="IoT Solutions"
          desc="Developing smart connected devices and control systems using ESP32/Arduino bridged with cloud databases like Firebase."
        />
      </div>
    </div>
  </section>
);

const ExperienceItem = ({ date, title, company, desc, type }) => (
  <div className="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-neutral-800 last:border-0 reveal">
    <div
      className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white dark:border-neutral-900 ${
        type === "work" ? "bg-cyan-500" : "bg-purple-500"
      }`}
    ></div>
    <span className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-2 block">
      {date}
    </span>
    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h4>
    <span className="text-cyan-600 dark:text-cyan-400 font-medium text-sm mb-3 block">
      {company}
    </span>
    <p className="text-gray-600 dark:text-gray-400">{desc}</p>
  </div>
);

const Experience = () => (
  <section
    id="experience"
    className="py-24 px-6 bg-gray-50 dark:bg-neutral-900/30"
  >
    <div className="max-w-4xl mx-auto">
      <SectionHeader title="Career Journey" subtitle="Resume" />

      <div className="bg-white dark:bg-neutral-800 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700">
        <ExperienceItem
          type="work"
          date="June 2024 - Present"
          title="Fullstack Developer & Field Technician"
          company="LSI Leading Technologies INC."
          desc="Leading the development of the new corporate website while managing field installations of UPS systems. Bridging the gap between software and hardware implementation."
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
    </div>
  </section>
);

const ProjectCard = ({ project, onClick }) => (
  <div
    onClick={onClick}
    className="group relative rounded-xl overflow-hidden cursor-pointer aspect-video bg-gray-200 dark:bg-neutral-800 reveal"
  >
    <img
      src={project.imgSrc}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
      <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        {project.title}
      </h3>

      <p className="text-gray-300 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-2">
        {project.description}
      </p>

      <div className="flex gap-2 mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      id: 1,
      imgSrc: ASSETS.projectImageUrl1,
      title: "SmartPen IoT System",
      description:
        "This project integrates three interconnected systems for aquaculture management. The first system is an offshore device installed in fish pens, equipped with sensors connected to an Arduino UNO R3 (ATmega328P) for monitoring environmental conditions such as pH and temperature. Communication between the offshore device and the home-based unit is handled via LoRa, enabling reliable long-distance data transmission. The second system is a home-based ESP32 unit that receives sensor data, uploads it to Firebase, and ensures seamless cloud integration. The third system is a mobile application that not only displays real-time data but also provides feeding controls—users can manually dispense feed at chosen times or schedule automatic feeding. Together, these systems create a smart aquaculture solution that optimizes fish health and feeding efficiency.",
      tags: ["IoT", "C++", "Firebase", "Android", "ESP32", "Arduino", "Flutterflow"],
    },

    {
      id: 2,
      imgSrc: ASSETS.projectImageUrl2,
      title: "LSI Corporate Web",
      description:
        "A complete modernization of LSI's digital presence using React and Tailwind. Improved SEO, load times, and mobile responsiveness.",
      tags: ["React", "Vite", "Tailwind", "UI/UX"],
    },

    {
      id: 3,
      imgSrc: ASSETS.projectImageUrl3,
      title: "AI Portfolio",
      description:
        "A personal portfolio featuring a custom-trained LLM integration to answer recruiter questions about my background.",
      tags: ["React", "Gemini API", "AI"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Featured Works" subtitle="Portfolio" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Simple Project Modal */}

      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-neutral-700 shadow-2xl animate-fadeInUp">
            <div className="relative h-64">
              <img
                src={selectedProject.imgSrc}
                className="w-full h-full object-cover"
                alt={selectedProject.title}
              />

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {selectedProject.description}
                <br />
                <br />
                This project challenged me to integrate complex systems and
                focus on end-user usability.
              </p>

              <div className="flex gap-4">
                <button className="flex-1 py-3 rounded-lg bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-colors">
                  Live Demo
                </button>

                <button className="flex-1 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors">
                  Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Credentials = () => {
  // Reconstructing the logic from your snippet

  const [isThesisModalOpen, setIsThesisModalOpen] = useState(false);

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-neutral-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 p-8 rounded-2xl reveal">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <AwardIcon className="text-cyan-500" />

              <h3 className="text-xl font-bold">Academic Thesis Highlight</h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              "SmartPen: Smart Precision Feeding and Monitoring System for
              Marine Pens in Samar"
            </p>
          </div>

          <button
            onClick={() => setIsThesisModalOpen(true)}
            className="px-6 py-2 rounded-full border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black transition-all text-sm font-semibold whitespace-nowrap"
          >
            Read Abstract
          </button>
        </div>
      </div>

      {isThesisModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl max-w-2xl w-full border border-gray-200 dark:border-neutral-700 shadow-2xl relative animate-fadeInUp">
            <button
              onClick={() => setIsThesisModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-red-500 transition-colors"
            >
              <XIcon className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold mb-4 text-cyan-600">
              Thesis Abstract
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 overflow-y-auto max-h-[60vh]">
              <p>
                The 'SmartPen' system addresses inefficiencies in aquaculture,
                specifically in marine fish pens in Samar, by automating the
                feeding process. It utilizes sensors to monitor water quality
                (pH level), water temperature, and sea current direction to
                optimize feeding schedules and feed amounts.
              </p>

              <h4 className="font-bold text-gray-900 dark:text-white mt-4">
                Key Objectives:
              </h4>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Monitor water quality and temperature to determine optimal
                  feeding times.
                </li>

                <li>
                  Analyze sea currents to adjust feeding strategies and minimize
                  feed loss.
                </li>

                <li>
                  Calculate fish volume to dispense the appropriate amount of
                  feed automatically.
                </li>

                <li>
                  Provide remote monitoring via a custom Android application
                  linked to Firebase.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormStatus("sending");

    // Simulate sending

    setTimeout(() => {
      setFormStatus("sent");

      setTimeout(() => setFormStatus("idle"), 3000);

      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background decorative blob */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <SectionHeader title="Get In Touch" subtitle="Contact Me" />

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
          I'm actively seeking new opportunities. Whether you have a project in
          mind or just want to say hi, my inbox is always open!
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-xl mx-auto text-left reveal"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>

              <input
                required
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>

              <input
                required
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>

            <textarea
              required
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none"
              placeholder="Let's build something awesome..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={formStatus !== "idle"}
            className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
              formStatus === "sent"
                ? "bg-green-500 text-white"
                : "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            }`}
          >
            {formStatus === "idle" && "Send Message"}
            {formStatus === "sending" && "Sending..."}
            {formStatus === "sent" && "Message Sent!"}
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-600 border-t border-gray-200 dark:border-neutral-800">
    <p>
      &copy; {new Date().getFullYear()} Arvin Tenasas. Built with React &
      Tailwind.
    </p>
  </footer>
);

// --- MAIN APP COMPONENT ---

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const mainRef = useRef(null);
  useScrollReveal(mainRef);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 font-sans selection:bg-cyan-500 selection:text-white">
        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <main ref={mainRef}>
          <Hero />
          <About />
          <Experience />
          <Services />
          <Projects />
          <Credentials />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Global Styles for Animations/Scrollbar */}

      <style>{`

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translate3d(0, 40px, 0); }
                    to { opacity: 1; transform: translate3d(0, 0, 0); }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }
                /* Custom Scrollbar */
                ::-webkit-scrollbar {
                    width: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent;
                }
                ::-webkit-scrollbar-thumb {
                    background: #555;
                    border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #08F7FE;
                }
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
    </ThemeProvider>
  );
};

export default App;
