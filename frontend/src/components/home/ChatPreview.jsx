import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const examples = [
  {
    question: 'I am looking for an apartment.',
    answer:
      'I can help with that! Which location are you interested in?',
    suggestions: ['Gurugram', 'Faridabad', 'Noida'],
  },
  {
    question: 'What are your business hours?',
    answer:
      'Our team is available Monday to Saturday, 9 AM to 6 PM. Would you like help with anything else?',
    suggestions: ['Contact support', 'Pricing', 'Start again'],
  },
  {
    question: 'How does your service work?',
    answer:
      'You configure a bot, choose its behavior, and connect a supported messaging channel to automate customer conversations.',
    suggestions: ['Explore features', 'Start again'],
  },
];

export default function ChatPreview() {
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState(null);

  const startConversation = (question) => {
    if (question === 'Start again') {
      setMessages([]);
      setSelected(null);
      return;
    }

    const index = question === 'What are your business hours?'
      ? 1
      : question === 'How does your service work?'
        ? 2
        : 0;

    const example = examples[index];

    setSelected({
      question,
      answer: example.answer,
      suggestions: example.suggestions,
    });

    setMessages((previous) => [
      ...previous,
      { type: 'user', text: question },
      { type: 'bot', text: example.answer },
    ]);
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl shadow-neutral-900/10">
      <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-100 text-xl">
            💬
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900">
              Verbose Assistant
            </h3>
            <p className="text-xs text-neutral-500">
              Interactive preview
            </p>
          </div>
        </div>
        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
          Demo
        </span>
      </div>

      <div className="min-h-64 space-y-4 bg-neutral-50/70 p-5">
        <AnimatePresence initial={false}>
          {messages.length === 0 ? (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-[90%] rounded-2xl rounded-tl-sm border border-neutral-100 bg-white p-4 shadow-sm"
            >
              <p className="text-sm leading-6 text-neutral-700">
                Hi there! 👋 I am your sample business assistant.
                What would you like to know?
              </p>
            </motion.div>
          ) : (
            messages.map((message, index) => (
              <motion.div
                key={`${index}-${message.type}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`flex ${
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl p-3.5 text-sm leading-6 ${
                    message.type === 'user'
                      ? 'rounded-tr-sm bg-green-600 text-white'
                      : 'rounded-tl-sm border border-neutral-100 bg-white text-neutral-700 shadow-sm'
                  }`}
                >
                  {message.text}
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      <div className="border-t border-neutral-100 p-5">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-neutral-400">
          Try a sample question
        </p>

        <div className="flex flex-wrap gap-2">
          {[
            'I am looking for an apartment.',
            'What are your business hours?',
            'How does your service work?',
          ].map((question) => (
            <button
              key={question}
              onClick={() => startConversation(question)}
              className="rounded-full border border-neutral-200 px-3 py-2 text-left text-xs text-neutral-600 transition hover:border-green-300 hover:bg-green-50 hover:text-green-800"
            >
              {question}
            </button>
          ))}
        </div>

        {selected && (
          <button
            onClick={() => {
              setMessages([]);
              setSelected(null);
            }}
            className="mt-4 text-sm font-medium text-green-700 hover:text-green-900"
          >
            Reset conversation ↺
          </button>
        )}

        <p className="mt-4 text-xs text-neutral-400">
          Sample conversation · No live AI connection
        </p>
      </div>
    </div>
  );
}