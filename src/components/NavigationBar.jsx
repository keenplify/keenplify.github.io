import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SocImg = styled.img`
    height: 4vw;
    width: 4vw;
    border-radius: 50%;
`

export default class NavigationBar extends Component {
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