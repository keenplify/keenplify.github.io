import { JSX } from "solid-js";

interface Props {
  children?: JSX.Element;
  class?: string;
}

export function DarkLayout({ children, class: classNames }: Props) {
  return (
    <div
      class="w-full min-h-screen bg-repeat flex justify-center overflow-x-hidden"
      style={{ background: "url('/dark-bg-tile.png')" }}
    >
      <div class={`w-full max-w-[1024px] ${classNames ?? ""}`}>{children}</div>
    </div>
  );
}
