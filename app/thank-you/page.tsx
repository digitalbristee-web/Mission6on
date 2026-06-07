import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Thank You",
  description:
    "Your free 1:1 digital marketing consultation request has been received.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#f8fbff] px-5 py-8 text-[#132033]">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-3xl flex-col items-center justify-center text-center">
        <Image
          src="/bristee-logo.png"
          alt="Bristee Meta Ads Expert"
          width={220}
          height={90}
          priority
          className="mb-8 h-auto w-44 sm:w-56"
        />
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#2b986f]">
          Free 1:1 Consultation
        </p>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#0c1728] sm:text-5xl">
          Thank you. Your consultation request has been received.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-[#4c5e75]">
          Please check your active email and WhatsApp. The next step is to
          discuss your business, goals, and current challenges, then prepare a
          customized digital marketing strategy for your business.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-[#1f5fa8] px-6 text-base font-bold text-white shadow-sm transition hover:bg-[#143f79]"
          >
            Back To Consultation Page
          </Link>
          <a
            href="https://wa.me/"
            className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-[#bfd0e5] bg-white px-6 text-base font-bold text-[#143f79] transition hover:border-[#2b986f]"
          >
            Open WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
