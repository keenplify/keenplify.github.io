import { ProjectElementProps, projects } from "../../projects";
import { FiLink } from "solid-icons/fi";
import { ProjectCard } from "../project-card";

export default function NGCards({
  class: containerClass,
}: ProjectElementProps) {
  return (
    <div class={`${containerClass} grid-rows-2 w-full h-full`}>
      <div class="md:h-full w-full flex flex-col md:py-8 md:px-0 lg:px-4 prose-base justify-center animate-fadeInLeft">
        <h1 class="text-2xl font-bold mb-0 text-primary">NGCards (2022)</h1>
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
          Customizable smart digital business card utilizing web technology. I
          mainly worked as the <b>frontend</b> for this project, creating super
          customizable website that shows up when the user has scanned the
          digital business card. Used <b>React JS + Vite</b>.
        </p>
        <div>
          <a
            href="https://www.ngcards.com"
            target="_blank"
            class="flex gap-2 items-center link"
          >
            <FiLink /> Website
          </a>
        </div>
      </div>
      <div class="rounded-2xl row-span-2 flex items-center relative">
        <div class="bg-[linear-gradient(45deg,black,#269c8e)] w-full ml-auto md:w-[50%] h-[80%] min-h-[15rem] animate-fadeInRight rounded-2xl"></div>
        <img
          src="/mockups/ngc-phone-1.png"
          class="h-[115%] md:h-[50%] absolute left-[65%] md:left-[50%] translate-x-[-40%] top-[25%] translate-y-[-50%] animate-fadeIn animate-delay-300"
        />
        <img
          src="/mockups/ngc-phone-2.png"
          class="h-[115%] md:h-[50%] absolute left-[50%] translate-x-[-85%] md:translate-x-[-75%] bottom-[25%] translate-y-[40%] md:translate-y-[25%] animate-fadeIn animate-delay-500"
        />
      </div>
      <ProjectCard proj={projects[2]} key={2} />
    </div>
  );
}
