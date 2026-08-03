import { how } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function HowIWork() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28 md:px-16 md:py-40">
      <Reveal>
        <p className="label text-lime">{how.marker}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-8 max-w-3xl font-display text-2xl leading-snug md:text-4xl">
          {how.intro}
        </p>
      </Reveal>

      <div className="mt-20">
        {how.steps.map((step, i) => (
          <Reveal key={step.num} delay={i * 0.08}>
            <div className="group grid gap-3 border-t border-line py-10 md:grid-cols-[120px_220px_1fr] md:gap-6">
              <span className="font-display text-5xl font-bold text-line transition-colors duration-300 group-hover:text-lime md:text-6xl">
                {step.num}
              </span>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
                {step.title}
              </h3>
              <p className="max-w-lg text-fog md:justify-self-end md:text-lg">
                {step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <p className="mt-16 max-w-2xl text-lg text-fog md:text-xl">
          <span className="text-lime">{how.closerLead}</span>
          {how.closerRest}
        </p>
      </Reveal>
    </section>
  );
}
