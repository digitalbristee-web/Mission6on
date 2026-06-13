import Benefits from "@/components/Benefits";
import CTAForm from "@/components/CTAForm";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Urgency from "@/components/Urgency";

const steps = [
  "Fill up the form",
  "Receive an email with the appointment link",
  "Fill the appointment form",
  "Join the 1:1 consultation call",
  "Get your customized digital marketing plan for FREE",
];

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Benefits steps={steps} />
      <FAQ />
      <Urgency />
      <CTAForm />
    </main>
  );
}
