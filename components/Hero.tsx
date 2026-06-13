import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-16 pt-6 sm:pb-24">
      <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,#eaf3fb_0%,#ffffff_100%)]" />
      <div className="relative mx-auto max-w-5xl">
        <header className="flex items-center justify-center py-4">
          <Image
            src="/consultant-logo.png"
            alt="Digital Marketing Consultation"
            width={260}
            height={120}
            priority
            className="h-auto w-48 sm:w-64"
          />
        </header>

        <div className="mx-auto mt-10 max-w-4xl text-center sm:mt-14">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#446987]">
            For Nepal-based business owners
          </p>
          <h1 className="text-4xl font-bold leading-[1.08] text-[#071423] sm:text-5xl lg:text-6xl">
            Struggling to grow your business?
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-xl font-bold leading-8 text-[#123a62] sm:text-2xl">
            Grab a FREE 1:1 Digital Marketing consultation call with me
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#4d6175]">
            In this consultation call, I'll diagnose your business and provide a
            customized Digital Marketing plan that you can immediately implement
            in your business after the call.
          </p>
          <div className="mt-9 flex justify-center">
            <a
              href="#consultation-form"
              className="focus-ring inline-flex min-h-14 items-center justify-center rounded-md bg-[#123a62] px-8 text-base font-bold text-white shadow-lg shadow-[#123a62]/20 transition hover:bg-[#081c32]"
            >
              Book your FREE call now
            </a>
          </div>
          <p className="mt-5 text-sm font-semibold text-[#6d8399]">
            No pressure. Just clear advice for your business.
          </p>
        </div>
      </div>
    </section>
  );
}
