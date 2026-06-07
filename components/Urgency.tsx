export default function Urgency() {
  return (
    <section className="bg-[#0c1728] px-5 py-14 text-white sm:py-16">
      <div className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#5fd0a4]">
            Book The Call
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Free 1:1 Consultation
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#d8e6f7]">
            Customized Strategy For Your Business
          </p>
        </div>
        <a
          href="#consultation-form"
          className="focus-ring inline-flex min-h-14 items-center justify-center rounded-md bg-[#2b986f] px-7 text-base font-bold text-white transition hover:bg-[#237f5e]"
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  );
}
