import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import styled from 'styled-components'

const Home = styled.div`
    background: black;
    height: 100vh;
    display: flex
`

const Centered = styled.div`
    margin: auto;
    justify-content: center;
    color: yellow;
    font-size: 12.5vw;
    font-style: italic;
    position: relative;
    &:after {
        content: "ACZELL‎‏‏‎ BIEN";
        color: rgba(0, 0, 0, 0);
        -webkit-text-stroke: 1px yellow;
        position: absolute;
        font-size: 15vw;
        white-space: nowrap;
        left: -.75em;
        top: -0.125em;
    }
`

export default class HomeComponent extends Component {
    render() { 
        return(
            <Home>
                <Centered>
                    KEENPLIFY
                </Centered>
            </Home>
        )
    }
}