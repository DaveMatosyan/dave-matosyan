export const hero = {
  eyebrow: "Backend & AI Engineer × Python · C# / .NET",
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
  "Python",
  "C# / .NET",
  "Multi-Agent Pipelines",
  "Payments",
  "Secrets Mgmt",
  "Ticketing",
  "Agentic AI",
  "SQL Server & PostgreSQL",
  "REST APIs",
  "LLM Automation",
];

export const how = {
  marker: "01 — How I work",
  intro:
    "Three years of fintech, ticketing, and AI automation taught me what production code has to survive. Now I use that judgment to direct AI instead of typing everything myself.",
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

export type Motif = "streams" | "ledger" | "lattice" | "ticket" | "slots";

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
    role: "Backend & AI Engineer · Flux Technologies · Aug 2025–Aug 2026",
    problem:
      "B2B cold outreach is manual — research every company, write every email, track every campaign.",
    built:
      "The Python backend of an AI-powered B2B marketing automation platform: campaign creation, scheduling, and tracking at scale, plus multi-step autonomous agent pipelines on the Claude and DeepSeek APIs.",
    impact:
      "1,000 company analyses and 1,000 personalized email sends per day — fully automated end to end, from prospect research to delivery and reply tracking.",
    chips: ["Python", "Claude & DeepSeek APIs", "Multi-agent pipelines", "Agentic workflows"],
    motif: "streams",
  },
  {
    index: "02",
    title: "Lumio Booking",
    role: "Founder & Lead Developer · Side Project · Mar 2026–Present",
    problem:
      "Salons needed one platform across mobile and web with intelligent scheduling and automated client handling.",
    built:
      "Full backend serving Android, iOS, and Web clients from a single .NET API with Entity Framework Core, plus AI agents for scheduling assistance, automated client conversations, and dynamic slot optimization.",
    impact:
      "Live in production with 10+ salons — owned end to end from data modeling and REST API design to deployment and support.",
    chips: ["C#", ".NET", "EF Core", "AI Agents", "Cross-platform API"],
    motif: "slots",
  },
  {
    index: "03",
    title: "EasyPay",
    role: "Software Developer · Panda Tech · Jul 2023–Aug 2025",
    problem:
      "One of Armenia's largest consumer payment platforms needed a ground-up rebuild.",
    built:
      "Core developer on the new platform — designing the APIs, business logic, and Entity Framework Core data layers over SQL Server in C#/.NET.",
    impact:
      "1M+ app installs and 800+ billable services — real money moves through code I helped design.",
    chips: ["C#", ".NET", "EF Core", "SQL Server"],
    motif: "ledger",
  },
  {
    index: "04",
    title: "Vault",
    role: "Software Developer · Panda Tech · Jul 2023–Aug 2025",
    problem:
      "Every project managed env vars and config by hand, with manual DevOps handover for each deployment.",
    built:
      "Designed and built the internal secrets-management service backing all 5 Panda Tech projects across 15 environments (3 per project).",
    impact:
      "Adopted across all 5 company projects, removing manual DevOps handover from the deployment path.",
    chips: ["C#", ".NET", "Secrets Management", "Security"],
    motif: "lattice",
  },
  {
    index: "05",
    title: "Ticketing Platform",
    role: "Software Developer · Panda Tech · Jul 2023–Aug 2025",
    problem:
      "Venues, events, and ticket sales needed one system — including the admin side.",
    built:
      "Delivered end-to-end venue, event, and ticket-sales systems, including the full admin panel.",
    impact: "The full sales flow shipped as one platform.",
    chips: ["C#", ".NET", "SQL Server"],
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
  languages: "Armenian — native · Russian — C1 · English — B2/C1",
  copyright: "© 2026 David Matosyan",
  footer: "Directed by David. Built with Claude.",
};
