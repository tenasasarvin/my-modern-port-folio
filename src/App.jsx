import React, { useState, useEffect, useRef, useContext, createContext } from 'react';

import profileImage from './assets/profile.jpg';

// --- THEME CONTEXT ---
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.body.className = theme + '-mode';
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => useContext(ThemeContext);

// --- ASSETS ---
const profileImageUrl = 'https://placehold.co/512x512/0A0A0A/08F7FE?text=AT';
const projectImageUrl1 = 'https://placehold.co/600x400/0A0A0A/FFFFFF?text=E-Shop+Pro';
const projectImageUrl2 = 'https://placehold.co/600x400/0A0A0A/9CA3AF?text=Smart+Grow';
const projectImageUrl3 = 'https://placehold.co/600x400/0A0A0A/08F7FE?text=Portfolio+v2';


// --- HELPER HOOK for detecting elements in viewport ---
const useOnScreen = (options) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isVisible];
};

// --- COMPONENTS ---

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const sections = ["home", "about", "experience", "projects", "contact"];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
    const navLinks = ["Home", "About", "Experience", "Projects", "Contact"];

    return (
        <header id="header" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-header-scrolled' : 'glass-header'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-heading font-bold tracking-wider hover:text-brand-accent transition-colors">
                    ARVIN.DEV
                </a>
                <nav className="hidden md:flex items-center space-x-8 font-medium">
                    {navLinks.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} className={`nav-link ${activeSection === link.toLowerCase() ? 'active' : ''}`}>{link}</a>
                    ))}
                    <button onClick={toggleTheme} className="theme-toggle-btn">
                        <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                </nav>
                <div className="md:hidden flex items-center">
                     <button onClick={toggleTheme} className="theme-toggle-btn mr-4">
                        <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                    <button id="mobile-menu-button" className="text-2xl z-50" onClick={toggleMenu}>
                        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                    </button>
                </div>
            </div>
            <div id="mobile-menu" className={`md:hidden mobile-menu-bg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
                {navLinks.map(link => (
                    <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu} className="block py-3 px-6 text-center mobile-link">{link}</a>
                ))}
            </div>
        </header>
    );
};

const Hero = () => {
    const titles = React.useMemo(() => ["Full-Stack Developer", "Creative Problem-Solver", "UI/UX Enthusiast"], []);
    const [titleIndex, setTitleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = titles[titleIndex];
        const typingSpeed = 120, deletingSpeed = 60, delayBeforeDelete = 2200;

        const handleTyping = () => {
            if (isDeleting) {
                setText(current => current.substring(0, current.length - 1));
            } else {
                setText(current => currentTitle.substring(0, current.length + 1));
            }

            if (!isDeleting && text === currentTitle) {
                setTimeout(() => setIsDeleting(true), delayBeforeDelete);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setTitleIndex(prev => (prev + 1) % titles.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, titleIndex, titles]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-4 reveal">
                    Crafting Digital Experiences
                    <br />
                    <span className="text-brand-accent">Where Code Meets Creativity.</span>
                </h1>
                <p className="text-lg text-subtext mb-4 max-w-2xl mx-auto reveal" style={{ transitionDelay: '200ms' }}>
                    Hi, I'm Arvin Tenasas. A Computer Engineer passionate about building intuitive, high-performance web applications and embedded systems.
                </p>
                <div className="bg-card/50 p-4 rounded-md border border-main-border font-mono text-lg text-left max-w-xl mx-auto mb-8 reveal" style={{ transitionDelay: '400ms' }}>
                    <span className="text-gray-500">&gt; </span>
                    <span className="text-brand-accent">{text}</span>
                    <span className="cursor-blink text-brand-accent">|</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal" style={{ transitionDelay: '600ms' }}>
                    <a href="#projects" className="btn-premium w-full sm:w-auto">View My Work</a>
                    <a href="/Updated_Resume_Arvin_Tenasas.pdf" download className="btn-secondary w-full sm:w-auto">Get My Resume</a>
                </div>
                <div className="mt-12 flex justify-center space-x-6 reveal" style={{ transitionDelay: '800ms' }}>
                    <a href="https://github.com/arvintenasas" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/arvin-tenasas" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin"></i></a>
                    <a href="mailto:arvintenasas29@gmail.com" className="social-icon"><i className="fas fa-envelope"></i></a>
                </div>
            </div>
        </section>
    );
};

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 reveal">
            <div className="text-center mb-16">
                <h2 className="section-subtitle">INTRODUCTION</h2>
                <p className="section-title">Who I Am</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
                <div className="md:w-1/2 lg:w-2/5">
                    <div className="relative w-full group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <img src={profileImage} alt="Arvin Tenasas" className="relative rounded-lg shadow-2xl w-full" />
                    </div>
                </div>
                <div className="md:w-1/2 lg:w-3/5">
                    <p className="text-subtext text-lg mb-6">
                        I'm a Computer Engineering graduate with a relentless curiosity for how things work. From designing responsive front-end interfaces to programming low-level microcontrollers, I'm driven by the challenge of solving complex problems and creating technology that makes a tangible impact.
                    </p>
                    <p className="text-subtext text-lg mb-8">
                        My goal is to not just write code, but to architect elegant, scalable solutions. I thrive in collaborative, agile environments where I can learn from my peers and contribute to building the future, one line of code at a time.
                    </p>
                    <h3 className="text-2xl font-heading font-semibold mb-6">My Tech Arsenal</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm md:text-base">
                        <div className="tech-item"><i className="fab fa-react text-brand-accent"></i><span>React & Next.js</span></div>
                        <div className="tech-item"><i className="fab fa-node-js text-brand-accent"></i><span>Node.js & Express</span></div>
                        <div className="tech-item"><i className="fas fa-wind text-brand-accent"></i><span>Tailwind CSS</span></div>
                        <div className="tech-item"><i className="fas fa-database text-brand-accent"></i><span>MongoDB & Firebase</span></div>
                        <div className="tech-item"><i className="fab fa-js-square text-brand-accent"></i><span>TypeScript</span></div>
                        <div className="tech-item"><i className="fas fa-code text-brand-accent"></i><span>C++</span></div>
                        <div className="tech-item"><i className="fas fa-microchip text-brand-accent"></i><span>Arduino (UNO, Mega)</span></div>
                        <div className="tech-item"><i className="fas fa-robot text-brand-accent"></i><span>IoT (ESP32/8266)</span></div>
                        <div className="tech-item"><i className="fab fa-git-alt text-brand-accent"></i><span>Git & GitHub</span></div>
                        <div className="tech-item"><i className="fab fa-figma text-brand-accent"></i><span>Figma</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-32 reveal">
            <div className="text-center mb-16">
                <h2 className="section-subtitle">My Journey</h2>
                <p className="section-title">Career & Education</p>
            </div>
            <div className="max-w-3xl mx-auto">
                <div className="relative">
                    <div className="absolute left-3 md:left-1/2 w-0.5 h-full timeline-line"></div>
                    
                    <div className="timeline-item mb-12">
                        <div className="timeline-content md:text-right">
                            <div className="timeline-dot work"></div>
                            <div className="timeline-card">
                                <img src="https://placehold.co/400x200/141414/2A2A2A?text=Hospitality" alt="MGrand Royale Resort" className="rounded-md mb-4 object-cover w-full h-32" />
                                <p className="text-sm text-subtext mb-1">June 2024 - Feb 2025</p>
                                <h4 className="card-title">Service Crew</h4>
                                <p className="text-brand-accent font-medium">MGrand Royale Resort</p>
                                <p className="text-subtext mt-2 text-sm">Honed communication and teamwork skills in a fast-paced, customer-focused environment, ensuring high standards of service and collaboration.</p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item mb-12">
                        <div className="timeline-content">
                            <div className="timeline-dot work"></div>
                            <div className="timeline-card">
                                <img src="https://placehold.co/400x200/141414/2A2A2A?text=Tech+Support" alt="Bits N' Bytes Computer Shop" className="rounded-md mb-4 object-cover w-full h-32" />
                                <p className="text-sm text-subtext mb-1">Feb 2024 - May 2024</p>
                                <h4 className="card-title">Technical Support Intern</h4>
                                <p className="text-brand-accent font-medium">Bits N' Bytes Computer Shop</p>
                                <p className="text-subtext mt-2 text-sm">Diagnosed and resolved diverse hardware/software issues, assembled custom PC builds, and provided direct client support, strengthening my technical problem-solving abilities.</p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item mb-12">
                        <div className="timeline-content md:text-right">
                            <div className="timeline-dot education"></div>
                            <div className="timeline-card">
                                <img src="https://placehold.co/400x200/141414/2A2A2A?text=University" alt="Samar State University" className="rounded-md mb-4 object-cover w-full h-32" />
                                <p className="text-sm text-subtext mb-1">2020 - 2024</p>
                                <h4 className="card-title">BS in Computer Engineering</h4>
                                <p className="font-medium text-subtext">Samar State University</p>
                                <p className="text-subtext mt-2 text-sm">Graduated as a Dean's Lister, with a comprehensive foundation in software development, embedded systems, and computer architecture.</p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="timeline-dot education"></div>
                            <div className="timeline-card">
                                <img src="https://placehold.co/400x200/141414/2A2A2A?text=CSS+Certification" alt="Quintin Quijano Sr. Agricultural School" className="rounded-md mb-4 object-cover w-full h-32" />
                                <p className="text-sm text-subtext mb-1">2018 - 2020</p>
                                <h4 className="card-title">Computer System Servicing NCII</h4>
                                <p className="font-medium text-subtext">Quintin Quijano Sr. Agricultural School</p>
                                <p className="text-subtext mt-2 text-sm">Gained a national certification in IT support and network administration, building a strong practical foundation for my engineering degree.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ imgSrc, title, description, liveLink, sourceLink, tags }) => (
    <div className="project-card">
        <div className="overflow-hidden rounded-t-xl">
            <img src={imgSrc} alt={title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-heading font-bold mb-2">{title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
            <p className="text-subtext mb-4 min-h-[70px]">{description}</p>
            <div className="flex space-x-4 mt-4">
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo <i className="fas fa-external-link-alt ml-1"></i></a>
                <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="project-link">Source Code <i className="fab fa-github ml-1"></i></a>
            </div>
        </div>
    </div>
);

const Projects = () => {
    const projectData = [
        {
            imgSrc: projectImageUrl1,
            title: "E-Shop Pro",
            description: "A full-stack e-commerce platform built with the MERN stack, featuring user authentication, product catalog, and a Stripe-powered checkout.",
            liveLink: "#",
            sourceLink: "#",
            tags: ["React", "Node.js", "MongoDB", "Stripe API"]
        },
        {
            imgSrc: projectImageUrl2,
            title: "Smart Grow System",
            description: "An IoT automated plant monitoring system using an ESP32. Data is sent to Firebase and visualized on a real-time React dashboard.",
            liveLink: "#",
            sourceLink: "#",
            tags: ["Embedded C++", "ESP32", "Firebase", "IoT"]
        },
        {
            imgSrc: projectImageUrl3,
            title: "This Developer Portfolio",
            description: "A sleek, modern personal portfolio built with React and Tailwind CSS to showcase my skills and projects with style and animations.",
            liveLink: "#",
            sourceLink: "#",
            tags: ["React", "Tailwind CSS", "UI/UX"]
        },
    ];

    return (
        <section id="projects" className="py-24 md:py-32 reveal">
            <div className="text-center mb-16">
                <h2 className="section-subtitle">MY WORK</h2>
                <p className="section-title">Featured Projects</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32 text-center reveal">
            <div className="text-center mb-10">
                <h2 className="section-subtitle">What's Next?</h2>
                <p className="section-title">Let's Build Together</p>
            </div>
            <p className="text-subtext max-w-2xl mx-auto mb-8 text-lg">
                I'm actively seeking new opportunities to apply my skills and collaborate on innovative projects. If you have an idea, a project, or just want to connect, my inbox is always open.
            </p>
            <a href="mailto:arvintenasas29@gmail.com" className="btn-premium inline-block text-lg">
                Say Hello <i className="fas fa-paper-plane ml-2"></i>
            </a>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="border-t border-main-border/50 relative">
            <div className="container mx-auto px-6 py-8 text-center text-subtext">
                <div className="flex justify-center space-x-6 mb-4">
                     <a href="https://github.com/arvintenasas" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/arvin-tenasas" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin"></i></a>
                    <a href="mailto:arvintenasas29@gmail.com" className="social-icon"><i className="fas fa-envelope"></i></a>
                </div>
                <p>&copy; {new Date().getFullYear()} Arvin Tenasas. Designed & Built with passion.</p>
            </div>
        </footer>
    );
};

// --- MAIN APP COMPONENT ---

export default function App() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));
        
        return () => {
            revealElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <ThemeProvider>
            <StyleInjector />
            <Header />
            <main className="container mx-auto px-6">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </ThemeProvider>
    );
}

const StyleInjector = () => (
    <style>
    {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Orbitron:wght@400;700;900&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

        @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        :root {
            --gradient-start: #08F7FE;
            --gradient-end: #00B2B6;
        }
        
        /* Dark Mode (default) */
        body.dark-mode {
            --bg: #0A0A0A;
            --card: #141414;
            --main-border: #2A2A2A;
            --main-text: #E5E7EB;
            --subtext: #9CA3AF;
            --brand-accent: #08F7FE;
            --brand-accent-glow: rgba(8, 247, 254, 0.5);
            background: linear-gradient(-45deg, #0A0A0A, #111827, #022c43, #0A0A0A);
        }

        /* Light Mode */
        body.light-mode {
            --bg: #f0f4f8;
            --card: #ffffff;
            --main-border: #dee2e6;
            --main-text: #212529;
            --subtext: #495057;
            --brand-accent: #007A7F;
            --brand-accent-glow: rgba(0, 122, 127, 0.3);
            background: linear-gradient(-45deg, #ffffff, #e6f7ff, #d1eaff, #ffffff);
        }
        
        .light-mode .project-card,
        .light-mode .timeline-card,
        .light-mode .tech-item {
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07);
        }
        
        html { scroll-behavior: smooth; }
        body {
            color: var(--main-text);
            font-family: 'Inter', sans-serif;
            transition: background-color 0.3s ease, color 0.3s ease;
            background-size: 400% 400%;
            animation: gradientAnimation 15s ease infinite;
        }

        /* Typography */
        .font-heading { font-family: 'Orbitron', sans-serif; text-shadow: 0 0 8px var(--brand-accent-glow); color: var(--main-text); }
        .text-brand-accent { color: var(--brand-accent); text-shadow: 0 0 8px var(--brand-accent-glow); }
        .text-subtext { color: var(--subtext); }
        .section-subtitle { color: var(--brand-accent); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; margin-bottom: 0.5rem; }
        .section-title { font-family: 'Orbitron', sans-serif; font-size: 2.5rem; font-weight: bold; color: var(--main-text); text-shadow: 0 0 10px var(--brand-accent-glow); }
        @media (min-width: 768px) { .section-title { font-size: 3rem; } }

        /* Header & Nav */
        .glass-header { background-color: transparent; border-bottom: 1px solid transparent; }
        .glass-header-scrolled { background-color: color-mix(in srgb, var(--bg) 80%, transparent); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid var(--main-border); }
        .nav-link { color: var(--subtext); position: relative; transition: color 0.3s ease; }
        .nav-link:hover, .nav-link.active { color: var(--main-text); }
        .nav-link::after { content: ''; position: absolute; bottom: -6px; left: 0; width: 0; height: 2px; background: var(--brand-accent); box-shadow: 0 0 8px var(--brand-accent-glow); transition: width .3s; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .mobile-menu-bg { background-color: var(--card); }
        .mobile-link { color: var(--subtext); transition: all 0.3s ease; }
        .mobile-link:hover { background-color: var(--brand-accent); color: #fff; }


        /* Theme Toggle */
        .theme-toggle-btn { background: none; border: none; font-size: 1.25rem; cursor: pointer; color: var(--subtext); transition: color 0.3s ease, transform 0.3s ease; }
        .theme-toggle-btn:hover { color: var(--brand-accent); transform: scale(1.1) rotate(15deg); }

        /* Buttons & Links */
        .btn-premium, .btn-secondary { padding: 0.75rem 2rem; border-radius: 9999px; font-weight: bold; transition: all 0.3s ease; display: inline-block; text-align: center; border: 1px solid transparent; }
        .btn-premium { color: #fff; background-image: linear-gradient(to right, var(--brand-accent) 0%, color-mix(in srgb, var(--brand-accent) 80%, black) 51%, var(--brand-accent) 100%); background-size: 200% auto; box-shadow: 0 0 15px var(--brand-accent-glow); }
        .dark-mode .btn-premium { color: #0A0A0A; }
        .btn-premium:hover { background-position: right center; transform: translateY(-3px) scale(1.05); box-shadow: 0 0 25px var(--brand-accent-glow); }
        .btn-secondary { background-color: transparent; color: var(--main-text); border: 1px solid var(--main-border); }
        .btn-secondary:hover { border-color: var(--brand-accent); color: var(--brand-accent); box-shadow: 0 0 15px var(--brand-accent-glow); transform: translateY(-2px); }

        /* Social Icons */
        .social-icon { color: var(--subtext); font-size: 1.5rem; transition: all 0.3s ease; }
        .social-icon:hover { color: var(--brand-accent); transform: scale(1.1) translateY(-2px); text-shadow: 0 0 10px var(--brand-accent-glow); }

        /* Typing Cursor */
        @keyframes blink { 50% { opacity: 0; } }
        .cursor-blink { animation: blink 1s step-end infinite; }
        
        /* Tilt Animation */
        @keyframes tilt { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-1deg); } 75% { transform: rotate(1deg); } }
        .animate-tilt { animation: tilt 10s infinite linear; }

        /* Scroll Reveal Animation */
        .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
        .reveal.visible { opacity: 1; transform: translateY(0); }

        /* Tech Item */
        .tech-item { display: flex; align-items: center; gap: 0.75rem; background-color: var(--card); padding: 0.75rem; border-radius: 0.5rem; border: 1px solid var(--main-border); transition: all 0.3s; color: var(--main-text); }
        .tech-item:hover { border-color: var(--brand-accent); transform: translateY(-3px); box-shadow: 0 4px 20px rgba(8, 247, 254, 0.1);}

        /* Timeline */
        .timeline-line { background-color: var(--main-border); box-shadow: 0 0 8px var(--brand-accent-glow); }
        .timeline-dot { position: absolute; top: 0.25rem; left: 0; transform: translateX(-50%); width: 1.25rem; height: 1.25rem; border-radius: 9999px; border: 4px solid var(--bg); box-shadow: 0 0 10px var(--brand-accent-glow); }
        .timeline-dot.work { background-color: var(--brand-accent); }
        .timeline-dot.education { background-color: var(--main-text); }
        .timeline-card { background-color: var(--card); padding: 1.5rem; border-radius: 0.5rem; border: 1px solid var(--main-border); transition: all .3s ease; }
        .timeline-card img { opacity: 0.75; transition: opacity .3s ease; }
        .timeline-card:hover { border-color: var(--brand-accent); box-shadow: 0 0 20px rgba(8, 247, 254, 0.15); transform: translateY(-5px); }
        .timeline-card:hover img { opacity: 1; }
        .card-title { font-size: 1.25rem; font-family: 'Orbitron', sans-serif; font-weight: bold; color: var(--main-text); }
        @media (min-width: 768px) {
            .timeline-item:nth-child(odd) .timeline-content { margin-left: 50%; padding-left: 2rem; }
            .timeline-item:nth-child(even) .timeline-content { margin-right: 50%; padding-right: 2rem; text-align: right; }
            .timeline-item:nth-child(n) .timeline-content { width: 50%; padding-left: 2rem; padding-right: 0; text-align: left; }
            .timeline-item:nth-child(even) .timeline-content { margin-left: 0; }
            .timeline-dot { left: 50%; }
        }

        /* Project Card */
        .project-card { background-color: var(--card); border: 1px solid var(--main-border); border-radius: 0.75rem; overflow: hidden; transition: all 0.3s ease; display: flex; flex-direction: column; }
        .project-card:hover { transform: translateY(-8px); border-color: var(--brand-accent); }
        .dark-mode .project-card:hover { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1); }
        .light-mode .project-card:hover { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1); }

        .project-card h3 { color: var(--main-text); }
        .tag { font-size: 0.75rem; font-weight: 600; background-color: var(--brand-accent); color: #fff; padding: 0.25rem 0.75rem; border-radius: 9999px; }
        .light-mode .tag { color: #fff; }
        .dark-mode .tag { background-color: var(--brand-accent)/20; color: var(--brand-accent); }
        
        .project-link { color: var(--subtext); font-weight: 600; transition: color 0.3s ease; }
        .project-link:hover { color: var(--brand-accent); }
    `}
    </style>
);

