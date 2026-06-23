import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
} from "react";

// --- ICONS (Inline definitions to remove external dependencies) ---

// --- Hardcoded SVG Icons ---
const GithubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const MailIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const DownloadIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

const BriefcaseIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const Home = (props) => (
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
const User = (props) => (
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
const Layers = (props) => (
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
const Briefcase = (props) => (
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
const Code = (props) => (
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
const Mail = (props) => (
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
const Sun = (props) => (
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
const Moon = (props) => (
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
const Menu = (props) => (
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
const X = (props) => (
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
const ChevronRight = (props) => (
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
const Download = (props) => (
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
const Github = (props) => (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const Linkedin = (props) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const Facebook = (props) => (
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
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const GraduationCapIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21.42 10.922a2 2 0 0 0-.019-3.838L12.83 4.34a2 2 0 0 0-1.66 0L2.6 7.08a2 2 0 0 0 0 3.84l8.57 3.649c.533.227 1.137.227 1.67 0z" />
    <path d="M22 10v6" />
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
  </svg>
);
const Wrench = (props) => (
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
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const ExternalLink = (props) => (
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
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </svg>
);

const Palette = (props) => (
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
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);
const Terminal = (props) => (
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
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </svg>
);
const Atom = (props) => (
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
    <circle cx="12" cy="12" r="1" />
    <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(45 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(-45 12 12)" />
  </svg>
);
const Wind = (props) => (
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
    <path d="M17.7 7.7a2.5 2.5v 0 1 1 1.8 4.3H2" />
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
  </svg>
);
const Server = (props) => (
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
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <line x1="6" x2="6.01" y1="6" y2="6" />
    <line x1="6" x2="6.01" y1="18" y2="18" />
  </svg>
);
const Triangle = (props) => (
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
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
  </svg>
);
const Database = (props) => (
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
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
);
const Cpu = (props) => (
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
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <path d="M9 9h6v6H9z" />
    <path d="M9 1v3" />
    <path d="M15 1v3" />
    <path d="M9 20v3" />
    <path d="M15 20v3" />
    <path d="M20 9h3" />
    <path d="M20 14h3" />
    <path d="M1 9h3" />
    <path d="M1 14h3" />
  </svg>
);
const Globe = (props) => (
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
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const Html5Icon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.56L11.977 24l-8.564-2.44L1.5 0zm7.031 9.75l-.232-2.718h10.059l.213-2.437H4.968l.875 9.911h8.77l-.232 2.65-2.404.665-2.386-.665-.152-1.748H6.96l.27 3.515 4.747 1.32 4.767-1.32.483-5.5h-8.7z" />
  </svg>
);
const Css3Icon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.56L11.977 24l-8.564-2.44L1.5 0zm17.09 4.16l-.13-1.494H4.757l.154 1.75H18.59l-.234 2.51H5.1l.156 1.75h13.11l-.59 6.57-5.78 1.61-5.8-1.61-.39-4.28H4.2l.53 6.34 7.26 2.02 7.25-2.02 1.35-15.14z" />
  </svg>
);
const JsIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.81.39.015.75.09 1.066.21.36.135.63.345.855.615l2.25-1.605c-.66-1.185-1.71-2.085-3.045-2.475-1.185-.36-2.52-.36-3.69.075-1.395.495-2.355 1.44-2.805 2.805-.285.87-.27 1.83-.015 2.7.27.9.9 1.665 1.845 2.19.825.465 1.875.72 2.835.975.9.24 1.77.495 2.1.915.225.285.345.69.24 1.11-.12.48-.555.855-1.095.96-.54.105-1.155.075-1.635-.15-.465-.21-.855-.555-1.155-.945l-2.31 1.62c.705 1.155 1.845 2.055 3.195 2.415 1.17.33 2.505.285 3.66-.135 1.35-.48 2.295-1.38 2.76-2.715.345-1.005.345-2.085-.015-3.075zm-10.74-7.44c-.45-.225-1-.285-1.5-.24-.51.045-.96.225-1.32.51-.555.435-.915 1.05-1.035 1.755-.135.795.03 1.62.435 2.31.42.705 1.08 1.23 1.845 1.545l.9-4.32-.93 4.485c.18.06.36.12.54.18.915.24 1.86.3 2.79.135V10.836h-2.19v2.19c-.315-.42-.6-.87-.84-1.35-.18-.39-.33-.81-.405-1.245-.03-.18-.045-.36-.045-.555h-2.25c.015.3.06.6.12.885.06.33.165.645.285.96L11.294 10.836z" />
  </svg>
);
const ReactIcon = (props) => (
  <svg
    {...props}
    viewBox="-11.5 -10.232 23 20.463"
    fill="none"
    stroke="currentColor"
  >
    <circle cx="0" cy="0" r="2.05" fill="currentColor" stroke="none" />
    <g strokeWidth="1">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);
const TailwindIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);
const NodeJsIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const NextJsIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12 17.937 22.75 12 22.75zm0-20C6.897 2.75 2.75 6.897 2.75 12s4.147 9.25 9.25 9.25 9.25-4.147 9.25-9.25S17.103 2.75 12 2.75zm5.022 13.905L9.61 7.42h-1.39v9.16h1.226v-6.94l6.812 8.441a7.712 7.712 0 0 1-4.258 1.419c-4.274 0-7.75-3.476-7.75-7.75s3.476-7.75 7.75-7.75 7.75 3.476 7.75 7.75a7.702 7.702 0 0 1-2.728 5.905z" />
  </svg>
);
const CppIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="4" />
    <path d="M10 8H8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2" />
    <line x1="14" y1="10" x2="14" y2="14" />
    <line x1="12" y1="12" x2="16" y2="12" />
    <line x1="19" y1="10" x2="19" y2="14" />
    <line x1="17" y1="12" x2="21" y2="12" />
  </svg>
);
const ViteIcon = (props) => (
  <svg {...props} viewBox="0 0 256 256" fill="currentColor">
    <path d="M246.47,44.75a13.33,13.33,0,0,0-15-4L128,84.08,24.5,40.73a13.33,13.33,0,0,0-17.75,17l89.65,183a13.33,13.33,0,0,0,24,0l126.85-183A13.33,13.33,0,0,0,246.47,44.75ZM134,220.89l-83-169.5,73,30.5Zm90-169.5-110,158.8V88.89l115-48Z" />
  </svg>
);
const SupabaseIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.362 9.354H12V.326a.31.31 0 0 0-.528-.22L.26 11.272a.31.31 0 0 0 .22.528h9.362v9.028a.31.31 0 0 0 .528.22l11.212-11.166a.31.31 0 0 0-.22-.528z" />
  </svg>
);
const WordPressIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.03-4.526h.018l3.111-9.01h-2.126l-2.158 6.541-2.222-6.541H5.433l4.28 11.83a8.03 8.03 0 0 1-1.636-4.225l2.893-7.605-4.512 12.35A7.95 7.95 0 0 0 12 19.98c1.378 0 2.676-.35 3.823-.96l-4.853-13.546z" />
  </svg>
);

const Lightbulb = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);
const ChevronLeft = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
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

const MapPin = (props) => (
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
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Send = (props) => (
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
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
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
    category: "Frontend Web",
    role: "Sole Developer",
    description:
      "Designed and developed a highly interactive, native-app-like personal portfolio. Engineered with React, Tailwind CSS, and custom intersection observers for seamless scroll animations and responsive accordion galleries.",
    tags: ["React", "Tailwind CSS", "Vite", "UI/UX"],
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
      "Modernized a legacy WordPress architecture into a high-performance web application. Built a custom full-stack solution utilizing Node.js, Next.js, and a robust MySQL database to streamline corporate workflows. Due to strict NDA and company policy, source code and live access are restricted.",
    tags: ["Next.js", "React.js", "Node.js", "MySQL"],
    video: "/assets/lsi-demo.mp4",
    demoLink: null, // Disabled due to NDA
    githubLink: null, // Disabled due to NDA
    status: "Confidential (NDA)",
    statusNote:
      "Source code & live link are strictly confidential under company NDA.",
  },
  {
    id: 4,
    type: "personal",
    title: "SmartPen: IoT Fish Feeder",
    subtitle: "Remote Aquaculture Automation (Capstone)",
    category: "Hardware & IoT",
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

const IconSvg = ({ children, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const Icons = {
  Home: ({ className }) => (
    <IconSvg className={className}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </IconSvg>
  ),
  User: ({ className }) => (
    <IconSvg className={className}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </IconSvg>
  ),
  Layers: ({ className }) => (
    <IconSvg className={className}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </IconSvg>
  ),
  Code: ({ className }) => (
    <IconSvg className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </IconSvg>
  ),
  Mail: ({ className }) => (
    <IconSvg className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </IconSvg>
  ),
  Sun: ({ className }) => (
    <IconSvg className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </IconSvg>
  ),
  Moon: ({ className }) => (
    <IconSvg className={className}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </IconSvg>
  ),
  Menu: ({ className }) => (
    <IconSvg className={className}>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </IconSvg>
  ),
  X: ({ className }) => (
    <IconSvg className={className}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </IconSvg>
  ),
};

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
    // { id: "home", label: "Home", icon: Icons.Home },
    { id: "about", label: "About Me", icon: Icons.User },
    { id: "services", label: "My Services", icon: Icons.Layers },
    { id: "projects", label: "My Projects", icon: Icons.Code },
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
                  <Icons.Sun className="w-4 h-4 text-orange-400" />
                  <span>Light Theme</span>
                </>
              ) : (
                <>
                  <Icons.Moon className="w-4 h-4" />
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
                <Icons.Sun className="w-5 h-5" />
              ) : (
                <Icons.Moon className="w-5 h-5" />
              )}
            </button>
            <div className="w-px h-5 bg-gray-300 dark:bg-neutral-700 mx-1"></div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <Icons.X className="w-5 h-5" />
              ) : (
                <Icons.Menu className="w-5 h-5" />
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
            <Icons.Mail className="w-4 h-4" />
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
          Icon: Database,
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
          Icon: Cpu,
        },
        {
          name: "IoT Systems",
          color: "text-gray-800 dark:text-gray-300",
          Icon: Server,
        },
      ],
    },
    {
      title: "IT Support & Services",
      skills: [
        { name: "Windows / MS Office", color: "text-blue-500", Icon: Wrench },
        { name: "Hardware Repair", color: "text-orange-500", Icon: Layers },
        { name: "Network Config", color: "text-green-500", Icon: Terminal },
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

        <div className="mt-12 md:mt-20 flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* ========================================= */}
          {/* LEFT COLUMN: Profile, Tech & Education    */}
          {/* ========================================= */}
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
                <Code className="w-5 h-5 text-orange-500" /> Technical Arsenal
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

            {/* 3. Education Section (Extracted properly to the bottom of the left column) */}
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

          {/* ========================================= */}
          {/* RIGHT COLUMN: Work Experience Timeline    */}
          {/* ========================================= */}
          <div className="flex-1 lg:w-1/2 lg:pl-16 lg:border-l border-gray-200 dark:border-neutral-800 pt-8 lg:pt-0">
            {/* Work Experience Header */}
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
      </div>
    </SectionWrapper>
  );
};

// --- INLINE CALENDAR ICON FOR THE DATES ---
const CalendarIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const Services = () => {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
        {/* Bento Box Grid Layout - Increased heights to prevent CTA clipping */}
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
                        {/* Hidden Content Box - Tightened gaps so it fits perfectly */}
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
                                  // Slimmed down padding to prevent multi-line wrapping issues
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
    </SectionWrapper>
  );
};

// --- INLINE ICONS ---
const ArrowRightIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CodeIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
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

const WrenchIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const CpuIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <path d="M9 9h6v6H9z" />
    <path d="M9 1v3" />
    <path d="M15 1v3" />
    <path d="M9 20v3" />
    <path d="M15 20v3" />
    <path d="M20 9h3" />
    <path d="M20 14h3" />
    <path d="M1 9h3" />
    <path d="M1 14h3" />
  </svg>
);

const PaletteIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

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
      <div className="flex justify-center mt-8 mb-10 md:mb-14 px-4">
        <div className="inline-flex items-center p-1.5 bg-gray-100 dark:bg-[#111111] rounded-full border border-gray-200 dark:border-neutral-800 shadow-inner">
          <button
            onClick={() => handleTabSwitch("personal")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
              activeTab === "personal"
                ? "bg-orange-500 text-white shadow-[0_4px_15px_rgba(249,115,22,0.4)]"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-neutral-800"
            }`}
          >
            <UserIcon className="w-4 h-4 md:w-5 md:h-5" />
            Personal Projects
          </button>

          <button
            onClick={() => handleTabSwitch("client")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
              activeTab === "client"
                ? "bg-orange-500 text-white shadow-[0_4px_15px_rgba(249,115,22,0.4)]"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-neutral-800"
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
                    {/* Render Live Demo Button IF it exists */}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-3.5 bg-orange-500 hover:bg-orange-600 text-white text-[11px] md:text-sm font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(249,115,22,0.4)] hover:-translate-y-0.5 active:scale-95"
                      >
                        Live Demo
                        <ExternalLinkIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </a>
                    )}

                    {/* Render Github Code Button IF it exists */}
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

                    {/* Render Status Note Badge IF a link is missing */}
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
// --- INLINE ICONS ---
const UserIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
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

const ExternalLinkIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

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
                    <Mail className="w-5 h-5" />
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
                    <MapPin className="w-5 h-5" />
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
                  svg: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  ),
                },
                {
                  id: "github",
                  href: "https://github.com/tenasasarvin",
                  svg: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  ),
                },
                {
                  id: "facebook",
                  href: "https://www.facebook.com/share/19GxD5xYNq/",
                  svg: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  ),
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
                  placeholder="John Doe"
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
                  placeholder="john@example.com"
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
                {/* Hard-coded Send Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
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
    "Frontend Web Development",
    "Full-Stack Architecture",
    "Web & Mobile Apps",
    "Hardware & IoT Solutions",
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
      <footer className="bg-gradient-to-b from-white/80 to-gray-50/95 dark:from-neutral-900/80 dark:to-neutral-950/95 backdrop-blur-xl rounded-t-3xl sm:rounded-t-[2.5rem] border border-b-0 border-gray-200 dark:border-neutral-800 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] overflow-hidden transition-colors duration-300">
        <div className="max-w-6xl mx-auto p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-32 sm:w-40 h-auto flex-shrink-0">
                <img
                  src="/logo-texts.png"
                  alt="arvin.dev logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
              Engineering highly interactive, native-app-like web experiences
              and robust full-stack solutions. Building the digital future, one
              line of code at a time.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-all duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-all duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="mailto:arvintenasas29@gmail.com"
                aria-label="Email Me"
                className="p-2.5 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-all duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

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
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4 flex flex-col">
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-6">
              Capabilities
            </h3>
            <ul className="flex flex-col gap-3.5">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-500 dark:text-gray-400 text-sm font-medium flex items-center gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="border-t border-gray-200/60 dark:border-neutral-800/60 bg-gray-50/30 dark:bg-black/10">
          <div className="max-w-6xl mx-auto p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* The copyright text stays on the left */}
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium text-center sm:text-left">
              &copy; {currentYear} Arvin Tenasas. All rights reserved.
            </p>

            {/* The new containerless compact counter on the right */}
            {/* <CompactVisitorCounter /> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

const CompactVisitorCounter = () => {
  // 🛑 PLACEHOLDER DATA:
  // Because we don't have a backend returning JSON yet, these are static numbers.
  const stats = {
    today: 152,
    total: "4,521",
    trend: "24%",
  };

  return (
    // Container-less, inline flex layout that perfectly matches the footer's natural text height
    <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-medium text-gray-500 dark:text-gray-400">
      {/* Today's Views - Featuring a live pulsing dot for a premium feel */}
      <div className="flex items-center gap-2" title="Today's Views">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
        </span>
        <span className="flex gap-1">
          <strong className="text-gray-900 dark:text-gray-100">
            {stats.today}
          </strong>
          <span>today</span>
        </span>
      </div>

      {/* Subtle Vertical Divider */}
      <div className="w-px h-3.5 bg-gray-300 dark:bg-neutral-700 rounded-full"></div>

      {/* Total Views - With a subtle activity line icon */}
      <div className="flex items-center gap-1.5" title="Total Views">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 opacity-70"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
        <span className="flex gap-1">
          <strong className="text-gray-900 dark:text-gray-100">
            {stats.total}
          </strong>
          <span>total</span>
        </span>
      </div>

      {/* Micro Trend Badge */}
      <div className="flex items-center text-green-600 dark:text-green-400 font-bold bg-green-50 dark:bg-green-500/10 px-1.5 py-0.5 rounded text-[10px]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-2.5 h-2.5 mr-0.5"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
        +{stats.trend}
      </div>
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
        {/* ADDED FOOTER HERE SO IT ACTUALLY SHOWS UP */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
