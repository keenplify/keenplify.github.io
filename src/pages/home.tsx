import { DarkLayout } from "../components/layouts/dark";
import { projects } from "../projects";
import LayeredSteps from "../svgs/LayeredSteps";
import dayjs from "dayjs";

function Navigation() {
  return (
    <ul class="absolute top-0 left-0 w-full flex justify-end gap-8 sm:gap-16 md:gap-24 p-6 text-primary-content font-bold z-50">
      <li>
        <a href="#about">ABOUT</a>
      </li>
      <li>
        <a href="#work">WORK</a>
      </li>
      <li>CONTACT</li>
    </ul>
  );
}

function Circles() {
  return (
    <div>
      <div class="absolute outline outline-4 outline-base-100 w-[100%] -top-0 -left-0 aspect-square rounded-full  -z-5" />
      <div class="absolute outline outline-4 outline-base-100 w-[108%] -top-[4%] -left-[4%] aspect-square rounded-full -z-5" />
      <div class="absolute outline outline-4 outline-base-100 w-[116%] -top-[8%] -left-[8%] aspect-square rounded-full -z-5 opacity-75" />
      <div class="absolute outline outline-4 outline-base-100 w-[124%] -top-[12%] -left-[12%] aspect-square rounded-full -z-5 opacity-50" />
      <div class="absolute outline outline-4 outline-base-100 w-[132%] -top-[16%] -left-[16%] aspect-square rounded-full -z-5 opacity-25" />
      <div class="absolute outline outline-4 outline-base-100 w-[140%] -top-[20%] -left-[20%] aspect-square rounded-full -z-5 opacity-5" />
    </div>
  );
}

export function Home() {
  return (
    <DarkLayout class="px-4 relative mt-36">
      <Circles />

      <div
        class="bg-base-200 text-base-content rounded-2xl relative min-h-screen outline outline-1 outline-base-100"
        id="about"
      >
        <div class="overflow-hidden rounded-2xl">
          <div class="h-12 bg-primary w-full" />
          <LayeredSteps class="pointer-events-none select-none -mt-2" />
        </div>
        <Navigation />
        <div class="absolute flex-col top-0 left-0 w-full flex justify-center items-center pt-44">
          <h1 class="font-extrabold text-4xl md:text-8xl text-center">
            ACZELL BIEN
            <br />
            FLORENCIO
          </h1>
          <h2>
            AKA <b class="text-primary-focus">KEENPLIFY</b>
          </h2>
        </div>
        <div class="self-stretch flex justify-between p-8 mt-24 text-sm">
          <ul class="text-start">
            <li>FRONTEND</li>
            <li>BACKEND</li>
            <li>AMAZON WEB SERVICE</li>
          </ul>
          <div>
            <ul class="text-end">
              <li>UI/UX DESIGN</li>
              <li>PXE SOLUTIONS</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-center gap-12 lg:gap-16 my-24 px-8">
          <span class="badge badge-primary">ABOUT</span>
          <p class="font-bold text-2xl uppercase max-w-[640px]">
            A passionate web developer with working experience with frontend and
            backend development within NodeJS ecosystem.
          </p>
        </div>
        <h2 class="text-lg text-center uppercase font-bold" id="work">
          WORK
        </h2>
        <p class="text-center px-4">
          Here are some of the projects I proudly worked at
        </p>
        <div class="grid grid-cols-2 md:grid-cols-3 my-8">
          {projects.map((proj) => (
            <button
              class="aspect-square overflow-hidden relative bg-cover bg-center"
              style={{
                "background-image": proj.imageMin
                  ? `url("${proj.imageMin}")`
                  : undefined,
              }}
            >
              <img
                src={proj.image}
                class="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div class="absolute w-full h-full top-0 left-0 hover:bg-black/50 transition-all"></div>
              {proj.date && (
                <div class="absolute top-0 right-0 bg-neutral text-neutral-content py-1 px-2 rounded-bl-lg text-sm font-bold opacity-75">
                  {proj.date}
                </div>
              )}

              <div class="absolute bottom-0 left-0 w-full h-max flex flex-col gap-1 lg:gap-2 items-center z-50 p-2 lg:p-4 pointer-events-none">
                <span class="badge badge-primary font-bold">{proj.title}</span>
                <div class="flex gap-1 md:gap-2">
                  {proj.badges?.map((badge) => (
                    <span class="badge badge-secondary">{badge}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </DarkLayout>
  );
}