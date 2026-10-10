import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function PricingPreview() {
  return (
    <section className="bg-white px-5 py-24 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Pricing
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            A plan that fits your workflow.
          </h2>

          <p className="mt-5 leading-7 text-neutral-500">
            Explore the available options and find the right setup for
            your messaging automation needs.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 max-w-xl rounded-3xl border border-neutral-200 bg-neutral-50 p-8 text-center sm:p-10"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl text-green-700">
            ✳
          </div>

          <h3 className="mt-5 text-2xl font-semibold text-neutral-900">
            Find your fit
          </h3>

          <p className="mx-auto mt-3 max-w-md leading-7 text-neutral-500">
            Compare available plans, review the features, and choose
            an option that works for your business.
          </p>

          <Link
            to="/pricing"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-green-600 px-7 py-3.5 font-semibold text-white transition hover:bg-green-700"
          >
            Explore pricing <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}