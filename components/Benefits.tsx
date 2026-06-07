type BenefitsProps = {
  benefits: string[];
};

export default function Benefits({ benefits }: BenefitsProps) {
  return (
    <section id="benefits" className="bg-white px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#2b986f]">
            How You Benefit From This Consultation
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#0c1728] sm:text-4xl">
            Get a clear customer acquisition plan for your business.
          </h2>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex gap-4 rounded-md border border-[#d9e5f2] bg-[#f8fbff] p-5"
            >
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2b986f] text-sm font-bold text-white">
                ✓
              </span>
              <p className="text-lg font-semibold leading-7 text-[#132033]">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
