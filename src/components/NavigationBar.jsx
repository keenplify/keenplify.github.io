import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, BrowserRouter } from 'react-router-dom'

export default class NavigationBar extends Component {
    render() {return(
        <Navbar fixed="bottom" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="flex-row-reverse">
            <BrowserRouter as={Nav}>
                <Link className="nav-link" to="/" alt="HOME">HOME</Link>
                <Link className="nav-link" to="/about" alt="ABOUT">ABOUT</Link>
                <Link className="nav-link" to="/experiences" alt="EXPERIENCES">EXPERIENCES</Link>
            </BrowserRouter>
            </Navbar.Collapse>
        </Navbar>
    )}
}