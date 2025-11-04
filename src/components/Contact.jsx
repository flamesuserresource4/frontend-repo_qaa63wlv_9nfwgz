import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_70%_20%,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">Let’s Build Something</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            Available for collaborations, product engineering, and creative technology work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:flex-row"
        >
          <div>
            <h3 className="text-lg font-medium">Contact</h3>
            <a
              href="mailto:nizaah.alfa.syahidah@example.com"
              className="mt-2 inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200"
            >
              <Mail className="h-4 w-4" /> nizaah.alfa.syahidah@example.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="mt-10 flex items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Nizaah Alfa Syahidah. All rights reserved.</p>
          <a href="#home" className="hover:text-slate-200">Back to top</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
