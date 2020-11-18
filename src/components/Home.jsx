import React, { Component } from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube';

const Home = styled.div`
    background: black;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    &:before {
        content: "";
        z-index: 1;
        width: 100vw;
        height: 100vh;
        position:absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,.8)
    }
`

const Centered = styled.div`
    margin: auto;
    justify-content: center;
    color: yellow;
    font-size: 10vw;
    font-style: italic;
    position: relative;
    z-index: 2;
    &:before {
        content: "ACZELL‎‏‏‎ BIEN";
        color: rgba(0, 0, 0, 0);
        -webkit-text-stroke: .5px yellow;
        position: absolute;
        font-size: 15vw;
        white-space: nowrap;
        left: -1.25em;
        top: -0.25em;
    }
    &:after {
        content: attr(data-after);
        color: white;
        position: absolute;
        font-size: .3em;
        white-space: nowrap;
        left: 50%;
        transform: translate(-50%, 50%);
        bottom: -1.5em;
        text-align: center;
        transition: 1s;
    }
`
const YT = styled.div`
    position: absolute;
    z-index: 0;
    left: -50px;
    top: -50px;
    pointer-events: none
`

const afters = ["WEB DEVELOPER", "GAMER", "CONTENT CREATOR"]

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
            }, 2000)
        })
    }

    render() {
        return(
            <Home>
                <Centered data-after={afters[this.state.index%afters.length]}> KEENPLIFY </Centered>
                <YT>
                    <YouTube videoId="pm2U3QznMOg" opts={{
                        height: window.screen.height,
                        width: window.screen.width,
                        playerVars: {
                            autoplay: 1,
                            controls: 0,
                            mute: 1,
                            loop: 1,
                            disablekb: 1,
                            playlist: "pm2U3QznMOg"
                        },
                    }}/>
                </YT>
            </Home>
        )
    }
}