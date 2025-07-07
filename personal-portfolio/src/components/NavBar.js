// src/components/NavBar.js
import React, { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import {
  FaTiktok,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { key: "home", label: "Home", href: "#home" },
    { key: "brands", label: "Brands", href: "#brands" },
    { key: "projects", label: "Portfolio", href: "#projects" },
    { key: "packages", label: "Packages", href: "#packages" },
    { key: "contact", label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // update active section
      const halfway = scrollY + window.innerHeight / 2;
      let current = activeLink;
      sections.forEach(({ key, href }) => {
        const el = document.querySelector(href);
        if (el && halfway >= el.offsetTop) current = key;
      });
      if (current !== activeLink) setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]);

  return (
    <Router>
      {/* Top Navbar with social icons & logo on right (hides on scroll) */}
      <Navbar expand="md" className={scrolled ? "hidden-navbar" : ""}>
        <Container className="justify-content-end">
          <Navbar.Toggle aria-controls="navbar-content">
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-content" className="justify-content-end">
            <div className="social-icon">
              {[
                {
                  Icon: FaTiktok,
                  url: "https://www.tiktok.com/@iftecent?lang=en",
                  label: "TikTok",
                },
                {
                  Icon: FaYoutube,
                  url: "https://www.youtube.com/@iftecent.visuals",
                  label: "YouTube",
                },
                {
                  Icon: FaInstagram,
                  url: "https://www.instagram.com/iftecent.visuals/",
                  label: "Instagram",
                },
                {
                  Icon: FaLinkedin,
                  url: "https://ca.linkedin.com/in/ifte-amanullah-4b6549235",
                  label: "LinkedIn",
                },
                {
                  Icon: FaPinterest,
                  url: "https://ca.pinterest.com/iftecentvisuals/",
                  label: "Pinterest",
                },
              ].map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-link"
                >
                  <Icon size={28} />
                </a>
              ))}
              <HashLink to="#home" className="navbar-logo-link">
                <img src={logo} alt="Logo" className="navbar-logo" />
              </HashLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar with section links + logo shows only on scroll */}
      <aside className={`sidebar-links ${scrolled ? "show-logo" : ""}`}>
        <HashLink
          to="#home"
          onClick={() => setActiveLink("home")}
          className="sidebar-logo"
        >
          <img src={logo} alt="Logo" />
        </HashLink>
        {sections.map(({ key, label, href }) => (
          <HashLink
            key={key}
            to={href}
            smooth
            className={`nav-link ${activeLink === key ? "active" : ""}`}
            onClick={() => setActiveLink(key)}
          >
            {label}
          </HashLink>
        ))}
      </aside>
    </Router>
  );
};
