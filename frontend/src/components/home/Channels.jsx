import { motion } from 'motion/react';

const channels = [
  {
    name: 'Telegram',
    description: 'Messaging bot integration',
    symbol: '➤',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    name: 'WhatsApp',
    description: 'Business messaging integration',
    symbol: '◉',
    color: 'bg-green-50 text-green-700',
  },
];

export default function Channels() {
  return (
    <section className="border-y border-neutral-100 bg-neutral-50 px-5 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
          Messaging automation
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          Meet customers where they are.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-neutral-500">
          Build your bot experience around the messaging platforms your
          customers already use.
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/5"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${channel.color}`}>
                {channel.symbol}
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900">
                  {channel.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  {channel.description}
                </p>
                <p className="mt-2 text-xs text-neutral-400">
                  Connect when supported
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}