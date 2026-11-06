import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import EngineeringVisual from "./components/engineering-visual";
import Nav from "./components/nav";
import projects from "./portfolio/softCard.json";

const featuredProjects = projects.slice(0, 3);

const practices = [
  "Risk-aware test planning",
  "Manual, API, and automation testing",
  "Usability-focused product review",
  "Clear defect reporting and collaboration",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-slate-100">
      <Nav />

      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(34,211,238,0.16),transparent_29rem),radial-gradient(circle_at_15%_85%,rgba(59,130,246,0.13),transparent_30rem)]" />
        <div className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-200">Software quality assurance + UI/UX</p>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Build confidence into every product release.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I’m Abu Rayhan, a Software Quality Assurance Engineer and UI/UX Consultant. I help teams examine the details that shape reliable, useful digital experiences.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
                Explore selected work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5">
                Start a conversation
              </Link>
            </div>
          </div>
          <EngineeringVisual />
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a1728]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">How I work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Quality and usability are part of the same conversation.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {practices.map((practice) => (
              <div key={practice} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4">
                <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-cyan-300 text-slate-950"><Check className="h-3.5 w-3.5" /></span>
                <p className="text-sm leading-6 text-slate-200">{practice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">Selected work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Product work across quality and experience.</h2>
          </div>
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">View all projects <ExternalLink className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link href="/portfolio" key={project.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0a1728] transition hover:-translate-y-1 hover:border-cyan-200/35">
              <Image src={project.imageUrl} alt={`${project.projectName} interface preview`} width={720} height={520} className="aspect-[4/3] w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100" />
              <div className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-cyan-200">{project.projectType}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{project.projectName}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-cyan-300 text-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-6 md:flex-row md:items-end lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">Let’s collaborate</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Have a product experience that needs a closer look?</h2>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Contact me <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
