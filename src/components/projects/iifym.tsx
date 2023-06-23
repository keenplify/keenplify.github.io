import { ProjectElementProps, projects } from "../../projects";
import { ProjectCard } from "../project-card";

export default function IIFYM({ class: containerClass }: ProjectElementProps) {
  return (
    <div class={`${containerClass} grid-rows-2 w-full h-full`}>
      <div class="rounded-2xl col-span-2 flex items-center relative">
        <div class="w-full h-[50%] min-h-[10rem] bg-[linear-gradient(45deg,#edaa64,#91cfaf,#91cfaf)] animate-fadeInLeft rounded-2xl"></div>
        <img
          src="/mockups/iifym-laptop.png"
          class="w-[70%] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] animate-fadeIn animate-delay-500"
        />
      </div>
      <ProjectCard proj={projects[4]} key={4} />
      <div class="md:h-full w-full flex flex-col md:py-8 md:px-0 lg:px-4 prose-base justify-center animate-fadeInLeft">
        <h1 class="text-2xl font-bold mb-0 text-primary">IIFYM AE (2022)</h1>
        <small>
          Under{" "}
          <a
            href="https://www.digitalbrandwork.com"
            class="link"
            target="_blank"
          >
            Digital Brand Work
          </a>
        </small>
        <p>
          <i>If It Fits Your Macros</i>, A website that generates food within
          the user's macro nutrient needs and goals.
        </p>
        <p>
          Worked as a <b>backend</b> developer with this project. The project
          uses Adonis JS as its backend framework.
        </p>
      </div>
    </div>
  );
}
