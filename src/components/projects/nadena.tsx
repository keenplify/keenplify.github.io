import { ProjectElementProps, projects } from "../../projects";
import { FiLink } from "solid-icons/fi";
import { ProjectCard } from "../project-card";

export default function Nadena({ class: containerClass }: ProjectElementProps) {
  return (
    <div class={`${containerClass} grid-rows-3 w-full h-full`}>
      <div class="md:h-full w-full flex flex-col md:py-8 md:px-0 lg:px-8 prose-base justify-center animate-fadeInLeft">
        <h1 class="text-2xl font-bold mb-0 text-primary">Nadena (2022-2023)</h1>
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
        <p>A mobile platform where coaches can manage their clients easily.</p>
        <div>
          <a
            href="https://www.nadena.ae"
            target="_blank"
            class="flex gap-2 items-center link"
          >
            <FiLink /> Website
          </a>
        </div>
      </div>
      <ProjectCard proj={projects[1]} key={1} />
      <div class="rounded-2xl row-span-2 flex items-center relative">
        <div class="bg-[linear-gradient(45deg,#F3CB79_0%,#E97AA7_100%)] w-full md:w-[50%] h-[80%] min-h-[15rem] bg-[#d8faf6] animate-fadeInLeft rounded-2xl"></div>
        <img
          src="/mockups/nd-phone.png"
          class="h-[115%] md:h-[50%] absolute left-[60%] md:left-[50%] translate-x-[-40%] top-[25%] translate-y-[-40%] md:translate-y-[-50%] animate-fadeIn animate-delay-300"
        />
        <img
          src="/mockups/nd-phone-2.png"
          class="h-[115%] md:h-[50%] absolute left-[50%] translate-x-[-85%] md:translate-x-[-75%] bottom-[25%] translate-y-[40%] md:translate-y-[25%] animate-fadeIn animate-delay-500"
        />
      </div>
      <div class="row-span-2 flex flex-col justify-center gap-8">
        <p>
          I mainly worked as the <b>backend</b> for this project, planning REST
          endpoints and websockets to use for the mobile and web applications to
          integrate with. Hosted the project using Amazon EC2 and Amazon
          Amplify.
        </p>
        <p>
          I utilized <b>Nest JS</b> for the frontend, <b>Prisma</b> as the ORM
          and <b>Amazon RDS</b> as its database provider.
        </p>
        <p>
          Also had the experience to facilitate deploying <b>Android</b>{" "}
          applications to Play Store and managing cross platform{" "}
          <b>In-App Subscriptions</b> using <b>Glassfy</b>.
        </p>
      </div>
    </div>
  );
}
