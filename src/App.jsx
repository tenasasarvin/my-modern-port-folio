import React, { useState, useEffect, useRef, useContext, createContext } from 'react';

// --- ICONS (as SVG components for a premium feel) ---
const HomeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const UserIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const CodeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);
const BriefcaseIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);
const LayersIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
);
const MailIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const FileTextIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
);
const SunIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);
const MoonIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);
const MenuIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
const XIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const BotIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
);
const SendIcon = (props) => (
     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
);


// --- THEME CONTEXT ---
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.body.className = theme + '-mode';
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
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
    profileImageUrl: 'https://placehold.co/512x512/0A0A0A/08F7FE?text=AT&font=orbitron',
    projectImageUrl1: 'https://placehold.co/600x400/0A0A0A/08F7FE?text=SmartPen+IoT',
    projectImageUrl2: 'https://placehold.co/600x400/0A0A0A/FFFFFF?text=LSI+Website',
    projectImageUrl3: 'https://placehold.co/600x400/0A0A0A/9CA3AF?text=Portfolio+v3',
    thesisDiagramUrl: 'https://i.imgur.com/G2x21J9.png',
};


// --- ANIMATION HOOK ---
const useScrollReveal = (ref, dependency) => {
    useEffect(() => {
        const target = ref.current;
        if (!target) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, root: document.querySelector('.content-area') });

        const revealElements = target.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));
        
        return () => {
            revealElements.forEach(el => observer.unobserve(el));
        };
    }, [ref, dependency]);
};


// --- PAGE COMPONENTS ---

