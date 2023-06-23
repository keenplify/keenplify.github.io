import { ProjectElementProps, projects } from "../../projects";
import { ProjectCard } from "../project-card";

export default function Rive({ class: containerClass }: ProjectElementProps) {
  return (
    <div class={`${containerClass} grid-rows-2 w-full h-full`}>
      <div class="rounded-2xl col-span-2 flex items-center relative">
        <div class="w-full h-[50%] min-h-[10rem] bg-[#d8faf6] animate-fadeInLeft rounded-2xl"></div>
        <img
          src="/mockups/rive-laptop.png"
          class="w-[70%] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] animate-fadeIn animate-delay-500"
        />
      </div>
      <div class="md:h-full w-full flex flex-col md:py-8 md:px-0 lg:px-4 prose-base justify-center animate-fadeInLeft">
        <h1 class="text-2xl font-bold mb-0 text-primary">Rive (2023)</h1>
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
        <p>A digital marketplace where users can sell anything, everywhere.</p>
        <p>
          Worked as <b>backend</b> developer using AdonisJS.
        </p>
      </div>

      <ProjectCard proj={projects[3]} key={3} />
    </div>
  );
}
