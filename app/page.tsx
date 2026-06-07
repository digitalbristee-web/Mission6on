import Benefits from "@/components/Benefits";
import CTAForm from "@/components/CTAForm";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Urgency from "@/components/Urgency";

const benefits = [
  "Discover what's holding back your growth",
  "Learn how to generate more qualified leads",
  "Get a clear customer acquisition plan",
  "Understand which marketing channels fit your business",
  "Leave with a customized strategy you can follow",
];

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Benefits benefits={benefits} />
      <Urgency />
      <CTAForm />
    </main>
  );
}
