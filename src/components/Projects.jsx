import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col, Card } from 'react-bootstrap'

const LanguageItem = styled.picture`
    

    &:hover:after {
        content: attr(alt);
        background-color: black;
        position: absolute;
        transform: translate(-50%, -100%);
        padding: 4px 8px;
        border-radius: 4px;
        z-index: 5;
        color: yellow;
    }

    & > img {
        height: 18px;
        margin-right: 6px;
        filter:  saturate(0) brightness(500%);

        &:hover {
            filter: none;
        }
    }
`

export default class ProjectsComponent extends Component {
    constructor(p) {
        super(p)

        this.state = {
            projects: [
                {
                    title: "CSGO HUD Plugin",
                    image: "https://screenshots.gamebanana.com/img/ss/wips/5bb76bd62e577.jpg",
                    desc: `
                        The plugin gives Counter Strike 1.6 (CS1.6) a full port of Counter Strike Government Offensive (CSGO)'s
                        new Panorama ingame HUD using AMXMODX and Metadrawer.
                    `,
                    languages: [
                        {
                            name: "AMXMODX",
                            img: "https://miro.medium.com/max/2476/1*GwOUMMMXKde8kr1i2kDByw.png"
                        }, {
                            name: "Metahook",
                            img: "https://i.ibb.co/gwf8kX3/hook.png"
                        }
                    ],
                    links: [
                        {
                            name: "Gamebanana",
                            link: "https://gamebanana.com/wips/49236"
                        }
                    ]
                },  {
                    title: "Lurkr",
                    image: "https://i.ibb.co/rG1DSSb/tset.png",
                    desc: `
                        Lurkr is keenplify's experiment on MERN stack. The web app's vision is to create an environment
                        where unnoticed content creators can post their contents/livestreams and get promoted not based
                        on their popularity.
                    `,
                    languages: [
                        {
                            name: "NodeJS",
                            img: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                        }, {
                            name: "Create-React-App",
                            img: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png"
                        }, {
                            name: "Express",
                            img: "https://i.ibb.co/mSCzBHf/ex.png"
                        }, {
                            name: "PassportJS",
                            img: "https://miro.medium.com/max/400/1*YI1tt4kGzvea-v4dAhZ90w.png"
                        }, {
                            name: "IGDB",
                            img: "https://images.opencollective.com/jakecattrall/2036487/avatar/256.png"
                        } 
                    ]
                },  
            ]
        }
    }
    render() {
        return(
            <Row style={{marginBottom: "10vh"}}>
                <Col>
                    <h1 className="text-center">PROJECTS</h1>
                    <Row>
                        {this.state.projects.map((proj, i) => (<Col md={4} className="mb-3"><Card className="bg-dark">
                            <Card.Img src={proj.image} />
                            <Card.Title>{proj.title}</Card.Title>
                            <Card.Body>
                                <div className="mb-3">
                                    {proj.languages.map((lang) => (
                                        <LanguageItem alt={lang.name}>
                                            <img  src={lang.img} alt={lang.name} />
                                        </LanguageItem>
                                    ))}
                                </div>
                                {proj.desc}
                            </Card.Body>
                            <Card.Footer>
                                <b style={{color: "white"}}>Links: </b>
                                {(proj.links) ? (proj.links.map((link) => (
                                    <a href={link.link} target="_blank" rel="noreferrer" style={{color: "yellow"}}>{link.name}</a> 
                                ))): (<span className="text-muted">Unavailable</span>)}
                            </Card.Footer>
                        </Card></Col>))}
                    </Row>
                </Col>
            </Row>     
        )
    }
}