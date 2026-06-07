import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-14 pt-6 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14 flex items-center justify-between">
          <Image
            src="/bristee-logo.png"
            alt="Bristee Meta Ads Expert"
            width={228}
            height={92}
            priority
            className="h-auto w-40 sm:w-52"
          />
          <a
            href="#consultation-form"
            className="focus-ring hidden min-h-11 items-center justify-center rounded-md bg-[#1f5fa8] px-5 text-sm font-bold text-white shadow-sm transition hover:bg-[#143f79] sm:inline-flex"
          >
            Book The Call
          </a>
        </header>

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2b986f]">
              Free 1:1 Consultation
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] text-[#0c1728] sm:text-5xl lg:text-6xl">
              Get More Customers, More Sales, and Predictable Business Growth
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#43566d]">
              Stop relying on referrals and random marketing.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4c5e75]">
              Book a free 1:1 consultation and get a customized digital
              marketing strategy designed specifically for your business.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#consultation-form"
                className="focus-ring inline-flex min-h-14 items-center justify-center rounded-md bg-[#1f5fa8] px-7 text-base font-bold text-white shadow-sm transition hover:bg-[#143f79]"
              >
                Book Your Free Consultation
              </a>
              <a
                href="#benefits"
                className="focus-ring inline-flex min-h-14 items-center justify-center rounded-md border border-[#bfd0e5] bg-white px-7 text-base font-bold text-[#143f79] transition hover:border-[#2b986f]"
              >
                Get Your Customized Marketing Strategy
              </a>
            </div>
          </div>

          <div className="rounded-md border border-[#d9e5f2] bg-[#f8fbff] p-6 shadow-sm">
            <div className="border-b border-[#d9e5f2] pb-5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2b986f]">
                Book Free Consultation
              </p>
              <h2 className="mt-3 text-2xl font-bold text-[#0c1728]">
                Customized Strategy For Your Business
              </h2>
            </div>
            <div className="grid gap-4 py-6">
              {["Book your free consultation.", "We discuss your business, goals, and current challenges.", "Receive a customized digital marketing strategy for your business."].map(
                (step, index) => (
                  <div key={step} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#2b986f] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1f5fa8]">
                        Step {index + 1}
                      </p>
                      <p className="mt-1 leading-7 text-[#43566d]">{step}</p>
                    </div>
                  </div>
                )
              )}
            </div>
            <a
              href="#consultation-form"
              className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#1f5fa8] px-5 text-base font-bold text-white transition hover:bg-[#143f79]"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
