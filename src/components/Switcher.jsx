import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Switcher = () => {

  const [darkMode, setDarkMode] = useState(false);

    const change = () =>{
        document.documentElement.classList.toggle("dark")
    }
  const toggleDarkMode = () => {
    change()
    setDarkMode(!darkMode);
  };
  return (
    <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} size={36} />
  );
};

export default Switcher;