const Hero = () => {
    const titles = React.useMemo(() => ["Full-Stack Developer", "Creative Problem-Solver", "UI/UX Enthusiast"], []);
    const [titleIndex, setTitleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const canvasRef = useRef(null);
    const { theme } = useTheme();

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

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                vx: Math.random() * 1 - 0.5,
                vy: Math.random() * 1 - 0.5,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = theme === 'dark' ? 'rgba(8, 247, 254, 0.6)' : 'rgba(0, 122, 127, 0.6)';
            
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            });
            
            animationFrameId = requestAnimationFrame(animate);
        };
        
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        }
    }, [theme]);

    return (
        <section id="home" className="min-h-full flex items-center justify-center relative p-6 overflow-hidden">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-50"></canvas>
            <div className="text-center z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-4 reveal">
                    Crafting Digital Experiences
                    <br />
                    <span className="text-brand-accent">Where Code Meets Creativity.</span>
                </h1>
                <p className="text-lg text-subtext mb-4 max-w-2xl mx-auto reveal" style={{ transitionDelay: '200ms' }}>
                    Hi, I'm Arvin Tenasas. A Computer Engineer and Full-Stack Developer based in Manila, Philippines, passionate about building intuitive, high-performance web applications and embedded systems.
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

const About = () => (
    <section id="about" className="py-24 md:py-32 reveal">
        <div className="text-center mb-16">
            <h2 className="section-subtitle">INTRODUCTION</h2>
            <p className="section-title">Who I Am</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            <div className="md:w-1/2 lg:w-2/5">
                <div className="relative w-full group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <img src={ASSETS.profileImageUrl} alt="Arvin Tenasas" className="relative rounded-lg shadow-2xl w-full" />
                </div>
            </div>
            <div className="md:w-1/2 lg:w-3/5">
                <p className="text-subtext text-lg mb-6">
                    I'm a Computer Engineering graduate with a relentless curiosity for how things work. From designing responsive front-end interfaces to programming low-level microcontrollers, I'm driven by the challenge of solving complex problems and creating technology that makes a tangible impact.
                </p>
                <p className="text-subtext text-lg mb-8">
                    My goal is to not just write code, but to architect elegant, scalable solutions. I thrive in collaborative, agile environments where I can learn from my peers and contribute to building the future, one line of code at a time.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="philosophy-card">
                        <h4 className="font-bold text-lg mb-2 text-main-text">User-Centric Design</h4>
                        <p className="text-subtext text-sm">I prioritize creating intuitive and accessible interfaces that provide a seamless user experience.</p>
                    </div>
                    <div className="philosophy-card">
                        <h4 className="font-bold text-lg mb-2 text-main-text">Scalable Architecture</h4>
                        <p className="text-subtext text-sm">I build robust and maintainable codebases that can grow and adapt with the project's needs.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Services = () => (
    <section id="services" className="py-24 md:py-32 reveal">
        <div className="text-center mb-16">
            <h2 className="section-subtitle">WHAT I DO</h2>
            <p className="section-title">My Services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-card">
                <div className="text-brand-accent mb-4"><i className="fas fa-laptop-code fa-3x"></i></div>
                <h3 className="text-xl font-heading font-bold mb-2">Web Development</h3>
                <p className="text-subtext">Crafting responsive, high-performance websites and full-stack applications using modern technologies like React, Node.js, and Next.js.</p>
            </div>
            <div className="service-card">
                <div className="text-brand-accent mb-4"><i className="fas fa-drafting-compass fa-3x"></i></div>
                <h3 className="text-xl font-heading font-bold mb-2">UI/UX Design</h3>
                <p className="text-subtext">Designing intuitive and visually appealing user interfaces that prioritize user experience, from wireframing in Figma to final implementation.</p>
            </div>
            <div className="service-card">
                <div className="text-brand-accent mb-4"><i className="fas fa-microchip fa-3x"></i></div>
                <h3 className="text-xl font-heading font-bold mb-2">IoT & Embedded Systems</h3>
                <p className="text-subtext">Developing smart, connected devices and control systems using platforms like ESP32 and Arduino for automation and data collection.</p>
            </div>
        </div>
    </section>
);

const Experience = () => (
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
                            <p className="text-sm text-subtext mb-1">June 2024 - Present</p>
                            <h4 className="card-title">Fullstack Developer & Field Technician</h4>
                            <p className="text-brand-accent font-medium">LSI Leading Technologies INC.</p>
                            <ul className="text-subtext mt-3 text-sm list-disc list-inside space-y-1 text-left">
                                <li>Leading the development of the new, modern corporate website for LSI.</li>
                                <li>Installing and maintaining high-tech Uninterruptible Power Supply (UPS) systems for major clients.</li>
                                <li>Bridging software development with hands-on technical fieldwork across the Philippines.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="timeline-item mb-12">
                    <div className="timeline-content">
                        <div className="timeline-dot work"></div>
                        <div className="timeline-card">
                            <p className="text-sm text-subtext mb-1">Feb 2024 - May 2024</p>
                            <h4 className="card-title">Technical Support Intern</h4>
                            <p className="text-brand-accent font-medium">Bits N' Bytes Computer Shop</p>
                            <ul className="text-subtext mt-3 text-sm list-disc list-inside space-y-1">
                                <li>Diagnosed and resolved a wide range of hardware and software issues for clients.</li>
                                <li>Assembled, configured, and tested custom PC builds based on customer specifications.</li>
                                <li>Provided direct customer support, improving communication and problem-solving skills.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="timeline-item mb-12">
                    <div className="timeline-content md:text-right">
                        <div className="timeline-dot education"></div>
                        <div className="timeline-card">
                            <p className="text-sm text-subtext mb-1">2020 - 2024</p>
                            <h4 className="card-title">BS in Computer Engineering</h4>
                            <p className="font-medium text-subtext">Samar State University</p>
                            <ul className="text-subtext mt-3 text-sm list-disc list-inside space-y-1 text-left">
                                <li>Graduated as a Dean's Lister, demonstrating consistent academic excellence.</li>
                                <li>Specialized in software development, embedded systems, and computer architecture.</li>
                                <li>Led a capstone project on an IoT-based automated plant monitoring system.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ProjectCard = ({ imgSrc, title, description, liveLink, sourceLink, tags }) => (
    <div className="project-card group">
        <div className="relative overflow-hidden rounded-t-xl">
            <img src={imgSrc} alt={title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-heading font-bold mb-2">{title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
            <p className="text-subtext mb-4 flex-grow">{description}</p>
            
            <div className="mt-auto pt-4 border-t border-transparent group-hover:border-main-border transition-colors duration-300">
                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-gpu translate-y-2 group-hover:translate-y-0">
                    <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <span>Live Demo</span>
                        <i className="fas fa-external-link-alt ml-2"></i>
                    </a>
                    <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <span>Source Code</span>
                        <i className="fab fa-github ml-2"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const Projects = () => {
    const projectData = [
        { imgSrc: ASSETS.projectImageUrl1, title: "SmartPen: IoT Aquaculture System", description: "My undergraduate thesis project. SmartPen is an IoT-based system that automates fish feeding in marine pens by monitoring water quality, temperature, and sea currents. Features an Android app for remote control and data visualization via Firebase.", liveLink: "#", sourceLink: "#", tags: ["IoT", "ESP32", "Firebase", "Android", "Thesis"] },
        { imgSrc: ASSETS.projectImageUrl2, title: "LSI Website Modernization", description: "Leading the ground-up development of a new corporate website for LSI Leading Technologies. The project involves a complete UI/UX overhaul and implementation with a modern tech stack (React, Vite, Tailwind CSS) to enhance online presence and user engagement.", liveLink: "#", sourceLink: "#", tags: ["React", "Vite", "Tailwind CSS", "UI/UX"] },
        { imgSrc: ASSETS.projectImageUrl3, title: "AI-Powered Developer Portfolio", description: "The portfolio you're viewing now. A sleek, single-page application built with React and Tailwind CSS, featuring an integrated AI assistant (powered by Gemini) trained on my professional data to answer visitor questions.", liveLink: "#", sourceLink: "#", tags: ["React", "Tailwind CSS", "Gemini API", "UI/UX"] },
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
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Thank you for your message!');
        e.target.reset();
        setTimeout(() => setStatus(''), 3000);
    };

    return (
    <section id="contact" className="py-24 md:py-32 text-center reveal min-h-full flex flex-col justify-center items-center">
         <div className="text-center mb-10">
             <h2 className="section-subtitle">What's Next?</h2>
             <p className="section-title">Let's Build Together</p>
         </div>
         <p className="text-subtext max-w-2xl mx-auto mb-8 text-lg">
             I'm actively seeking new opportunities and am open to collaboration. Whether you have a project in mind or just want to connect, feel free to reach out.
         </p>
         <div className="w-full max-w-lg mx-auto">
             <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="contact-label">Name</label>
                        <input type="text" id="name" name="name" required className="contact-input" />
                    </div>
                    <div>
                        <label htmlFor="email" className="contact-label">Email</label>
                        <input type="email" id="email" name="email" required className="contact-input" />
                    </div>
                </div>
                 <div>
                    <label htmlFor="message" className="contact-label">Message</label>
                    <textarea id="message" name="message" rows="4" required className="contact-input"></textarea>
                 </div>
                 <div className="text-center">
                    <button type="submit" className="btn-premium inline-block text-lg w-full sm:w-auto">
                        Send Message <i className="fas fa-paper-plane ml-2"></i>
                    </button>
                 </div>
             </form>
             {status && <p className="mt-4 text-brand-accent">{status}</p>}
         </div>
     </section>
    );
};

const Credentials = () => {
    const [isThesisModalOpen, setIsThesisModalOpen] = useState(false);
    const [activeCredential, setActiveCredential] = useState(null);

    const thesisData = {
        type: 'thesis',
        title: "SmartPen: Smart Precision Feeding and Monitoring System for Marine Pens in Samar",
        abstract: "The 'SmartPen' system addresses inefficiencies in aquaculture, specifically in marine fish pens in Samar, by automating the feeding process. It utilizes sensors to monitor water quality (pH level), water temperature, and sea current direction to optimize feeding schedules and feed amounts, aiming to reduce waste and improve fish growth and health. The system features an Android-based application for remote monitoring and control, with data stored and managed via a Firebase cloud database.",
        objectives: [
            "Monitor water quality and temperature to determine optimal feeding times.",
            "Analyze sea currents to adjust feeding strategies and minimize feed loss.",
            "Calculate fish volume to dispense the appropriate amount of feed.",
            "Provide a remote monitoring and control interface via an Android application."
        ],
        downloadLink: "/Updated-Manuscript-as-of-August-29-2023 Original Copy.docx"
    };

    const credentialsData = {
        academic: [
            {
                ...thesisData,
                issuer: "Samar State University",
                date: "May 2023",
                action: () => setIsThesisModalOpen(true),
                buttonText: "View Summary"
            }
        ],
        professional: [
            {
                title: "Certificate of Employment",
                issuer: "LSI Leading Technologies INC.",
                date: "Present",
                description: "This document certifies that Arvin D. Tenasas has been employed at LSI Leading Technologies Inc. from June 2024 to the present, holding the position of Fullstack Developer & Field Technician Engineer. Responsibilities include full-cycle web application development and on-site installation and maintenance of critical power systems.",
                buttonText: "View"
            },
            {
                title: "Internship (OJT) Completion",
                issuer: "Bits N' Bytes Computer Shop",
                date: "May 2024",
                description: "This certifies that Arvin D. Tenasas has successfully completed 486 hours of On-the-Job Training as a Technical Support Intern. The training covered hardware diagnostics, custom PC assembly, software troubleshooting, and direct customer service.",
                buttonText: "View"
            },
            {
                title: "Data Science & Analytics Seminar",
                issuer: "Analytics Association of PH",
                date: "March 2024",
                description: "Certificate of Participation awarded to Arvin D. Tenasas for attending the 'Data Science & Analytics Seminar'. Topics included data modeling, machine learning fundamentals, data visualization techniques, and industry case studies.",
                buttonText: "View"
            },
            {
                title: "Modern Web Development Seminar",
                issuer: "Tech Institute PH",
                date: "Jan 2024",
                description: "Certificate of Completion awarded to Arvin D. Tenasas for completing the 'Modern Web Development' seminar. The curriculum focused on advanced React patterns, state management with Context and Redux, performance optimization strategies, and modern CSS frameworks.",
                buttonText: "View"
            }
        ],
        organizational: [
            {
                title: "Member, Institute of Computer Engineers",
                issuer: "ICpEP.SE - SSU Chapter",
                date: "2022 - 2024",
                description: "This certificate recognizes Arvin D. Tenasas as an active member of the Institute of Computer Engineers of the Philippines (ICpEP.SE) - Samar State University Student Chapter for the academic years 2022-2024. Actively participated in organization-led seminars, workshops, and community events.",
                buttonText: "View"
            }
        ]
    };

    credentialsData.professional.forEach(c => c.action = () => setActiveCredential(c));
    credentialsData.organizational.forEach(c => c.action = () => setActiveCredential(c));
    
    const renderCredentialCard = (cred, index) => (
        <div key={index} className="credential-card">
            <div className="flex-grow">
                <p className="text-sm text-subtext">{cred.issuer}</p>
                <h3 className="text-xl font-heading font-bold my-2">{cred.title}</h3>
            </div>
            <div className="mt-4 pt-4 border-t border-main-border/50 flex justify-between items-center">
                <span className="text-sm text-subtext">{cred.date}</span>
                <button onClick={cred.action} className="btn-secondary !py-2 !px-4 !text-sm">{cred.buttonText}</button>
            </div>
        </div>
    );

    return (
        <>
            <section id="credentials" className="py-24 md:py-32 reveal">
                <div className="text-center mb-16">
                    <h2 className="section-subtitle">MY QUALIFICATIONS</h2>
                    <p className="section-title">Credentials & Documents</p>
                </div>
                
                <div className="space-y-12">
                    <div>
                        <h3 className="text-2xl font-heading font-semibold mb-6 border-l-4 border-brand-accent pl-4">Academic & Research</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {credentialsData.academic.map(renderCredentialCard)}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-heading font-semibold mb-6 border-l-4 border-brand-accent pl-4">Professional Development</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           {credentialsData.professional.map(renderCredentialCard)}
                        </div>
                    </div>
                     <div>
                        <h3 className="text-2xl font-heading font-semibold mb-6 border-l-4 border-brand-accent pl-4">Organizational Involvement</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {credentialsData.organizational.map(renderCredentialCard)}
                        </div>
                    </div>
                </div>
            </section>

            {isThesisModalOpen && (
                <div className="modal-overlay" onClick={() => setIsThesisModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2 className="section-title !text-2xl md:!text-3xl">{thesisData.title}</h2>
                            <button onClick={() => setIsThesisModalOpen(false)} className="absolute top-4 right-4 text-subtext hover:text-main-text">
                                <XIcon className="w-8 h-8"/>
                            </button>
                        </div>
                        <div className="modal-body">
                           <img src={ASSETS.thesisDiagramUrl} alt="SmartPen System Architecture" className="rounded-lg mb-6 border border-main-border"/>
                            <h3 className="text-xl font-heading font-bold mb-2">Abstract</h3>
                            <p className="text-subtext mb-6">{thesisData.abstract}</p>
                            
                            <h3 className="text-xl font-heading font-bold mb-2">Key Objectives</h3>
                            <ul className="text-subtext list-disc list-inside space-y-2 mb-6">
                                {thesisData.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <a href={thesisData.downloadLink} download className="btn-premium w-full">Download Full Manuscript</a>
                        </div>
                    </div>
                </div>
            )}

            {activeCredential && (
                 <div className="modal-overlay" onClick={() => setActiveCredential(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2 className="section-title !text-2xl md:!text-3xl">{activeCredential.title}</h2>
                            <button onClick={() => setActiveCredential(null)} className="absolute top-4 right-4 text-subtext hover:text-main-text">
                                <XIcon className="w-8 h-8"/>
                            </button>
                        </div>
                        <div className="modal-body">
                           <div className="bg-card p-6 rounded-lg border border-main-border">
                                <p className="text-subtext mb-4"><strong>Issuer:</strong> {activeCredential.issuer}</p>
                                <p className="text-subtext mb-6"><strong>Date:</strong> {activeCredential.date}</p>
                                <p className="text-main-text">{activeCredential.description}</p>
                           </div>
                        </div>
                        <div className="modal-footer">
                           <p className="text-xs text-subtext text-center">This is placeholder content. The actual certificate can be linked here.</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


// --- AI CHAT COMPONENT ---
const AIChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatBodyRef = useRef(null);

    const portfolioContext = `
        You are a helpful AI assistant for Arvin Tenasas's portfolio. 
        Your goal is to answer questions about Arvin based ONLY on the information provided below.
        Be friendly, professional, and concise. Do not answer questions unrelated to Arvin.

        Information about Arvin Tenasas:
        - Full Name: Arvin Tenasas
        - Role: Full-Stack Developer & Field Technician Engineer
        - Location: Manila, Philippines
        - Passion: Building intuitive, high-performance web applications and embedded systems.
        - Philosophy: 1) User-Centric Design (intuitive, accessible interfaces). 2) Scalable Architecture (robust, maintainable code).
        
        Services Offered:
        - Web Development: React, Node.js, Next.js.
        - UI/UX Design: Wireframing in Figma to implementation.
        - IoT & Embedded Systems: ESP32 and Arduino development.

        Experience:
        1. LSI Leading Technologies INC. (June 2024 - Present): Fullstack Developer & Field Technician.
           - Developing the new corporate website for LSI.
           - Installing and maintaining high-tech Uninterruptible Power Supply (UPS) systems for clients.
        2. Bits N' Bytes Computer Shop (Feb 2024 - May 2024): Technical Support Intern.
           - Diagnosed hardware/software issues, assembled custom PCs, and provided client support.

        Education:
        - Samar State University (2020 - 2024): BS in Computer Engineering (Dean's Lister).
          - Specialized in software development, embedded systems, and computer architecture.
          - Led a capstone project on an IoT-based automated plant monitoring system.
        - Quintin Quijano Sr. Agricultural School (2018-2020): Computer System Servicing NCII.

        Projects:
        1. SmartPen (Undergraduate Thesis): An IoT system to automate fish feeding in marine pens by monitoring water quality (pH), temperature, and sea currents. Features an Android app for remote control and data visualization via Firebase. It is solar-powered. A summary and download link for the manuscript are available on the 'Credentials' page.
        2. LSI Website Modernization: Currently leading the development of a new corporate website for LSI from scratch using React, Vite, and Tailwind CSS. This involves a complete UI/UX overhaul.
        3. AI-Powered Developer Portfolio (this site): Built with React and Tailwind CSS, and features an integrated AI assistant powered by the Gemini API to answer questions about my profile.
        
        Credentials:
        - The 'Credentials' page contains his documents organized into categories: Academic & Research (Thesis), Professional Development (Certificate of Employment, OJT Completion, Seminar Certificates), and Organizational Involvement.
    `;
    
    const suggestionPrompts = [
        "Tell me about the SmartPen project",
        "What is his current role?",
        "Where can I find his thesis?",
    ];

    useEffect(() => {
        if(isOpen && messages.length === 0) {
             setMessages([{ 
                 sender: 'ai', 
                 text: "Hello! I'm Arvin's AI assistant. I can answer any questions you have about his portfolio. Feel free to ask, or select a topic below to start.",
                 suggestions: suggestionPrompts 
             }]);
        }
    }, [isOpen]);

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);
    
    const callGeminiAPI = async (text) => {
        setIsLoading(true);
        try {
            const apiKey = "";
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
            const payload = {
                contents: [{ parts: [{ text: text }] }],
                systemInstruction: { parts: [{ text: portfolioContext }] },
            };
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            
            if (!response.ok) throw new Error(`API error: ${response.statusText}`);
            
            const result = await response.json();
            const aiText = result.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that. Please try again.";
            setMessages(prev => [...prev, { sender: 'ai', text: aiText }]);
            
        } catch (error) {
            console.error("AI Chat Error:", error);
            setMessages(prev => [...prev, { sender: 'ai', text: "Apologies, I'm having trouble connecting right now." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSend = () => {
        if (input.trim() === '' || isLoading) return;
        const userMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev.map(m => ({...m, suggestions: null})), userMessage]);
        setInput('');
        callGeminiAPI(input);
    };

    const handleSuggestionClick = (prompt) => {
        const userMessage = { sender: 'user', text: prompt };
        setMessages(prev => [...prev.map(m => ({...m, suggestions: null})), userMessage]);
        callGeminiAPI(prompt);
    };

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="ai-chat-button">
                <BotIcon className="w-8 h-8"/>
            </button>

            {isOpen && (
                 <div className="ai-chat-modal-overlay">
                    <div className="ai-chat-window">
                        <div className="chat-header">
                            <h3 className="font-heading text-lg">AI Portfolio Assistant</h3>
                            <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-subtext hover:text-main-text">
                                <XIcon className="w-6 h-6"/>
                            </button>
                        </div>
                        <div className="chat-body" ref={chatBodyRef}>
                            {messages.map((msg, index) => (
                                <div key={index}>
                                    <div className={`chat-message ${msg.sender}`}>
                                        <p>{msg.text}</p>
                                    </div>
                                    {msg.suggestions && (
                                        <div className="flex flex-wrap gap-2 mt-2 justify-start">
                                            {msg.suggestions.map((prompt, i) => (
                                                <button key={i} onClick={() => handleSuggestionClick(prompt)} className="suggestion-chip">
                                                    {prompt}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isLoading && <div className="chat-message ai"><p className="typing-indicator">...</p></div>}
                        </div>
                        <div className="chat-input-area">
                            <input 
                                type="text" 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about my projects..."
                                className="chat-input"
                            />
                            <button onClick={handleSend} className="send-button" disabled={isLoading}>
                                <SendIcon className="w-5 h-5"/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


// --- SIDEBAR & LAYOUT COMPONENTS ---

const NavItem = ({ icon, label, page, activePage, setActivePage, setSidebarOpen }) => (
    <button
        onClick={() => {
            setActivePage(page);
            setSidebarOpen(false);
        }}
        className={`flex items-center w-full px-4 py-3 text-left transition-all duration-200 rounded-lg ${activePage === page ? 'bg-brand-accent/20 text-brand-accent' : 'text-subtext hover:bg-card hover:text-main-text'}`}
    >
        {icon}
        <span className="ml-4 font-medium">{label}</span>
    </button>
);

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button onClick={toggleTheme} className="flex items-center w-full px-4 py-3 text-left transition-colors duration-200 rounded-lg text-subtext hover:bg-card hover:text-main-text">
            {theme === 'light' ? <MoonIcon className="w-5 h-5"/> : <SunIcon className="w-5 h-5" />}
            <span className="ml-4 font-medium">Toggle Theme</span>
        </button>
    );
};

const Sidebar = ({ activePage, setActivePage, isSidebarOpen, setSidebarOpen }) => {
    const navItems = [
        { icon: <HomeIcon className="w-5 h-5"/>, label: "Home", page: "home" },
        { icon: <UserIcon className="w-5 h-5"/>, label: "About", page: "about" },
        { icon: <CodeIcon className="w-5 h-5"/>, label: "Services", page: "services" },
        { icon: <BriefcaseIcon className="w-5 h-5"/>, label: "Experience", page: "experience" },
        { icon: <LayersIcon className="w-5 h-5"/>, label: "Projects", page: "projects" },
        { icon: <FileTextIcon className="w-5 h-5"/>, label: "Credentials", page: "credentials" },
        { icon: <MailIcon className="w-5 h-5"/>, label: "Contact", page: "contact" },
    ];

    return (
        <>
            <aside className={`fixed top-0 left-0 z-[60] h-full w-64 bg-sidebar-bg border-r border-main-border flex-col p-4 transition-transform duration-300 ease-in-out md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full">
                     <a href="#" onClick={() => setActivePage('home')} className="text-2xl font-heading font-bold tracking-wider hover:text-brand-accent transition-colors p-4 text-center">
                        ARVIN.DEV
                    </a>
                    <nav className="flex-grow mt-8 space-y-2">
                        {navItems.map(item => (
                            <NavItem key={item.page} {...item} activePage={activePage} setActivePage={setActivePage} setSidebarOpen={setSidebarOpen} />
                        ))}
                    </nav>
                    <div className="space-y-2">
                        <ThemeToggle />
                    </div>
                    <div className="border-t border-main-border/50 mt-4 pt-4">
                        <div className="flex justify-center space-x-4 mb-4">
                            <a href="https://github.com/arvintenasas" target="_blank" rel="noopener noreferrer" className="social-icon text-xl"><i className="fab fa-github"></i></a>
                            <a href="https://linkedin.com/in/arvin-tenasas" target="_blank" rel="noopener noreferrer" className="social-icon text-xl"><i className="fab fa-linkedin"></i></a>
                            <a href="mailto:arvintenasas29@gmail.com" className="social-icon text-xl"><i className="fas fa-envelope"></i></a>
                        </div>
                        <p className="text-xs text-subtext text-center">&copy; {new Date().getFullYear()} Arvin Tenasas.</p>
                    </div>
                </div>
            </aside>
            {isSidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-50 md:hidden"></div>}
        </>
    );
};


// --- MAIN APP COMPONENT ---

export default function App() {
    const [activePage, setActivePage] = useState('home');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const contentRef = useRef(null);

    useScrollReveal(contentRef, activePage);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [activePage]);

    const renderPage = () => {
        switch (activePage) {
            case 'home': return <Hero />;
            case 'about': return <About />;
            case 'services': return <Services />;
            case 'experience': return <Experience />;
            case 'projects': return <Projects />;
            case 'credentials': return <Credentials />;
            case 'contact': return <Contact />;
            default: return <Hero />;
        }
    };

    return (
        <ThemeProvider>
            <StyleInjector />
            <div className="app-layout">
                <Sidebar activePage={activePage} setActivePage={setActivePage} isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
                
                <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="fixed top-4 left-4 z-50 p-2 rounded-md bg-card/80 backdrop-blur-sm md:hidden">
                    {isSidebarOpen ? <XIcon /> : <MenuIcon />}
                </button>

                <main ref={contentRef} className="content-area">
                    <div key={activePage} className="page-content">
                        {renderPage()}
                    </div>
                </main>
                <AIChat />
            </div>
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
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes typing {
            0% { width: 0; }
            50% { width: 5px; }
            100% { width: 10px; }
        }
        
        :root { --gradient-start: #08F7FE; --gradient-end: #00B2B6; }
        
        body.dark-mode {
            --bg: #0A0A0A; --sidebar-bg: #0F0F0F; --card: #141414; --main-border: #2A2A2A; --main-text: #E5E7EB; --subtext: #9CA3AF; --brand-accent: #08F7FE; --brand-accent-glow: rgba(8, 247, 254, 0.5);
            background: linear-gradient(-45deg, #0A0A0A, #111827, #022c43, #0A0A0A);
        }
        body.light-mode {
            --bg: #f0f4f8; --sidebar-bg: #FFFFFF; --card: #ffffff; --main-border: #dee2e6; --main-text: #212529; --subtext: #495057; --brand-accent: #007A7F; --brand-accent-glow: rgba(0, 122, 127, 0.3);
            background: linear-gradient(-45deg, #ffffff, #e6f7ff, #d1eaff, #ffffff);
        }
        
        .light-mode .project-card, .light-mode .timeline-card, .light-mode .tech-item, .light-mode .philosophy-card, .light-mode .service-card, .light-mode .credential-card {
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07);
        }
        
        html { scroll-behavior: smooth; }
        body {
            color: var(--main-text); font-family: 'Inter', sans-serif; transition: background-color 0.3s ease, color 0.3s ease;
            background-size: 400% 400%; animation: gradientAnimation 15s ease infinite;
        }

        .app-layout { display: flex; }
        .content-area {
            flex-grow: 1; height: 100vh; overflow-y: auto; background-color: var(--bg);
            transition: background-color 0.3s ease; padding-left: 0;
        }
        @media (min-width: 768px) { .content-area { padding-left: 16rem; } }
        .page-content { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; animation: fadeIn 0.6s ease-out; }

        .font-heading { font-family: 'Orbitron', sans-serif; text-shadow: 0 0 8px var(--brand-accent-glow); color: var(--main-text); }
        .text-brand-accent { color: var(--brand-accent); text-shadow: 0 0 8px var(--brand-accent-glow); }
        .text-subtext { color: var(--subtext); }
        .section-subtitle { color: var(--brand-accent); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; margin-bottom: 0.5rem; }
        .section-title { font-family: 'Orbitron', sans-serif; font-size: 2.5rem; font-weight: bold; color: var(--main-text); text-shadow: 0 0 10px var(--brand-accent-glow); }
        @media (min-width: 768px) { .section-title { font-size: 3rem; } }

        .btn-premium, .btn-secondary { padding: 0.75rem 2rem; border-radius: 9999px; font-weight: bold; transition: all 0.3s ease; display: inline-block; text-align: center; border: 1px solid transparent; }
        .btn-premium { color: #fff; background-image: linear-gradient(to right, var(--brand-accent) 0%, color-mix(in srgb, var(--brand-accent) 80%, black) 51%, var(--brand-accent) 100%); background-size: 200% auto; box-shadow: 0 0 15px var(--brand-accent-glow); }
        .dark-mode .btn-premium { color: #0A0A0A; }
        .btn-premium:hover { background-position: right center; transform: translateY(-3px) scale(1.05); box-shadow: 0 0 25px var(--brand-accent-glow); }
        .btn-secondary { background-color: transparent; color: var(--main-text); border: 1px solid var(--main-border); }
        .btn-secondary:hover { border-color: var(--brand-accent); color: var(--brand-accent); box-shadow: 0 0 15px var(--brand-accent-glow); transform: translateY(-2px); }

        .social-icon { color: var(--subtext); transition: all 0.3s ease; }
        .social-icon:hover { color: var(--brand-accent); transform: scale(1.1) translateY(-2px); text-shadow: 0 0 10px var(--brand-accent-glow); }

        @keyframes blink { 50% { opacity: 0; } }
        .cursor-blink { animation: blink 1s step-end infinite; }
        
        @keyframes tilt { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-1deg); } 75% { transform: rotate(1deg); } }
        .animate-tilt { animation: tilt 10s infinite linear; }

        .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        
        .philosophy-card { background-color: var(--card); padding: 1.5rem; border-radius: 0.5rem; border: 1px solid var(--main-border); transition: all .3s ease; }
        .philosophy-card:hover { border-color: var(--brand-accent); transform: translateY(-3px); }

        .service-card { background-color: var(--card); padding: 2rem; border-radius: 0.75rem; border: 1px solid var(--main-border); transition: all .3s ease; text-align: center; }
        .service-card:hover { border-color: var(--brand-accent); transform: translateY(-5px); box-shadow: 0 8px 30px rgba(8, 247, 254, 0.1); }

        .timeline-line { background-color: var(--main-border); box-shadow: 0 0 8px var(--brand-accent-glow); }
        .timeline-dot { position: absolute; top: 0.25rem; left: 0; transform: translateX(-50%); width: 1.25rem; height: 1.25rem; border-radius: 9999px; border: 4px solid var(--bg); box-shadow: 0 0 10px var(--brand-accent-glow); }
        .timeline-dot.work { background-color: var(--brand-accent); }
        .timeline-dot.education { background-color: var(--main-text); }
        .timeline-card { background-color: var(--card); padding: 1.5rem; border-radius: 0.5rem; border: 1px solid var(--main-border); transition: all .3s ease; }
        .timeline-card:hover { border-color: var(--brand-accent); box-shadow: 0 0 20px rgba(8, 247, 254, 0.15); transform: translateY(-5px); }
        @media (min-width: 768px) {
            .timeline-item:nth-child(odd) .timeline-content { margin-left: 50%; padding-left: 2rem; }
            .timeline-item:nth-child(even) .timeline-content { margin-right: 50%; padding-right: 2rem; text-align: right; }
            .timeline-item:nth-child(n) .timeline-content { width: 50%; padding-left: 2rem; padding-right: 0; text-align: left; }
            .timeline-item:nth-child(even) .timeline-content { margin-left: 0; }
            .timeline-dot { left: 50%; }
        }
        .card-title { font-size: 1.25rem; font-family: 'Orbitron', sans-serif; font-weight: bold; color: var(--main-text); }
        

        .project-card { background-color: var(--card); border: 1px solid var(--main-border); border-radius: 0.75rem; overflow: hidden; transition: all 0.3s ease; display: flex; flex-direction: column; }
        .project-card:hover { transform: translateY(-8px); border-color: var(--brand-accent); box-shadow: 0 8px 30px rgba(8, 247, 254, 0.1); }
        .project-link { 
            color: var(--subtext); 
            font-weight: 600; 
            transition: all 0.3s ease; 
            display: inline-flex; 
            align-items: center;
            font-size: 0.875rem;
        }
        .project-link:hover { 
            color: var(--brand-accent);
            transform: translateY(-2px);
        }
        .project-link i {
            transition: transform 0.3s ease;
        }
        .project-link:hover i {
            transform: scale(1.1);
        }
        .project-card h3 { color: var(--main-text); }
        .tag { font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.75rem; border-radius: 9999px; }
        .dark-mode .tag { background-color: var(--brand-accent)/20; color: var(--brand-accent); }
        .light-mode .tag { background-color: var(--brand-accent); color: #fff; }

        .contact-label { display: block; margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--subtext); }
        .contact-input { width: 100%; background-color: var(--card); border: 1px solid var(--main-border); border-radius: 0.5rem; padding: 0.75rem; color: var(--main-text); transition: border-color 0.3s; }
        .contact-input:focus { outline: none; border-color: var(--brand-accent); box-shadow: 0 0 0 2px var(--brand-accent-glow); }
        
        .credential-card {
            background-color: var(--card);
            border: 1px solid var(--main-border);
            border-radius: 0.75rem;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            transition: all 0.3s ease;
        }
        .credential-card:hover {
            transform: translateY(-5px);
            border-color: var(--brand-accent);
        }

        .modal-overlay {
            position: fixed;
            inset: 0;
            background-color: rgba(0,0,0,0.7);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease;
        }
        .modal-content {
            background-color: var(--sidebar-bg);
            border: 1px solid var(--main-border);
            border-radius: 1rem;
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        .modal-header { position: relative; padding: 1.5rem; border-bottom: 1px solid var(--main-border); }
        .modal-body { flex-grow: 1; padding: 1.5rem; overflow-y: auto; }
        .modal-footer { padding: 1.5rem; border-top: 1px solid var(--main-border); background-color: var(--card); }

        /* AI Chat Styles */
        .ai-chat-button {
            position: fixed;
            bottom: 1.5rem;
            right: 1.5rem;
            z-index: 100;
            width: 4rem;
            height: 4rem;
            border-radius: 9999px;
            background-image: linear-gradient(to right, var(--brand-accent) 0%, color-mix(in srgb, var(--brand-accent) 80%, black) 51%, var(--brand-accent) 100%);
            background-size: 200% auto;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 20px var(--brand-accent-glow);
            transition: all 0.3s ease;
        }
        .dark-mode .ai-chat-button { color: #0A0A0A; }
        .ai-chat-button:hover { transform: scale(1.1); box-shadow: 0 8px 30px var(--brand-accent-glow); }
        
        .ai-chat-modal-overlay {
            position: fixed;
            inset: 0;
            background-color: rgba(0,0,0,0.7);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease;
        }
        .ai-chat-window {
            width: 90%;
            max-width: 600px;
            height: 80vh;
            max-height: 700px;
            background-color: var(--sidebar-bg);
            border: 1px solid var(--main-border);
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            overflow: hidden;
        }
        .chat-header {
            position: relative;
            padding: 1rem;
            border-bottom: 1px solid var(--main-border);
            text-align: center;
        }
        .chat-body {
            flex-grow: 1;
            padding: 1rem;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .chat-message { max-width: 80%; padding: 0.75rem 1rem; border-radius: 0.75rem; line-height: 1.5; word-wrap: break-word; }
        .chat-message.user { align-self: flex-end; background-color: var(--brand-accent); color: #fff; border-bottom-right-radius: 0; }
        .dark-mode .chat-message.user { color: #0A0A0A; }
        .chat-message.ai { align-self: flex-start; background-color: var(--card); border: 1px solid var(--main-border); border-bottom-left-radius: 0; }
        .chat-input-area { padding: 1rem; border-top: 1px solid var(--main-border); display: flex; gap: 0.5rem; }
        .chat-input {
            flex-grow: 1;
            background-color: var(--card);
            border: 1px solid var(--main-border);
            border-radius: 9999px;
            padding: 0.5rem 1rem;
            color: var(--main-text);
            outline: none;
        }
        .chat-input:focus { border-color: var(--brand-accent); }
        .send-button {
            background-color: var(--brand-accent);
            color: #fff;
            border: none;
            border-radius: 50%;
            width: 2.5rem;
            height: 2.5rem;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: opacity 0.2s;
        }
        .dark-mode .send-button { color: #0A0A0A; }
        .send-button:disabled { opacity: 0.5; cursor: not-allowed; }
        .typing-indicator {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            animation: typing 1s steps(3, end) infinite;
        }
        .suggestion-chip {
            background-color: var(--card);
            border: 1px solid var(--main-border);
            color: var(--subtext);
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .suggestion-chip:hover {
            border-color: var(--brand-accent);
            color: var(--brand-accent);
        }
    `}
    </style>
);




