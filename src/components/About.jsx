import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'

export default class AboutComponent extends Component {

    constructor(p) {
        super(p)

        this.state = {
            expchart: {
                labels: ["Pawn", "Lua", "HTML/CSS/Javascript", "React", "React Native", "C#", "Java", "Express"],
                datasets: [
                    {
                        label: "Pre-2020",
                        backgroundColor: "transparent",
                        borderColor: "tomato",
                        borderWidth: 5,
                        hoverBackgroundColor: "transparent",
                        hoverBorderColor: "rgba(255,255,1)",
                        data: [25, 40, 50, 25]
                    },
                    {
                        label: "2020",
                        backgroundColor: "transparent",
                        borderColor: "FUCHSIA",
                        borderWidth: 5,
                        hoverBackgroundColor: "transparent",
                        hoverBorderColor: "rgba(255,255,1)",
                        data: [25, 45, 60, 60, 30, 30, 40, 50]
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
                <Row  className="vh-100 position-relative" id="info">
                    <Col md={7} className="fullcenter">
                        <h1>WHOS KEENPLIFY</h1>
                        <p>
                            <b>Aczell Bien Florencio</b> is a fullstack developer from Quezon City, Philippines. Since his childhood, 
                            he had experience with local and cloud icafe solutions, PXE diskless/network boot systems, Windows installation 
                            and optimization. As for the present, he is studying scalable technologies such as React, React Native and 
                            NodeJS. Fueled by his unending thirst for development, he is eager to work, learn and have fun with forever 
                            changing technologies.
                        </p>
                    </Col>
                </Row>
                <Row className="vh-100  position-relative" id="chart">
                    <Col className="fullcenter">
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