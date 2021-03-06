import React, { Component } from 'react'
import styled from 'styled-components'
import TextTransition from "react-text-transition";

const Home = styled.div`
    height: 100vh
    position: relative;
`

const Centered = styled.div`
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    color: yellow;
    font-size: 10vw;
    font-style: italic;
    z-index: 2;
    &:before {
        content: "ACZELL‎‏‏‎ BIEN";
        color: rgba(0, 0, 0, 0);
        -webkit-text-stroke: .5px yellow;
        position: absolute;
        font-size: 15vw;
        white-space: nowrap;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`


const afters = ["FULLSTACK DEVELOPER", "VISUAL DESIGNER", "CONTENT CREATOR"]

export default class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 0,
            setIndex: null
        }

    }

    componentDidMount() {
        this.setState({
            setIndex: setInterval(()=> {
                this.setState({
                    index: this.state.index+1
                })
            }, 5000)
        })

        document.title = "Keenplify | Portfolio"
    }

    render() {
        return(
            <Home>
                <Centered> KEENPLIFY </Centered>
                <TextTransition
                    text={afters[this.state.index%afters.length]} 
                    inline
                    style={{
                        overflow: "hidden",
                        fontStretch: "condensed",
                        fontSize: "3vw"
                    }}
                />
            </Home>
        )
    }
}