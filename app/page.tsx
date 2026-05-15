import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, ShieldCheck, Sparkles, TestTube2 } from "lucide-react";
import Nav from "./components/nav";
import projects from "./portfolio/softCard.json";

const featuredProjects = projects.slice(0, 3);

const strengths = [
  {
    icon: ShieldCheck,
    title: "Quality strategy",
    body: "Test planning, coverage mapping, bug triage, and release confidence for complex web products.",
  },
  {
    icon: TestTube2,
    title: "Automation mindset",
    body: "Practical Cypress, API, regression, and performance checks that support faster product cycles.",
  },
  {
    icon: Sparkles,
    title: "Usability lens",
    body: "UI/UX review, journey mapping, and interface feedback that make products easier to trust and use.",
  },
];

const stats = [
  { value: "7+", label: "Product projects" },
  { value: "95%", label: "Bug detection rate" },
  { value: "40%", label: "Performance gains" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Nav />

      <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            SQA Engineer + UI/UX Consultant
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-slate-950 md:text-7xl">
            Abu Rayhan
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">
            I help teams ship reliable, usable digital products through thoughtful QA strategy,
            automation, and a practical eye for user experience.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              View work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-400 hover:bg-slate-100"
            >
              Start a conversation
            </Link>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-slate-200 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-semibold text-slate-950">{stat.value}</dt>
                <dd className="mt-1 text-sm leading-5 text-slate-600">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredProjects.slice(0, 2).map((project) => (
              <div key={project.id} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <Image
                  src={project.imageUrl}
                  alt={`${project.projectName} interface preview`}
                  width={720}
                  height={520}
                  className="aspect-[4/3] w-full object-cover"
                  priority={project.id === 1}
                />
                <div className="p-4">
                  <p className="text-sm font-semibold text-slate-950">{project.projectName}</p>
                  <p className="mt-1 text-xs text-slate-600">{project.projectType}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <Image
              src={featuredProjects[2].imageUrl}
              alt={`${featuredProjects[2].projectName} interface preview`}
              width={1200}
              height={620}
              className="aspect-[16/7] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-3 lg:px-8">
          {strengths.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 p-6">
              <item.icon className="h-6 w-6 text-emerald-700" />
              <h2 className="mt-5 text-xl font-semibold tracking-normal text-slate-950">{item.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700">Selected work</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-normal text-slate-950">Case studies with measurable outcomes</h2>
          </div>
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-emerald-700">
            See all projects
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              href="/portfolio"
              key={project.id}
              className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={project.imageUrl}
                alt={`${project.projectName} screenshot`}
                width={720}
                height={520}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-normal text-slate-950">{project.projectName}</h3>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900">
                    {project.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-emerald-300">Working style</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-normal text-white">A QA process that also respects the user.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Map risk and user journeys", "Design practical test coverage", "Automate repetitive checks", "Report issues with clear context"].map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-white/5 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-300" />
                <p className="text-sm leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
        <h2 className="text-4xl font-semibold tracking-normal text-slate-950">Have a product that needs sharper QA or cleaner UX?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Let’s talk about the product, the risks, and the fastest way to make the experience more reliable.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Contact me
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}
