import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'
import styled from 'styled-components'

const SocMed = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 18px;
    border-radius: 50%;
`
const SocLink = styled.a`
    border: 1px solid yellow;
    padding: 4px 12px;
    margin: 8px 0;
    border-radius: 4px;
    font-size: 1em;
    line-height: 1em;
    display: block;
    font-weight: 700;
    transition: .2s;
    &:hover {
        background-color: black;
        text-decoration: none;
        box-shadow: 4px 4px yellow;
        color: white;
    }
`

const Content = styled.div`
    @media (max-width: 600px) {
        height: 80vh;
        padding-top: 20vh;
    }
`

export default class AboutComponent extends Component {

    constructor(p) {
        super(p)

        this.state = {
            expchart: {
                labels: ["Pawn", "Lua", "HTML/CSS/Javascript", "React", "React Native", "C#", "Java", "Express", "PHP"],
                datasets: [
                    {
                        label: "Pre-2020",
                        backgroundColor: "transparent",
                        borderColor: "tomato",
                        borderWidth: 5,
                        hoverBackgroundColor: "transparent",
                        hoverBorderColor: "rgba(255,255,1)",
                        data: [25, 40, 50, 25, 0, 0, 0, 40]
                    },
                    {
                        label: "2020",
                        backgroundColor: "transparent",
                        borderColor: "FUCHSIA",
                        borderWidth: 5,
                        hoverBackgroundColor: "transparent",
                        hoverBorderColor: "rgba(255,255,1)",
                        data: [25, 45, 60, 60, 25, 30, 40, 50, 15]
                    },
                ],
            }
        }
    }

    componentDidMount() {
        document.title = "Keenplify | About"
    }
    render() {
        return(
            <Container>
                <Row  style={{minHeight:"100vh"}} id="info">
                    <Col as={Content} md={6} className="my-auto">
                        <h1>WHOS KEENPLIFY</h1>
                        <p>
                            <b>Aczell Bien Florencio</b> is a fullstack developer from Quezon City, Philippines. Since his childhood, 
                            he had experience with local and cloud icafe solutions, PXE diskless/network boot systems, Windows installation 
                            and optimization. As for the present, he is studying scalable technologies such as React, React Native and 
                            NodeJS. Fueled by his unending thirst for development, he is eager to work, learn and have fun with forever 
                            changing technologies.
                        </p>
                    </Col>
                    <Col md={1} />
                    <Col  as={Content} className="my-auto">
                        <h1>SOCIAL MEDIAS</h1>
                        <SocLink href="https://www.linkedin.com/in/aczell-bien-florencio-5bb7291a1" target="_blank" rel="noreferrer">
                            <SocMed 
                                src="https://copyblogger.com/cdn-origin/images/linkedin.png"
                                alt="LinkedIn social"/>
                                (LinkedIn) Aczell Bien Florencio
                        </SocLink>
                        <SocLink href="https://facebook.com/keenplifyy" target="_blank" rel="noreferrer">
                            <SocMed 
                                src="https://index.tnwcdn.com/images/52e20473e04901dcbcea0eaa2e6a773390e5772a.png"
                                alt="Facebook social"
                                />
                                (Facebook) Keenplify
                        </SocLink>
                        <SocLink href="https://youtube.com/keenplify" target="_blank" rel="noreferrer">
                            <SocMed 
                                src="https://www.shareicon.net/data/256x256/2015/08/29/92756_play_607x607.png"
                                alt="Youtube social"/>
                                (Youtube) Keenplify
                        </SocLink>
                        <SocLink href="https://www.freecodecamp.org/keenplify" target="_blank" rel="noreferrer">
                            <SocMed 
                                src="https://i.ibb.co/X42HYpj/fcc512.png"
                                alt="Freecodecamp social"/>
                                (FreeCodeCamp) Keenplify
                        </SocLink>
                        <SocLink href="https://gamebanana.com/members/1558446" target="_blank" rel="noreferrer">
                            <SocMed 
                                src="https://i.ibb.co/YP4Jmm0/gb.png"
                                alt="Gamebanana social"/>
                                (Gamebanana) Keenplify
                        </SocLink>
                    </Col>
                </Row>
                <Row className="vh-100" md={12}>
                    <Col as={Content}>
                        <h1>LANGUAGE EXPERTISE LEVELS</h1>
                        <p>(by year as percentage, the higher the better)</p>
                        <Bar 
                            data={this.state.expchart}
                            width={80}
                            height={30}
                        />
                    </Col> 
                </Row>
            </Container>
        )
    }
}