import { Navigate, Route, Router, Routes } from "@solidjs/router";
import { For, JSX } from "solid-js";
import { Home } from "./pages/home";
import { themeChange } from "theme-change";

const themes = ["lemonade", "business", "aqua", "cyberpunk", "valentine"];

interface Props {
  children?: JSX.Element;
}

const html = document.querySelector("html");
const defaultTheme = localStorage.getItem("theme");

export function Root({ children }: Props) {
  themeChange();

  if (html && defaultTheme) {
    html.dataset.theme = defaultTheme;
  }

  return (
    <>
      <div class="flex gap-2 p-2">
        <For each={themes}>
          {(theme) => (
            <button
              class="btn btn-sm"
              data-set-theme={theme}
              onClick={() => {
                if (html) {
                  html.dataset.theme = theme;
                }
              }}
            >
              {theme}
            </button>
          )}
        </For>
      </div>
      <Router>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="*" element={<Navigate href="/" />} />
        </Routes>
      </Router>
    </>
  );
}
