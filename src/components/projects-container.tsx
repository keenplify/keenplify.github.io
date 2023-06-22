import { Show } from "solid-js";
import { useSearchParams } from "@solidjs/router";
import { Motion, Presence } from "@motionone/solid";
import { ProjectCard } from "../components/project-card";
import { projects } from "../projects";

interface Props {
  class?: string;
}

export function ProjectsContainer({ class: classNames }: Props) {
  const [searchParams] = useSearchParams();

  return (
    <>
      <Presence>
        <Show when={searchParams.project}>
          <Motion.div
            class="w-full h-full text-base-content z-[51] rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Show when={projects[Number.parseInt(searchParams.project)]}>
              {(proj) => {
                const project = proj();

                return (
                  project.element && project.element({ class: classNames })
                );
              }}
            </Show>
          </Motion.div>
        </Show>
      </Presence>
      <Show when={!searchParams.project}>
        <div class={classNames}>
          {projects.map((proj, key) => (
            <ProjectCard proj={proj} key={key} />
          ))}
        </div>
      </Show>
    </>
  );
}
