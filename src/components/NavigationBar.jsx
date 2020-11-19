import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SocImg = styled.img`
    height: 5vh;
    width: 5vh;
    margin: .2vw;
    border-radius: 50%;
`

export default class NavigationBar extends Component {
    componentDidMount() {
        window.addEventListener('scroll', (e) => {
            let toffset=window.innerHeight / 4
            let clamped = Math.min(Math.max(0, window.pageYOffset / toffset), 1)
            console.log(clamped)
            document.querySelector(".navbar").style.backgroundColor = `rgba(255,255,0,${clamped})`
            
            if (clamped > .8) {
                let links = document.querySelectorAll(".nav-link")
                
                for (let i=0;i<links.length;i++) {
                    links[i].classList.add("nav-link-black")
                }
            } else {
                let links = document.querySelectorAll(".nav-link")
                
                for (let i=0;i<links.length;i++) {
                    links[i].classList.remove("nav-link-black")
                }
            }
        })
    }

    render() {
        return(
        <Navbar fixed="bottom" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="d-flex">
            <Nav className="d-flex mr-auto">
                <a href="https://facebook.com/keenplifyy" target="_blank" rel="noreferrer">
                    <SocImg 
                        src="https://index.tnwcdn.com/images/52e20473e04901dcbcea0eaa2e6a773390e5772a.png"
                        alt="Facebook social"/>
                </a>
                <a href="https://youtube.com/keenplify" target="_blank" rel="noreferrer">
                    <SocImg 
                        src="https://www.shareicon.net/data/256x256/2015/08/29/92756_play_607x607.png"
                        alt="Youtube social"/>
                </a>
            </Nav>
            <Nav className="d-flex">
                <Link className="nav-link" to="/" alt="HOME">HOME</Link>
                <Link className="nav-link" to="/about" alt="ABOUT">ABOUT</Link>
                <Link className="nav-link" to="/projects" alt="PROJECTS">PROJECTS</Link>
                <Link className="nav-link" to="/contact" alt="CONTACT">CONTACT</Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )}
}