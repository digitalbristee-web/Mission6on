"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. The consultation call is free. The goal is to understand your business and give you a clear direction before you spend more money on marketing.",
  },
  {
    question: "Who is this consultation for?",
    answer:
      "It is for Nepal-based business owners who want more leads, customers, sales, and better clarity about digital marketing.",
  },
  {
    question: "What will I get inside the consultation call?",
    answer:
      "You will get a diagnosis of your current marketing and a customized digital marketing plan you can start implementing after the call.",
  },
  {
    question: "How long will the consultation call be?",
    answer:
      "The call is designed to be around 1 hour, so there is enough time to understand your business and discuss a practical plan.",
  },
  {
    question: "Do I need to have a website before booking the call?",
    answer:
      "No. If you do not have a website, we can still discuss your Facebook page, Instagram, ads, offers, follow-up, and the best next step.",
  },
  {
    question: "What happens after I fill up the form?",
    answer:
      "You will receive the next steps by email. After that, you can fill the appointment form and join the 1:1 consultation call.",
  },
  {
    question: "Will you help me create a marketing plan for my business?",
    answer:
      "Yes. The main purpose of the call is to give you a customized marketing plan based on your business, market, and current challenges.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f7faff] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#446987]">
            Questions
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#071423] sm:text-4xl">
            Before you book the call
          </h2>
        </div>
        <div className="mt-10 divide-y divide-[#dbe6f1] overflow-hidden rounded-md border border-[#dbe6f1] bg-white shadow-sm">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-bold text-[#15263a] transition hover:bg-[#f7faff] sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e9f2fb] text-xl leading-none text-[#123a62]">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <div className="px-5 pb-5 text-base leading-7 text-[#4d6175] sm:px-6">
                    {faq.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
