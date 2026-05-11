import { useState, useEffect } from "react";

export const useTheme = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("abazi-theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("abazi-theme", dark ? "dark" : "light");
  }, [dark]);

  const toggle = () => setDark((d) => !d);

  return { dark, toggle };
};
