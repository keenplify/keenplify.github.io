import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

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
    filter: saturate(0) brightness(500%);

    &:hover {
      filter: none;
    }
  }
`;

export default class ProjectsComponent extends Component {
  constructor(p) {
    super(p);

    this.state = {
      projects: [
        {
          title: "CSGO HUD Plugin",
          image:
            "https://screenshots.gamebanana.com/img/ss/wips/5bb76bd62e577.jpg",
          year: 2017,
          desc: `
                        The plugin gives Counter Strike 1.6 (CS1.6) a full port of Counter Strike Government Offensive (CSGO)'s
                        new Panorama ingame HUD using AMXMODX and Metadrawer.
                    `,
          languages: [
            {
              name: "AMXMODX",
              img: "https://miro.medium.com/max/2476/1*GwOUMMMXKde8kr1i2kDByw.png",
            },
            {
              name: "Metahook",
              img: "https://i.ibb.co/gwf8kX3/hook.png",
            },
          ],
          links: [
            {
              name: "Gamebanana",
              link: "https://gamebanana.com/wips/49236",
            },
          ],
        },
        {
          title: "Streamland",
          image: "https://i.ibb.co/cJypqkx/streamland.png",
          year: 2018,
          desc: `
                        A Roblox game heavily featuring house building and active tycoon-like streaming.
                        Join the community of live streamers where you can grow your streaming dreams and build your dream house using your stream credits!
                    `,
          languages: [
            {
              name: "Roblox Studio",
              img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/ROBLOX_Studio_icon.png",
            },
            {
              name: "Lua",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/1200px-Lua-Logo.svg.png",
            },
          ],
          links: [
            {
              name: "Roblox",
              link: "https://www.roblox.com/games/5218364514/",
            },
          ],
        },
        {
          title: "Lurkr",
          image: "https://i.ibb.co/rG1DSSb/tset.png",
          year: 2020,
          desc: `
                        Lurkr is keenplify's first experiment on MERN stack. The web app's vision is to create an environment
                        where unnoticed content creators can post their contents/livestreams and get promoted not based
                        on their popularity.
                    `,
          languages: [
            {
              name: "NodeJS",
              img: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
            },
            {
              name: "Create-React-App",
              img: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
            },
            {
              name: "Express",
              img: "https://i.ibb.co/mSCzBHf/ex.png",
            },
            {
              name: "PassportJS",
              img: "https://miro.medium.com/max/400/1*YI1tt4kGzvea-v4dAhZ90w.png",
            },
            {
              name: "IGDB",
              img: "https://images.opencollective.com/jakecattrall/2036487/avatar/256.png",
            },
          ],
        },
        {
          title: "Takoyaki & Shawarma",
          image: "https://i.ibb.co/12GsvHK/tns.png",
          year: 2020,
          desc: `
                        It is a website that was made as a final project on his Web Systems class (WS101).
                        His tasks for this website is the PHP logics, basic REST endpoints and the database design.
                    `,
          languages: [
            {
              name: "PHP",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/2560px-Webysther_20160423_-_Elephpant.svg.png",
            },
            {
              name: "XAMPP",
              img: "https://i.ibb.co/kHF6JNJ/58482973cef1014c0b5e49fd.png",
            },
            {
              name: "MariaDB",
              img: "https://crestsolution.com/wp-content/uploads/2021/07/MariaDB-2.png",
            },
          ],
          links: [
            {
              name: "Github",
              link: "https://github.com/keenplify/tns-ws101",
            },
            {
              name: "Static",
              link: "https://keenplify.github.io/tns-ws101",
            },
          ],
        },
        {
          title: "QR Hang-Tag",
          image: "https://i.ibb.co/xfJm3Pw/hangtag.png",
          year: 2021,
          desc: `
                        Another web experiment of kin, it uses react-qr-reader to read and process QR codes,
                        html2canvas to create printable React components. The app's goal is to turn clothing
                        hang tags into a discount voucher, thus making hang tags reusable. 
                    `,
          languages: [
            {
              name: "NodeJS",
              img: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
            },
            {
              name: "Create-React-App",
              img: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
            },
            {
              name: "Express",
              img: "https://i.ibb.co/mSCzBHf/ex.png",
            },
            {
              name: "PassportJS",
              img: "https://miro.medium.com/max/400/1*YI1tt4kGzvea-v4dAhZ90w.png",
            },
          ],
          links: [
            {
              name: "Github",
              link: "https://github.com/keenplify/qr-hang-tag",
            },
          ],
        },
        {
          title: "SMS-QR",
          image: "https://i.ibb.co/Rz4BrzX/Untitled.png",
          year: 2021,
          desc: `
                        It is a commissioned mobile app project that was made in collaboration with @avidianity. The app's goal is
                        to create attendance system that is using QR as the means of verifying attendance, then it sends
                        SMS to authorized personnels' phone number.
                    `,
          languages: [
            {
              name: "NodeJS",
              img: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
            },
            {
              name: "Typescript",
              img: "https://i.ibb.co/ZTXf1p9/ts.png",
            },
            {
              name: "React Native",
              img: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
            },
            {
              name: "Express",
              img: "https://i.ibb.co/mSCzBHf/ex.png",
            },
            {
              name: "Expo",
              img: "https://i.ibb.co/6tNnNBJ/Expo-1324888717852364845.png",
            },
            {
              name: "Semaphore",
              img: "https://i.ibb.co/34yZ0P1/semaphore-icon.png",
            },
          ],
          links: [
            {
              name: "Github",
              link: "https://github.com/avidianity/sms-qr",
            },
            {
              name: "@avidianity",
              link: "https://github.com/avidianity",
            },
          ],
        },
        {
          title: "Public Market Mobile App",
          image: "https://i.ibb.co/D55nyTB/Artboard-1.png",
          year: 2021,
          desc: `
                    Public Market Mobile App (PMMA) is another commissioned mobile app that utilizes React Native and Nativebase
                    to provide service to online buyers and sellers. It's main goal is to become the middleman between online
                    selling transactions and is inspired by the likes of Shopee and Lazada. It's server is hosted in Heroku and the
                    images is stored at Amazon S3.
                `,
          languages: [
            {
              name: "NodeJS",
              img: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
            },
            {
              name: "Typescript",
              img: "https://i.ibb.co/ZTXf1p9/ts.png",
            },
            {
              name: "React Native",
              img: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
            },
            {
              name: "Expo",
              img: "https://i.ibb.co/6tNnNBJ/Expo-1324888717852364845.png",
            },
            {
              name: "Heroku",
              img: "https://www.nicepng.com/png/full/223-2233246_heroku-logo-salesforce-heroku.png",
            },
            {
              name: "Amazon S3",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1200px-Amazon-S3-Logo.svg.png",
            },
          ],
          links: [
            {
              name: "Github",
              link: "https://github.com/keenplify/public-market-mobile-app",
            },
            {
              name: "APK Releases",
              link: "https://drive.google.com/drive/folders/15awSLZhtWikCleFPd8RUUo52mhSHcakU?usp=sharing",
            },
          ],
        },
      ],
    };
  }

  componentDidMount() {
    document.title = "Keenplify | Projects";
  }

  render() {
    return (
      <Row style={{ marginBottom: "10vh", overflow: "hidden" }}>
        <Col>
          <motion.h1
            className="text-center"
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 128 }}
            transition={{ duration: 1 }}
          >
            PROJECTS
          </motion.h1>
          <motion.div
            variants={{
              show: {
                opacity: 1,
                x: 0,
                transition: {
                  staggerChildren: 0.3,
                },
              },
              hide: { opacity: 0, x: 128 },
            }}
            className="row"
            initial="hide"
            animate="show"
          >
            {this.state.projects.reverse().map((proj, i) => (
              <motion.div
                className="mb-3 col-md-4"
                variants={{
                  hide: {
                    opacity: 0,
                    x: 128,
                  },
                  show: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-dark">
                  <Card.Img src={proj.image} />
                  <Card.Title style={{ color: "yellow" }}>
                    {proj.title} ({proj.year})
                  </Card.Title>
                  <Card.Body>
                    <div className="mb-3">
                      {proj.languages.map((lang) => (
                        <LanguageItem alt={lang.name}>
                          <img src={lang.img} alt={lang.name} />
                        </LanguageItem>
                      ))}
                    </div>
                    {proj.desc}
                  </Card.Body>
                  <Card.Footer>
                    <b style={{ color: "white" }}>Links: </b>
                    {proj.links ? (
                      proj.links.map((link, key) => (
                        <a
                          key={key}
                          href={link.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "yellow", margin: "0 4px" }}
                        >
                          {link.name}
                        </a>
                      ))
                    ) : (
                      <span className="text-muted">Unavailable</span>
                    )}
                  </Card.Footer>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Col>
      </Row>
    );
  }
}
