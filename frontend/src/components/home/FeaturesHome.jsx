import { motion } from 'motion/react';

const features = [
  {
    number: '01',
    title: 'Custom bot behavior',
    description:
      'Configure how your assistant responds to questions and guides customer conversations.',
    symbol: '✳',
  },
  {
    number: '02',
    title: 'Reusable responses',
    description:
      'Organize common questions and response patterns for more consistent conversations.',
    symbol: '↗',
  },
  {
    number: '03',
    title: 'Conversation management',
    description:
      'Design a central place to review conversation activity and test your bot behavior.',
    symbol: '☷',
  },
  {
    number: '04',
    title: 'Channel integrations',
    description:
      'Build toward connecting your bot with supported messaging platforms through their APIs.',
    symbol: '⌘',
  },
];

export default function FeaturesHome() {
  return (
    <section className="bg-neutral-50 px-5 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Features
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              Everything starts with a better conversation.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-neutral-500">
            A flexible foundation for building messaging experiences
            around your business needs.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.article
              key={feature.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-3xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-2xl text-green-700">
                  {feature.symbol}
                </div>
                <span className="text-sm text-neutral-300">
                  {feature.number}
                </span>
              </div>

              <h3 className="mt-7 text-lg font-semibold text-neutral-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-500">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}