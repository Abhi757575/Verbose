import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Create your bot',
    description:
      'Give your bot a name and define the business or service it will represent.',
  },
  {
    number: '02',
    title: 'Configure its behavior',
    description:
      'Set up instructions, common questions, and the responses you want your bot to provide.',
  },
  {
    number: '03',
    title: 'Connect and automate',
    description:
      'Connect a supported messaging channel and test your customer conversation flow.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white px-5 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            How it works
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            From setup to smarter conversations.
          </h2>
          <p className="mt-5 leading-7 text-neutral-500">
            A straightforward workflow for creating and managing your
            messaging automation.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group rounded-3xl border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 font-semibold text-green-700 transition group-hover:bg-green-600 group-hover:text-white">
                {step.number}
              </div>

              <h3 className="mt-7 text-xl font-semibold text-neutral-900">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-neutral-500">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}