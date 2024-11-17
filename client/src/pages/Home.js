import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import Resume from "../../src/assets/docs/resume.pdf";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const [theme, setTheme] = useTheme();

  // Handle theme change
  const handleThemeChange = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <div className="home-container" id="home">
      <div className="theme-btn text-white" onClick={handleThemeChange}>
        {theme === "light" ? <FaMoon size={40} /> : <IoIosSunny size={40} />}
      </div>
      <div className="home-content">
        <h2 className="text-white">Hi 👋 i'm a</h2>
        <h1 className="text-white">
          <Typewriter
            options={{
              strings: ["Full Stack Developer!", "Software Developer!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="home-button">
          <a
            className="btn btn-hire text-white"
            href="https://api.whatsapp.com/send?phone=7261073242"
            rel="noreferrer"
            target="_blank"
          >
            Hire Me
          </a>
          <a className="btn btn-cv" href={Resume} download="resume.pdf">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
