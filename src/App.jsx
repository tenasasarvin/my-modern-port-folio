import React, { useState, useEffect } from 'react';
import profile from './assets/profile.jpg';

// Header Component
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <header id="header" className={`glass-header fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-heading font-bold text-white tracking-wider">Arvin.</a>
                <nav className="hidden md:flex space-x-8 font-medium">
                    <a href="#home" className="text-dark-subtext hover:text-white transition-colors duration-300">Home</a>
                    <a href="#about" className="text-dark-subtext hover:text-white transition-colors duration-300">About</a>
                    <a href="#experience" className="text-dark-subtext hover:text-white transition-colors duration-300">Experience</a>
                    <a href="#projects" className="text-dark-subtext hover:text-white transition-colors duration-300">Projects</a>
                    <a href="#contact" className="text-dark-subtext hover:text-white transition-colors duration-300">Contact</a>
                </nav>
                <button id="mobile-menu-button" className="md:hidden text-white text-2xl z-50" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            {/* Mobile Menu */}
            <div id="mobile-menu" className={`${isMenuOpen ? '' : 'hidden'} md:hidden bg-dark-card`}>
                <a href="#home" onClick={closeMenu} className="block py-3 px-6 text-center text-dark-subtext hover:bg-brand-accent hover:text-white transition-colors duration-300">Home</a>
                <a href="#about" onClick={closeMenu} className="block py-3 px-6 text-center text-dark-subtext hover:bg-brand-accent hover:text-white transition-colors duration-300">About</a>
                <a href="#experience" onClick={closeMenu} className="block py-3 px-6 text-center text-dark-subtext hover:bg-brand-accent hover:text-white transition-colors duration-300">Experience</a>
                <a href="#projects" onClick={closeMenu} className="block py-3 px-6 text-center text-dark-subtext hover:bg-brand-accent hover:text-white transition-colors duration-300">Projects</a>
                <a href="#contact" onClick={closeMenu} className="block py-3 px-6 text-center text-dark-subtext hover:bg-brand-accent hover:text-white transition-colors duration-300">Contact</a>
            </div>
        </header>
    );
};

// Hero Component
const Hero = () => {
    const titles = React.useMemo(() => ["Web Developer", "Front-End Developer", "Embedded System Developer"], []);
    const [titleIndex, setTitleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = titles[titleIndex];
        const typingSpeed = 150;
        const deletingSpeed = 75;
        const delayBeforeDelete = 2000;

        const handleTyping = () => {
            if (isDeleting) {
                // Deleting
                setText(currentTitle.substring(0, text.length - 1));
            } else {
                // Typing
                setText(currentTitle.substring(0, text.length + 1));
            }

            // When a word is fully typed, pause, then start deleting
            if (!isDeleting && text === currentTitle) {
                setTimeout(() => setIsDeleting(true), delayBeforeDelete);
            } 
            // When a word is fully deleted, move to the next title
            else if (isDeleting && text === '') {
                setIsDeleting(false);
                setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
            }
        };

        const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, titleIndex, titles]);


    return (
        <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center animated-gradient">
            <div className="md:w-1/2 md:pr-12 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-4 reveal">
                    Crafting Digital Solutions
                    <br />
                    <span className="text-brand-accent">From Code.</span>
                </h1>
                <p className="text-lg text-dark-subtext mb-4 max-w-xl mx-auto md:mx-0 reveal" style={{ transitionDelay: '200ms' }}>
                    I'm Arvin Tenasas, a Computer Engineer from Manila, passionate about building robust and user-centric applications.
                </p>
                 <p className="text-lg text-dark-subtext mb-8 max-w-xl mx-auto md:mx-0 reveal" style={{ transitionDelay: '300ms' }}>
                    A passionate Computer Engineer specializing in front-end and embedded systems development.
                </p>
                
                <div className="bg-dark-card p-4 rounded-md border border-dark-border font-mono text-lg text-left max-w-xl mx-auto md:mx-0 mb-8 reveal" style={{ transitionDelay: '400ms' }}>
                    <span className="text-gray-500">&gt; </span>
                    <span className="text-green-400">{text}</span>
                    <span className="cursor-blink text-green-400">|</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 reveal" style={{ transitionDelay: '600ms' }}>
                    <a href="#projects" className="btn-premium w-full sm:w-auto text-center bg-brand-accent text-white font-semibold py-3 px-8 rounded-full">Explore Projects</a>
                    <a href="/Updated Resume.pdf" download className="btn-premium w-full sm:w-auto text-center bg-dark-card text-white font-semibold py-3 px-8 rounded-full border border-dark-border hover:border-brand-accent">Download CV</a>
                </div>
                <div className="mt-12 flex justify-center md:justify-start space-x-6 reveal" style={{ transitionDelay: '800ms' }}>
                    <a href="#" className="text-dark-subtext hover:text-brand-accent transition-colors duration-300 text-2xl"><i className="fab fa-github"></i></a>
                    <a href="#" className="text-dark-subtext hover:text-brand-accent transition-colors duration-300 text-2xl"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="text-dark-subtext hover:text-brand-accent transition-colors duration-300 text-2xl"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
            <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-center">
                <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
                    <div className="absolute inset-0 bg-brand-accent rounded-full blur-2xl opacity-30"></div>
                    <img src={profile} alt="Arvin Tenasas" className="relative rounded-full w-full h-full mx-auto object-cover border-4 border-dark-border" />
                </div>
            </div>
        </section>
    );
};

// About Component
const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 reveal">
            <div className="text-center mb-16">
                <h2 className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-2">Introduction</h2>
                <p className="text-4xl md:text-5xl font-heading font-bold text-white">About Me</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 lg:w-2/5">
                    <img src={profile} alt="About Arvin" className="rounded-lg shadow-2xl w-full" />
                </div>
                <div className="md:w-1/2 lg:w-3/5">
                    <p className="text-dark-subtext text-lg mb-6">
                        Hello! I'm Arvin Tenasas, a recent Computer Engineering graduate from Samar State University. My journey in tech is driven by a deep curiosity for how things work and a passion for creating solutions that make a difference.
                    </p>
                    <p className="text-dark-subtext text-lg mb-8">
                        I thrive in collaborative environments and am committed to lifelong learning to stay at the forefront of technology. I'm currently seeking opportunities where I can apply my skills in a challenging and growth-oriented role.
                    </p>
                    <h3 className="text-2xl font-heading font-semibold text-white mb-6">Core Competencies</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm md:text-base">
                        <div className="flex items-center space-x-3"><i className="fa-solid fa-bolt text-brand-accent"></i><span>Vite</span></div>
                        <div className="flex items-center space-x-3"><i className="fa-brands fa-react text-brand-accent"></i><span>React</span></div>
                        <div className="flex items-center space-x-3"><i className="fa-solid fa-wind text-brand-accent"></i><span>Tailwind CSS</span></div>
                        <div className="flex items-center space-x-3"><i className="fa-solid fa-database text-brand-accent"></i><span>MySQL</span></div>
                        <div className="flex items-center space-x-3"><i className="fa-brands fa-js text-brand-accent"></i><span>JavaScript</span></div>
                        <div className="flex items-center space-x-3"><i className="fa-brands fa-html5 text-brand-accent"></i><span>HTML</span></div>
                        <div className="flex items-center space-x-3"><i className="fa-brands fa-css3-alt text-brand-accent"></i><span>CSS</span></div>
                        <div className="flex items-center space-x-3"><i className="fa-solid fa-microchip text-brand-accent"></i><span>Embedded Systems</span></div>
                        <div className="flex items-center space-x-3"><i className="fa-solid fa-robot text-brand-accent"></i><span>Robotics</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Experience Component
const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-32 reveal">
            <div className="text-center mb-16">
                <h2 className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-2">My Journey</h2>
                <p className="text-4xl md:text-5xl font-heading font-bold text-white">Career & Education</p>
            </div>
            <div className="max-w-3xl mx-auto">
                {/* Timeline container */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-3 md:left-1/2 w-0.5 h-full bg-dark-border"></div>
                    
                    {/* Timeline Item: Work 1 */}
                    <div className="timeline-item mb-12 flex md:justify-end md:pr-8">
                        <div className="w-full md:w-1/2 relative pl-8 md:pl-0">
                            <div className="timeline-dot absolute top-1 -left-1.5 md:left-auto md:-right-[34px] w-4 h-4 bg-brand-accent rounded-full border-4 border-dark-bg"></div>
                            <div className="bg-dark-card p-6 rounded-lg border border-dark-border">
                                <p className="text-sm text-dark-subtext mb-1">June 2024 - Feb 2025</p>
                                <h4 className="text-xl font-heading font-bold text-white">Service Crew</h4>
                                <p className="text-brand-accent font-medium">MGrand Royale Resort</p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Item: Work 2 */}
                    <div className="timeline-item mb-12 flex">
                         <div className="w-full md:w-1/2 md:ml-auto md:pl-8">
                            <div className="timeline-dot absolute top-1 -left-1.5 md:-left-[2px] w-4 h-4 bg-brand-accent rounded-full border-4 border-dark-bg"></div>
                            <div className="bg-dark-card p-6 rounded-lg border border-dark-border">
                                <p className="text-sm text-dark-subtext mb-1">Feb 2024 - May 2024</p>
                                <h4 className="text-xl font-heading font-bold text-white">Technical Support Intern</h4>
                                <p className="text-brand-accent font-medium">Bits N' Bytes Computer Shop</p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Item: Education 1 */}
                    <div className="timeline-item mb-12 flex md:justify-end md:pr-8">
                        <div className="w-full md:w-1/2 relative pl-8 md:pl-0">
                            <div className="timeline-dot absolute top-1 -left-1.5 md:left-auto md:-right-[34px] w-4 h-4 bg-dark-text rounded-full border-4 border-dark-bg"></div>
                            <div className="bg-dark-card p-6 rounded-lg border border-dark-border">
                                <p className="text-sm text-dark-subtext mb-1">2020 - 2024</p>
                                <h4 className="text-xl font-heading font-bold text-white">BS in Computer Engineering</h4>
                                <p className="text-dark-subtext font-medium">Samar State University</p>
                            </div>
                        </div>
                    </div>

                     {/* Timeline Item: Education 2 */}
                    <div className="timeline-item flex">
                        <div className="w-full md:w-1/2 md:ml-auto md:pl-8">
                            <div className="timeline-dot absolute top-1 -left-1.5 md:-left-[2px] w-4 h-4 bg-dark-text rounded-full border-4 border-dark-bg"></div>
                            <div className="bg-dark-card p-6 rounded-lg border border-dark-border">
                                <p className="text-sm text-dark-subtext mb-1">2018 - 2020</p>
                                <h4 className="text-xl font-heading font-bold text-white">Computer System Servicing</h4>
                                <p className="text-dark-subtext font-medium">Quintin Quijano Sr. Agricultural School</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// Projects Component
const ProjectCard = ({ imgSrc, title, description, liveLink, sourceLink }) => (
    <div className="project-card-premium rounded-xl overflow-hidden group">
        <img src={imgSrc} alt={title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" />
        <div className="p-6">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">{title}</h3>
            <p className="text-dark-subtext mb-4">
                {description}
            </p>
            <div className="flex space-x-4 mt-4">
                <a href={liveLink} className="text-dark-subtext hover:text-brand-accent font-semibold transition-colors duration-300">Live Demo <i className="fas fa-external-link-alt ml-1"></i></a>
                <a href={sourceLink} className="text-dark-subtext hover:text-brand-accent font-semibold transition-colors duration-300">Source Code <i className="fab fa-github ml-1"></i></a>
            </div>
        </div>
    </div>
);

const Projects = () => {
    const projectData = [
        {
            imgSrc: "https://placehold.co/600x400/0A0A0A/00BFFF?text=Project+One",
            title: "E-Commerce Platform",
            description: "A full-featured e-commerce site with product listings, a shopping cart, and payment gateway integration.",
            liveLink: "#",
            sourceLink: "#",
        },
        {
            imgSrc: "https://placehold.co/600x400/0A0A0A/FFFFFF?text=Project+Two",
            title: "Task Management App",
            description: "A collaborative tool with drag-and-drop functionality, real-time updates, and project boards.",
            liveLink: "#",
            sourceLink: "#",
        },
        {
            imgSrc: "https://placehold.co/600x400/0A0A0A/555555?text=Project+Three",
            title: "Personal Blog",
            description: "A fast, statically generated blog built with Next.js and Markdown, with a clean design.",
            liveLink: "#",
            sourceLink: "#",
        },
    ]

    return (
        <section id="projects" className="py-24 md:py-32 reveal">
            <div className="text-center mb-16">
                <h2 className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-2">Portfolio</h2>
                <p className="text-4xl md:text-5xl font-heading font-bold text-white">Featured Projects</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

// Contact Component
const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32 text-center reveal">
            <div className="text-center mb-10">
                <h2 className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-2">Contact</h2>
                <p className="text-4xl md:text-5xl font-heading font-bold text-white">Let's Connect</p>
            </div>
            <p className="text-dark-subtext max-w-2xl mx-auto mb-8 text-lg">
                I'm actively looking for new opportunities. If you have a project in mind or just want to connect, feel free to reach out. My inbox is always open!
            </p>
            <a href="mailto:arvintenasas29@gmail.com" className="btn-premium inline-block bg-brand-accent text-white font-bold py-4 px-10 rounded-full text-lg">
                Get in Touch
            </a>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="border-t border-dark-border">
            <div className="container mx-auto px-6 py-8 text-center text-dark-subtext">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" className="hover:text-brand-accent transition-colors duration-300 text-xl"><i className="fab fa-github"></i></a>
                    <a href="#" className="hover:text-brand-accent transition-colors duration-300 text-xl"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="hover:text-brand-accent transition-colors duration-300 text-xl"><i className="fab fa-twitter"></i></a>
                </div>
                <p>&copy; 2025 Arvin Tenasas. Built with passion and code.</p>
            </div>
        </footer>
    );
};


function App() {

  useEffect(() => {
    // Reveal on scroll effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    
    // Cleanup observer on component unmount
    return () => revealElements.forEach(el => observer.unobserve(el));
  }, []);


  return (
    <>
      <style>
      {`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .cursor-blink {
          animation: blink 1s step-end infinite;
        }
      `}
      </style>
      <Header />
      <main className="container mx-auto px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App


