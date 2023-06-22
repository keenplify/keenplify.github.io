import { JSX } from "solid-js";
import ScatteredBlobs from "../../svgs/ScatteredBlobs";

interface Props {
  children?: JSX.Element;
  class?: string;
}

export function DarkLayout({ children, class: classNames }: Props) {
  return (
    <div
      class="w-full min-h-screen bg-repeat flex justify-center relative overflow-hidden"
      style={{ background: "url('/dark-bg-tile.png')" }}
    >
      <div class={`w-full max-w-[1024px] z-50 ${classNames ?? ""}`}>
        {children}
      </div>
      <ScatteredBlobs class="scale-[2.5] left-[50%] translate-x-[-50%] bottom-0 absolute" />
    </div>
  );
}
