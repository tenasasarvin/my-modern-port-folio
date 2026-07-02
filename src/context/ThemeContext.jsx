import React, { useState, useEffect, useContext, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, _setTheme] = useState("light");

  useEffect(() => {
    // Add a smooth fallback transition for older browsers that don't support View Transitions
    document.body.style.transition =
      "background-color 0.3s ease-out, color 0.3s ease-out";

    document.body.className =
      theme === "dark"
        ? "dark bg-[#111111] text-[#E5E7EB] selection:bg-blue-500/30"
        : "light bg-[#FAFAFA] text-[#1F2937] selection:bg-blue-500/30";

    document.body.style.fontFamily =
      "'Inter', 'San Francisco', 'Roboto', sans-serif";
    document.body.style.lineHeight = "1.6";
  }, [theme]);

  // Core animation function
  const animateThemeChange = (nextTheme, event) => {
    if (theme === nextTheme) return;

    // Fallback if the browser doesn't support View Transitions or no click event is passed
    if (!document.startViewTransition || !event) {
      _setTheme(nextTheme);
      return;
    }

    // Get the exact click coordinates to start the circle
    const x = event.clientX ?? window.innerWidth / 2;
    const y = event.clientY ?? window.innerHeight / 2;

    // Calculate how large the circle needs to be to cover the whole screen
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    // Start the transition
    const transition = document.startViewTransition(() => {
      _setTheme(nextTheme);
    });

    // Animate the clipping path
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 600, // Slightly longer duration for that premium, relaxed feel
          easing: "cubic-bezier(0.76, 0, 0.24, 1)", // Smooth, custom easing curve
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  // Expose wrapped setters so they accept the event object
  const setTheme = (nextTheme, event) => animateThemeChange(nextTheme, event);
  const toggleTheme = (event) =>
    animateThemeChange(theme === "light" ? "dark" : "light", event);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {/* Inject View Transition required styles globally */}
      <style>{`
        ::view-transition-old(root),
        ::view-transition-new(root) {
          animation: none;
          mix-blend-mode: normal;
        }
        /* Ensure the new theme always expands on top of the old theme */
        ::view-transition-old(root) {
          z-index: 1;
        }
        ::view-transition-new(root) {
          z-index: 2;
        }
      `}</style>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
