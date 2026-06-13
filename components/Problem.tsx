export default function Problem() {
  const points = [
    "Posting on Facebook and Instagram but not getting enough inquiries",
    "Boosting posts but not seeing real sales",
    "Not knowing what marketing strategy to use",
    "Getting random leads but not serious customers",
    "Depending only on referrals or word of mouth",
    "Feeling confused about ads, content, landing pages, and follow-up",
  ];

  return (
    <section className="bg-[#f7faff] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#446987]">
            The real problem
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#071423] sm:text-4xl">
            Digital marketing should bring customers, not confusion.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#4d6175]">
            If you own a business in Nepal, you may already be trying to market
            online. But effort alone does not create consistent leads, sales, or
            revenue.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <div
              key={point}
              className="rounded-md border border-[#dbe6f1] bg-white p-5 shadow-sm"
            >
              <div className="mb-4 h-2 w-12 rounded-full bg-[#123a62]" />
              <p className="font-bold leading-7 text-[#15263a]">{point}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-4xl rounded-md border border-[#c9d8e7] bg-white p-6 text-center shadow-sm sm:p-8">
          <h3 className="text-2xl font-bold text-[#071423]">
            Here is what we will fix together.
          </h3>
          <p className="mt-4 text-lg leading-8 text-[#4d6175]">
            In this free consultation call, I will understand your business,
            identify what is not working, and give you a clear digital marketing
            plan you can start implementing immediately.
          </p>
        </div>
      </div>
    </section>
  );
}
