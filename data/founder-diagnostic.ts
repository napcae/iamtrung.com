// Generated from TrungOPS/context/website/output/founder-diagnostic.json
// Source of truth: napcae/TrungOPS — regenerate there, then sync here.

export const founderDiagnosticMeta = {
  title: "Founder Bottleneck Diagnostic | Trung Nguyen",
  description: "You hired leaders and the decisions still come back to you. A 90-minute diagnostic finds out whether it's the hire or the setup around them. €750, book directly, no call required."
}

export const hero = {
  headline: "You hired leaders so the company would depend less on you. It still depends on you.",
  subheadline: "Decisions they were hired to own still land on your desk. Maybe it's the wrong hire. Maybe it's the right person in a setup where they can't really own anything. One 90-minute session finds out which, before you replace anyone.",
  cta: {
    priceLine: "€750 · 90 minutes",
    buttonText: "Book the diagnostic",
    buttonUrl: "https://buy.stripe.com/4gMfZidgA6Y61rebxj38406",
    quiz: {
      text: "Not sure it's you yet? Take the 4-minute quiz first.",
      url: "https://tally.so/r/68A05P"
    }
  }
}

export const recognition = [
  {
    id: "combined",
    headline: "You're not imagining it. You're compensating for it.",
    body: [
      "You hired the COO, the Head of Ops, the senior lead. The team still waits for your yes. Take a week off and things slow down. You already tried delegating harder.",
      "You're still the one who breaks the tie in the Slack thread. You sign off on the vendor everyone already agreed on. You get pulled back into the hire you delegated three months ago. Nobody has tested whether the team could decide without you, so you're still the fallback.",
      "The setup was built for an earlier stage of the company. It still sends you decisions it shouldn't need you for. Nothing has visibly broken, because you keep absorbing the cost."
    ]
  }
]

// Teardown — on-page visual ("anatomy of a diagnosis"). One real case, rendered
// as a walk-through. Data-driven so the case can be swapped by editing this object.
export const teardown = {
  sectionHeadline: "What finding the bottleneck actually looks like",
  attribution: "Founder, early-stage public speaking platform",
  surfaceComplaint: "My marketing is slow. I need to post more.",
  theQuestion: "How many people land on your page each month?",
  theAnswer: "I don't know.",
  reveal: [
    "50,000 page views in six months",
    "A quarter clicked the call to action",
    "80% of those created an account"
  ],
  realBottleneck: "He had tracking running and had never read it.",
  loop: [
    "Name a problem",
    "Attack it",
    "Nothing moves",
    "Push harder"
  ],
  quote: "It's like going to the doctor to get a scan you've never had before and you find out problems you didn't know you had.",
  revealLabel: "Six months after he started reading it",
  bridge: "For you, the question is how many decisions reached you last week that you hired someone else to make."
}

export const process = {
  sectionHeadline: "One session. 90 minutes. You leave with:",
  deliverables: [
    "A straight answer on whether it's the hire or the setup around them",
    "The one thing to stop doing: the actual bottleneck, named, not the surface complaint you walked in with",
    "The one move to make instead",
    "1–3 real priorities replacing the current noise",
    "A decision you'd been deferring, made",
    "The number or fact you'd been avoiding, now in front of you"
  ],
  test: "You should be able to tell your COO what you got in two sentences. If you can't, the session missed.",
  hiredLeader: "If you hired someone to take this off your desk, the session is step one. If it's worth fixing, the next step is The Handoff, a separate engagement. We change who decides what with your leader in the room, run the company that way for 30 days and count what still comes back to you. Then we check whether the diagnosis was right. If you start within 30 days of the session, the €750 counts toward it.",
  whatItIsnt: "What it isn't: you won't get a plan to file away or a weekly check-in. If you need more help, or someone other than me, I'll tell you. What you do with it is yours."
}

export const about = {
  whoFor: "A founder-led company with customers and a team, where you've hired a COO or Head of Ops, or are hiring one, to take decisions off you. If you don't have a team yet, this isn't the right first step.",
  pattern: "Most of what founders have paid me for comes from this situation. They hired well, and the hard calls still ended up with them. Bringing in managers solves one growing pain and starts the next one, because the authority doesn't move with the title.",
  math: "If it's the setup and you replace the person, you pay for a search and wait months with the seat empty. Then the next hire lands in the same setup. You can postpone the decision. You can't postpone what the current system keeps costing you."
}

// Case studies. Only entries cleared in TrungOPS/output/testimonials.json carry a
// real name; all others are role/stage only (namePublic=false -> attribution only).
// Order (2026-10-20): Alex first, the one card whose buyer hired people and still had
// the decisions come back (the Q4 lead); then fast proof (Minh), then Johny.
export const caseStudies = [
  {
    id: "hummel-alex",
    quote: "Endless chaos from too many projects with the wrong people, combined with my inability to let go.",
    attribution: "Alex, founder, IT services company (translated from German)",
    problem: "Whole workdays lost to paralysis, and no decision he could make with a clear head.",
    root: "Every failure and every decision came back to him, and nobody else held the decision rights.",
    outcome: "He bought a second engagement, and he now practices saying no and cutting what only drains energy."
  },
  {
    id: "tran-minh-algomate",
    quote: "Your question-asking approach helped me save 10 to 15 hours of nonsense outreach.",
    attribution: "Minh, Algomate",
    problem: "Came in sure his execution was the problem.",
    root: "He was afraid to commit to one niche, and he expected every first conversation to close.",
    outcome: "A simple daily outreach routine he actually runs.",
    caseStudySlug: "algomate-10-hours-a-week"
  },
  {
    id: "harris-johny",
    quote: "You know that way you already know something, but it hits when someone says it to you straight? Sometimes you just need to take your medicine.",
    attribution: "Johny Harris, Dai Viet Rugby",
    problem: "Avoided selling for a year to protect community trust.",
    root: "Without sales there's no money to keep the mission going.",
    outcome: "Published the three insights himself, unprompted."
  }
]

// Single priced CTA. The €49 self-serve fallback (Banana Offer) is paused off this
// page for now per operator call (2026-08-07) — still canonical in TrungOPS, just
// not rendered here until it's brought back.
// Live Stripe checkout for the diagnostic (2026-08-07) -- replaces the LinkedIn-DM
// placeholder. Button label is a plain call to action -- price lives in the
// headline/body, not stamped on the button itself.
export const cta = {
  diagnostic: {
    headline: "The Diagnostic: €750",
    body: "One 90-minute session on why decisions still come back to you. You leave knowing whether it's the hire or the setup, and the first change to make. After checkout you pick a time and answer three short questions. No screening call, no waiting for a reply.",
    buttonText: "Book the diagnostic",
    buttonUrl: "https://buy.stripe.com/4gMfZidgA6Y61rebxj38406"
  },
  secondary: {
    text: "Already connected on LinkedIn? DM me \"diagnostic\" and I'll send the same link.",
    url: "https://www.linkedin.com/in/ctn1991/"
  },
  quiz: {
    text: "Not sure it's you yet? Take the 4-minute quiz first.",
    url: "https://tally.so/r/68A05P"
  }
}

export const videoEmbed = {
  src: "https://drive.google.com/file/d/1mL-B-J7oM02KQY50toAuIJYZicDsnrpv/preview",
  allow: "autoplay",
}
