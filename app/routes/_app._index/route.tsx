import { Blocks, Brain, Check, ClockArrowUp, Earth, Handshake, Users } from "lucide-react";
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
              We empower businesses and<BrMd /> development programs {" "}
              <span className="text-4xl hidden md:inline-block rounded md:text-5xl text-secondary-theme animate-caret-blink">|</span>
            </h1>

            <section className="flex flex-col text-gray-2 00 gap-5 mb-10 mt-5">
              <span className="text-base md:text-lg">
                We are a purpose-driven technology company focused on solving real-world <BrMd /> problems
                using innovation and emerging tech tools.
              </span>
            </section>

            <div className="flex flex-col gap-5 items-center justify-center md:flex-row z-10">
              <Link to="/register" className="bg-white text-primary-theme text-center text-sm w-full block font-bold border border-white capitalize hover:bg-gray-800 md:inline-block md:w-max px-10 py-3 transition">
                Book a meeting
              </Link>
              <a
                rel="noopener"
                href="https://youtu.be/hBDECFvIk8w?si=G_1qfFhyCYJWwVv8"
                target="_blank"
                className="text-white border border-white text-center text-sm w-full block font-bold hover:shadow-lg md:inline-block md:w-max px-10 py-3 transition"
              >
                See portfolio
              </a>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="my-20">
          <div id="about-us" className="container flex md:flex-row flex-col items-center justify-between gap-10 mb-20">
            <div>
              <h2 className="text-4xl font-semibold pb-5 text-gray-800">
                About Us<span className="text-primary-theme font-black text-5xl animate-bounce inline-block">.</span>
              </h2>
              <p className="text-lg text-gray-700">
                TrendTech Limited is a purpose-driven technology company focused on solving real-world problems.
                <br /><br />
                Our work supports public health, agriculture, humanitarian
                programs, and private enterprises with intelligent systems and platforms built for real-world impact.
              </p>
            </div>

            <div className="flex md:flex-row flex-col items-stretch gap-3">
              <div className="rounded-lg py-12 px-5 bg-secondary-theme relative overflow-hidden">
                <div className="absolute -top-10 right-0 opacity-30">
                  <Blocks className="h-36 w-36 text-primary-theme" strokeWidth={1} />
                </div>
                <h3 className="font-bold pb-3 relative z-10 text-3xl text-gray-800">What we build</h3>
                <p className="text-gray-700 text-lg">
                  A suite of applications designed with usability goals in mind that focus on business process automation.
                </p>
              </div>
              <div className="rounded-lg py-12 px-5 bg-secondary-theme relative overflow-hidden">
                <div className="absolute -top-10 right-0 opacity-30">
                  <Handshake className="h-36 w-36 text-primary-theme" strokeWidth={1} />
                </div>
                <h3 className="font-bold pb-3 relative z-10 text-3xl text-gray-800">What we do</h3>
                <p className="text-gray-700 text-lg">
                  Our service offerings range from consultancy to bespoke software development
                </p>
              </div>
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
                  <span className="font-extrabold text-[6rem]">1</span>
                </div>
                <p className="text-gray-700 text-3xl">
                  Tech Innovation for Development
                </p>
                <p className="text-gray-700 text-sm">
                  Making the best innovations for tech companies
                </p>
              </div>

              <div className="rounded-lg basis-1/2 py-12 px-5 bg-white border shadow-md hover:shadow-lg transition flex-1 relative">
                <div className="absolute -top-16 right-10 text-gray-300">
                  <span className="font-extrabold text-[6rem]">2</span>
                </div>
                <p className="text-gray-700 text-3xl">
                  Emerging Technologies Integration
                </p>
                <p className="text-gray-700 text-sm">
                  Making the best innovations for tech companies
                </p>
              </div>
            </div>

            <div className="container flex md:flex-row flex-col items-stretch gap-6">
              <div className="rounded-lg basis-1/2 py-12 px-5 bg-white border shadow-md hover:shadow-lg transition flex-1 relative">
                <div className="absolute -top-16 right-10 text-gray-300">
                  <span className="font-extrabold text-[6rem]">3</span>
                </div>
                <p className="text-gray-700 text-3xl">
                  Business Process Automation
                </p>
                <p className="text-gray-700 text-sm">
                  Making the best innovations for tech companies
                </p>
              </div>
              <div className="rounded-lg basis-1/2 py-12 px-5 bg-white border shadow-md hover:shadow-lg transition flex-1 relative">
                <div className="absolute -top-16 right-10 text-gray-300">
                  <span className="font-extrabold text-[6rem]">4</span>
                </div>
                <p className="text-gray-700 text-3xl">
                  Development Tech Consulting
                </p>
                <p className="text-gray-700 text-sm">
                  Making the best innovations for tech companies
                </p>
              </div>
            </div>
          </div>

          <div className="pb-20 pt-10 container">
            <div>
              <h2 className="font-bold pb-7 text-3xl md:text-5xl  md:text-center text-gray-800">
                We create products that <BrMd />
                <span className="text-primary-theme">shape our future</span>.
              </h2>
            </div>

            <div className="flex md:flex-row flex-col gap-5 items-stretch my-7">
              <div className="flex basis-1/3 rounded-xl p-5 flex-col gap-9 bg-secondary-theme">
                <div className="bg-primary-theme rounded-xl p-3 text-white inline-block w-max">
                  <Users className="w-8 h-8 fill-white" />
                </div>
                <h4 className="text-2xl font-medium">
                  200k+ users enjoy and use our <BrMd /> top products
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
                <p className="font-light text-lg">
                  We bridge the gap between innovation and social transformation—enabling data-backed decisions,
                  improving service delivery, and supporting inclusive economic growth
                </p>
                <div className="flex-grow-1"></div>
                <Link to={"/"} className="underline underline-offset-2">
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
                <span className="text-primary-theme">Partners in Development</span>.
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
        <section className="bg-primary-theme py-30">
          <div className="container md:text-center">
            <h4 className="font-bold text-white text-3xl md:text-6xl mb-10 leading-tight">
              From AI to automation <BrMd /> and spatial intelligence
            </h4>
            <p className="text-base md:text-xl font-light">
              From AI to automation and spatial intelligence, we bring modern tools <BrMd />
              to traditional challenges.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
