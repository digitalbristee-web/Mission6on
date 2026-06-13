type BenefitsProps = { steps: string[] };

export default function Benefits({ steps }: BenefitsProps) {
  return (
    <section className="bg-white px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#446987]">
            How The Free Consultation Works
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#071423] sm:text-4xl">
            A simple process to get clarity before you spend more on marketing.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-md border border-[#dbe6f1] bg-[#f7faff] p-5 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#123a62] text-base font-bold text-white">
                {index + 1}
              </span>
              <p className="mt-5 text-base font-bold leading-7 text-[#15263a]">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
