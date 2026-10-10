import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section className="bg-white px-5 pb-24 pt-10 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-neutral-950 px-6 py-16 text-center sm:px-12 md:py-24"
      >
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
            Start building
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Spend less time replying.
            <span className="mt-2 block text-green-400">
              More time growing.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-neutral-400">
            Explore how messaging automation could fit into your
            business workflow with Verbose.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="rounded-full bg-green-500 px-7 py-3.5 font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-green-400"
            >
              Get started <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-neutral-700 px-7 py-3.5 font-semibold text-white transition hover:border-neutral-500 hover:bg-white/5"
            >
              Contact us
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}