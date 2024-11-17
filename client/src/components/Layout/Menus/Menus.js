import React from "react";
import "./Menus.css";
import kamal_pic from "../../../images/kamal_photo1.jpg";
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBriefcase,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
} from "react-icons/fc";
const Menus = ({ toggle, setToggle }) => {
  const hideNav = () => {
    setToggle(false);

  };

  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={kamal_pic} alt="profile-pic" />
          </div>

          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={hideNav}
                >
                  <FcHome />
                  Home
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={hideNav}
                >
                  <FcAbout />
                  About
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={hideNav}
                >
                  <FcReadingEbook />
                  Education
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={hideNav}
                >
                  <FcBiotech />
                  Tech Stack
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={hideNav}
                >
                  <FcVideoProjector />
                  Projects
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="workexp"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={hideNav}
                >
                  <FcBriefcase />
                  Work-Experince
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact-form"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={hideNav}
                >
                  <FcBusinessContact />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcHome />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAbout />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcReadingEbook />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBiotech />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcVideoProjector />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="workexp"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBriefcase />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBusinessContact />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;
