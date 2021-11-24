import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import { EXPERIENCES } from "../helpers/about.helper";
import { Spacer } from "../styles/ProjectsV2.styles";
import { FadeInWhenVisible } from "./FadeInDiv";

const SocMed = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 18px;
  border-radius: 50%;
`;
const SocLink = styled(motion.a)`
  border: 1px solid yellow;
  padding: 4px 12px;
  margin: 8px 0;
  border-radius: 4px;
  font-size: 1em;
  line-height: 1em;
  display: block;
  font-weight: 700;
  transition: 0.2s;
  &:hover {
    background-color: black;
    text-decoration: none;
    box-shadow: 4px 4px yellow;
    color: white;
  }
`;
const ParentVariants = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.25,
    },
  },
  hide: { opacity: 0, x: 128 },
};

const ChildrenVariants = {
  show: { opacity: 1, x: 0 },
  hide: { opacity: 0, x: 128 },
};

const ChildrenTransitions = { duration: 1 };

const Content = styled(FadeInWhenVisible)`
  @media (max-width: 600px) {4
    padding-top: 20vh;
  }
`;

export default class AboutComponent extends Component {
  componentDidMount() {
    document.title = "Keenplify | About";
  }

  render() {
    return (
      <FadeInWhenVisible
        className="container"
        variants={{
          show: {
            opacity: 1,
            x: 0,
            transition: {
              staggerChildren: 0.5,
            },
          },
          hide: { opacity: 0, x: 128 },
        }}
        initial="hide"
        animate="show"
      >
        <FadeInWhenVisible
          className="row mt-5"
          style={{ minHeight: "100vh" }}
          id="info"
          variants={ParentVariants}
          transition={{ duration: 0.5 }}
        >
          <FadeInWhenVisible
            as={Content}
            className="col-md-6 my-auto"
            variants={ParentVariants}
          >
            <motion.h1 variants={ChildrenVariants} transition={{ duration: 1 }}>
              WHOS KEENPLIFY
            </motion.h1>
            <motion.p
              variants={ChildrenVariants}
              transition={ChildrenTransitions}
              className="text-justify"
            >
              <b>Aczell Bien Florencio</b> is a web developer from Quezon City,
              Philippines. Since his childhood, he had experience with local and
              cloud icafe solutions, PXE diskless/network boot systems, Windows
              installation and optimization. As for the present, he is studying
              scalable technologies such as React, React Native and NodeJS.
              Fueled by his unending thirst for development, he is eager to
              work, learn and have fun with forever changing technologies. He
              uploads videos in his Youtube account once in a blue moon.
            </motion.p>
          </FadeInWhenVisible>
          <div className="col-md-1" />
          <FadeInWhenVisible
            as={Content}
            variants={ParentVariants}
            transition={ChildrenTransitions}
            className="col-md-5 my-auto"
          >
            <motion.h1 variants={ChildrenVariants} transition={{ duration: 1 }}>
              SOCIAL MEDIAS
            </motion.h1>
            <SocLink
              variants={ChildrenVariants}
              transition={ChildrenTransitions}
              href="https://www.linkedin.com/in/aczell-bien-florencio-5bb7291a1"
              target="_blank"
              rel="noreferrer"
            >
              <SocMed
                src="https://copyblogger.com/cdn-origin/images/linkedin.png"
                alt="LinkedIn social"
              />
              (LinkedIn) Aczell Bien Florencio
            </SocLink>
            <SocLink
              variants={ChildrenVariants}
              transition={ChildrenTransitions}
              href="https://facebook.com/keenplifyy"
              target="_blank"
              rel="noreferrer"
            >
              <SocMed
                src="https://index.tnwcdn.com/images/52e20473e04901dcbcea0eaa2e6a773390e5772a.png"
                alt="Facebook social"
              />
              (Facebook) Keenplify
            </SocLink>
            <SocLink
              href="https://youtube.com/keenplify"
              target="_blank"
              rel="noreferrer"
              variants={ChildrenVariants}
              transition={ChildrenTransitions}
            >
              <SocMed
                src="https://www.shareicon.net/data/256x256/2015/08/29/92756_play_607x607.png"
                alt="Youtube social"
              />
              (Youtube) Keenplify
            </SocLink>
            <SocLink
              href="https://www.freecodecamp.org/keenplify"
              target="_blank"
              rel="noreferrer"
              variants={ChildrenVariants}
              transition={ChildrenTransitions}
            >
              <SocMed
                src="https://i.ibb.co/X42HYpj/fcc512.png"
                alt="Freecodecamp social"
              />
              (FreeCodeCamp) Keenplify
            </SocLink>
            <SocLink
              href="https://gamebanana.com/members/1558446"
              target="_blank"
              rel="noreferrer"
              variants={ChildrenVariants}
              transition={ChildrenTransitions}
            >
              <SocMed
                src="https://i.ibb.co/YP4Jmm0/gb.png"
                alt="Gamebanana social"
              />
              (Gamebanana) Keenplify
            </SocLink>
          </FadeInWhenVisible>
        </FadeInWhenVisible>
        <h1>SKILLS AND EXPERIENCES</h1>
        <FadeInWhenVisible
          className="row"
          variants={ParentVariants}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "8em" }}
        >
          {EXPERIENCES.map((exp) => (
            <FadeInWhenVisible
              variants={ChildrenVariants}
              transition={ChildrenTransitions}
              className="col-md-6 my-2"
            >
              {
                <Card bg="dark">
                  <Card.Header
                    className="font-weight-bold"
                    style={{ color: "yellow" }}
                  >
                    {exp.name}
                  </Card.Header>
                  <Card.Body>{exp.desc}</Card.Body>
                </Card>
              }
            </FadeInWhenVisible>
          ))}
        </FadeInWhenVisible>
        <Spacer />
      </FadeInWhenVisible>
    );
  }
}
