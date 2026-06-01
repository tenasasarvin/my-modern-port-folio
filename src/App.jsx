import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
} from "react";

// --- ICONS (Inline definitions to remove external dependencies) ---

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
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
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
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "SmartPen IoT System",
    category: "IoT & Embedded",
    description:
      "A real-time handwriting digitization system using ESP32 and React.",
    tags: ["C++", "React", "Firebase", "ESP32"],
    image: "https://placehold.co/600x400/171717/F97316?text=SmartPen+IoT",
    link: "#",
  },
  {
    id: 2,
    title: "LSI Corporate Portal",
    category: "Web Development",
    description:
      "Modern corporate website with inventory tracking and client portals.",
    tags: ["Next.js", "Tailwind", "MySQL"],
    image: "https://placehold.co/600x400/171717/3B82F6?text=LSI+Website",
    link: "#",
  },
  {
    id: 3,
    title: "AI Portfolio Generator",
    category: "AI Integration",
    description:
      "Generates portfolio websites based on user prompts using Gemini API.",
    tags: ["React", "Node.js", "AI"],
    image: "https://placehold.co/600x400/171717/A855F7?text=AI+Portfolio",
    link: "#",
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

const Navigation = ({ activeSection }) => {
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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
      className={`fixed top-3 md:top-4 left-0 w-full z-50 flex justify-center px-4 md:px-6 transition-all duration-300 transform ${
        isVisible ? "translate-y-0" : "-translate-y-[150%]"
      }`}
    >
      <div
        className={`relative flex items-center justify-between w-full md:w-auto gap-4 md:gap-8 px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 dark:bg-neutral-900/70 shadow-lg border-gray-200/50 dark:border-neutral-700/50"
            : "bg-white/50 dark:bg-neutral-900/50 border-transparent shadow-sm"
        } backdrop-blur-md border`}
      >
        {/* Logo Text/Image */}
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

        {/* Desktop Menu & Theme Toggle */}
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
          <div className="w-px h-5 bg-gray-300 dark:bg-neutral-700 mx-2"></div>
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full hover:bg-gray-200/50 dark:hover:bg-neutral-800/50 transition-colors text-gray-600 dark:text-gray-400"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 md:w-5 md:h-5" />
            ) : (
              <Moon className="w-4 h-4 md:w-5 md:h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <div className="w-px h-4 bg-gray-300 dark:bg-neutral-700"></div>
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Floating Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[calc(100%+0.75rem)] left-4 right-4 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl shadow-2xl border border-gray-100 dark:border-neutral-800 rounded-2xl p-3 flex flex-col gap-1.5 md:hidden animate-fadeInUp">
          {navLinks.map((link) => (
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
              <link.icon
                className={`w-4 h-4 ${activeSection === link.id ? "text-orange-500" : ""}`}
              />
              <span>{link.label}</span>
              {activeSection === link.id && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 rounded-r-full"></span>
              )}
            </button>
          ))}
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
    { Icon: Github, href: "https://github.com", label: "GitHub" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen relative pt-20 pb-10 flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-900"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Const Developer Badge */}
        <div className="mb-6 inline-block mt-4 md:mt-0">
          <div className="relative group cursor-default">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <span className="relative px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-gray-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-800/80 backdrop-blur text-xs md:text-sm font-mono flex flex-wrap items-center justify-center gap-1.5 md:gap-2 shadow-sm">
              <span className="text-purple-600 dark:text-purple-400">
                const
              </span>
              <span className="text-blue-600 dark:text-blue-400">
                developer
              </span>
              <span className="text-gray-500 dark:text-neutral-400">=</span>
              <span className="text-orange-600 dark:text-orange-500 font-semibold">
                "Hello World! I am Arvin"
              </span>
              <span className="text-gray-500 dark:text-neutral-400">;</span>
            </span>
          </div>
        </div>

        {/* Main Header */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 leading-[1.15] md:leading-[1.1]">
          Crafting Digital <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
            Experiences
          </span>
        </h1>

        {/* Typewriter text */}
        <div className="h-6 md:h-8 mb-6 font-mono text-base sm:text-lg md:text-2xl flex items-center justify-center gap-2 w-full">
          <span className="text-orange-500 font-bold">&gt;</span>
          <span className={HERO_TITLES[titleIndex].color}>{text}</span>
          <span className="animate-pulse text-orange-500">|</span>
        </div>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-neutral-400 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
          A Computer Engineer and Full-Stack Web Developer in the Philippines,
          passionate about creating intuitive web applications and developing
          embedded IoT systems.
        </p>

        {/* Action Buttons - Side-by-side app layout */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm md:text-base font-semibold transition-all hover:-translate-y-1 shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] whitespace-nowrap"
          >
            View My Work
          </button>

          <a
            href="/Updated Resume.pdf"
            download
            className="px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-700 text-gray-900 dark:text-white text-xs sm:text-sm md:text-base font-medium transition-all hover:-translate-y-1 shadow-sm flex items-center justify-center gap-1.5 md:gap-2 whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 shrink-0" />
            Download CV
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-10 md:mt-12 flex items-center justify-center gap-4 md:gap-6">
          {socialLinks.map(({ Icon: icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="p-2 md:p-3 rounded-full bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-gray-500 dark:text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all transform hover:-translate-y-1 shadow-sm"
            >
              {React.createElement(icon, {
                className: "w-4 h-4 md:w-5 md:h-5",
              })}
            </a>
          ))}
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
      >
        <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold text-gray-400 dark:text-neutral-500 group-hover:text-orange-500 transition-colors duration-300">
          Scroll
        </span>

        {/* Animated Mouse/Pill Shape */}
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-400 dark:border-neutral-500 group-hover:border-orange-500 rounded-full flex justify-center p-1 transition-colors duration-300">
          <div className="w-1 h-2 md:w-1 md:h-2.5 bg-gray-400 dark:bg-neutral-500 group-hover:bg-orange-500 rounded-full animate-bounce transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  // Brand colors mapped to official SVGs
  const techStack = [
    {
      name: "HTML5",
      color: "text-orange-600 dark:text-orange-500",
      Icon: Html5Icon,
    },
    { name: "CSS3", color: "text-blue-500", Icon: Css3Icon },
    { name: "JavaScript", color: "text-yellow-500", Icon: JsIcon },
    {
      name: "React",
      color: "text-cyan-400 dark:text-cyan-400",
      Icon: ReactIcon,
    },
    {
      name: "Tailwind",
      color: "text-sky-500 dark:text-sky-400",
      Icon: TailwindIcon,
    },
    {
      name: "Node.js",
      color: "text-green-600 dark:text-green-500",
      Icon: NodeJsIcon,
    },
    { name: "Next.js", color: "text-black dark:text-white", Icon: NextJsIcon },
    {
      name: "MySQL",
      color: "text-blue-500 dark:text-blue-400",
      Icon: Database,
    }, // Re-using standard database icon for MySQL
    {
      name: "Vite",
      color: "text-purple-500 dark:text-purple-400",
      Icon: ViteIcon,
    },
    {
      name: "Supabase",
      color: "text-emerald-500 dark:text-emerald-400",
      Icon: SupabaseIcon,
    },
    { name: "GitHub", color: "text-gray-800 dark:text-white", Icon: Github },
    { name: "C++", color: "text-blue-700 dark:text-blue-500", Icon: CppIcon },
    {
      name: "Microcontroller",
      color: "text-emerald-600 dark:text-emerald-500",
      Icon: Cpu,
    },
    {
      name: "WordPress",
      color: "text-blue-700 dark:text-blue-500",
      Icon: WordPressIcon,
    },
  ];

  return (
    <SectionWrapper id="about" className="bg-gray-50 dark:bg-neutral-900/50">
      <SectionHeader title="Who I Am" subtitle="Introduction" />

      <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-16">
        {/* Left: Image Section */}
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 reveal">
          <div className="relative group max-w-[240px] sm:max-w-xs md:max-w-sm mx-auto lg:ml-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <img
              src={ASSETS.profileImageUrl}
              alt="Arvin Profile"
              className="relative w-full rounded-2xl shadow-xl md:shadow-2xl object-cover grayscale group-hover:grayscale-0 transition duration-500 border border-gray-200 dark:border-neutral-800"
            />
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="w-full lg:w-3/5 reveal text-center lg:text-left flex flex-col items-center lg:items-start">
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white leading-tight">
            Bridging <span className="text-orange-500">Hardware</span> &{" "}
            <span className="text-blue-500">Software</span>
          </h4>

          <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-gray-600 dark:text-neutral-400 mb-8 md:mb-10 max-w-2xl leading-relaxed px-2 sm:px-0">
            I'm a Computer Engineering graduate with a relentless curiosity for
            how things work. From designing responsive front-end interfaces to
            programming low-level microcontrollers, I'm driven by the challenge
            of solving complex problems.
          </p>

          {/* Tech Arsenal Card */}
          <div className="bg-white dark:bg-neutral-800 p-5 md:p-6 lg:p-8 rounded-2xl border border-gray-200 dark:border-neutral-700 shadow-sm w-full">
            <h5 className="font-semibold mb-4 md:mb-5 text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest text-center lg:text-left">
              Tech Arsenal
            </h5>

            {/* Tech Pills Container */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-2.5 md:gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-3 md:py-1.5 rounded-full bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-xs md:text-sm font-medium transition-transform hover:-translate-y-0.5 hover:shadow-sm"
                >
                  {/* Render the specific SVG mapped in the array, applying its brand color */}
                  <tech.Icon
                    className={`w-3.5 h-3.5 md:w-4 md:h-4 shrink-0 ${tech.color}`}
                  />
                  <span className="whitespace-nowrap text-gray-700 dark:text-gray-200">
                    {tech.name}
                  </span>
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
  const ServiceCard = ({ icon, title, desc, bgImage }) => {
    const Icon = icon;
    return (
      <div className="relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 h-[260px] sm:h-[280px] md:h-[320px] lg:h-[340px] border border-gray-200 dark:border-neutral-800">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 z-10 transition-opacity duration-300 group-hover:opacity-90"></div>

        {/* Card Content - Bottom Aligned */}
        <div className="relative z-20 h-full p-5 sm:p-6 md:p-8 flex flex-col justify-end text-left">
          {/* Floating Icon */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 text-orange-400 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300 transform group-hover:-translate-y-1">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white tracking-tight">
            {title}
          </h3>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-3 sm:line-clamp-none">
            {desc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <SectionWrapper id="services" className="bg-white dark:bg-neutral-900">
      <SectionHeader title="My Expertise" subtitle="What I Do" />

      {/* Responsive Grid - 1 column on mobile, 2 on laptop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        <ServiceCard
          icon={Code}
          title="Web Development"
          desc="Building responsive, high-performance websites and single-page applications using React, Node.js, and Modern CSS."
          bgImage="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800" // Coding/Programming setup
        />

        <ServiceCard
          icon={Layers}
          title="UI/UX Design"
          desc="Designing intuitive interfaces with a focus on user experience, ensuring accessibility and visual consistency."
          bgImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" // Wireframing/Design process
        />

        <ServiceCard
          icon={Briefcase}
          title="IoT Solutions"
          desc="Developing smart connected devices and control systems using ESP32/Arduino bridged with cloud databases."
          bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" // Hardware/Circuit board
        />

        <ServiceCard
          icon={Wrench}
          title="IT Support & Repair"
          desc="Diagnosing and resolving hardware/software issues, performing PC builds, and conducting routine system maintenance."
          bgImage="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=800" // Inside of a PC/Laptop repair
        />
      </div>
    </SectionWrapper>
  );
};

const Experience = () => {
  const ExperienceItem = ({
    date,
    title,
    company,
    desc,
    bullets,
    logoUrl,
    isCurrent,
  }) => (
    <div className="relative pl-8 md:pl-12 pb-10 md:pb-12 border-l-2 border-gray-200 dark:border-neutral-800 last:border-0 last:pb-0 group reveal">
      {/* Animated Timeline Dot */}
      <div
        className={`absolute -left-[9px] md:-left-[11px] top-6 w-4 h-4 md:w-5 md:h-5 rounded-full border-4 border-gray-50 dark:border-neutral-900 z-10 transition-colors duration-300 ${
          isCurrent
            ? "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] animate-pulse"
            : "bg-gray-300 dark:bg-neutral-600 group-hover:bg-orange-400"
        }`}
      ></div>

      {/* Experience Card */}
      <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-neutral-700 shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden relative">
        {/* Subtle background glow on hover */}
        <div className="absolute -inset-2 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

        {/* Locked Flex Row: Logo always on the left, Content on the right */}
        <div className="relative z-10 flex flex-row gap-4 sm:gap-5 md:gap-6">
          {/* Company/School Logo Box */}
          <div className="shrink-0 mt-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 shadow-sm flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 duration-300">
              <img
                src={logoUrl}
                alt={`${company} logo`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Title & Date Wrapper */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2 xl:gap-4 mb-1 md:mb-2">
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-tight">
                {title}
              </h4>

              {/* Date Badge */}
              <span
                className={`inline-flex w-fit items-center px-2.5 py-1 rounded-full text-[10px] md:text-xs font-mono font-semibold whitespace-nowrap ${
                  isCurrent
                    ? "bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20"
                    : "bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-neutral-600"
                }`}
              >
                {date}
              </span>
            </div>

            {/* Company Name & Online Indicator */}
            <div className="text-orange-600 dark:text-orange-500 font-semibold text-xs sm:text-sm md:text-base mb-3 flex items-center gap-2">
              {company}
              {isCurrent && (
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              )}
            </div>

            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {desc}
            </p>

            {/* Impact Bullets */}
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-2.5">
              {bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 group/bullet"
                >
                  <span className="text-orange-500/50 mt-0.5 shrink-0 group-hover/bullet:text-orange-500 transition-colors">
                    ✦
                  </span>
                  <span className="leading-snug">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <SectionWrapper
      id="experience"
      className="bg-gray-50 dark:bg-neutral-900/30"
    >
      <SectionHeader title="Career Journey" subtitle="Resume" />

      <div className="max-w-4xl mx-auto px-2 sm:px-0">
        {/* Current: Freelance */}
        <ExperienceItem
          isCurrent={true}
          date="June 1, 2026 - Present"
          title="Freelance Full-Stack Developer & IT Specialist"
          company="Self-Employed"
          desc="Transitioned into full-time freelancing to provide dedicated, end-to-end web solutions and localized IT support for independent clients and growing businesses."
          // Placeholder for your personal brand logo
          logoUrl="https://placehold.co/200x200/F97316/FFFFFF?text=AT&font=orbitron"
          bullets={[
            "Designing and deploying custom web applications using React & Next.js.",
            "Providing hardware diagnostics, PC building, and technical repair services.",
            "Consulting on UI/UX best practices and system architecture.",
            "Managing independent client relationships and project lifecycles.",
          ]}
        />

        {/* Past: LSI */}
        <ExperienceItem
          isCurrent={false}
          date="June 2024 - May 29, 2026"
          title="Fullstack Developer & Field Technician"
          company="LSI Leading Technologies INC."
          desc="Served a dual role bridging software engineering and hardware infrastructure, developing modern web tools while ensuring physical systems operated flawlessly."
          // Placeholder for LSI Logo
          logoUrl="https://placehold.co/200x200/171717/F97316?text=LSI&font=orbitron"
          bullets={[
            "Spearheaded the development of the new corporate website portal.",
            "Managed field installations and troubleshooting of commercial UPS systems.",
            "Integrated inventory tracking and client data management solutions.",
            "Authored technical documentation for software and electrical systems.",
          ]}
        />

        {/* Past: Intern */}
        <ExperienceItem
          isCurrent={false}
          date="Feb 2024 - May 2024"
          title="Technical Support Intern"
          company="Bits N' Bytes Computer Shop"
          desc="Gained foundational hands-on experience in consumer electronics repair, system building, and direct customer tech support."
          // Placeholder for BNB Logo
          logoUrl="https://placehold.co/200x200/2563EB/FFFFFF?text=BnB&font=orbitron"
          bullets={[
            "Diagnosed complex hardware and software issues for retail clients.",
            "Assembled and optimized custom PC builds tailored to user budgets.",
            "Performed routine maintenance, OS installations, and data recovery.",
          ]}
        />

        {/* Past: Education */}
        <ExperienceItem
          isCurrent={false}
          date="2020 - 2024"
          title="BS in Computer Engineering"
          company="Samar State University"
          desc="Developed a strong engineering mindset, merging low-level electronics with high-level software development."
          // Placeholder for SSU Logo
          logoUrl="https://placehold.co/200x200/EAB308/FFFFFF?text=SSU&font=orbitron"
          bullets={[
            "Lead Developer for the 'SmartPen' IoT handwriting digitization thesis.",
            "Mastered core fundamentals in C++, embedded systems, and circuitry.",
            "Graduated with practical skills bridging IoT devices to web databases.",
          ]}
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
            question, a project idea, or just want to say hi, I'll try my best
            to get back to you!
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
