"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-12 h-12 flex items-center justify-center opacity-0">
        <div className="w-5 h-5" />
      </div>
    );
  }

  return (
    <MagneticButton intensity={0.2}>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative flex items-center justify-center w-12 h-12 rounded-full text-foreground/70 hover:text-foreground transition-colors duration-300"
        aria-label="Toggle theme"
      >
        <motion.div
          key={theme}
          initial={{ scale: 0.5, opacity: 0, rotate: theme === "dark" ? -90 : 90 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
        </motion.div>
      </button>
    </MagneticButton>
  );
}
