export default function Urgency() {
  return (
    <section className="bg-[#081c32] px-5 py-14 text-white sm:py-16">
      <div className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#a9c6df]">
            Ready for clarity?
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Book Your FREE 1:1 Consultation Call
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#dce9f5]">
            If your marketing feels random, this call will help you see what to
            focus on next.
          </p>
        </div>
        <a
          href="#consultation-form"
          className="focus-ring inline-flex min-h-14 items-center justify-center rounded-md bg-white px-7 text-base font-bold text-[#123a62] transition hover:bg-[#e9f2fb]"
        >
          Submit & Book My Free Call
        </a>
      </div>
    </section>
  );
}
