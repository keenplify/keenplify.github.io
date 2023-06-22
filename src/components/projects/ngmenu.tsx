import { ProjectElementProps, projects } from "../../projects";
import { FiLink } from "solid-icons/fi";
import { ProjectCard } from "../project-card";

export default function NGMenu({ class: containerClass }: ProjectElementProps) {
  return (
    <div class={`${containerClass} grid-rows-3 w-full h-full`}>
      <ProjectCard proj={projects[0]} key={0} />
      <div class="col-start-1 md:col-start-2 md:h-full w-full flex flex-col md:py-8 md:px-0 lg:px-8 prose-base justify-center animate-fadeInRight">
        <h1 class="text-2xl font-bold mb-0 text-primary">
          NG Menu (2022-2023)
        </h1>
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
          A digital in-table menu restaurants can use to manage their orders
          seamlessly, has integrated payments, translations and first class
          developers API support.
        </p>
        <div>
          <a
            href="https://www.ngmenu.com"
            target="_blank"
            class="flex gap-2 items-center link"
          >
            <FiLink /> Website
          </a>
        </div>
      </div>
      <div class="rounded-2xl col-span-2 flex items-center relative">
        <div class="w-full h-[50%] min-h-[10rem] bg-[#d8faf6] animate-fadeInLeft rounded-2xl"></div>
        <img
          src="/mockups/ngm-laptop.png"
          class="w-[70%] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] animate-fadeIn"
        />
      </div>
      <div class="col-span-1 flex flex-col justify-between">
        <p>
          I worked both as the <b>frontend</b> and <b>backend</b> at our team,
          working at the main website and customer facing web app whereas we
          utilized several Amazon Web Services such as Amplify, EC2, RDS, S3 and
          Translate.
        </p>
        <p>
          I also had chance to work for its Developers REST and Webhook API, to
          be used for restaurants requiring custom integration with their POS.
        </p>
      </div>
      <div class="col-span-1 flex flex-col justify-center text-end">
        <p>
          I utilized both <b>React JS</b> and <b>Angular JS</b> as its frontend
          language, and used <b>AdonisJS</b> as our backend framework.
        </p>
      </div>
    </div>
  );
}
