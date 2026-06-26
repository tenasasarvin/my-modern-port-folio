import React from "react";

// Standard SVG Wrapper for outline icons
const StandardSvg = ({ children, className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

export const GithubIcon = (props) => (
  <StandardSvg {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </StandardSvg>
);

export const LinkedinIcon = (props) => (
  <StandardSvg {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </StandardSvg>
);

export const FacebookIcon = (props) => (
  <StandardSvg {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </StandardSvg>
);

export const MailIcon = (props) => (
  <StandardSvg {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </StandardSvg>
);

export const DownloadIcon = (props) => (
  <StandardSvg {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </StandardSvg>
);

export const BriefcaseIcon = (props) => (
  <StandardSvg {...props}>
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </StandardSvg>
);

export const HomeIcon = (props) => (
  <StandardSvg {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </StandardSvg>
);

export const UserIcon = (props) => (
  <StandardSvg {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </StandardSvg>
);

export const LayersIcon = (props) => (
  <StandardSvg {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </StandardSvg>
);

export const CodeIcon = (props) => (
  <StandardSvg {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </StandardSvg>
);

export const SunIcon = (props) => (
  <StandardSvg {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </StandardSvg>
);

export const MoonIcon = (props) => (
  <StandardSvg {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </StandardSvg>
);

export const MenuIcon = (props) => (
  <StandardSvg {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </StandardSvg>
);

export const XIcon = (props) => (
  <StandardSvg {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </StandardSvg>
);

export const ChevronRightIcon = (props) => (
  <StandardSvg {...props}>
    <path d="m9 18 6-6-6-6" />
  </StandardSvg>
);

export const ChevronLeftIcon = (props) => (
  <StandardSvg {...props}>
    <path d="m15 18-6-6 6-6" />
  </StandardSvg>
);

export const GraduationCapIcon = (props) => (
  <StandardSvg {...props}>
    <path d="M21.42 10.922a2 2 0 0 0-.019-3.838L12.83 4.34a2 2 0 0 0-1.66 0L2.6 7.08a2 2 0 0 0 0 3.84l8.57 3.649c.533.227 1.137.227 1.67 0z" />
    <path d="M22 10v6" />
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
  </StandardSvg>
);

export const WrenchIcon = (props) => (
  <StandardSvg {...props}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </StandardSvg>
);

export const ExternalLinkIcon = (props) => (
  <StandardSvg {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </StandardSvg>
);

export const PaletteIcon = (props) => (
  <StandardSvg {...props}>
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </StandardSvg>
);

export const TerminalIcon = (props) => (
  <StandardSvg {...props}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </StandardSvg>
);

export const AtomIcon = (props) => (
  <StandardSvg {...props}>
    <circle cx="12" cy="12" r="1" />
    <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(45 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(-45 12 12)" />
  </StandardSvg>
);

export const WindIcon = (props) => (
  <StandardSvg {...props}>
    <path d="M17.7 7.7a2.5 2.5v 0 1 1 1.8 4.3H2" />
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
  </StandardSvg>
);

export const ServerIcon = (props) => (
  <StandardSvg {...props}>
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <line x1="6" x2="6.01" y1="6" y2="6" />
    <line x1="6" x2="6.01" y1="18" y2="18" />
  </StandardSvg>
);

export const TriangleIcon = (props) => (
  <StandardSvg {...props}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
  </StandardSvg>
);

export const DatabaseIcon = (props) => (
  <StandardSvg {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </StandardSvg>
);

export const CpuIcon = (props) => (
  <StandardSvg {...props}>
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
  </StandardSvg>
);

export const GlobeIcon = (props) => (
  <StandardSvg {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </StandardSvg>
);

export const LightbulbIcon = (props) => (
  <StandardSvg {...props}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </StandardSvg>
);

export const MapPinIcon = (props) => (
  <StandardSvg {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </StandardSvg>
);

export const SendIcon = (props) => (
  <StandardSvg {...props}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </StandardSvg>
);

export const CalendarIcon = (props) => (
  <StandardSvg strokeWidth="2.5" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </StandardSvg>
);

export const ArrowRightIcon = (props) => (
  <StandardSvg strokeWidth="2.5" {...props}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </StandardSvg>
);

export const GalleryIcon = (props) => (
  <StandardSvg strokeWidth="1.5" {...props}>
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </StandardSvg>
);

export const PlayCircleIcon = (props) => (
  <StandardSvg strokeWidth="1.5" {...props}>
    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </StandardSvg>
);

export const ArrowUpRightIcon = (props) => (
  <StandardSvg {...props}>
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </StandardSvg>
);

// Colored Brand / Tech SVG Wrapper (No standard strokes used)
const ColoredSvg = ({
  className = "",
  children,
  viewBox = "0 0 24 24",
  ...props
}) => (
  <svg viewBox={viewBox} fill="currentColor" className={className} {...props}>
    {children}
  </svg>
);

export const Html5Icon = (props) => (
  <ColoredSvg {...props}>
    <path d="M1.5 0h21l-1.91 21.56L11.977 24l-8.564-2.44L1.5 0zm7.031 9.75l-.232-2.718h10.059l.213-2.437H4.968l.875 9.911h8.77l-.232 2.65-2.404.665-2.386-.665-.152-1.748H6.96l.27 3.515 4.747 1.32 4.767-1.32.483-5.5h-8.7z" />
  </ColoredSvg>
);

export const Css3Icon = (props) => (
  <ColoredSvg {...props}>
    <path d="M1.5 0h21l-1.91 21.56L11.977 24l-8.564-2.44L1.5 0zm17.09 4.16l-.13-1.494H4.757l.154 1.75H18.59l-.234 2.51H5.1l.156 1.75h13.11l-.59 6.57-5.78 1.61-5.8-1.61-.39-4.28H4.2l.53 6.34 7.26 2.02 7.25-2.02 1.35-15.14z" />
  </ColoredSvg>
);

export const JsIcon = (props) => (
  <ColoredSvg {...props}>
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.81.39.015.75.09 1.066.21.36.135.63.345.855.615l2.25-1.605c-.66-1.185-1.71-2.085-3.045-2.475-1.185-.36-2.52-.36-3.69.075-1.395.495-2.355 1.44-2.805 2.805-.285.87-.27 1.83-.015 2.7.27.9.9 1.665 1.845 2.19.825.465 1.875.72 2.835.975.9.24 1.77.495 2.1.915.225.285.345.69.24 1.11-.12.48-.555.855-1.095.96-.54.105-1.155.075-1.635-.15-.465-.21-.855-.555-1.155-.945l-2.31 1.62c.705 1.155 1.845 2.055 3.195 2.415 1.17.33 2.505.285 3.66-.135 1.35-.48 2.295-1.38 2.76-2.715.345-1.005.345-2.085-.015-3.075zm-10.74-7.44c-.45-.225-1-.285-1.5-.24-.51.045-.96.225-1.32.51-.555.435-.915 1.05-1.035 1.755-.135.795.03 1.62.435 2.31.42.705 1.08 1.23 1.845 1.545l.9-4.32-.93 4.485c.18.06.36.12.54.18.915.24 1.86.3 2.79.135V10.836h-2.19v2.19c-.315-.42-.6-.87-.84-1.35-.18-.39-.33-.81-.405-1.245-.03-.18-.045-.36-.045-.555h-2.25c.015.3.06.6.12.885.06.33.165.645.285.96L11.294 10.836z" />
  </ColoredSvg>
);

export const ReactIcon = ({ className = "", ...props }) => (
  <svg
    {...props}
    className={className}
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

export const TailwindIcon = (props) => (
  <ColoredSvg {...props}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </ColoredSvg>
);

export const NextJsIcon = (props) => (
  <ColoredSvg {...props}>
    <path d="M12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12 17.937 22.75 12 22.75zm0-20C6.897 2.75 2.75 6.897 2.75 12s4.147 9.25 9.25 9.25 9.25-4.147 9.25-9.25S17.103 2.75 12 2.75zm5.022 13.905L9.61 7.42h-1.39v9.16h1.226v-6.94l6.812 8.441a7.712 7.712 0 0 1-4.258 1.419c-4.274 0-7.75-3.476-7.75-7.75s3.476-7.75 7.75-7.75 7.75 3.476 7.75 7.75a7.702 7.702 0 0 1-2.728 5.905z" />
  </ColoredSvg>
);

export const NodeJsIcon = (props) => (
  <StandardSvg {...props}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </StandardSvg>
);

export const CppIcon = (props) => (
  <StandardSvg {...props}>
    <rect x="2" y="2" width="20" height="20" rx="4" />
    <path d="M10 8H8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2" />
    <line x1="14" y1="10" x2="14" y2="14" />
    <line x1="12" y1="12" x2="16" y2="12" />
    <line x1="19" y1="10" x2="19" y2="14" />
    <line x1="17" y1="12" x2="21" y2="12" />
  </StandardSvg>
);

export const ViteIcon = (props) => (
  <ColoredSvg viewBox="0 0 256 256" {...props}>
    <path d="M246.47,44.75a13.33,13.33,0,0,0-15-4L128,84.08,24.5,40.73a13.33,13.33,0,0,0-17.75,17l89.65,183a13.33,13.33,0,0,0,24,0l126.85-183A13.33,13.33,0,0,0,246.47,44.75ZM134,220.89l-83-169.5,73,30.5Zm90-169.5-110,158.8V88.89l115-48Z" />
  </ColoredSvg>
);

export const SupabaseIcon = (props) => (
  <ColoredSvg {...props}>
    <path d="M21.362 9.354H12V.326a.31.31 0 0 0-.528-.22L.26 11.272a.31.31 0 0 0 .22.528h9.362v9.028a.31.31 0 0 0 .528.22l11.212-11.166a.31.31 0 0 0-.22-.528z" />
  </ColoredSvg>
);

export const WordPressIcon = (props) => (
  <ColoredSvg {...props}>
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.03-4.526h.018l3.111-9.01h-2.126l-2.158 6.541-2.222-6.541H5.433l4.28 11.83a8.03 8.03 0 0 1-1.636-4.225l2.893-7.605-4.512 12.35A7.95 7.95 0 0 0 12 19.98c1.378 0 2.676-.35 3.823-.96l-4.853-13.546z" />
  </ColoredSvg>
);
