import { useSearchParams } from "@solidjs/router";
import { Project } from "../projects";
import { Motion } from "@motionone/solid";
import { Show, createEffect, createSignal } from "solid-js";

interface Props {
  proj: Project;
  key: number;
}

export function ProjectCard({ proj, key }: Props) {
  const [searchParams, setSearchParam] = useSearchParams();
  const [active, setActive] = createSignal(false);

  createEffect(() => {
    setActive(searchParams.project == `${key}`);
  });

  return (
    <Motion.button
      onClick={() => {
        if (active()) {
          setSearchParam({ project: undefined });
        } else {
          setSearchParam({ project: key });
        }
      }}
      class="aspect-square overflow-hidden relative bg-cover bg-center rounded-2xl"
      classList={{ "z-[52]": active() }}
      style={{
        "background-image": proj.imageMin
          ? `url("${proj.imageMin}")`
          : undefined,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img
        src={proj.image}
        class={`w-full h-full object-cover object-center ${
          active() ? "left-0" : ""
        }`}
        loading="lazy"
      />
      <div class="absolute w-full h-full top-0 left-0 hover:bg-black/50 active:bg-black/25 transition-all"></div>
      <Show when={proj.date && !active()}>
        <div class="absolute top-0 right-0 bg-neutral text-neutral-content py-1 px-2 rounded-bl-lg text-sm font-bold opacity-60 pointer-events-none">
          {proj.date}
        </div>
      </Show>
      <Show when={!active()}>
        <div class="absolute bottom-0 left-0 w-full h-max flex flex-col gap-1 lg:gap-2 items-center z-50 p-2 lg:p-4 pointer-events-none">
          <span class="badge badge-primary font-bold shadow">{proj.title}</span>
          <div class="flex gap-1 md:gap-2">
            {proj.badges?.map((badge) => (
              <span class="badge badge-secondary shadow">{badge}</span>
            ))}
          </div>
        </div>
      </Show>
    </Motion.button>
  );
}
