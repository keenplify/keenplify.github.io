import React, { Component } from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

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
      width: 100vw;
      height: 100vh;
      position:fixed;
      top: 0;
      left: 0;
      transition: 1s
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

    render() {
        return(
            <YT className={(this.props.strongoverlay === "1")?("overlay-strong"):("overlay")}>
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
        )
    }
}