import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Narrative Commerce',
    description: 'Product storytelling meets e‑commerce with immersive flows and server‑driven UI.',
    tags: ['Next.js', 'Edge Functions', 'Stripe'],
    link: '#',
  },
  {
    title: 'Realtime Collaboration Kit',
    description: 'A toolkit for multiplayer editing with optimistic UI and CRDT sync.',
    tags: ['React', 'WebSockets', 'Y.js'],
    link: '#',
  },
  {
    title: 'Story‑Driven Analytics',
    description: 'Turns raw data into narrative reports with automated insights and visuals.',
    tags: ['Python', 'FastAPI', 'Pandas'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-white py-20 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/10" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">Selected Projects</h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
            A curation of work exploring systems, usability, and playful interfaces.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm transition hover:shadow-md dark:border-white/10 dark:from-white/5 dark:to-white/0"
            >
              <div className="absolute right-3 top-3 rounded-full border border-slate-200/60 bg-white/80 p-1 text-slate-600 backdrop-blur transition group-hover:scale-105 dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
                <ExternalLink className="h-4 w-4" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute -bottom-16 right-0 h-40 w-40 rotate-12 rounded-full bg-indigo-500/10 blur-2xl transition group-hover:translate-y-2" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
