import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import ChatPreview from './ChatPreview';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="pointer-events-none absolute left-1/2 top-20-z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-green-100/60 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-800">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Smarter conversations start here
          </div>

          <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
            Your conversations.
            <span className="mt-2 block text-green-600">
              On autopilot.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-500">
            Build messaging bots that help your business answer questions,
            guide customers, and automate repetitive conversations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/register"
              className="rounded-full bg-green-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-600/15 transition hover:-translate-y-0.5 hover:bg-green-700"
            >
              Get started <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/demo"
              className="rounded-full border border-neutral-200 bg-white px-7 py-3.5 font-semibold text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50"
            >
              Explore the demo
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-500">
            <span>Built for business conversations</span>
            <span className="text-green-600">●</span>
            <span>Designed for automation</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] bg-green-100/50 blur-2xl" />
          <div className="relative">
            <ChatPreview />
          </div>
        </motion.div>
      </div>
    </section>
  );
}