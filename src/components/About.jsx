import React from 'react';
import { motion } from 'framer-motion';
import { Code, User } from 'lucide-react';

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'FastAPI',
  'Python',
  'MongoDB',
  'PostgreSQL',
  'Tailwind',
  'Framer Motion',
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-50 py-20 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-start gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg"><User className="h-6 w-6" /></div>
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">About</h2>
            <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
              I’m a full‑stack engineer who blends engineering craftsmanship with narrative thinking. I love turning concepts into interactive stories—clean architecture on the backend, fluid interactions on the frontend, and thoughtful details throughout.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-xl shadow-slate-200/40 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-none"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300">
            <Code className="h-4 w-4" />
            Core Skills
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
