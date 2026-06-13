import FlodeskEmbed from "@/components/FlodeskEmbed";

export default function CTAForm() {
  return (
    <section id="consultation-form" className="bg-white px-5 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#446987]">
            Final step
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#071423] sm:text-4xl">
            Book Your FREE 1:1 Consultation Call
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#4d6175]">
            Fill up the form below and we'll contact you with the next steps.
          </p>
          <div className="mt-8 rounded-md border border-[#dbe6f1] bg-[#f7faff] p-5">
            <p className="text-base font-bold text-[#123a62]">
              What happens next?
            </p>
            <p className="mt-2 leading-7 text-[#4d6175]">
              You will receive an email with the appointment link and the next
              steps for your free consultation.
            </p>
          </div>
        </div>

        <FlodeskEmbed />
      </div>
    </section>
  );
}
