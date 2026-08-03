import { contact } from "@/lib/content";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import Clock from "@/components/Clock";

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-16 md:py-40">
        <Reveal>
          <p className="label text-lime">{contact.marker}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <span className="mt-8 inline-flex items-center gap-3 rounded-full border border-line px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-lime opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            <span className="label text-cream">{contact.badge}</span>
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
            {contact.line}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14">
            <Magnetic>
              <a
                href={`mailto:${contact.email}`}
                className="inline-block whitespace-nowrap font-display text-[clamp(1.25rem,4vw,3.75rem)] font-bold tracking-tight underline decoration-lime decoration-2 underline-offset-8 transition-colors hover:text-lime"
              >
                {contact.email}
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center gap-3 sm:gap-4">
            <Magnetic>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-lime px-6 py-3 text-sm font-medium text-lime-ink transition-transform hover:scale-[1.03]"
              >
                {contact.linkedinLabel} ↗
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/David_Matosyan_CV.pdf"
                download
                className="inline-block rounded-full border border-line px-6 py-3 text-sm text-cream transition-colors hover:border-lime hover:text-lime"
              >
                {contact.cvLabel}
              </a>
            </Magnetic>
            <span className="label ml-auto hidden text-fog md:block">
              {contact.languages}
            </span>
          </div>
        </Reveal>

        <div className="mt-24 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="label text-fog">{contact.copyright}</span>
          <Clock />
          <span className="label text-fog">{contact.footer}</span>
        </div>
      </div>
    </section>
  );
}
