import { Brain, ClockArrowUp, Earth, Users } from "lucide-react";
import { Link } from "react-router";
import { BrMd } from "~/components/utility/line-break";
import { PROJECTS } from "./projects";
import ProjectCard from "./project-card";

export default function Home() {
  return (
    <div className="animated fadeIn">
      <header className="lg:pt-16 pb-10 pt-[4rem] h-[70vh] bg-primary-theme flex justify-center flex-col">
        <section className="container justify-between gap-20 items-center md:flex">
          <div className="text-start flex-1 md:text-center">
            <h1 className="text-3xl text-white capitalize font-bold lg:text-6xl mt-3 tracking-tight z-10">
              Innovating for <BrMd /> development impact{" "}
              <span className="text-4xl hidden md:inline-block rounded md:text-5xl text-secondary-theme animate-caret-blink">|</span>
            </h1>

            <section className="flex flex-col text-gray-2 00 gap-5 mb-10 mt-5">
              <span className="text-base text-muted md:text-lg">
                We are a purpose-driven technology company focused on solving real-world <BrMd /> problems
                using innovation and emerging tech tools.
              </span>
            </section>

            <div className="flex flex-col gap-5 items-center justify-center md:flex-row z-10">
              <a href="mailto:info@trendtechltd.com" className="bg-white text-primary-theme text-center text-sm w-full block font-bold border border-white capitalize hover:bg-gray-800 md:inline-block md:w-max px-18 py-3 transition">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="my-20">
          <div id="about-us" className="mb-20">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-semibold pb-5 text-gray-800">
                About Us <span className="text-tertiary-theme font-black text-6xl animate-bounce inline-block">.</span>
              </h2>
              <p className="text-lg text-gray-700">
                TrendTech Limited is a purpose-driven technology company focused on solving real-world problems.
                <br /><br />
                Our work supports public health, agriculture, humanitarian
                programs, and private enterprises with intelligent systems and platforms built for real-world impact.
              </p>
            </div>
          </div>

          <div id="services" className="bg-muted mb-20 py-14">
            <div className="container text-center mb-18">
              <h2 className="text-4xl text-center font-semibold pb-5 text-gray-800">
                Our Services
              </h2>
              <p className="text-lg text-gray-700">
                Our core services: provided by emerging technologies
              </p>
            </div>

            <div className="container flex md:flex-row flex-col items-stretch gap-10 mb-10">
              <div className="rounded-lg basis-1/2 py-12 px-5 bg-white border shadow-md hover:shadow-lg transition flex-1 relative">
                <div className="absolute -top-16 right-10 text-gray-300">
                  <span className="font-extrabold text-tertiary-theme text-[6rem]">1</span>
                </div>
                <p className="text-gray-700 text-3xl mb-2">
                  Tech Innovation for Development
                </p>
                <p className="text-gray-700 text-sm">
                  Driving social impact through tailored technology solutions that support sustainable development goals.
                </p>
              </div>

              <div className="rounded-lg basis-1/2 py-12 px-5 bg-white border shadow-md hover:shadow-lg transition flex-1 relative">
                <div className="absolute -top-16 right-10 text-gray-300">
                  <span className="font-extrabold text-tertiary-theme text-[6rem]">2</span>
                </div>
                <p className="text-gray-700 text-3xl mb-2">
                  Emerging Technologies Integration
                </p>
                <p className="text-gray-700 text-sm">
                  Empowering organizations to embrace AI, IoT, and other emerging technologies for future-ready operations.
                </p>
              </div>
            </div>

            <div className="container flex md:flex-row flex-col items-stretch gap-6">
              <div className="rounded-lg basis-1/2 py-12 px-5 bg-white border shadow-md hover:shadow-lg transition flex-1 relative">
                <div className="absolute -top-16 right-10 text-gray-300">
                  <span className="font-extrabold text-tertiary-theme text-[6rem]">3</span>
                </div>
                <p className="text-gray-700 text-3xl mb-2">
                  Business Process Automation
                </p>
                <p className="text-gray-700 text-sm">
                  Streamlining operations by automating routine tasks to enhance productivity and reduce costs.
                </p>
              </div>
              <div className="rounded-lg basis-1/2 py-12 px-5 bg-white border shadow-md hover:shadow-lg transition flex-1 relative">
                <div className="absolute -top-16 right-10 text-gray-300">
                  <span className="font-extrabold text-tertiary-theme text-[6rem]">4</span>
                </div>
                <p className="text-gray-700 text-3xl mb-2">
                  Development Tech Consulting
                </p>
                <p className="text-gray-700 text-sm">
                  Offering strategic guidance to design, implement, and scale tech solutions for development-focused programs.
                </p>
              </div>
            </div>
          </div>

          <div className="pb-20 container">
            <div className="flex md:flex-row flex-col gap-5 items-stretch my-7">
              <div className="flex basis-1/3 rounded-xl p-5 flex-col gap-9 bg-secondary-theme">
                <div className="bg-primary-theme rounded-xl p-3 text-white inline-block w-max">
                  <Users className="w-8 h-8 fill-white" />
                </div>
                <h4 className="text-2xl font-medium">
                  Our users enjoy and use our <BrMd /> top products
                </h4>
                <div className="flex-grow-1"></div>
                <Link to={"/"} className="underline underline-offset-2">
                  Join us
                </Link>
              </div>

              <div className="flex basis-2/3 rounded-xl p-5 flex-col gap-9 bg-primary-theme">
                <div className="bg-secondary-theme rounded-xl p-3 text-primary-theme inline-block w-max">
                  <Earth className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-medium text-white">
                  Helping connecting businesses <BrMd /> in all 36 states of Nigeria.
                </h4>
                <p className="font-light text-gray-300 text-lg">
                  We bridge the gap between innovation and social transformation—enabling data-backed decisions,
                  improving service delivery, and supporting inclusive economic growth
                </p>
                <div className="flex-grow-1"></div>
                <Link to={"/"} className="underline text-white underline-offset-2">
                  Join us
                </Link>
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-5 items-stretch my-7">
              <div className="flex basis-2/3 rounded-xl p-5 flex-col gap-9 bg-secondary-theme">
                <div className="bg-primary-theme rounded-xl p-3 text-white inline-block w-max">
                  <Brain className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-medium">
                  Innovating for Development Impact
                </h4>
                <p className="font-light">
                  Keeping teams productive and connected, <BrMd />
                  no matter where collaboration happens
                </p>
                <div className="flex-grow-1"></div>
              </div>

              <div className="flex basis-1/3 rounded-xl p-5 flex-col gap-9 bg-primary-theme">
                <div className="bg-secondary-theme rounded-xl p-3 text-primary-theme inline-block w-max">
                  <ClockArrowUp className="w-8 h-8 fill-white" />
                </div>
                <h4 className="text-2xl font-medium text-white">
                  Delivery timelines met all <BrMd />
                  clients needs consistently.
                </h4>
                <div className="flex-grow-1"></div>
              </div>
            </div>
          </div>

          <div id="clients" className="container">
            <div>
              <h2 className="font-bold pb-18 text-3xl md:text-5xl md:text-center">
                Trusted by Global{" "}
                <br />
                <span className="text-tertiary-theme">Partners in Development</span>.
              </h2>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 items-stretch">
              {PROJECTS.map((project) => (
                <ProjectCard
                  key={project.name}
                  name={project.name}
                  tags={project.tags}
                  image={project.image}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
