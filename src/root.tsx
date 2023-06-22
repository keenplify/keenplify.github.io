import { RouteDefinition, Router, useRoutes } from "@solidjs/router";
import { For, JSX, lazy } from "solid-js";
import { themeChange } from "theme-change";

const themes = ["lemonade", "business", "aqua", "cyberpunk", "valentine"];

interface Props {
  children?: JSX.Element;
}

const html = document.querySelector("html");
const defaultTheme = localStorage.getItem("theme");

const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/home")),
  },
] as RouteDefinition[];

export function Root({ children }: Props) {
  const Routes = useRoutes(routes);
  themeChange();

  if (html && defaultTheme) {
    html.dataset.theme = defaultTheme;
  }

  return (
    <>
      {/* <div class="flex gap-2 p-2 flex-col">
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
      </div> */}
      <Router>
        <Routes />
      </Router>
    </>
  );
}
