// Generated from TrungOPS/context/website/output/founder-diagnostic.json
// Source of truth: napcae/TrungOPS — regenerate there, then sync here.

export const founderDiagnosticMeta = {
  title: "Why decisions still come back to you | Founder Bottleneck Diagnostic",
  description: "You hired leaders and the decisions still come back to you. A 90-minute diagnostic finds out whether it's the hire or the setup around them. €750, book directly, no call required."
}

export const hero = {
  headline: "You hired leaders so the company would depend less on you. It still depends on you.",
  subheadline: "Decisions they were hired to own still land on your desk. One 90-minute session finds out whether it's the hire or the setup around them, before you replace anyone.",
  cta: {
    priceLine: "€750 · 90 minutes",
    buttonText: "Book the diagnostic",
    buttonUrl: "https://buy.stripe.com/4gMfZidgA6Y61rebxj38406",
    quiz: {
      text: "Not sure it's you yet? Take the 1-minute quiz first.",
      url: "https://tally.so/r/68A05P"
    }
  }
}

export const recognition = [
  {
    id: "combined",
    headline: "You're covering for the setup, and it works too well.",
    body: [
      "The team still waits for your yes. You break the tie in the Slack thread and sign off on the vendor everyone already agreed on. Take a week off and things slow down."
    ]
  }
]

// Teardown — on-page visual ("anatomy of a diagnosis"). One real case, rendered
// as a walk-through. Data-driven so the case can be swapped by editing this object.
export const teardown = {
  sectionHeadline: "What finding the bottleneck looks like",
  attribution: "Founder, early-stage public speaking platform",
  surfaceComplaint: "Our marketing funnel was extremely slow and I didn't know why.",
  theQuestion: "How many of them click the call to action?",
  theAnswer: "I don't know.",
  reveal: [
    "50,000 landing page views in the past six months",
    "A quarter of those clicked the call to action",
    "80% of those created an account"
  ],
  realBottleneck: "He watched page views and sign-ups. Nobody tracked who clicked, and he'd never checked which channel sent them, though his analytics already showed it.",
  quote: "It's like going to the doctor to get a scan you've never had before and you find out problems you didn't know you had.",
  revealLabel: "What he reported five months later",
  bridge: "For you, the question is how many decisions reached you last week that you hired someone else to make."
}

export const process = {
  sectionHeadline: "One session. 90 minutes. You leave with:",
  deliverables: [
    "A written diagnosis: whether it's the hire or the setup around them",
    "The one thing to stop doing: the actual bottleneck, named",
    "The one move to make instead"
  ],
  test: "You should be able to tell your COO what you got in two sentences. If you can't, the session missed.",
  beforeSession: "Before we meet: until the session, write down every decision that reaches you, up to five working days. One line each: what it was and who sent it.",
  whatItIsnt: "What it isn't: you won't get a plan to file away or a weekly check-in. If you need someone other than me, I'll tell you."
}

export const about = {
  whoFor: "A founder-led company with customers and a team, where you've hired a COO or Head of Ops, or are hiring one, to take decisions off you. If you don't have a team yet, this isn't the right first step.",
  pattern: "You're in good company. Most of what founders have paid me for is this situation: the company still ran through them, whatever they'd already tried.",
  math: "If it's the setup and you replace the person, you pay for a search and wait months with the seat empty. Then the next hire lands in the same setup."
}

// Case studies. Only entries cleared in TrungOPS/output/testimonials.json carry a
// real name; all others are role/stage only (namePublic=false -> attribution only).
// Order (2026-10-20): Alex first, the one card whose buyer hired people and still had
// the decisions come back (the Q4 lead); Minh and Johny cut 2026-10-27 (page length, off the dependency problem).
export const caseStudies = [
  {
    id: "hummel-alex",
    quote: "Endless chaos from too many projects with the wrong people, combined with my inability to let go.",
    attribution: "Alex, founder, IT services company (translated from German)",
    problem: "He often lost whole workdays to paralysis and couldn't make a decision with a clear head.",
    root: "Every failure and every decision came back to him, and nobody had made the decision rights explicit.",
    outcome: "He bought a second engagement, and he now practices saying no and cutting what only drains energy."
  }
]

// Single priced CTA. The €49 self-serve fallback (Banana Offer) is paused off this
// page for now per operator call (2026-08-07) — still canonical in TrungOPS, just
// not rendered here until it's brought back.
// Live Stripe checkout for the diagnostic (2026-08-07) -- replaces the LinkedIn-DM
// placeholder. Button label is a plain call to action -- price lives in the
// headline/body, not stamped on the button itself.
export const cta = {
  // One line of background at the ask, cleared Workpath claims only (TrungOPS PR #881).
  about: {
    text: "Before this I led infrastructure at Workpath. The job was taking my team off the critical path, so about six product teams could ship without waiting on us. Now I do that for founders.",
    linkText: "More about me",
    url: "/about"
  },
  diagnostic: {
    headline: "The Diagnostic: €750",
    body: "One 90-minute session on why decisions still come back to you. After checkout you pick a time, answer three short questions and start your decision log. No screening call.",
    credit: "If it's worth fixing, the next step is The Handoff: we change who decides what with your leader in the room, then count what still comes back to you for 30 days. Book it within 30 days of the session and the €750 comes off its price.",
    buttonText: "Book the diagnostic",
    buttonUrl: "https://buy.stripe.com/4gMfZidgA6Y61rebxj38406"
  },
  secondary: {
    text: "Already connected on LinkedIn? You can DM me \"diagnostic\" instead.",
    url: "https://www.linkedin.com/in/ctn1991/"
  },
  quiz: {
    text: "Not sure it's you yet? Take the 1-minute quiz first.",
    url: "https://tally.so/r/68A05P"
  }
}

export const videoEmbed = {
  src: "https://drive.google.com/file/d/1mL-B-J7oM02KQY50toAuIJYZicDsnrpv/preview",
  allow: "autoplay",
}
