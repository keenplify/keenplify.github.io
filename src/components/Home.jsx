import React, { Component } from "react";
import styled from "styled-components";
import TextTransition from "react-text-transition";

const Home = styled.div`
    height: 100vh
    position: relative;
`;

const Centered = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  color: yellow;
  font-size: 8.5vw;
  font-style: italic;
  font-weight: 900;
  z-index: 2;
  &:before {
    content: "ACZELL‎‏‏‎ BIEN";
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 0.5px yellow;
    position: absolute;
    font-size: 12.5vw;
    white-space: nowrap;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const afters = [
  "REACT DEVELOPER",
  "VISUAL DESIGNER",
  "VIDEO EDITOR",
  "CONTENT CREATOR",
  "WEB DEVELOPER",
  "ICAFE SOLUTIONS PROVIDER",
].sort(() => Math.random() - 0.5);

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      setIndex: null,
    };
  }

  componentDidMount() {
    this.setState({
      setIndex: setInterval(() => {
        this.setState({
          index: this.state.index + 1,
        });
      }, 5000),
    });

    document.title = "Keenplify | Portfolio";
  }

  render() {
    return (
      <Home>
        <Centered> KEENPLIFY </Centered>
        <TextTransition
          text={afters[this.state.index % afters.length]}
          inline
          style={{
            overflow: "hidden",
            fontStretch: "condensed",
            fontSize: "3vw",
            fontWeight: "700",
          }}
        />
      </Home>
    );
  }
}
