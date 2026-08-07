// Generated from TrungOPS/context/website/output/founder-diagnostic.json
// Source of truth: napcae/TrungOPS — regenerate there, then sync here.

export const founderDiagnosticMeta = {
  title: "Founder Bottleneck Diagnostic | Trung Nguyen",
  description:
    "A 90-minute diagnostic to find your startup's real bottleneck — $750, book directly, no call required. For founders who are already running things well and want an outside read before they scale a decision they can't fully audit themselves.",
}

export const hero = {
  headline:
    "Name the thing that's actually been blocking you — so you can work on it instead of working around it.",
  subheadline:
    "Capable people are the last to know their own bottleneck. Everyone around you already sees it — they just can't say it to your face. That's not a character flaw. It's a structural blind spot, and it's why outside diagnosis exists as a category.",
}

export const recognition = [
  {
    id: "combined",
    headline: "You're not imagining it. You're compensating for it.",
    body: [
      "You're still the one who breaks the tie in the Slack thread. Signs off on the vendor everyone already agreed on. Gets pulled back into the hire you delegated three months ago. Not because the team can't — because nobody's actually tested whether they could, and you've never stopped being the fallback.",
      "That's not a discipline problem. It's a system built for an earlier chapter, still charging you for decisions it shouldn't need you for — and it hasn't visibly broken, which is exactly the problem. You're still absorbing the cost, so it never has to.",
    ],
  },
]

export const mechanism = {
  framing:
    "Most founders who've done this say the same thing after: \"I already knew it — I just hadn't said it out loud.\" That's the point. The diagnostic doesn't give you new information. It names the thing you already felt — clearly enough that you can stop doing the expensive thing and start doing the right thing.",
}

// Teardown — on-page visual ("anatomy of a diagnosis"). One real case, rendered
// as a walk-through. Data-driven so the case can be swapped by editing this object.
export const teardown = {
  sectionHeadline: "What finding the bottleneck actually looks like",
  attribution: "Founder, early-stage public speaking platform",
  surfaceComplaint: "My marketing is slow. I need to post more.",
  theQuestion: "How many people land on your page each month?",
  theAnswer: "I don't know.",
  reveal: [
    "50,000 visitors a month",
    "A quarter clicking the call to action",
    "Most of them creating an account",
  ],
  realBottleneck: "The funnel worked. He'd built the tracking and never opened it.",
  loop: ["Name a problem", "Attack it", "Nothing moves", "Push harder"],
  quote:
    "It's like going to the doctor to get a scan you've never had before and you find out problems you didn't know you had.",
}

export const process = {
  sectionHeadline: "One session. 90 minutes. You leave with:",
  deliverables: [
    "The one thing to stop doing — the actual bottleneck, named, not the surface complaint you walked in with",
    "The one move to make instead",
    "1–3 real priorities replacing the current noise",
    "A decision you'd been deferring — made",
    "The number or fact you'd been avoiding — now in front of you",
  ],
  test:
    "Test we hold ourselves to: you should be able to repeat what you got to a co-founder without using the words clarity, see, or name. If you can't, it wasn't specific enough — that's a miss, not a feature of the format.",
  whatItIsnt:
    "What it isn't: a plan, a framework, or ongoing coaching. One session. One answer. You leave knowing exactly what to stop and what to do instead — what you do with it after that is yours.",
}

export const about = {
  whoFor:
    "It's built for founders who are already running things well and want a peer's read before they scale a decision they can't fully audit themselves — the way a sharp operator checks work with another sharp operator. Not for people looking for reassurance. For people who go looking for the uncomfortable part, because growth happens by expanding past the blind spot.",
  pattern:
    "I've worked with 25+ early-stage founders across B2B SaaS, hardware, marketplace, and agency models. The surface complaints differ. The structural causes repeat. A founder who has seen the same five patterns in ten companies can name the real problem faster than the founder living inside it.",
  math: "The real cost of a wrong bottleneck is the weeks spent pushing a direction that doesn't compound. Against that, one session is small — but only if the problem is felt as expensive, not just true. You can postpone the decision. You can't postpone what the current system keeps costing you.",
  frame: "I'm not a coach. I don't do ongoing advisory. One session. One answer.",
}

// Case studies. Only entries cleared in TrungOPS/output/testimonials.json carry a
// real name; all others are role/stage only (namePublic=false -> attribution only).
// Order: fast proof first, durable proof second — TrungOPS/offers/diagnostic.md's
// two-proof doctrine ("lead with the fast proof; add the durable proof when the
// prospect asks 'but will it stick?'").
export const caseStudies = [
  {
    id: "tran-minh-algomate",
    quote:
      "Your question-asking approach helped me save 10 to 15 hours of nonsense outreach.",
    attribution: "Minh, Algomate",
    problem: "Came in sure his execution was the problem.",
    root: "The root wasn't the ICP — it was a decision about who to become that he'd been avoiding making at all.",
    outcome: "A simple daily outreach routine he actually runs.",
    caseStudySlug: "algomate-10-hours-a-week",
  },
  {
    id: "burden-william",
    quote:
      "It's like going to the doctor to get a scan you've never had before and you find out problems you didn't know you had.",
    attribution: "Founder, early-stage public speaking platform",
    problem: "\"Marketing is slow — I need to post more.\"",
    root: "He never read the funnel data he already had.",
    outcome: "Result landed months later — durability, not a quick high.",
    caseStudySlug: "the-dashboard-he-never-opened",
  },
  {
    id: "nguyen-hien",
    quote:
      "I immediately sat down and decoded the whole thing and I know exactly what I need to do next.",
    attribution: "Founder, productivity tool",
    problem: "Unclear product direction.",
    root: "A volume problem, not a product problem.",
    outcome: "Same-session action — knew the next move that day.",
  },
  {
    id: "harris-johny",
    quote:
      "You already know something, but it hits when someone says it to you straight. Sometimes you just need to take your medicine.",
    attribution: "Johny Harris, Dai Viet Rugby",
    problem: "Avoided selling for a year to protect community trust.",
    root: "Selling means sustainability — otherwise the mission doesn't exist.",
    outcome: "Published the three insights himself, unprompted.",
  },
]

// Single priced CTA. The $49 self-serve fallback (Banana Offer) is paused off this
// page for now per operator call (2026-08-07) — still canonical in TrungOPS, just
// not rendered here until it's brought back.
// Live buy/book checkout (cal.com + Stripe) is an open build item on the TrungOPS
// side; the button routes to the LinkedIn DM "diagnostic" flow until it ships.
// Button label is a plain call to action — price lives in the headline/body, not
// stamped on the button itself.
export const cta = {
  diagnostic: {
    headline: "The Diagnostic — $750",
    body:
      "One 90-minute session. You leave with the bottleneck named and the one move to make instead (see above). Book directly — no screening call, no waiting for a reply.",
    buttonText: "Book the diagnostic",
    buttonUrl: "https://www.linkedin.com/in/ctn1991/",
  },
  secondary: {
    text: "Already connected on LinkedIn? DM \"diagnostic\" — same booking link, just faster to find.",
    url: "https://www.linkedin.com/in/ctn1991/",
  },
}

export const videoEmbed = {
  src: "https://drive.google.com/file/d/1mL-B-J7oM02KQY50toAuIJYZicDsnrpv/preview",
  allow: "autoplay",
}
