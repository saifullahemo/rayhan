"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Nav from "../components/nav";
import projectData from "./softCard.json";

type Project = {
  id: number;
  description: string;
  projectName: string;
  role: string[];
  projectType: string;
  imageUrl: string;
  responsibilities: string[];
  tools: string[];
  metrics?: { label: string; value: string }[];
  duration: string;
  status: "Completed" | "Maintenance" | "Ongoing";
};

const projects = projectData as Project[];
const filters = ["All", "SQA", "UI/UX", "Automation"] as const;

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    if (activeFilter === "Automation") {
      return projects.filter((project) => project.tools.some((tool) => tool.toLowerCase().includes("automation") || tool.toLowerCase().includes("cypress")));
    }
    return projects.filter((project) => project.role.some((role) => role.toLowerCase().includes(activeFilter.toLowerCase())));
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Nav />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700">Work</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-normal text-slate-950 md:text-6xl">
            Product work across QA, automation, and user experience.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            A focused selection of products where I contributed to quality strategy, usability, testing workflows,
            and measurable product improvements.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "bg-slate-950 text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:text-slate-950"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="space-y-8">
          {visibleProjects.map((project) => (
            <article key={project.id} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="relative min-h-[260px] bg-slate-100">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.projectName} product screenshot`}
                    width={1200}
                    height={820}
                    className="h-full min-h-[260px] w-full object-cover"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-900">
                      {project.projectType}
                    </span>
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
                      {project.status}
                    </span>
                    <span className="text-sm text-slate-500">{project.duration}</span>
                  </div>

                  <h2 className="mt-5 text-3xl font-semibold tracking-normal text-slate-950">{project.projectName}</h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.role.map((role) => (
                      <span key={role} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
                        {role}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-normal text-slate-500">Responsibilities</h3>
                      <ul className="mt-3 space-y-2">
                        {project.responsibilities.slice(0, 4).map((item) => (
                          <li key={item} className="flex gap-2 text-sm leading-6 text-slate-700">
                            <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-emerald-700" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-normal text-slate-500">Tools</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tools.slice(0, 8).map((tool) => (
                          <span key={tool} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {project.metrics && (
                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {project.metrics.slice(0, 3).map((metric) => (
                        <div key={metric.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                          <p className="text-2xl font-semibold text-slate-950">{metric.value}</p>
                          <p className="mt-1 text-xs leading-5 text-slate-600">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-16 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-emerald-300">Next project</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white">Need a QA and UX partner for your product?</h2>
          </div>
          <a
            href="mailto:saifullahemo@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Let’s talk
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
