import { ProjectElementProps, projects } from "../../projects";
import { ProjectCard } from "../project-card";

export default function MobileParkingApp({
  class: containerClass,
}: ProjectElementProps) {
  return (
    <div class={`${containerClass} grid-rows-2 w-full h-full`}>
      <div class="rounded-2xl row-span-2 flex items-center relative">
        <div class="bg-[linear-gradient(45deg,#0a3477,#36b2f9,#d6fafe)] w-full md:w-[50%] h-[80%] min-h-[15rem] bg-[#d8faf6] animate-fadeInRight rounded-2xl"></div>
        <img
          src="/mockups/mpa-phone-1.png"
          class="h-[115%] md:h-[50%] absolute left-[60%] md:left-[50%] translate-x-[-40%] top-[25%] translate-y-[-40%] md:translate-y-[-50%] animate-fadeIn animate-delay-300"
        />
        <img
          src="/mockups/mpa-phone-2.png"
          class="h-[115%] md:h-[50%] absolute left-[50%] translate-x-[-85%] md:translate-x-[-75%] bottom-[25%] translate-y-[40%] md:translate-y-[25%] animate-fadeIn animate-delay-500"
        />
      </div>
      <div class="md:h-full w-full flex flex-col md:py-8 md:px-0 lg:px-4 prose-base justify-center animate-fadeInRight">
        <h1 class="text-2xl font-bold mb-0 text-primary">
          Mobile Parking App (2021)
        </h1>
        <small>Commissioned</small>
        <p>
          A simple commissioned mobile app that is built to offer digitalized
          parking system. It uses <b>Firebase</b> as its backend and{" "}
          <b>React Native / Expo</b> as its mobile framework.
        </p>
      </div>
      <ProjectCard proj={projects[5]} key={5} />
    </div>
  );
}
