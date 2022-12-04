import React, { useRef, useState, useEffect } from "react";
import styles from "./ThemeButton.module.scss";

const DEFAULT_THEME = process.env.NEXT_PUBLIC_DEFAULT_THEME;
const ThemeButton = () => {
  const themeBtnRef = useRef(null);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) setTheme(theme);
    else setTheme(DEFAULT_THEME);
  }, []);

  const toggleTheme = () => {
    themeBtnRef.current.classList.add("animate");
    setTimeout(() => {
      themeBtnRef.current.classList.remove("animate");
      setAppTheme();
    }, 300);
  };

  const setAppTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      const toggledTheme = theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", toggledTheme);
      document.querySelector("body").classList.remove(theme);
      setTheme(toggledTheme);
      document.body.classList.add(toggledTheme);
    } else {
      const toggledTheme = DEFAULT_THEME === "light" ? "dark" : "light";
      localStorage.setItem("theme", toggledTheme);
      document.querySelector("body").classList.remove(DEFAULT_THEME);
      document.querySelector("body").classList.add(toggledTheme);
      setTheme(toggledTheme);
    }
  };

  return (
    <div
      ref={themeBtnRef}
      onClick={toggleTheme}
      className={
        styles.theme_btn +
        " " +
        `${theme === "dark" ? styles.dark : styles.light}`
      }
    ></div>
  );
};

export default ThemeButton;
