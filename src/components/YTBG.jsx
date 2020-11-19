import React, { Component } from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube';

const YT = styled.div`
    position: fixed;
    z-index: -1;
    left: 0;
    top: -60px;
    pointer-events: none;
    overflow: hidden;
    height: calc(100vh + 120px);
    width: 100vw;
    &:before {
      content: "";
      z-index: 1;
      width: 300vw;
      height: 300vh;
      position:fixed;
      top: -100vh;
      left: -100vw;
      transition: .5s
    }

    iframe {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
`

export default class YTBGComponent extends Component {

    constructor(p) {
        super(p)

        this.state={
            isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        }
    }
    render() {
        if(this.state.isMobile) {
            return(
                <YT>
                    <img style={{
                        opacity: ".5"
                    }}
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/131f4324-b78b-438a-a277-b2a07445e47f/dwp0y1-4e71bec2-05d6-462d-a310-8f3ad76e898a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTMxZjQzMjQtYjc4Yi00MzhhLWEyNzctYjJhMDc0NDVlNDdmXC9kd3AweTEtNGU3MWJlYzItMDVkNi00NjJkLWEzMTAtOGYzYWQ3NmU4OThhLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl19.jpmgJVpTmVqkM--lV2ZLRhGPo77egEOirZ5r8bSjgCY"
                    />
                </YT>
            )
        } else return(
            <YT className={(this.props.strongoverlay === "1")?("overlay-strong"):("overlay")}>
                <YouTube videoId="pm2U3QznMOg"
                id="YTBG"
                opts={{
                    height: window.screen.height,
                    width: window.screen.width,
                    playerVars: {
                        autoplay: 1,
                        controls: 0,
                        mute: 1,
                        loop: 1,
                        disablekb: 1,
                        playlist: "pm2U3QznMOg",
                        playsinline: 1
                    }}}
                />
            </YT>
        )
    }
}