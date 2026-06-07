export default function Problem() {
  const points = [
    "Needs more customers",
    "Wants more sales",
    "Has inconsistent revenue",
    "Feels marketing is not working",
    "Wants predictable business growth",
  ];

  return (
    <section className="bg-[#f8fbff] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#2b986f]">
            Is This For You?
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#0c1728] sm:text-4xl">
            If you're a business owner who:
          </h2>
        </div>
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {points.map((point) => (
            <div
              key={point}
              className="rounded-md border border-[#d9e5f2] bg-white p-5 shadow-sm"
            >
              <div className="mb-4 h-2 w-12 rounded-full bg-[#2b986f]" />
              <p className="font-bold leading-7 text-[#132033]">{point}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-lg font-semibold text-[#143f79]">
          This consultation is for you.
        </p>
      </div>
    </section>
  );
}
