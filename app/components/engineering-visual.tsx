"use client";

import { motion, useReducedMotion } from "framer-motion";

const checks = [
  { label: "Journey", state: "mapped" },
  { label: "Coverage", state: "planned" },
  { label: "Release", state: "reviewed" },
];

export default function EngineeringVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-xl" aria-label="A visual representation of a product quality workflow">
      <div className="absolute inset-0 -z-10 rounded-full bg-cyan-300/25 blur-3xl" />
      <motion.div animate={reduceMotion ? undefined : { y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur">
        <div className="rounded-[1.35rem] border border-white/10 bg-[#111b2f] p-5 sm:p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-2" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full bg-rose-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">quality.system</span>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">Test signal</p>
              <div className="mt-8 flex h-24 items-end gap-2" aria-hidden="true">
                {[38, 62, 47, 78, 58, 88, 71].map((height, index) => <motion.span key={height} initial={{ height: 0 }} animate={{ height: `${height}%` }} transition={{ delay: reduceMotion ? 0 : index * 0.08, duration: 0.55 }} className="flex-1 rounded-t bg-gradient-to-t from-cyan-500 to-cyan-200" />)}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">Turning product risk into clear, actionable checks.</p>
            </div>
            <div className="space-y-3">
              {checks.map((check, index) => <motion.div key={check.label} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : 0.2 + index * 0.12 }} className="rounded-xl border border-white/10 bg-white/[0.03] p-3"><div className="flex items-center justify-between gap-3"><span className="text-sm font-medium text-white">{check.label}</span><span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" /></div><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">{check.state}</p></motion.div>)}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
