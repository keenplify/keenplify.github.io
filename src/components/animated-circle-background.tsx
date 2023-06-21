import { JSX } from "solid-js";

interface Props {
  class?: string;
  baseSize?: number;
}

export function AnimatedCircleBackground({
  class: className,
  baseSize = 1,
}: Props) {
  return (
    <div class="absolute w-screen h-screen -left-[14%] top-0 flex justify-center items-center">
      <div
        class={`aspect-square rounded-full outline outline-4 outline-base-100 ${
          className ?? ""
        }`}
        style={{
          width: `${baseSize * 1024}px`,
        }}
      ></div>
    </div>
  );
}
