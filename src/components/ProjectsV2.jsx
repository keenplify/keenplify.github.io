import React from "react";
import { Button, Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { PROJECTS } from "../helpers/projects.helper";
import { LanguageItem, Spacer } from "../styles/ProjectsV2.styles";

export function ProjectsV2() {
  return (
    <Container>
      <VerticalTimeline>
        {PROJECTS.map((project, key) => (
          <VerticalTimelineElement
            key={key}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "black",
              color: "#fff",
              border: "1px solid yellow",
            }}
            contentArrowStyle={{ borderRight: "7px solid yellow" }}
            date={project.year}
            iconStyle={{ background: "black", color: "yellow" }}
            icon={project.icon}
          >
            <img
              src={project.image}
              className="w-100 rounded"
              alt={`${project.title} preview`}
            />
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "yellow" }}
            >
              {project.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {project.languages.map((lang) => (
                <LanguageItem alt={lang.name}>
                  <img src={lang.img} alt={lang.name} />
                </LanguageItem>
              ))}
            </h4>
            <div>
              <span>{project.desc}</span>
              <div
                className="btn-group w-100 mt-3"
                role="group"
                aria-label="Basic example"
              >
                {project.links?.map((link, key) => (
                  <a
                    className={`btn ${key == 0 ? "btn-warning" : "btn-dark"}`}
                    key={key}
                    href={link.link}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <Spacer />
    </Container>
  );
}
