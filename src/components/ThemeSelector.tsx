import { useState } from "react";
import { useEffect } from "react";
import ThemeIcon from "./ThemeIcon";

export default function Navbar() {
  const [theme, setTheme] = useState("dark-theme");

  useEffect(() => {
    const tema = localStorage.getItem("theme");

    if (!tema) {
      document.documentElement.classList.add("dark-theme");
      return setTheme("dark-theme");
    }

    setTheme(tema);
    document.documentElement.classList.add(tema);
  }, []);

  const toggleThemeMode = () => {
    setTheme(theme == "dark-theme" ? "light-theme" : "dark-theme");
    document.documentElement.classList.toggle("dark-theme");
    document.documentElement.classList.toggle("light-theme");

    localStorage.setItem(
      "theme",
      theme == "light-theme" ? "dark-theme" : "light-theme"
    );
  };

  return (
    <div className="flex items-center justify-between">
      <div
        className="flex items-center cursor-pointer bg-black rounded-full p-2 border hover:outline hover:outline-2 hover:outline-[#d9ff42] hover:bg-[#d9ff42/20] transition-all duration-200"
        onClick={toggleThemeMode}
      >
        <ThemeIcon currentTheme={theme} />
      </div>
    </div>
  );
}
