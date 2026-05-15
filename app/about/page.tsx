import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Nav from "../components/nav";

const sqaSkills = [
  "Manual testing",
  "Automation testing",
  "API testing",
  "Performance testing",
  "Mobile testing",
  "Bug tracking",
  "Agile delivery",
  "Test case design",
];

const uxSkills = [
  "UI review",
  "Wireframing",
  "Prototyping",
  "User journey mapping",
  "Responsive design",
  "Design systems",
  "Usability testing",
  "Visual design",
];

const tools = ["Cypress", "Jira", "Postman", "JMeter", "Figma", "GitLab CI/CD", "Jenkins", "Chrome DevTools"];

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Nav />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700">About</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-normal text-slate-950 md:text-6xl">
            QA discipline with a designer’s eye.
          </h1>
        </div>

        <div className="space-y-6 text-lg leading-8 text-slate-700">
          <p>
            I work across software quality assurance and UI/UX, which means I care about both sides of a product:
            whether it works reliably and whether people can use it without friction.
          </p>
          <p>
            My strongest work happens where risk, usability, and delivery speed meet. I can plan test coverage,
            validate complex flows, communicate bugs clearly, and help teams improve the product experience before
            issues reach users.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-3 lg:px-8">
          {[
            ["Quality first", "I look for the flows, edge cases, and product risks that matter most to real users."],
            ["Clear communication", "I report issues with context, reproduction steps, expected behavior, and impact."],
            ["Practical improvement", "I focus on improvements teams can actually ship, maintain, and measure."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-lg border border-slate-200 p-6">
              <CheckCircle2 className="h-6 w-6 text-emerald-700" />
              <h2 className="mt-5 text-xl font-semibold tracking-normal text-slate-950">{title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700">Capabilities</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-normal text-slate-950">The skills I bring into product teams</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <SkillGroup title="SQA Engineering" items={sqaSkills} />
          <SkillGroup title="UI/UX Design" items={uxSkills} />
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-normal text-emerald-300">Toolbox</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-normal text-white">Tools I use to test, design, and collaborate</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {tools.map((tool) => (
              <div key={tool} className="rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-slate-100">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <Image
          src="/images/hrms.png"
          alt="HRMS product design preview"
          width={1000}
          height={720}
          className="rounded-lg border border-slate-200 bg-white object-cover shadow-sm"
        />
        <div className="self-center">
          <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700">Current focus</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-normal text-slate-950">Improving product confidence from both QA and UX angles.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            I’m especially interested in dashboards, enterprise workflows, e-commerce journeys, and products where
            reliability and usability directly affect business outcomes.
          </p>
        </div>
      </section>
    </main>
  );
}

const SkillGroup = ({ title, items }: { title: string; items: string[] }) => (
  <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
    <h3 className="text-xl font-semibold tracking-normal text-slate-950">{title}</h3>
    <div className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
          {item}
        </span>
      ))}
    </div>
  </article>
);
