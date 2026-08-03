import { projects, workMarker } from "@/lib/content";
import { motifs } from "@/components/motifs";
import Reveal from "@/components/Reveal";

export default function Work() {
  return (
    <section id="work">
      <div className="mx-auto max-w-6xl px-6 pt-28 md:px-16 md:pt-40">
        <Reveal>
          <p className="label text-lime">{workMarker}</p>
        </Reveal>
      </div>

      <div className="mt-12">
        {projects.map((project) => (
          <article
            key={project.index}
            className="sticky top-0 flex min-h-svh flex-col justify-center overflow-hidden border-t border-line bg-ink px-6 py-20 md:px-16"
          >
            {motifs[project.motif]}

            <div className="relative mx-auto w-full max-w-6xl">
              <Reveal>
                <p className="label text-lime">{project.index}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h3 className="mt-4 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-none tracking-tight">
                  {project.title}
                </h3>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="label mt-4 text-fog">{project.role}</p>
              </Reveal>

              <div className="mt-12 max-w-3xl">
                {(
                  [
                    ["Problem", project.problem],
                    ["Built", project.built],
                    ["Impact", project.impact],
                  ] as const
                ).map(([key, value], i) => (
                  <Reveal key={key} delay={0.12 + i * 0.06}>
                    <div className="grid gap-2 border-t border-line py-5 md:grid-cols-[140px_1fr] md:gap-6">
                      <span className="label pt-1 text-fog">{key}</span>
                      <p className="text-cream/90">{value}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-wrap gap-3">
                  {project.chips.map((chip) => (
                    <span
                      key={chip}
                      className="label rounded-full border border-line px-4 py-2 text-fog"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
