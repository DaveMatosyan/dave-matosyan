export const hero = {
  eyebrow: "Backend Engineer × AI-Native Builder",
  location: "Yerevan, Armenia",
  nameLines: ["David", "Matosyan"] as const,
  line: "Claude writes most of my code. I do the parts AI can't — knowing what the product needs, catching what's wrong, shipping what's right.",
  ctas: {
    work: "View work",
    cv: "Download CV",
    linkedin: "LinkedIn",
  },
};

export const marquee = [
  "C# / .NET",
  "Payments",
  "Secrets Mgmt",
  "Ticketing",
  "Agentic AI",
  "SQL",
  "REST APIs",
  "LLM Pipelines",
];

export const how = {
  marker: "01 — How I work",
  intro:
    "Three years of fintech backend taught me what production code has to survive. Now I use that judgment to direct AI instead of typing everything myself.",
  steps: [
    {
      num: "01",
      title: "Direct.",
      body: "I break the product problem into instructions AI can execute. Scope, constraints, edge cases — the thinking is mine.",
    },
    {
      num: "02",
      title: "Review.",
      body: "Every line gets read. Payments code taught me what breaks in production — that's what I hunt for in AI output.",
    },
    {
      num: "03",
      title: "Shape.",
      body: "AI gives options; the product decides. I cut what doesn't serve it and ship what does.",
    },
  ],
  closerLead: "This site is the proof",
  closerRest: " — directed by me, built by Claude, reviewed line by line.",
};

export type Motif = "streams" | "ledger" | "lattice" | "ticket";

export type Project = {
  index: string;
  title: string;
  role: string;
  problem: string;
  built: string;
  impact: string;
  chips: string[];
  motif: Motif;
};

export const workMarker = "02 — Selected work";

export const projects: Project[] = [
  {
    index: "01",
    title: "Flux AI Outreach",
    role: "Backend Developer · Flux Technologies · 2025–2026",
    problem:
      "B2B cold outreach is manual — research every company, write every email, track every campaign.",
    built:
      "The backend of an AI marketing platform: campaign creation, scheduling, and tracking at scale, plus an AI pipeline that researches each prospect and writes personalized copy.",
    impact:
      "End-to-end automation — from raw prospect list to personalized emails delivered.",
    chips: [".NET", "LLM pipeline", "Agentic workflows"],
    motif: "streams",
  },
  {
    index: "02",
    title: "EasyPay",
    role: "Software Developer · PandaTech · 2023–2025",
    problem: "A live payments platform needed a ground-up rebuild.",
    built:
      "Core contributor on the new platform — APIs, business logic, and data layer in C#/.NET with Entity Framework and SQL.",
    impact: "Real money moves through code I helped design.",
    chips: ["C#", ".NET", "EF", "SQL"],
    motif: "ledger",
  },
  {
    index: "03",
    title: "Vault",
    role: "Software Developer · PandaTech",
    problem:
      "Every project managed env vars and config by hand, with manual DevOps steps for each change.",
    built:
      "Designed and built the company's internal secrets-management service across dev and prod.",
    impact:
      "Adopted by every project in the company; teams pull configuration directly.",
    chips: ["C#", ".NET", "Security"],
    motif: "lattice",
  },
  {
    index: "04",
    title: "Ticketing Platform",
    role: "Software Developer · PandaTech",
    problem:
      "Venues, events, and ticket sales needed one system — including the admin side.",
    built:
      "Venue, event, and ticket-sales systems end to end, plus the admin panel that manages them.",
    impact: "The full sales flow shipped as one platform.",
    chips: ["C#", ".NET", "SQL"],
    motif: "ticket",
  },
];

export const contact = {
  marker: "03 — Contact",
  badge: "Open to new roles",
  line: "Looking for a team that ships fast and isn't afraid of AI-native engineers.",
  email: "davidmatosyanwork@gmail.com",
  linkedin: "https://linkedin.com/in/david-matosyan-18a02b238",
  cvLabel: "Download CV",
  linkedinLabel: "LinkedIn",
  languages: "Armenian — native · Russian — C1 · English — C1",
  copyright: "© 2026 David Matosyan",
  footer: "Directed by David. Built with Claude.",
};
