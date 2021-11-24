import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const mobilize = () => {
  document.querySelector(".navbar").style.backgroundColor = "yellow";
  let links = document.querySelectorAll(".nav-link");

  for (let i = 0; i < links.length; i++) {
    links[i].classList.add("nav-link-black");
  }
  return;
};

const handleScroll = () => {
  if (window.innerWidth <= 768) return mobilize();

  window.addEventListener("scroll", (e) => {
    let toffset = window.innerHeight / 4;
    let clamped = Math.min(Math.max(0, window.pageYOffset / toffset), 1);
    document.querySelector(
      ".navbar"
    ).style.backgroundColor = `rgba(255,255,0,${clamped})`;

    if (clamped > 0.8) {
      let links = document.querySelectorAll(".nav-link");

      for (let i = 0; i < links.length; i++) {
        links[i].classList.add("nav-link-black");
      }
    } else {
      let links = document.querySelectorAll(".nav-link");

      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("nav-link-black");
      }
    }
  });
};

export default class NavigationBar extends Component {
  componentDidMount() {
    if (window.innerWidth <= 768) mobilize();
    handleScroll();
  }

  render() {
    return (
      <Navbar fixed="bottom" style={{ overflow: "hidden" }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex">
          <Nav className="d-flex ml-auto">
            <Link
              className="nav-link"
              to="/"
              alt="HOME"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              HOME
            </Link>
            <Link
              className="nav-link"
              to="/about"
              alt="ABOUT"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              ABOUT
            </Link>
            <Link
              className="nav-link"
              to="/projects"
              alt="PROJECTS"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              PROJECTS
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
