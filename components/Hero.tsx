"use client";

import Image from "next/image";
import { useMotionValue, useSpring, useReducedMotion, motion } from "motion/react";
import { hero } from "@/lib/content";
import Magnetic from "@/components/Magnetic";

function Line({ text, delay }: { text: string; delay: number }) {
  return (
    <span
      className="rise block overflow-hidden"
      style={{ "--d": `${delay}s` } as React.CSSProperties}
    >
      <span className="block">{text}</span>
    </span>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const gx = useSpring(mx, { stiffness: 50, damping: 20 });
  const gy = useSpring(my, { stiffness: 50, damping: 20 });

  const [pre, post] = hero.line.split("can't");

  return (
    <section
      className="relative flex min-h-svh flex-col overflow-hidden px-6 md:px-16"
      onPointerMove={(e) => {
        if (reduced) return;
        mx.set(e.clientX - e.currentTarget.getBoundingClientRect().width * 0.3 - 320);
        my.set(e.clientY - 320);
      }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[30%] top-[5%] h-[640px] w-[640px] rounded-full bg-lime/5 blur-3xl"
        style={{ x: gx, y: gy }}
      />

      <div className="label relative flex items-center justify-between border-b border-line pb-4 pt-8 text-fog">
        <span>{hero.eyebrow}</span>
        <span className="hidden sm:block">{hero.location}</span>
      </div>

      <div className="relative grid flex-1 items-stretch gap-8 py-12 lg:grid-cols-[1fr_minmax(300px,420px)] lg:gap-14">
        <div className="flex flex-col justify-center">
          <h1 className="font-display text-[clamp(3.5rem,11vw,8.5rem)] font-bold uppercase leading-[0.9] tracking-tighter">
            <Line text={hero.nameLines[0]} delay={0.1} />
            <Line text={hero.nameLines[1]} delay={0.22} />
          </h1>

          <div
            className="fade-up mt-10"
            style={{ "--d": "0.5s" } as React.CSSProperties}
          >
            <p className="max-w-xl text-base text-fog md:text-lg">
              {pre}
              <span className="text-lime">can&apos;t</span>
              {post}
            </p>
          </div>
        </div>

        <div
          className="fade-up relative h-80 overflow-hidden rounded-2xl border border-line sm:h-96 lg:h-auto lg:min-h-[420px]"
          style={{ "--d": "0.35s" } as React.CSSProperties}
        >
          <Image
            src="/david.jpg"
            alt="David Matosyan"
            fill
            priority
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover object-top grayscale contrast-105 transition duration-700 hover:grayscale-0"
          />
        </div>
      </div>

      <div
        className="fade-up relative flex flex-wrap items-center gap-3 pb-10 sm:gap-4"
        style={{ "--d": "0.7s" } as React.CSSProperties}
      >
        <Magnetic>
          <a
            href="#work"
            className="inline-block rounded-full bg-lime px-6 py-3 text-sm font-medium text-lime-ink transition-transform hover:scale-[1.03]"
          >
            {hero.ctas.work}
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href="/David_Matosyan_CV.pdf"
            download
            className="inline-block rounded-full border border-line px-6 py-3 text-sm text-cream transition-colors hover:border-lime hover:text-lime"
          >
            {hero.ctas.cv}
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href="https://linkedin.com/in/david-matosyan-18a02b238"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-2 py-3 text-sm text-fog transition-colors hover:text-lime"
          >
            {hero.ctas.linkedin} ↗
          </a>
        </Magnetic>
        <span className="label ml-auto hidden items-center gap-2 text-fog sm:flex">
          Scroll
          <span className="inline-block motion-safe:animate-bounce">↓</span>
        </span>
      </div>
    </section>
  );
}
