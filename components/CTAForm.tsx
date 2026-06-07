"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type FormState = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: "",
};

export default function CTAForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.fullName.trim()) nextErrors.fullName = "Full Name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Active Email is required.";
    } else if (!emailPattern.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.whatsapp.trim()) {
      nextErrors.whatsapp = "WhatsApp Number is required.";
    }
    if (!form.businessName.trim()) {
      nextErrors.businessName = "Business Name is required.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    window.setTimeout(() => {
      router.push("/thank-you");
    }, 450);
  };

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  return (
    <section id="consultation-form" className="bg-[#f8fbff] px-5 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#2b986f]">
            Form
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#0c1728] sm:text-4xl">
            Book Your Free Consultation
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#4c5e75]">
            Get Your Customized Marketing Strategy
          </p>
          <div className="mt-8 rounded-md border border-[#d9e5f2] bg-white p-5">
            <p className="text-base font-bold text-[#143f79]">
              Free 1:1 Consultation
            </p>
            <p className="mt-2 leading-7 text-[#4c5e75]">
              Customized Strategy For Your Business
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-md border border-[#d9e5f2] bg-white p-5 shadow-sm sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="fullName"
              label="Full Name"
              placeholder="Enter your full name"
              value={form.fullName}
              error={errors.fullName}
              onChange={(value) => updateField("fullName", value)}
              required
            />
            <Field
              id="email"
              type="email"
              label="Active Email"
              placeholder="you@example.com"
              value={form.email}
              error={errors.email}
              onChange={(value) => updateField("email", value)}
              required
            />
            <Field
              id="whatsapp"
              label="WhatsApp Number"
              placeholder="+1 555 000 0000"
              value={form.whatsapp}
              error={errors.whatsapp}
              onChange={(value) => updateField("whatsapp", value)}
              required
            />
            <Field
              id="businessName"
              label="Business Name"
              placeholder="Enter your business name"
              value={form.businessName}
              error={errors.businessName}
              onChange={(value) => updateField("businessName", value)}
              required
            />
            <Field
              id="website"
              label="Website / Facebook URL"
              placeholder="https://"
              value={form.website}
              error={errors.website}
              onChange={(value) => updateField("website", value)}
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-bold text-[#132033]"
            >
              Anything You Want To Say
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell me about your business, goals, or current challenges"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="focus-ring w-full resize-y rounded-md border border-[#bfd0e5] bg-white px-4 py-3 text-[#132033] transition placeholder:text-[#8a9bb0] focus:border-[#2b986f]"
            />
          </div>

          <p className="mt-5 text-sm font-semibold text-[#4c5e75]">
            We respect your privacy. No spam.
          </p>
          <button
            type="submit"
            disabled={submitting}
            className="focus-ring mt-5 inline-flex min-h-14 w-full items-center justify-center rounded-md bg-[#1f5fa8] px-7 text-base font-bold text-white shadow-sm transition hover:bg-[#143f79] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Booking..." : "Book Free Consultation"}
          </button>
        </form>
      </div>
    </section>
  );
}

type FieldProps = {
  id: keyof FormState;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  type?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

function Field({
  id,
  label,
  placeholder,
  value,
  error,
  type = "text",
  required,
  onChange,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-[#132033]">
        {label}
        {required ? <span className="text-[#1f5fa8]"> *</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring min-h-12 w-full rounded-md border border-[#bfd0e5] bg-white px-4 text-[#132033] transition placeholder:text-[#8a9bb0] focus:border-[#2b986f]"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-semibold text-[#b42318]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
